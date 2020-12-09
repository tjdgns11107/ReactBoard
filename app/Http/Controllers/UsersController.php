<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    public function check(Request $request) {
        $email = $request->email;
        $result = DB::table('users')->where('email', $email)->value('email');

        return $result;
    }

    public function store(Request $request) {
        $email = $request->email;

        if(DB::table('users')->where('email', $email)->value('email')) {
            return ["message" => "used"];
        }

        // $user = \App\Models\User::create([
        //     'email' => $request->input('email'),
        //     'name' => $request->input('name'),
        //     'password' => bcrypt($request->input('password')),
        // ]);

        $user = DB::table('users')->insert([
            'email' => $request->input('email'),
            'name' => $request->input('name'),
            'password' => bcrypt($request->input('password')),
        ]);

        // auth()->login($user);
        // return $user;

        return;
    }
}
