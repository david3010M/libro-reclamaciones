<?php

namespace App\Http\Controllers;


use App\Http\Requests\ComplaintBySedeRequest;
use App\Models\Complaint;
use App\Models\Question;
use App\Models\Sede;
use App\Utils\UtilFunctions;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use ZipArchive;

class ExcelReportController extends Controller
{
    public function reportComplaintBySedes(ComplaintBySedeRequest $request)
    {
        $sedes = Sede::getComplaintsBySede($request->sedes, $request->from, $request->to);
        $period = ($request->from && $request->to) ? 'Del ' . $request->from . ' al ' . $request->to : ($request->from ? 'Desde ' . $request->from : ($request->to ? 'Hasta ' . $request->to : '-'));

        $headers = Question::orderBy('id')
            ->pluck('title')->toArray();

        // return response()->json([$headers, $sedes]);


        if ($sedes->isEmpty()) {
            return response()->json([
                "message" => "No hay atenciones registradas en el rango de fechas proporcionado.",
            ], 404);
        }

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

        $query = Complaint::whereBetween('created_at', [
            Carbon::parse($from)->startOfDay(),
            Carbon::parse($to)->endOfDay(),
        ]);

        if ($sedes) {
            $query->whereIn('sede_id', $sedes);
        }

        $complaints = $query->get();

        if ($complaints->isEmpty()) {
            return response()->json([
                "message" => "No hay atenciones registradas en el rango de fechas proporcionado.",
            ], 404);
        }

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
            return response()->json(['message' => 'No se pudo crear el archivo ZIP'], 500);
        }

        foreach (glob(storage_path('app/pdf_*.pdf')) as $tempFile) {
            unlink($tempFile);
        }
        return response()->download($zipPath)->deleteFileAfterSend(true);
    }
}
