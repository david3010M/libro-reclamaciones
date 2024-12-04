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

    public static function getComplaintsBySede($sedes, $from = null, $to = null)
    {
        $query = Complaint::with([
            'answers',
            'customer',
            'advances',
        ]);
    
        // Ajuste para manejar fechas completas
        if ($from && $to) {
            $query->whereBetween('created_at', [
                Carbon::parse($from)->startOfDay(),
                Carbon::parse($to)->endOfDay(),
            ]);
        } elseif ($from) {
            $query->where('created_at', '>=', Carbon::parse($from)->startOfDay());
        } elseif ($to) {
            $query->where('created_at', '<=', Carbon::parse($to)->endOfDay());
        }
    
        if ($sedes) {
            $query->whereIn('sede_id', $sedes);
        }
    
        $complaints = $query->orderBy('created_at', 'desc')->get();
        $complaints = ReportComplaintSedeResource::collection($complaints);
    
        return $complaints->groupBy(function ($complaint) {
            return $complaint->sede->name;
        });
    }
    


}
