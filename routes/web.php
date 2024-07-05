<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Main');
})->name('main');

Route::middleware('auth')->group(function () {
    Route::resource('user', UserController::class);
});

Route::get('test', [TestController::class, 'index'])->name('test');

require __DIR__.'/auth.php';

