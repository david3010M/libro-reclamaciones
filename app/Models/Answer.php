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
}
