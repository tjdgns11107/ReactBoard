<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BoardsController extends Controller
{
    public function load(Request $request)
    {
        // if($request->input == "*") {
        //     $boards = DB::table('posts')->orderBy('id','desc')->paginate(10);
        // } else {
        //     $boards = DB::table('posts')->where('post_board', $request->input)->orderBy('id','desc')->paginate(10);
        // }

        if($request->input == "*") {
            $boards = DB::table('posts')->orderBy('id','desc')->get();
        } else {
            $boards = DB::table('posts')->where('post_board', $request->input)->orderBy('id','desc')->get();
        }

        return $boards;
    }
}
