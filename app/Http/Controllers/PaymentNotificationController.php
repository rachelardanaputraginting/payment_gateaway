<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Invoice;
use App\Models\Order;
use App\Models\User;
use App\Models\UserOrder;
use Illuminate\Http\Request;

class PaymentNotificationController extends Controller
{
    public function hit(Request $request)
    {
        $invoice = Invoice::where('order_id', $request->order_id)->first();
        // SHA512(order_id+status_code+gross_amount+ServerKey)
        $signature_key = hash('sha512', $invoice->order_id . $request->status_code . $invoice->gross_amount . '.00' . config('services.midtrans.server_key'));
        if ($request->signature_key == $signature_key) {
            $invoice->update([
                "succeeded_at" => $request->settlement_time
            ]);


            Cart::whereIn('id', $invoice->card_ids)->update([
                "paid_at" => $request->settlement_time
            ]);
        }
    }
}
