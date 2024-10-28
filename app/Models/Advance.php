<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Advance extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'status',
        'date',
        'complaint_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $casts = [
        'date' => 'datetime:Y-m-d H:i:s',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'deleted_at' => 'datetime:Y-m-d H:i:s',
    ];

    const REGISTER_STATUS = 'REGISTRADO';
    const ARCHIVED_STATUS = 'ARCHIVADO';
    const REJECTED_STATUS = 'RECHAZADO';

    public function complaint()
    {
        return $this->belongsTo(Complaint::class);
    }
}
