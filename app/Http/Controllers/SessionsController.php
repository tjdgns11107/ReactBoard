<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SessionsController extends Controller
{
    // public function __construct() {
    //     $this->middleware('guest', ['except' => 'destroy']);
    // }

    public function state() {
        return \Auth::user();
    }

    public function store(Request $request) {
        $credentials = $request->only('email', 'password');

        if (! Auth::attempt($credentials, $request->has('remember'))) {
            return ['message' => 'missMatch'];
        } else {
            $name = DB::table('users')->where('email', $request->email)->value('name');
            return $name;
        }
    }

    public function edit() {
        
    }

    public function update() {
        
    }

    public function destroy() {
        \Auth::logout();

        return;
    }
}
