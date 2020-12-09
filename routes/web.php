<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/{path?}', 'App');

Route::post('/regist', '\App\Http\Controllers\UsersController@store');

Route::post('/check', '\App\Http\Controllers\UsersController@check');

Route::post('/login', '\App\Http\Controllers\SessionsController@store');

Route::post('/logout', '\App\Http\Controllers\SessionsController@destroy');

Route::post('/state', '\App\Http\Controllers\SessionsController@state');

// Route::get('/profile', '\App\Http\Controllers\???sController@edit');

// Route::post('/profile', '\App\Http\Controllers\???sController@update');