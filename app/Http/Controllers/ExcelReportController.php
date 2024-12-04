<?php

namespace App\Http\Controllers;


use App\Http\Requests\ComplaintBySedeRequest;
use App\Models\Complaint;
use App\Models\Sede;
use App\Utils\UtilFunctions;
use Barryvdh\DomPDF\Facade\Pdf;
use ZipArchive;

class ExcelReportController extends Controller
{
    public function reportComplaintBySedes(ComplaintBySedeRequest $request)
    {
        $sedes = Sede::getComplaintsBySede($request->sedes, $request->from, $request->to);
        $period = ($request->from && $request->to) ? 'Del ' . $request->from . ' al ' . $request->to : ($request->from ? 'Desde ' . $request->from : ($request->to ? 'Hasta ' . $request->to : '-'));
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

        $headers = [
            "SEDE", "CLIENTE"
        ];

        $bytes = UtilFunctions::generateReportAttendanceVehicle($sedes, $headers, $period);
        $nameOfFile = date('d-m-Y') . '_Reporte_Reclamos_' . '.xlsx';

        return response($bytes, 200, [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition' => 'attachment; filename="' . $nameOfFile . '"',
            'Content-Length' => strlen($bytes),
        ]);
    }


    public function generateAndDownloadZip(ComplaintBySedeRequest $request)
    {
        $from = $request->from;
        $to = $request->to;
        $sedes = $request->sedes;
        $zipFileName = 'reporte.zip';
        $zipPath = storage_path('app/' . $zipFileName);

        $zip = new ZipArchive();

        $complaints = Complaint::whereBetween('created_at', [$from, $to])
            ->whereIn('sede_id', $sedes)
            ->get();

        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) === true) {
            foreach ($complaints as $index => $complaint) {
                $pdf = Pdf::loadView('pdf.complaint', [
                    'complaint' => $complaint,
                ]);
                $pdfPath = storage_path("app/pdf_{$index}.pdf");
                $pdf->save($pdfPath); 
                $zip->addFile($pdfPath, "pdf_{$index}.pdf");
            }
            $zip->close();
        } else {
            return response()->json(['error' => 'No se pudo crear el archivo ZIP'], 500);
        }

        foreach (glob(storage_path('app/pdf_*.pdf')) as $tempFile) {
            unlink($tempFile);
        }
        return response()->download($zipPath)->deleteFileAfterSend(true);
    }
}
