<?php

namespace Database\Seeders;

use App\Models\Option;
use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    public function run(): void
    {
        /**
         * ['id' => 1, 'type' => 'text'],
         * ['id' => 2, 'type' => 'select'],
         * ['id' => 3, 'type' => 'radio'],
         * ['id' => 4, 'type' => 'checkbox'],
         * ['id' => 5, 'type' => 'file'],
         * ['id' => 6, 'type' => 'date'],
         * ['id' => 7, 'type' => 'time'],
         * ['id' => 8, 'type' => 'yes_no'],
         * ['id' => 9, 'type' => 'check_radio'],
         * ['id' => 10, 'type' => 'check_list'],
         * ['id' => 11, 'type' => 'textarea'],
         * ['id' => 12, 'type' => 'select_options'],
         */
        $questions = [
            [
                'id' => 1,
                'question' => '¿En qué sede te encontrabas?',
                'title' => 'Sede',
                'type_question_id' => 10,
                'form_id' => 1,
                'stepper' => 1,
                'options' => ['Sede Chiclayo | Chiclayo', 'Sede Lima | Lima',],
                'text_switch' => 'El problema no ocurrió en una sede física',
                'second_options' => ['Teléfono', 'Chat', 'Página web', 'Redes sociales (WhatsApp, Facebook, Instagram)', 'Correo electrónico'],
            ],
            [
                'id' => 2,
                'question' => '¿Queja o Reclamo?',
                'title' => 'Tipo',
                'type_question_id' => 3,
                'form_id' => 1,
                'stepper' => 1,
                'options' => ['Queja', 'Reclamo',],
            ],
            [
                'id' => 3,
                'question' => '¿Cuándo ocurrió la situación que origina el presente reclamo?',
                'title' => 'Fecha',
                'type_question_id' => 6,
                'form_id' => 1,
                'stepper' => 1,
            ],
            [
                'id' => 4,
                'question' => '¿Aproximadamente a qué hora sucedió?',
                'title' => 'Hora',
                'type_question_id' => 7,
                'form_id' => 1,
                'stepper' => 1,
            ],
            [
                'id' => 5,
                'question' => 'Descríbenos ¿qué sucedió?',
                'title' => 'Descripción',
                'description' => 'Detalla cuál fue el problema que ocasionó que presentes este reclamo de la manera más detallada posible.',
                'type_question_id' => 9,
                'form_id' => 1,
                'stepper' => 1,
            ],
            [
                'id' => 6,
                'question' => 'Adjuntar archivos (opcional)',
                'stepper' => 1,
                'title' => 'Archivos',
                'description' => 'Puedes subir un máximo de 20 MB en fotos, videos y/o textos que ayuden a evidenciar tu reclamo.',
                'type_question_id' => 5,
                'form_id' => 1,
                'required' => false
            ],

            //            STEPPER 2
            [
                'id' => 7,
                'question' => 'Identifica el motivo del reclamo. Puedes seleccionar máximo 2 opciones.',
                'title' => 'Motivo del reclamo',
                'type_question_id' => 4,
                'form_id' => 1,
                'stepper' => 2,
                'max_options' => 2,
                'options' => [
                    'Trato profesional en la atención: la persona que te atendió no lo hizo de forma adecuada.',
                    'Tiempo: hubo demora antes y/o durante la atención que recibiste.',
                    'Procedimiento: no se siguió el procedimiento de atención o no estás de acuerdo con este.',
                    'Infraestructura: el ambiente en el que se realizó la atención y/o mobiliario no están en buen estado, no hay rutas accesibles que faciliten el desplazamiento de las personas o el local queda en un sitio inseguro.',
                    'Información: la orientación sobre el servicio fue inadecuada, insuficiente o imprecisa.',
                    'Resultado: no se pudo obtener un resultado concreto como parte del servicio y/o no se justifica la negativa en la atención del servicio.',
                    'Confianza: ocurrió una situación que afectó la confianza y credibilidad de la entidad.',
                    'Disponibilidad: el medio de atención (virtual, presencial o telefónico) por el que se brinda el servicio no responde a tus expectativas o tiene horarios restringidos.',
                ],
                'with_other' => true
            ],
            [
                'id' => 8,
                'question' => '¿Trataron de darte una solución previa al registro del reclamo?',
                'title' => 'Solución previa',
                'type_question_id' => 8,
                'form_id' => 1,
                'stepper' => 2,
            ],

        ];

        foreach ($questions as $question) {
            $options = $question['options'] ?? [];
            unset($question['options']);
            $secondOptions = $question['second_options'] ?? [];
            unset($question['second_options']);
            $questionModel = Question::create($question);
            foreach ($options as $option) {
                Option::create([
                    'option' => $option,
                    'question_id' => $questionModel->id,
                ]);
            }
            foreach ($secondOptions as $option) {
                Option::create([
                    'option' => $option,
                    'second' => true,
                    'question_id' => $questionModel->id,
                ]);
            }
        }
    }
}
