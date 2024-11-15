<?php

namespace App\Models;

use App\Models\Scopes\UpdateStatusScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Complaint extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'complaintCode',
        'answer',
        'hash',
        'verified',
        'rejected',
        'customer_id',
        'created_at',
    ];

    protected $hidden = [
        'updated_at',
        'deleted_at',
    ];

    protected $casts = [
        'verified' => 'boolean',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'deleted_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected static function booted()
    {
        static::addGlobalScope(new UpdateStatusScope);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function advances()
    {
        return $this->hasMany(Advance::class)->orderBy('date', 'desc');
    }
}
