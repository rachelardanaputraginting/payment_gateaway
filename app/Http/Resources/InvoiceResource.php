<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // $json_string = json_encode($my_objsect);
        // $my_array = json_decode($json_string, true);

        $jsonData = $this->payment_info;
        // {"bank": null, "qr_code": "https://api.sandbox.midtrans.com/v2/gopay/097a2fb9-dd98-4f96-8f1c-ae1f42126c9b/qr-code"}
        $data = json_decode($jsonData);
        return [
            'id' => $this->id,
            'order_id' => $this->order_id,
            'qr_code' => $this->payment_type !== 'bank_transfer' ? $data->qr_code : null,
            'bank' => $this->payment_type == 'bank_transfer' ? [
                'name' => $data->bank->name,
                'va_number' => $data->bank->va_number,
            ] : null,
        ];
    }
}
