<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'IndexController@index');

Route::get('/del','DelController@index');
Route::post('/del','DelController@delete');

Route::get('/update', 'Put@index');
Route::post('/update','Put@update');

// PRACTICING HOW TO RETRIEVE DATA WITH JOINS
Route::get('/foo', 'IndexController@foo');

// PRACTICING HOW TO RETRIEVE PATH URL'S
Route::get('/lol', 'IndexController@url');
Route::get('/lol/lmao', 'IndexController@url');


// LEARNING HOW TO REDIRECT URL
Route::get('/redir', 'IndexController@redirect');

Route::get('/create', 'IndexController@create');
Route::get('/create/cust', 'IndexController@create');

Route::post('/create', 'IndexController@save');
Route::post('/create/cust', 'IndexController@save');


Route::get('/post', 'PostController@index');
Route::post('/post', ['as'=>'post','uses'=>'PostController@post']);
