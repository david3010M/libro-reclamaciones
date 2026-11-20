<?php

namespace App\Http\Requests;

use App\Models\Question;
use App\Models\Sede;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;
use Illuminate\Validation\Validator;

/**
 * Valida el envío público de un reclamo. Las reglas fijas cubren al titular y al archivo;
 * las respuestas se validan contra las preguntas configuradas (tipo, obligatoriedad, máximo de opciones).
 */
class SubmitComplaintRequest extends FormRequest
{
    private const FORM_ID = 1;

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'customer.nombre' => ['required', 'string', 'min:3', 'max:255'],
            'customer.email' => ['required', 'email', 'max:255'],
            'customer.telefono' => ['required', 'regex:/^9\d{8}$/'],
            'customer.document' => ['required', 'digits:8'],
            'customer.direccion' => ['required', 'string', 'min:5', 'max:255'],
            'answers' => ['required', 'array'],
            'answers.*' => ['nullable', 'array'],
            'answers.*.*' => ['nullable', 'string', 'max:2000'],
            'file' => ['nullable', 'file', 'mimes:png,jpg,jpeg,mp4', 'max:20480'],
        ];
    }

    public function messages(): array
    {
        return [
            'customer.nombre.required' => 'Ingresa tu nombre completo.',
            'customer.nombre.min' => 'El nombre es demasiado corto.',
            'customer.email.required' => 'Ingresa tu correo electrónico.',
            'customer.email.email' => 'Ingresa un correo válido.',
            'customer.telefono.required' => 'Ingresa tu teléfono.',
            'customer.telefono.regex' => 'El teléfono debe tener 9 dígitos y empezar con 9.',
            'customer.document.required' => 'Ingresa tu documento de identidad.',
            'customer.document.digits' => 'El documento debe tener 8 dígitos.',
            'customer.direccion.required' => 'Ingresa tu dirección.',
            'customer.direccion.min' => 'La dirección es demasiado corta.',
            'answers.required' => 'Faltan las respuestas del formulario.',
            'file.mimes' => 'La evidencia debe ser PNG, JPG o MP4.',
            'file.max' => 'La evidencia no puede pesar más de 20 MB.',
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator) {
            if ($validator->errors()->isNotEmpty()) {
                return;
            }

            $answers = $this->input('answers', []);
            $questions = Question::with(['options', 'typeQuestion'])
                ->where('form_id', self::FORM_ID)
                ->get();

            foreach (array_keys($answers) as $questionId) {
                if (!$questions->contains('id', (int) $questionId)) {
                    $validator->errors()->add("answers.$questionId", 'Pregunta no válida.');
                }
            }

            foreach ($questions as $question) {
                $type = $question->typeQuestion?->type;
                if ($type === 'file') {
                    continue;
                }

                $key = "answers.{$question->id}";
                $values = array_values(array_filter(
                    Arr::wrap($this->input($key)),
                    fn ($v) => is_string($v) && trim($v) !== ''
                ));

                if ($question->required && count($values) === 0) {
                    $validator->errors()->add($key, 'Este campo es obligatorio.');
                    continue;
                }
                if (count($values) === 0) {
                    continue;
                }

                $this->validateByType($validator, $key, $question, $type, $values);
            }
        });
    }

    private function validateByType(Validator $validator, string $key, Question $question, ?string $type, array $values): void
    {
        $options = $question->options->pluck('option')->all();

        if ($type !== 'checkbox' && count($values) > 1) {
            $validator->errors()->add($key, 'Solo se permite una respuesta.');
            return;
        }

        switch ($type) {
            case 'select_options':
                if (!Sede::where('fullName', $values[0])->exists()) {
                    $validator->errors()->add($key, 'Selecciona una opción válida.');
                }
                break;
            case 'select':
            case 'radio':
                if (!in_array($values[0], $options, true)) {
                    $validator->errors()->add($key, 'Selecciona una opción válida.');
                }
                break;
            case 'yes_no':
                if (!in_array($values[0], ['Sí', 'No'], true)) {
                    $validator->errors()->add($key, 'Responde Sí o No.');
                }
                break;
            case 'checkbox':
                if ($question->max_options && count($values) > $question->max_options) {
                    $validator->errors()->add($key, "Puedes elegir como máximo {$question->max_options} opciones.");
                    break;
                }
                foreach ($values as $value) {
                    $isOther = str_starts_with($value, 'Otro: ') && mb_strlen($value) > 6;
                    if (!$isOther && !in_array($value, $options, true)) {
                        $validator->errors()->add($key, 'Hay una opción que no es válida.');
                        break;
                    }
                }
                break;
            case 'date':
                $date = Carbon::createFromFormat('Y-m-d', $values[0]) ?: null;
                if (!$date || $date->format('Y-m-d') !== $values[0]) {
                    $validator->errors()->add($key, 'Ingresa una fecha válida.');
                } elseif ($date->isFuture() && !$date->isToday()) {
                    $validator->errors()->add($key, 'La fecha no puede ser futura.');
                }
                break;
            case 'time':
                if (!preg_match('/^([01]\d|2[0-3]):[0-5]\d$/', $values[0])) {
                    $validator->errors()->add($key, 'Ingresa una hora válida (HH:mm).');
                }
                break;
            case 'textarea':
                if (mb_strlen(trim($values[0])) < 10) {
                    $validator->errors()->add($key, 'Describe lo sucedido con al menos 10 caracteres.');
                }
                break;
            default:
                break;
        }
    }
}
