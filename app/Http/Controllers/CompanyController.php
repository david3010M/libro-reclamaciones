<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Models\Question;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class CompanyController extends Controller
{
    public function index()
    {
        $company = Company::first();

        return Inertia::render('Config/Index', [
            'companyName' => $company->name,
            'companyEmail' => $company->email,
        ]);
    }


    public function store(StoreCompanyRequest $request)
    {
        $data = $request->only([
            'name',
            'email',
        ]);

        Company::find(1)->update($data);

        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logo->move(public_path('/'), 'logo.png');
        }

        return back()->with('success', 'Datos de la empresa actualizados correctamente');
    }

    public function updatePassword(UpdateCompanyRequest $request)
    {
        $user = User::find(1);
        if (!Hash::check($request->currentPassword, $user->password)) {
            return back()->with('error', 'La contraseña actual no coincide');
        }

        $user->password = Hash::make($request->newPassword);
        $user->save();

        return back()->with('success', 'Contraseña actualizada correctamente');
    }
}
