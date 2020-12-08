<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'email' => 'admin@adin.com',
            'name' => 'admin',
            'password' => bcrypt('password'),
            'admin' => 1,
        ]);

        
        \App\Models\User::create([
            'email' => 'test@test.com',
            'name' => 'test',
            'password' => bcrypt('testtest'),
            'admin' => 0,
        ]);
    }
}
