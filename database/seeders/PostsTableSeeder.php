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
        \App\Models\Post::create([
            'post_user' => 1,
            'post_board' => 1,
            'post_title' => '점검 중입니다.',
            'post_content' => '현재 점검중입니다..',
            'post_view' => 0,
            'post_available' => 1,
        ]);
        \App\Models\Post::create([
            'post_user' => 2,
            'post_board' => 3,
            'post_title' => '첫 글',
            'post_content' => '안녕하세요.',
            'post_view' => 0,
            'post_available' => 1,
        ]);
    }
}
