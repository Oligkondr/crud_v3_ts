<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', 'user');

Route::resource('user', UserController::class);

Route::get('test', [TestController::class, 'index'])->name('test');

require __DIR__.'/auth.php';

