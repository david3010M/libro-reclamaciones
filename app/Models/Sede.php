<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sede extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'correlative',
        'fullName',
        'name',
        'address',
        'digital',
        'option_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function option()
    {
        return $this->belongsTo(Option::class);
    }


}
