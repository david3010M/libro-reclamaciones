<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    use HasFactory;

    protected $fillable = ['route', 'complaint_id'];

    public function complaint()
    {
        return $this->belongsTo(Complaint::class);
    }

    public function getRouteAttribute($value)
    {
        return asset($value);
    }
}
