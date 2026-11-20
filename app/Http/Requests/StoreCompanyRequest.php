<?php

namespace App\Http\Requests;

class StoreCompanyRequest extends StoreRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            // Uno o varios correos separados por coma; cada uno se valida por separado.
            'email' => ['nullable', 'string', 'max:500', function ($attribute, $value, $fail) {
                foreach (array_filter(array_map('trim', explode(',', (string) $value))) as $email) {
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        $fail("«{$email}» no es un correo válido.");
                        return;
                    }
                }
            }],
            'website' => 'nullable|url|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ];
    }
}
