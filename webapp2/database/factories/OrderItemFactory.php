<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\OrderItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<OrderItem>
 */
class OrderItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {   $pid = fake()->numberBetween(1,50);
        $p = Product::find($pid);
        $amount = fake()->numberBetween(1, 10);
        return [
           "order_id" => fake()->numberBetween(1, 100),
           "product_id" => $pid,
           "quantity" => $amount,
           "total" => $p->price * $amount,
        ];
    }
}
