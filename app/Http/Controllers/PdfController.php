<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Complaint;
use Barryvdh\DomPDF\Facade\Pdf;

class PdfController extends Controller
{

    public function getResponseFromComplaint($id)
    {
        $complaint = Complaint::find($id);
        if (!$complaint || $complaint->answer === 'Pendiente') {
            return redirect()->route('complaint.search');
        }
        $pdf = Pdf::loadView('pdf.response', [
            'complaint' => $complaint,
        ]);
        return $pdf->stream('respuesta-reclamo' . $complaint->complaintCode . '.pdf');
    }

    public function getComplaint($id)
    {
        $complaint = Complaint::find($id);
        if (!$complaint) {
            return redirect()->route('complaint.search');
        }
        $pdf = Pdf::loadView('pdf.complaint', [
            'complaint' => $complaint,
        ]);
        return $pdf->stream('hoja-reclamo' . $complaint->complaintCode . '.pdf');
        // return view ('pdf.complaint', [
        //     'complaint' => $complaint,
        // ]);
    }
    public function getComplaintComplete($id)
    {
        $complaint = Complaint::find($id);
        if (!$complaint) {
            return redirect()->route('complaint.search');
        }

        // Render both views as HTML
        $complaintHtml = view('pdf.complaint', ['complaint' => $complaint])->render();
        $responseHtml = '';
        if ($complaint->answer !== 'Pendiente') {
            $responseHtml = view('pdf.response', ['complaint' => $complaint])->render();
        }

        // Combine both HTMLs, add a page break between them
        $combinedHtml = $complaintHtml;
        if ($responseHtml) {
            $combinedHtml .= '<div style="page-break-after: always;"></div>' . $responseHtml;
        }

        $pdf = Pdf::loadHTML($combinedHtml);
        return $pdf->stream('hoja-reclamo-completa' . $complaint->complaintCode . '.pdf');
    }
}
