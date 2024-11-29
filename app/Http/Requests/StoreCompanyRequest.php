<?php

namespace App\Http\Requests;

class StoreCompanyRequest extends StoreRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'nullable|string|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ];
    }
}
