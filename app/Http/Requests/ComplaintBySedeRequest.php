<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class ComplaintBySedeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'from' => 'required|date',
            'to' => 'required|date',
            'sedes' => 'nullable|array',
            'sedes.*' => 'required|integer|exists:sedes,id',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $response = response()->json([
            'message' => $validator->errors()->first(),
            'action' => 'warning',
        ], 422);

        throw new ValidationException($validator, $response);
    }
}
