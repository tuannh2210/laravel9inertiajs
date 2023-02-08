<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class PostController extends Controller
{
    public function index()
    {
        $posts = [
            [
                'id' => 1,
                'title' => 'title',
                'content' => 'content',
                'created_at' => now(),
            ]
        ];

        return inertia('Posts/Index', compact('posts'));
    }
}
