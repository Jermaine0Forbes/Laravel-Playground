<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Inertia::render('categories', [ 'categories' => Category::all()->latest()]);
    }

    /**
     * Get all category names and id's
     */
    public function get()
    {
     return Category::select(['id', 'name'])->latest();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return Inertia::render('categories/show', [
            'category' => $category,
            'posts' =>  
            Inertia::scroll(fn() => 
            Post::with(["user:id,name", 'category:id,name,slug'])->
            select(['id', 'title', 'slug', 'user_id', 'likes', 'views', 'body', 'updated_at', 'category_id'])
            ->where('category_id', $category->id)
            ->latest()
            ->paginate(10)
            ),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
