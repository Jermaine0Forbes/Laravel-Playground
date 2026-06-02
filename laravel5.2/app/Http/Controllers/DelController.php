<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Cookie as cookie;

class DelController extends Controller
{
    public function index(){
         $cookie = cookie::all();

         return view('delete',['cookie'=> $cookie]);
    }

    public function delete(Request $req){
        $cookie = new cookie;

        $cookie->where('cook_id', $req->cook_id)->delete();

        return redirect('/');
    }
}
