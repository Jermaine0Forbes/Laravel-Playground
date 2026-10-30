<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;

Route::inertia('/', 'welcome')->name('home');

Route::resource('user', UserController::class)->names([
 "index" => "user.list",
 "create" => "user.create",
 "store" => "user.store",
 "show" => "user.show",
 "edit" => "user.edit",
 "update" => "user.update",
 "destroy" => "user.destroy",

]);


Route::get('posts/{category:slug}/{post:slug}', [PostController::class, 'show'])
    ->name('posts.show');

Route::resource('posts', PostController::class)
->middleware(['auth', 'verified'])
->withoutMiddlewareFor(['index', 'show'], ['auth', 'verified'])
->names([
    "index" => "posts.list",
    "create" => "posts.create",
    "store" => "posts.store",
    "edit" => "posts.edit",
    "update" => "posts.update",
    "destroy" => "posts.destroy",
])
->except('show');

Route::get('categories/{category:slug}', [CategoryController::class, 'show'])
    ->name('categories.show');

Route::resource('categories', CategoryController::class)
->middleware(['auth', 'verified'])
->withoutMiddlewareFor(['index', 'show'], ['auth', 'verified'])
->names([
    "index" => "categories.list",
    "create" => "categories.create",
    "store" => "categories.store",
    "edit" => "categories.edit",
    "update" => "categories.update",
    "destroy" => "categories.destroy",
])
->except('show');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

});

Route::middleware(['auth', 'role:admin', 'role:moderator'])->group(function() {
     Route::get("/admin", [AdminController::class, "index"])->name('admin.dashboard');
});

require __DIR__.'/settings.php';
