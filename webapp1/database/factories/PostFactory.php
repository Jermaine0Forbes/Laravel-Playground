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
           'title' => fake()->realText(250),
           'body' => fake()->paragraph(4, true),
           'published' => fake()->boolean(70),
           'views' => fake()->numberBetween(0, 10000),
        //    'votes' =>  fake()->numberBetween(0, 10000),
           'likes' =>  0,
           'locked' => fake()->boolean(15),
           'soft_delete' => fake()->boolean(20),
            'flagged' => (int)fake()->boolean(5),
            'category_id' => 1,
           'user_id' =>  fake()->numberBetween(1, 50),
        ];
    }
}
