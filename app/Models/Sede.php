<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sede extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'name',
        'address',
        'answer_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function answer()
    {
        return $this->belongsTo(Answer::class);
    }


}
