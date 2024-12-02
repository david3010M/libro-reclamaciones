<?php

namespace App\Models;

use App\Utils\Utils;
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

    public static function boot()
    {
        parent::boot();
        static::saved(function ($model) {
            if ($model->question_id === 1) {
                $answers = explode('|', $model->option);
                $name = trim($answers[0] ?? $model->option);
                $address = trim($answers[1] ?? "");
                $sede = Sede::where('option_id', $model->id)
                    ->orWhere('fullName', $model->option)
                    ->first();
                if (!$sede) {
                    $utils = new Utils();
                    $company = Company::find(1);
                    $isSecond = $model->second == true;

                    $number = $isSecond ? $utils->nextCorrelativeQuery(Sede::where('digital', true), 'number', 2)
                        : $utils->nextCorrelativeQuery(Sede::where('digital', false), 'number', 3);

                    $correlative = $utils->getTwoInitialsFromNameToUpperCase($company->name) .
                        ($isSecond ? "D" : "") . $number;

                    Sede::create([
                        'number' => $number,
                        'correlative' => $correlative,
                        'fullName' => $model->option,
                        'name' => $name,
                        'address' => $address,
                        'digital' => $model->second == true,
                        'option_id' => $model->id,
                    ]);
                } else {
                    $sede->update([
                        'fullName' => $model->option,
                        'name' => $name,
                        'address' => $address,
                    ]);
                }
            }
        });
    }

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

    public function sede()
    {
        return $this->hasOne(Sede::class);
    }
}
