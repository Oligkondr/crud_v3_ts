<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Inertia\ResponseFactory;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response|ResponseFactory
    {
        $users = User::all();

        return inertia('User/List', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response|ResponseFactory
    {
        return inertia('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request): \Symfony\Component\HttpFoundation\Response
    {
        $user = User::create($request->validated());

        return Inertia::location(route('user.show', [$user->id]));
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user): Response|ResponseFactory
    {
        return inertia('User/Show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user): Response|ResponseFactory
    {
        return inertia('User/Edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, User $user): \Symfony\Component\HttpFoundation\Response
    {
        $data = $request->except(['avatar']);

        $user->update($data);

        if ($request->hasFile('avatar')) {
            $user->avatar = $request->file('avatar')
                ->store("avatars/{$user->id}", ['disk' => 'public']);
            $user->save();
        }

        return Inertia::location(route('user.show', [$user->id]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user): \Symfony\Component\HttpFoundation\Response
    {
        $user->delete();

        return Inertia::location(route('user.index'));
    }

    public function test(): Response|ResponseFactory
    {
        return inertia('Test');
    }
}
