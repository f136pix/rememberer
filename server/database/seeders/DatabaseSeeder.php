<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'teste',
            'email' => 'test@example.com',
            'password' => '12345678'
        ]);

        \App\Models\User::factory(10)->create();
        \App\Models\Task::factory(10)->create();
        \App\Models\Team::factory(10)->create();
        \App\Models\Team::factory()->count(10)->hasUsers(5)->create();
    }
}
