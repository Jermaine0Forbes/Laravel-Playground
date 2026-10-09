<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Post;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class
        ]);

        User::factory()->count(5)->admin()->create();
        User::factory()->count(10)->moderator()->create();
        User::factory()->count(35)->user()->create();
        Category::factory()->create([
            "name" => "all",
            "user_id" => 1,
        ]);
        Post::factory(300)->create();


        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
