<?php


namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Cookie as cookie;
use App\Transaction as trans;
use App\Customer as customer;

class IndexController extends Controller
{
    /**
     * Show a list of all of the application's users.
     *
     * @return Response
     */
    public function index()
    {
        $users = DB::table('cookies')->pluck('name');
        //$users = DB::table('cookies')->get();

        return view('index', ['users' => $users]);
    }

    public function url(Request $req){

        echo $req->path();
    }

    public function create(Request $req){
        
        switch($req->path()){
            case "create" : $tab = 'cookie';
            break;
            case "create/cust" : $tab = 'customer';
            break;
            case "create/trans" : $tab = 'trans';
            break;
        }

        return view('create' ,['table' => $tab]);
    }

    public function save(Request $req){
        if($req->table === "cookie"){
            $data = new cookie;

            $data->name = $req->name;

            $data->save();
        }else{
            $data = new customer;

            $data->name = $req->name;
            $data->age = $req->age;

            $data->save();
        }


        return redirect('/');
    }

    public function redirect(){

        return redirect('/');
    }


    public function foo(){
        //$cookie = cookie::pluck('name')->first();
        $tr = trans::all();
        // foreach ($tr as $t) {
        //
        //         echo $t->trans_id." : ".$t->cookie->name."<br> <hr>";
        // }

        return view('foo',['trans'=>$tr]);

    }


}
