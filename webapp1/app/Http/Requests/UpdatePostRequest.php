<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $post = $this->route('post');

        return auth()->id() == $post->user_id || $this->user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required',  'min:5', 'max:100'],
            'body' => ['required', 'min:5'],
            'name' => ['required', 'string', 'max:50']
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'A distinct title is required for your post.',
            'title.max' => 'your title is too long',
            'title.min' => 'your title is too short',
            'body.required' => 'body is required',
            'body.min' => 'You need more than 5 words in a post',
        ];
    }
}
