<?php

namespace App\Http\Controllers;


use App\Http\Requests\ComplaintBySedeRequest;
use App\Models\Sede;
use App\Utils\UtilFunctions;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ExcelReportController extends Controller
{
    public function reportComplaintBySedes(ComplaintBySedeRequest $request)
    {
        $sedes = Sede::getComplaintsBySede($request->sedes, $request->from, $request->to);
        $period = ($request->from && $request->to) ? 'Del ' . $request->from . ' al ' . $request->to :
            ($request->from ? 'Desde ' . $request->from : ($request->to ? 'Hasta ' . $request->to : '-'));
//
//        $countAttentionPerMonth = $months->map(function ($month) {
//            return $month->count();
//        });
//
//        return response()->json($sedes);
        if ($sedes->isEmpty()) {
            return response()->json([
                "message" => "No hay atenciones registradas en el rango de fechas proporcionado.",
            ], 404);
        }
        $bytes = UtilFunctions::generateReportAttendanceVehicle($sedes, $period);
        $nameOfFile = date('d-m-Y') . '_Reporte_Reclamos_' . '.xlsx';

        return response($bytes, 200, [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition' => 'attachment; filename="' . $nameOfFile . '"',
            'Content-Length' => strlen($bytes),
        ]);
    }
}
