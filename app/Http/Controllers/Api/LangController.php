<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class LangController extends Controller
{
    public function index()
    {
        $lang = request('lang');
        app()->setLocale($lang);
        $cookie = cookie('lang', $lang, 60 * 24 * 365);

        return response()->json([
            'success' => true,
            'lang' => $lang
        ])->withCookie($cookie);
    }
}
