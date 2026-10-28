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
        $x = $user->hasPermissionTo('create posts');
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
            'title' => ['required', 'unique:posts', 'min:5'],
            'body' => ['required'],
            'user_id' => ['required', 'numeric'],
            'category' => ['required', 'string', 'max:50']
        ];
    }

        public function messages(): array
    {
        return [
            'title.required' => 'A distinct title is required for your post.',
            // 'title.max' => 'your title is too long',
            'body.required' => 'body is required',
            'user_id.required' => 'user_id is required',
            'category.required' => 'category is required',
        ];
    }
}
