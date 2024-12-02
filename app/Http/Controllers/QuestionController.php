<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Option;
use App\Models\Question;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Models\Sede;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search', '');
        $questions = Question::with(['options', 'typeQuestion'])
            ->where('question', 'like', "%$search%")
            ->orWhere('description', 'like', "%$search%")
            ->orderBy('created_at', 'desc')->paginate(10);
        return view('question.index', compact('questions', 'search'));
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

        return response()->json([
            'message' => 'Pregunta creada correctamente',
            'action' => 'success',
        ]);
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
            return response()->json([
                'message' => 'Pregunta no encontrada',
                'action' => 'error',
            ]);
        }

        // if ($question->answers()->count() > 0) {
        //     return response()->json([
        //         'message' => 'No se puede modificar la pregunta porque tiene respuestas asociadas',
        //         'action' => 'warning',
        //     ]);
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

        return response()->json([
            'message' => 'Pregunta actualizada correctamente',
            'action' => 'success',
        ]);
    }

    public function destroy(int $id)
    {
        $question = Question::find($id);
        if (!$question) {
            return response()->json([
                'message' => 'Pregunta no encontrada',
                'action' => 'error',
            ]);
        }
        if ($question->answers()->count() > 0) {
            return response()->json([
                'message' => 'No se puede eliminar la pregunta porque tiene respuestas asociadas',
                'action' => 'warning',
            ]);
        }

        $question->delete();

        return response()->json([
            'message' => 'Pregunta eliminada correctamente',
            'action' => 'success',
        ]);
    }
}
