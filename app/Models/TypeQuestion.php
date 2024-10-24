<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TypeQuestion extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['type'];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
