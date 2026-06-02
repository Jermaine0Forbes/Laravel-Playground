<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    public function cookie (){
        return $this->belongsTo('App\Cookie', "cook_id");
    }

    public function customer(){
        return $this->belongsTo('App\Customer', "cust_id");
    }
}
