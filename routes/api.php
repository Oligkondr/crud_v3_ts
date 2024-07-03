<?php

use App\Http\Controllers\Api\LangController;
use Illuminate\Support\Facades\Route;

Route::post('set-lang', [LangController::class, 'index'])->name('set-lang');
