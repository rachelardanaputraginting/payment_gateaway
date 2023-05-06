<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::get('/carts', [CartController::class, 'index'])->name('cart.index');
Route::delete('/carts/delete/{cart}', [CartController::class, 'destroy'])->name('cart.delete');
Route::post('/carts/add_to_cart/{product:slug}', [CartController::class, 'store'])->name('cart.store');

Route::resource('products', ProductController::class);
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

require __DIR__ . '/auth.php';
