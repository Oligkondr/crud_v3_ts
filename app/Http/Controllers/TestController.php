<?php

namespace App\Http\Controllers;

class TestController extends Controller
{
    public function index()
    {
        dd(request()->route()->getName());
        return inertia('Test/Index');
    }
}
