<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Option;
use App\Models\Question;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Models\Sede;
use App\Models\TypeQuestion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search', '');
        $questions = Question::with(['options', 'typeQuestion'])
            ->where('question', 'like', "%$search%")
            ->orWhere('description', 'like', "%$search%")
            ->orderBy('created_at', 'desc')->paginate(10)
            ->withQueryString();

        return Inertia::render('Questions/Index', [
            'questions' => $questions,
            'search' => $search,
            'typeQuestions' => TypeQuestion::orderBy('id')->get(),
        ]);
    }

    public function store(StoreQuestionRequest $request)
    {
        $data = $request->only([
            'title',
            'question',
            'description',
            'required',
            'stepper',
            'text_switch',
            // 'with_other',
            'max_options',
            'type_question_id',
        ]);

        $question = Question::create($data);

        $options = $request->input('options');

        // JUST OPTION AND SECOND ATRIBUTES
        if ($options) {
            foreach ($options as $option) {
                Option::create([
                    'option' => $option['option'],
                    'second' => $option['second'] ?? false,
                    'question_id' => $question->id,
                ]);
            }
        }

        return back()->with('success', 'Pregunta creada correctamente');
    }

    public function show(int $id)
    {
        $question = Question::with(['options', 'typeQuestion'])->find($id);
        if (!$question) return redirect()->route('question.index');
        return response()->json($question);
    }

    public function update(UpdateQuestionRequest $request, int $id)
    {
        $question = Question::find($id);
        if (!$question) {
            return back()->with('error', 'Pregunta no encontrada');
        }

        // if ($question->answers()->count() > 0) {
        //     return back()->with('error', 'No se puede modificar la pregunta porque tiene respuestas asociadas');
        // }

        $data = $request->only([
            'title',
            'question',
            'description',
            'required',
            'stepper',
            'text_switch',
            // 'with_other',
            'max_options',
            'type_question_id',
        ]);

        $question->update($data);

        // Manejo de opciones, si es necesario
        $options = $request->input('options');
        if ($options) Option::updateOrCreateOrDelete($options, $question->id);

        return back()->with('success', 'Pregunta actualizada correctamente');
    }

    public function destroy(int $id)
    {
        $question = Question::find($id);
        if (!$question) {
            return back()->with('error', 'Pregunta no encontrada');
        }
        if ($question->answers()->count() > 0) {
            return back()->with('error', 'No se puede eliminar la pregunta porque tiene respuestas asociadas');
        }

        $question->delete();

        return back()->with('success', 'Pregunta eliminada correctamente');
    }
}
