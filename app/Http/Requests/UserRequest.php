<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $routeName = request()->route()->getName();

        $rules = [
            'name' => 'required|string',
            'gender' => 'required|in:Мужской,Женский',
            'birthday' => 'required|date_format:Y-m-d',
        ];

        if ($routeName == 'user.store') {
            $rules['password'] = 'required|string|min:3';
            $rules['email'] = 'required|email|unique:users,email';
        } else {
            $user = request('user');
            $rules['email'] = "required|email|unique:users,email,{$user->id}";
        }

        return $rules;

    }

    public function messages(): array
    {
        return [
            'name.required' => __('The name must be filled in.'),
            'gender.required' => __('Gender must be specified.'),
            'birthday.required' => __('You must indicate your date of birth.'),
            'birthday.date_format' => __('The date of birth is incorrect.'),
            'email.required' => __('You must fill in your email.'),
            'email.email' => __('E-mail entered incorrectly.'),
            'email.unique' => __('E-mail is not unique.'),
            'password.required' => __('You must fill in a password.'),
            'password.min' => __('The password must be longer than 8 characters.'),
        ];
    }
}
