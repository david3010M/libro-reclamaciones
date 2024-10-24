<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call(CompanySeeder::class);
        $this->call(FormSeeder::class);
        $this->call(TypeQuestionSeeder::class);
        $this->call(QuestionSeeder::class);
    }
}
