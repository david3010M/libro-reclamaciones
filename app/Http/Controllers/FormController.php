<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Customer;
use App\Models\Form;
use App\Http\Requests\StoreFormRequest;
use App\Http\Requests\UpdateFormRequest;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function showForm()
    {
        $form = Form::with(['questions.options', 'questions.typeQuestion'])
            ->where('id', 1)
            ->firstOrFail();

        return view('form', compact('form'));
    }

    public function getFormQuestions($formId)
    {
        $form = Form::with(['questions.options', 'questions.typeQuestion'])
            ->where('id', $formId)
            ->firstOrFail();

        return response()->json($form);
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
            'customer.nombre' => 'required|string|max:255',
            'customer.email' => 'required|email|max:255',
            'customer.telefono' => 'required|string|max:20',
            'customer.documento' => 'required|string|max:20',
            'customer.direccion' => 'required|string|max:255',
            'answers' => 'required|array',
            'answers.*' => 'required|string',
        ]);
        $customer = Customer::create($validated['customer']);

        foreach ($validated['answers'] as $questionId => $answer) {
            Answer::create([
                'customer_id' => $customer->id,
                'question_id' => $questionId,
                'answer' => is_array($answer) ? implode(', ', $answer) : $answer,
            ]);
        }

        return response()->json(['message' => 'Reclamo enviado correctamente']);
    }


}
