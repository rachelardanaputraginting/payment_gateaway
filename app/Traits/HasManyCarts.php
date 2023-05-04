<?php

namespace App\Traits;

trait HasManyCarts
{
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}
