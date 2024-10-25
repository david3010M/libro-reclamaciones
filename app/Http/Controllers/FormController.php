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
        $dataConsumer = [
            'name' => $request->input('customer.nombre'),
            'email' => $request->input('customer.email'),
            'phone' => $request->input('customer.telefono'),
            'document' => $request->input('customer.document'),
            'address' => $request->input('customer.direccion'),
        ];
        $customer = Customer::create($dataConsumer);
        foreach ($request->input('answers') as $questionId => $answer) {
            logger("questionId: " . $questionId);
            logger(is_array($answer) ? implode(', ', $answer) : $answer);
            if ($request->hasFile('answers.' . $questionId)) {
                $file = $request->file('answers.' . $questionId);
                $fileName = $file->getClientOriginalName();
                $file->storeAs('public', $fileName);
                $answer = $fileName;
                logger("file: " . $fileName);
            }

            $formattedAnswer = is_array($answer) ? implode(', ', $answer) : $answer;

            Answer::create([
                'customer_id' => $customer->id,
                'question_id' => $questionId,
                'answer' => $formattedAnswer,
            ]);
        }
        return response()->json(['message' => 'Reclamo enviado correctamente']);
    }


}
