<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Post::create([
            'post_user' => 1,
            'post_board' => 1,
            'post_title' => '방문을 환영합니다',
            'post_content' => '공지사항입니다.',
            'post_view' => 0,
            'post_available' => 1,
        ]);
    }
}
