<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Http\Requests\StoreFormRequest;
use App\Http\Requests\UpdateFormRequest;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function showForm(Request $request)
    {
        $step = $request->session()->get('step', 1);
        $formData = $request->session()->get('formData', [
            'nombre' => '',
            'email' => '',
            'telefono' => '',
            'tipoReclamo' => '',
            'descripcion' => ''
        ]);
        return view('form', compact('step', 'formData'));
    }

    public function nextStep(Request $request)
    {
        $step = $request->session()->increment('step', 1);
        return redirect()->route('form.show');
    }

    public function prevStep(Request $request)
    {
        $step = $request->session()->decrement('step', 1);
        return redirect()->route('form.show');
    }

    public function submitForm(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|email',
            'telefono' => 'required|string|max:15',
            'tipoReclamo' => 'required|string|max:255',
            'descripcion' => 'required|string|max:1000',
        ]);

        // Procesa el formulario aquí, por ejemplo, guarda en la base de datos

        return response()->json(['message' => 'Formulario enviado exitosamente'], 200);
    }

}
