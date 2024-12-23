<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'question',
        'title',
        'description',
        'required',
        'stepper',
        'text_switch',
        'with_other',
        'max_options',
        'master',
        'type_question_id',
        'form_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $casts = [
        'required' => 'boolean',
        'switch' => 'boolean',
        'with_other' => 'boolean',
        'master' => 'boolean',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'deleted_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }

    public function typeQuestion()
    {
        return $this->belongsTo(TypeQuestion::class);
    }

    public function options()
    {
        return $this->hasMany(Option::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
