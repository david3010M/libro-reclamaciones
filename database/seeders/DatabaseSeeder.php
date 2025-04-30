<?php

namespace Database\Seeders;

use Database\Factories\UserFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        UserFactory::new()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin'),
        ]);
        $this->call(CompanySeeder::class);
        $this->call(FormSeeder::class);
        $this->call(TypeQuestionSeeder::class);
        $this->call(QuestionSeeder::class);
        UserFactory::new()->create([
            'name' => 'storres',
            'email' => 'storres',
            'password' => Hash::make('Apakori1506'),
        ]);
        UserFactory::new()->create([
            'name' => 'aperez',
            'email' => 'aperez',
            'password' => Hash::make('Apakori1506'),
        ]);
    }
}
