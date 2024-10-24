<?php

namespace Database\Seeders;

use App\Models\TypeQuestion;
use Illuminate\Database\Seeder;

class TypeQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            ['id' => 1, 'type' => 'text'],
            ['id' => 2, 'type' => 'select'],
            ['id' => 3, 'type' => 'radio'],
            ['id' => 4, 'type' => 'checkbox'],
            ['id' => 5, 'type' => 'file'],
            ['id' => 6, 'type' => 'date'],
            ['id' => 7, 'type' => 'time'],
            ['id' => 8, 'type' => 'yes_no'],
            ['id' => 9, 'type' => 'check_radio'],
            ['id' => 10, 'type' => 'check_list'],
            ['id' => 11, 'type' => 'textarea'],
        ];

        foreach ($types as $type) {
            TypeQuestion::create($type);
        }
    }
}
