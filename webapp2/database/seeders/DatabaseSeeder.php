<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(50)->create();

        Brand::factory()
            ->count(5)
            ->state(new Sequence(
                [
                    "name" => "Mcdonalds",
                    "description" => fake()->words(6, true),
                    "website" => "mcdonalds.com",
                    "created_at" => now()->subYear(),
                    "updated_at" => now()->subYear(),
                ],
                [
                    "name" => "Burger King",
                    "description" => fake()->words(6, true),
                    "website" => "bk.com",
                    "created_at" => now()->subYear(),
                    "updated_at" => now()->subYear(),
                ],
                [
                    "name" => "Wendy's",
                    "description" => fake()->words(6, true),
                    "website" => "wendys.com",
                    "created_at" => now()->subYear(),
                    "updated_at" => now()->subYear(),
                ],
                [
                    "name" => "Whataburger",
                    "description" => fake()->words(6, true),
                    "website" => "whataburger.com",
                    "created_at" => now()->subYear(),
                    "updated_at" => now()->subYear(),
                ],
                [
                    "name" => "Checkers",
                    "description" => fake()->words(6, true),
                    "website" => "checkers.com",
                    "created_at" => now()->subYear(),
                    "updated_at" => now()->subYear(),
                ],

            ))
            ->create();

        Category::factory()
            ->count(4)
            ->state(new Sequence(
                [
                    "name" => "burger",
                    "description" => fake()->words(6, true),
                    "created_at" => now()->subYear(),
                    "updated_at" => now()->subYear(),
                ],
                [
                    "name" => "fries",
                    "description" => fake()->words(6, true),
                    "created_at" => now()->subYear(),
                    "updated_at" => now()->subYear(),
                ],
                [
                    "name" => "drink",
                    "description" => fake()->words(6, true),
                    "created_at" => now()->subYear(),
                    "updated_at" => now()->subYear(),
                ],
                [
                    "name" => "dessert",
                    "description" => fake()->words(6, true),
                    "created_at" => now()->subYear(),
                    "updated_at" => now()->subYear(),
                ],

            ))
            ->create();

        Product::factory(50)->create();

        Order::factory(100)->create();

        OrderItem::factory(500)->create();
    }
}
