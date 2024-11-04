<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Option extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'option',
        'second',
        'question_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $casts = [
        'second' => 'boolean',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'deleted_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public static function updateOrCreateOrDelete(array $options, int $questionId)
    {
        $optionsId = [];
        foreach ($options as $option) {
            if (isset($option['id'])) {
                $optionModel = Option::find($option['id']);
                if ($optionModel) {
                    $optionModel->update([
                        'option' => $option['option'],
                        'second' => $option['second'],
                    ]);
                    $optionsId[] = $optionModel->id;
                } else {
                    $optionModel = Option::create([
                        'option' => $option['option'],
                        'second' => $option['second'],
                        'question_id' => $questionId,
                    ]);
                    $optionsId[] = $optionModel->id;
                }
            } else {
                $optionModel = Option::create([
                    'option' => $option['option'],
                    'second' => $option['second'],
                    'question_id' => $questionId,
                ]);
                $optionsId[] = $optionModel->id;
            }
        }
        Option::where('question_id', $questionId)->whereNotIn('id', $optionsId)->delete();
    }
}
