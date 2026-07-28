<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           "user_id" => fake()->numberBetween(1, 50),
           "orderNumber" => fake()->randomNumber(6, true),
           "status" => fake()->randomElement(['cancelled', 'pending', 'shipping', 'completed']),
           "discount" => fake()->numberBetween(5, 40),
           "tax" => fake()->randomFloat(2, 0, 10),
           "created_at" => fake()->dateTimeThisYear()
        ];
    }
}
