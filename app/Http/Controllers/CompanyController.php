<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Models\Question;

class CompanyController extends Controller
{
    public function index()
    {
        $companyName = Company::first()->name;
        return view('layouts.configuration', compact('companyName'));
    }


    public function store(StoreCompanyRequest $request)
    {
        $data = $request->only([
            'name',
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
        $company = Company::first();
        $company->update($request->only(['password']));

        return response()->json([
            'message' => 'Contraseña actualizada correctamente',
            'action' => 'success',
        ]);
    }
}
