<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\Post;
use App\Models\Category;
use App\Models\User;
use Database\Seeders\RoleSeeder;
use Inertia\Testing\AssertableInertia as Assert;
use function Pest\Laravel\seed;

uses(RefreshDatabase::class);


beforeEach(function () {

    seed([RoleSeeder::class]);
    $users = User::factory()->count(3)->user()->create();
    Category::factory()->create([
        "name" => "all",
        "user_id" => 1,
        "slug" => "all",
    ]);
    Post::factory()->count(3)->withUser()->recycle($users)->create();
});


it('displays a list of posts', function () {

    $data = $this->get('/posts')
        ->assertOk()
        ->assertInertia(
            fn(Assert $page)  => $page
                ->component('posts/index')
                ->has('posts', 13)
                ->where('posts.current_page', 1)
                ->where('posts.total', 3)
                ->where('posts.per_page', 10)
        );
});

it('should successfully delete a post', function () {

    $user = Post::find(1)->user;

    $this->actingAs($user)->delete('/posts/1')
        ->assertOk()
        ->assertJsonFragment(['message' => "post has been deleted?: 1"])
    ;
});

it('should redirect you to login if you are not logged in and your trying to delete a post', function () {

    $this->delete('/posts/1')
        ->assertRedirectToRoute('login')

    ;
});

it('should forbid you to delete a post if you are not the owner or an admin', function () {

    $user = User::find(2);

    $this->actingAs($user)->delete('/posts/1')
        ->assertForbidden()
    ;
});

