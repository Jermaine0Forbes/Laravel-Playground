<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

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

Route::resource('posts', PostController::class)->names([
    "index" => "posts.list",
    "create" => "posts.create",
    "store" => "posts.store",
    "show" => "posts.show",
    "edit" => "posts.edit",
    "update" => "posts.update",
    "destroy" => "posts.destroy",
]);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
