<?php

namespace App\Http\Controllers;

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
        $card_ids = $request->collect('carts')->pluck('id');
        // $order_id = 'order-' . now()->format('Y') . $request->user()->id . $card_ids->implode('');
        $order_id = 'order-' . '200204' . $request->user()->id . $card_ids->implode('');

        $invoiceExists = Invoice::where('order_id', $order_id)->firstOr(fn () => false);
        if ($invoiceExists) {
            return to_route('invoice.show', $invoiceExists);
        } else {
            $invoice = Auth::user()->invoices()->updateOrcreate(compact('order_id'), [
                'order_id' => $order_id,
                'gross_amount' => $total,
                'card_ids' => $card_ids,
                'payment_type' => $request->payment_type,
            ]);

            $data = [
                'payment_type' => $request->payment_type,
                'transaction_details' => [
                    'gross_amount' => $total + 1,
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

            $response = Http::withBasicAuth(config('services.midtrans.server_key') . ':', '')
                ->post('https://api.sandbox.midtrans.com/v2/charge', $data);

            dd($response->json());
            $response->json();
        }
        return back();
    }

    public function show(Invoice $invoice)
    {
        return $invoice;
    }
}
