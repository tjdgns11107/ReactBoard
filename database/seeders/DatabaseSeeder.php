<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if(config('database.default') !== 'sqlite') {
            DB::statement('SET FOREIGN_KEY_CHECKS=0');
        }

        \App\Models\User::truncate();
        $this->call(UsersTableSeeder::class);

        \App\Models\Board::truncate();
        $this->call(BoardsTableSeeder::class);

        \App\Models\Post::truncate();
        $this->call(PostsTableSeeder::class);

        \App\Models\Comment::truncate();
        $this->call(CommentsTableSeeder::class);
        
        if(config('database.default') !== 'sqlite') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1');
        }
    }
}
