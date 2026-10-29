<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Inertia\Inertia;

class PostController extends Controller
{

    // public static function middleware():array
    // {
    //     return [
    //         new Middleware(HandlePrecognitiveRequests::class, only:['store', 'create'])
    //     ];
    // }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render(
            "posts/index",
            [
                "posts" =>
                Inertia::scroll(fn() => Post::with(["user:id,name", "category:id,slug"])->select(['id', 'title', 'slug', 'user_id', 'category_id'])->latest()->paginate(10))
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("posts/create", [
            'categories' =>  Category::all()->select(['id', 'name'])
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $valid = $request->validated();
        DB::beginTransaction();
        try {

            if ($valid) {
                $cat = Category::firstOrCreate(['name' => $request->input('name'), 'user_id' => $request->user()->id]);
                $post = Post::create(array_merge($valid, ["category_id" => $cat->id , 'user_id' => $request->user()->id]));
                DB::commit();
            }
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }



        return redirect("/posts/$cat->slug/$post->slug");
        // return redirect("/posts");
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category, Post $post)
    {
        return Inertia::render('posts/show', [
            'category' => $category,
            'post' => $post
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
