<?php

namespace Database\Seeders;

use App\Models\Form;
use Illuminate\Database\Seeder;

class FormSeeder extends Seeder
{
    public function run(): void
    {
        $forms = [
            ['company_id' => 1],
        ];

        foreach ($forms as $form) {
            Form::create($form);
        }

    }
}
