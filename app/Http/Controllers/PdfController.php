<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Complaint;
use Barryvdh\DomPDF\Facade\Pdf;

class PdfController extends Controller
{

    public function getResponseFromComplaint($token)
    {
        $complaint = Complaint::where('token', $token)->first();
        if (!$complaint || $complaint->answer === 'Pendiente') {
            return redirect()->route('complaint.search');
        }
        $pdf = Pdf::loadView('pdf.response', [
            'complaint' => $complaint,
        ]);
        return $pdf->stream('respuesta-reclamo' . $complaint->complaintCode . '.pdf');
    }

    public function getComplaint($token)
    {
        $complaint = Complaint::where('token', $token)->first();
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
}
