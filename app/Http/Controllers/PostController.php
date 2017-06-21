<?php


namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    /**
     * Show a list of all of the application's users.
     *
     * @return Response
     */
    public function index()
    {

        return view('post');
    }

    public function post()
    {

        // $data = $req ->input('name');
        //
        // DB::table('cookies')->create(['name'=>$data]);
        return view('index');
    }
}
