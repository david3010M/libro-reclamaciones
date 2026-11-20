<?php

namespace App\Http\Requests;

class UpdateCompanyRequest extends StoreRequest
{
    public function rules(): array
    {
        return [
            'currentPassword' => 'required',
            'newPassword' => 'required|min:8',
            'confirmPassword' => 'required|same:newPassword',
        ];
    }
}
