<?php

namespace App\Http\Controllers;

class TestController extends Controller
{
    public function index()
    {
        return inertia('Test/Index', [
            'test' => __('test'),
        ]);
    }
}
