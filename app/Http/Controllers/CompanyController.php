<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Models\Question;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CompanyController extends Controller
{
    public function index()
    {
        $companyName = Company::first()->name;
        $companyEmail = Company::first()->email;
        return view('layouts.configuration', compact('companyName', 'companyEmail'));
    }


    public function store(StoreCompanyRequest $request)
    {
        $data = $request->only([
            'name',
            'email',
        ]);

        Company::find(1)->update($data);

        if ($request->hasFile('logo')) {
            logger('entro');
            $logo = $request->file('logo');
            $logo->move(public_path('/'), 'logo.png');
        }

        return response()->json([
            'message' => 'Datos de la empresa actualizados correctamente',
            'action' => 'success',
        ]);
    }

    public function updatePassword(UpdateCompanyRequest $request)
    {
        $user = User::find(1);
        if (!Hash::check($request->currentPassword, $user->password)) {
            $user->password = Hash::make($request->newPassword);
            $user->save();
            return response()->json([
                'message' => 'La contraseña actual no coincide',
                'action' => 'error',
            ]);
        }

        return response()->json([
            'message' => 'Contraseña actualizada correctamente',
            'action' => 'success',
        ]);
    }
}
