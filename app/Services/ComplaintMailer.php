<?php

namespace App\Services;

use App\Models\Complaint;
use App\Models\ComplaintMail;
use Illuminate\Contracts\Mail\Mailable;
use Illuminate\Support\Facades\Mail;

/** Envía correos de un reclamo y deja constancia (enviado o fallido) en la bitácora. */
class ComplaintMailer
{
    /** @return bool true si salió; false si falló (queda registrado, no lanza excepción). */
    public static function send(Complaint $complaint, string $to, Mailable $mailable, string $type, int $attachments = 0): bool
    {
        $subject = method_exists($mailable, 'envelope') ? ($mailable->envelope()->subject ?? null) : null;

        try {
            Mail::to($to)->send($mailable);
            $error = null;
        } catch (\Throwable $e) {
            report($e);
            $error = mb_substr($e->getMessage(), 0, 500);
        }

        try {
            ComplaintMail::create([
                'complaint_id' => $complaint->id,
                'type' => $type,
                'recipient' => $to,
                'subject' => $subject,
                'status' => $error === null ? ComplaintMail::SENT : ComplaintMail::FAILED,
                'attachments' => $attachments,
                'error' => $error,
            ]);
        } catch (\Throwable $e) {
            report($e); // la bitácora nunca debe tumbar la operación
        }

        return $error === null;
    }
}
