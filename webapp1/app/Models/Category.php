<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\CategoryFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Post;

class Category extends Model
{
    /** @use HasFactory<CategoryFactory> */
    use HasFactory;
    //
    protected $fillable = ['name', 'slug', 'user_id' ];

    protected static function booted(): void
    {
        static::creating(function (Category $category) {
            $category->slug = str($category->name)->lower()->slug('-');
        });
    }

    public function posts():HasMany
    {
        return $this->HasMany(Post::class);
    }
}
