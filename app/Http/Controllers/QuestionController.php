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
    public function index()
    {
        return Inertia::render('Questions/Index');
    }

    /** Listado paginado en JSON: la página y los filtros viajan por axios, no por la URL. */
    public function list(Request $request)
    {
        $data = $request->validate([
            'search' => ['nullable', 'string', 'max:100'],
            'per_page' => ['nullable', 'integer', 'min:5', 'max:50'],
        ]);
        $search = trim($data['search'] ?? '');

        $questions = Question::with(['options', 'typeQuestion'])
            ->when($search !== '', fn ($q) => $q->where(function ($q) use ($search) {
                $q->where('question', 'like', "%$search%")->orWhere('description', 'like', "%$search%");
            }))
            ->orderByDesc('created_at')
            ->paginate($data['per_page'] ?? 8);

        return response()->json([
            'data' => $questions->items(),
            'meta' => [
                'current_page' => $questions->currentPage(),
                'last_page' => $questions->lastPage(),
                'per_page' => $questions->perPage(),
                'total' => $questions->total(),
                'from' => $questions->firstItem(),
                'to' => $questions->lastItem(),
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Questions/Create', [
            'typeQuestions' => TypeQuestion::orderBy('id')->get(),
        ]);
    }

    public function edit(int $id)
    {
        $question = Question::with('options')->find($id);
        abort_if(!$question, 404);

        return Inertia::render('Questions/Edit', [
            'question' => $question,
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

        return redirect()->route('question.index')->with('success', 'Pregunta creada correctamente');
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
            return redirect()->route('question.index')->with('error', 'Pregunta no encontrada');
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

        return redirect()->route('question.index')->with('success', 'Pregunta actualizada correctamente');
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
