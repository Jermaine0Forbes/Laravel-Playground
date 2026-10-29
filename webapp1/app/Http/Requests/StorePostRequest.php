<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        return $user && $user->can('create posts');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'unique:posts', 'min:5', 'max:100'],
            'body' => ['required'],
            'name' => ['required', 'string', 'unique:categories', 'max:50']
        ];
    }

        public function messages(): array
    {
        return [
            'title.required' => 'A distinct title is required for your post.',
            'title.max' => 'your title is too long',
            'body.required' => 'body is required',
            'name.required' => 'category is required',
            'name.unique' => 'this category already exists',
        ];
    }
}
