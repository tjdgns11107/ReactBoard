<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BoardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Board::create([
            'board_name' => 'notice',
        ]);

        \App\Models\Board::create([
            'board_name' => 'qna',
        ]);

        \App\Models\Board::create([
            'board_name' => 'Free',
        ]);
    }
}
