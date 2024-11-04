<?php

namespace App\Http\Requests;

class StoreQuestionRequest extends StoreRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'question' => 'required|string',
            'description' => 'nullable|string',
            'required' => 'required|boolean',
            'stepper' => 'required|integer',
            'text_switch' => 'nullable|string',
            // 'with_other' => 'required|boolean',
            'max_options' => 'nullable|integer',
            'type_question_id' => 'required|exists:type_questions,id',
            'options' => 'nullable|array',
            'options.*.option' => 'required|string',
            'options.*.second' => 'nullable|boolean',
        ];
    }
}
