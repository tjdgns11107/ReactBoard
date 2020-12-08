<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Comment::create([
            'comment_user' => 2,
            'comment_post' => 1,
            'comment_content' => '공지사항 확인 했습니다.',
        ]);
    }
}
