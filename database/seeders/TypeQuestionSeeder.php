<?php

namespace Database\Seeders;

use App\Models\TypeQuestion;
use Illuminate\Database\Seeder;

class TypeQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            ['id' => 1, 'type' => 'text', 'label' => 'Texto'],
            ['id' => 2, 'type' => 'select', 'label' => 'Selección'],
            ['id' => 3, 'type' => 'radio', 'label' => 'Varias opciones'],
            ['id' => 4, 'type' => 'checkbox', 'label' => 'Casillas de verificación'],
            ['id' => 5, 'type' => 'file', 'label' => 'Archivo'],
            ['id' => 6, 'type' => 'date', 'label' => 'Fecha'],
            ['id' => 7, 'type' => 'time', 'label' => 'Hora'],
            ['id' => 8, 'type' => 'yes_no', 'label' => 'Sí o no'],
            ['id' => 9, 'type' => 'check_radio', 'label' => 'Casillas de verificación o radio'],
            ['id' => 10, 'type' => 'check_list', 'label' => 'Casillas de verificación o lista'],
            ['id' => 11, 'type' => 'textarea', 'label' => 'Área de texto'],
            ['id' => 12, 'type' => 'select_options', 'label' => 'Selección con opciones'],
        ];

        foreach ($types as $type) {
            TypeQuestion::create($type);
        }
    }
}
