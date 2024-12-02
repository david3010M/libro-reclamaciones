<?php

namespace App\Models;

use App\Http\Resources\ReportComplaintSedeResource;
use App\Utils\Constants;
use Carbon\Carbon;
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

    public static function getComplaintsBySede($from = null, $to = null)
    {
        $query = Complaint::with([
            'answers',
            'customer',
            'advances',
        ]);

        if ($from && $to) {
            $query->whereBetween('created_at', [$from, $to]);
        } elseif ($from) {
            $query->where('created_at', '>=', $from);
        } elseif ($to) {
            $query->where('created_at', '<=', $to);
        }

        $complaints = $query->orderBy('created_at', 'desc')->get();
        $complaints = ReportComplaintSedeResource::collection($complaints);

        return $complaints->groupBy(function ($complaint) {
            return $complaint->sede->name;
        });
    }


}
