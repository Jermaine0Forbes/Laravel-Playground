<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'title' => fake()->sentences(2, true),
           'body' => fake()->paragraph(4, true),
           'views' => fake()->numberBetween(0, 10000),
           'votes' =>  fake()->numberBetween(0, 10000),
           'user_id' =>  fake()->numberBetween(1, 50),
        ];
    }
}
