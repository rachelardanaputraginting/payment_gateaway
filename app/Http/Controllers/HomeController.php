<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Invoice;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // $invoice = Invoice::where('order_id', 'order-20231678')->first();
        // // SHA512(order_id+status_code+gross_amount+ServerKey)
        // // $signature_key = hash('sha512', $invoice->order_id . $request->status_code . $invoice->gross_amount . '.0' . config('services.midtrans.server_key'));

        // // if ($request->signature_key == $signature_key) {
        // // if ($request->transaction_status == 'settlement') {
        // $invoice->update([
        //     "succeeded_at" => $request->settlement_time,
        // ]);

        // $card = Cart::whereIn('id', [6, 7, 8])->get();
        // // $card->update([
        // //     'paid_at' => now()
        // // ]);
        // // dd($invoice->pluck('card_ids'));
        // dd($card);
        return inertia('Home');
    }
}
