<?php

namespace App\Http\Resources;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReportComplaintSedeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $questions = Question::orderBy('id')->get();

        return [
            'id' => $this->id,
            'complaintCode' => $this->complaintCode,
            'customer' => optional($this->customer)->name,
            'customerDocument' => optional($this->customer)->document,
            'customerEmail' => optional($this->customer)->email,
            'customerPhone' => optional($this->customer)->phone,
            'customerAddress' => optional($this->customer)->address,
            'status' => $this->advances->isNotEmpty() ? $this->advances[0]->status : 'Sin estado',
            'link' => route('complaint.show', $this->complaintCode),
            'answers' => $questions->map(function ($question) {
                $answer = $this->answers->firstWhere('question_id', $question->id);
                return $answer ? ($answer->question->type_question_id == 5 ? (url('storage/' . $answer->answer))
                    : $answer->answer) : "";
            }),
        ];
    }
}
