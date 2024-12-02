<?php

namespace App\Models;

use App\Utils\Utils;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Form extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'company_id',
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

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function customers()
    {
        return $this->hasManyThrough(Customer::class, Answer::class);
    }

    public static function getAllNewCorrelativesBySede()
    {
//        CLAVE - VALOR : {"SEDE 1": ["AB1", 1], "SEDE 2": ["AB2", 2]}
        $correlatives = [];
        $sedes = Sede::all();
        $utils = new Utils();
        foreach ($sedes as $sede) {
            $correlatives[$sede->fullName] =
                [$sede->correlative . '-' . $utils->nextCorrelativeQuery(Complaint::where('sede_id', $sede->id), 'number'), $sede->id];
        }
        return $correlatives;
    }


}
