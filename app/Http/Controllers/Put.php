<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Cookie as cookie;

class Put extends Controller
{
    public function index(){
        $cookie = cookie::where('cook_id',9)->first();
        return view('update')->with('cookie', $cookie);
    }

    public function update(Request $req){
        $c = new cookie;
        $c->where('cook_id', 9)
            ->update(['name'=>$req->name, 'price'=>$req->price]);

        return redirect('/');

    }
}
