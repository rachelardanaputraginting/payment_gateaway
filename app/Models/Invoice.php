<?php

namespace App\Models;

use App\Enums\InvoiceStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $cast = [
        'succeeded_at' => 'datetime',
        'payment_info' => 'array',
        'card_ids' => 'array',
        'status' => InvoiceStatus::class,
    ];
}
