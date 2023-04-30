<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'Rachel Ardana Putra Ginting',
                'email' => 'rachel@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],
            [
                'name' => 'Dinda Fitria Indriana',
                'email' => 'dinda@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ]
        ])->each(fn ($q) => User::create($q));
    }
}
