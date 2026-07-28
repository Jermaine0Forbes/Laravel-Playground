<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $cid = fake()->numberBetween(1, 4);
        $bid = fake()->numberBetween(1, 5);
        $c = Category::find($cid);
        $b = Brand::find($bid);
        return [
            "name" => $b->name." ".$c->name." ".fake()->randomNumber(3,true),
            "description" => fake()->words(6, true),
            "brand_id" => $bid,
            "category_id" => $cid,
            "price" => fake()->randomFloat(2, 0, 20),
            'created_at' => now()->subYear(),
        ];
    }
}
