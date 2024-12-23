<?php

namespace App\Models;

use App\Models\Scopes\UpdateStatusScope;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Complaint extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'number',
        'days',
        'timeToAnswer',
        'complaintCode',
        'answer',
        'status',
        'hash',
        'verified',
        'rejected',
        'customer_id',
        'sede_id',
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

    const MAX_DAYS = 30;

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

    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }

    public function sede()
    {
        return $this->belongsTo(Sede::class);
    }

    public static function verifyStatus()
    {
        $complaints = Complaint::whereHas('advances', function ($query) {
            $query->where('status', Advance::REGISTER_STATUS);
        })->get();

        foreach ($complaints as $complaint) {
            $advance = Advance::where('complaint_id', $complaint->id)
                ->where('status', Advance::REGISTER_STATUS)
                ->first();
            $advanceDate = Carbon::parse($advance->date);
            $now = Carbon::now();

            $diff = $complaint->days - $advanceDate->diffInDays($now, false);

            $complaint->update([
                'timeToAnswer' => $diff,
            ]);
        }
    }

    public static function verifyStatusById($id)
    {
        $complaint = Complaint::find($id);

        $advance = Advance::where('complaint_id', $complaint->id)
            ->where('status', Advance::REGISTER_STATUS)
            ->first();
        $advanceDate = Carbon::parse($advance->date);
        $now = Carbon::now();

        $diff = $complaint->days - $advanceDate->diffInDays($now, false);

        $complaint->update([
            'timeToAnswer' => $diff,
        ]);
    }
}
