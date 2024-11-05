<?php

namespace App\Http\Requests;

class UpdateCompanyRequest extends StoreRequest
{
    public function rules(): array
    {
        return [
            'currentPassword' => 'required',
            'newPassword' => 'required',
            'confirmPassword' => 'required|same:newPassword',
        ];
    }
}
