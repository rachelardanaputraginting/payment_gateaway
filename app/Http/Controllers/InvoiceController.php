<?php

namespace App\Http\Controllers;

use App\Http\Resources\InvoiceResource;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;


class InvoiceController extends Controller
{
    public function store(Request $request)
    {
        $total = (int) $request->total;
        // dd($request->payment_type);
        $cart_ids = $request->collect('carts')->pluck('id');
        // $order_id = 'order-' . now()->format('Y') . $request->user()->id . $cart_ids->implode('');
        $order_id = 'order-' . rand(1, 999999999) . rand(1, 999999999) . $request->user()->id;

        $invoiceExists = Invoice::where('order_id', $order_id)->firstOr(fn () => false);
        if ($invoiceExists) {
            return to_route('invoice.show', $invoiceExists);
        } else {
            $invoice = Auth::user()->invoices()->updateOrcreate(compact('order_id'), [
                'order_id' => $order_id,
                'gross_amount' => $total,
                'cart_ids' => $cart_ids,
                'payment_type' => $request->payment_type,
            ]);

            $data = [
                'payment_type' => $request->payment_type,
                'transaction_details' => [
                    'gross_amount' => $total,
                    'order_id' => $order_id,
                ],
                'customer_details' => [
                    'email' => $request->user()->email,
                    'first_name' => $request->user()->name,
                ],
                'item_details' => $request->collect('carts')->map(fn ($item) => [
                    'id' => $item['id'],
                    'price' => (int) round((11 / 100) * $item['price']) + $item['price'],
                    'quantity' => 1,
                    'name' => $item['product']['name'],
                ]),
            ];

            if ($request->payment_type == 'bank_transfer') {
                $data = [...$data, 'bank_transfer' => [
                    'bank' => $request->bank,
                ]];
            }

            $response = Http::withBasicAuth(config('services.midtrans.server_key') . ':', '')
                ->post('https://api.sandbox.midtrans.com/v2/charge', $data);
            $body = $response->json();

            $invoice->update([
                "payment_info" => [
                    "qr_code" => $request->payment_type == 'gopay' ? $body['actions'][0]['url'] : null,
                    "bank" => $request->payment_type !== 'gopay' ? [
                        "va_number" => $body['va_numbers'][0]['va_number'],
                        "name" => $body['va_numbers'][0]['bank'],
                    ] : null,
                ]
            ]);

            $response->json();
        }
        return to_route('invoice.show', $order_id);
    }

    public function show(Invoice $invoice)
    {
        return inertia('Invoice/Show', [
            "invoice" => new InvoiceResource($invoice),
        ]);
    }
}
