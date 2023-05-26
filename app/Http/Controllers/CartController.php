<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{

    public function store(Request $request, Product $product)
    {
        $product->carts()->updateOrCreate(
            [
                "user_id" => $request->user()->id,
                "product_id" => $product->id
            ],
            [
                "user_id" => $request->user()->id,
                "price" => $product->price,
                "quantity" => $product->quantity,
            ]
        );

        Cache::forget('carts_global_count');

        return redirect()->route('cart.index');
    }

    public function index(Request $request)
    {
        $carts = Cart::query()
            ->with('product')
            ->whereBelongsTo($request->user())->get();
        // return $carts;
        return inertia('Carts/Index', [
            "carts" => CartResource::collection($carts)
        ]);
    }

    public function destroy(Cart $cart)
    {
        $cart->delete();

        return back();
    }
}
