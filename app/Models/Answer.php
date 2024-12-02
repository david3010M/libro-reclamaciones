<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Answer extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'answer',
        'question_id',
        'complaint_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'deleted_at' => 'datetime:Y-m-d H:i:s',
    ];

    public static function boot()
    {
        parent::boot();
        static::saved(function ($model) {
            if ($model->question_id === 1) {
                $answers = explode(',', $model->answer);
                $name = $answers[0];
                $address = $answers[1];
                $sede = Sede::where('name', $name);
                if (!$sede) {
                    $sede = Sede::create([
                        'name' => $name,
                        'address' => $address,
                        'answer_id' => $model->id,
                    ]);
                }
            }
        });
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function complaint()
    {
        return $this->belongsTo(Complaint::class);
    }

    public function sede()
    {
        return $this->hasOne(Sede::class);
    }
}
