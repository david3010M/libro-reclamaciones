<?php

namespace App\Http\Controllers;

use App\Mail\ConfirmComplaint;
use App\Mail\NewComplaint;
use App\Mail\ProcessComplaint;
use App\Mail\ResponseComplaint;
use App\Models\Advance;
use App\Models\Attachment;
use App\Models\Company;
use App\Models\Complaint;
use App\Http\Requests\StoreComplaintRequest;
use App\Http\Requests\UpdateComplaintRequest;
use App\Models\Sede;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ComplaintController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search', '');
        $complaints = Complaint::with(['answers.question', 'customer', 'advances'])
            ->where('complaintCode', 'like', "%$search%")
            ->orWhereHas('customer', function ($query) use ($search) {
                $query->where('name', 'like', "%$search%");
            })
            ->orderBy('created_at', 'desc')->paginate(6);

        $sedes = Sede::all();
        logger($sedes);
        return view('complaints.index', compact('complaints', 'search', 'sedes'));
    }

    public function search()
    {
        $formData = [
            'complaintCode' => '',
        ];
        return view('complaints', compact('formData'));
    }

    public function findComplaint(string $complaintCode)
    {
        $complaint = Complaint::with(['answers.question', 'customer', 'advances'])
            ->where('complaintCode', $complaintCode)->first();
        if (!$complaint) return response()->json(['error' => 'Reclamo no encontrado'], 404);
        return response()->json($complaint);
    }

    public function show(string $complaintCode)
    {
        $complaint = Complaint::with(['answers.question', 'customer', 'advances', 'attachments'])
            ->where('complaintCode', $complaintCode)->first();
        if (!$complaint) {
            return redirect()->route('complaint.search')->with([
                'message' => 'No se encontró el reclamo con el código ingresado.',
                'error_code' => 404,
                'complaintCode' => $complaintCode,
            ]);
        }
        return view('answers.show', compact('complaint'));
    }

    public function confirm(string $complaintHash)
    {
        $complaint = Complaint::with(['answers.question', 'customer', 'advances'])
            ->where('hash', $complaintHash)
            ->first();

        if ($complaint->advances()->where('status', Advance::REJECTED_STATUS)->exists()) {
            return redirect()->route('complaint.search')->with([
                'message' => 'El reclamo ha sido rechazado.',
                'error_code' => 404,
                'complaintCode' => $complaint->complaintCode,
            ]);
        }

        if (!$complaint) {
            return redirect()->route('complaint.search')->with([
                'message' => 'No se encontró el reclamo con el código ingresado.',
                'error_code' => 404,
                'complaintCode' => "",
            ]);
        } else {
            if (!$complaint->verified) {
                Advance::create([
                    'status' => Advance::REGISTER_STATUS,
                    'date' => now(),
                    'complaint_id' => $complaint->id,
                ]);
                $complaint->verified = true;
                $complaint->save();
                $company = Company::first();
                // Mail::to($complaint->customer->email)->send(new ConfirmComplaint(
                //     $complaint,
                //     $company
                // ));

                $emails = $company ? explode(',', $company->email) : [];
                // foreach ($emails as $email) {
                //     Mail::to($email)->send(new NewComplaint(
                //         $complaint,
                //         $company
                //     ));
                // }
            }
            Complaint::verifyStatusById($complaint->id);
            return redirect()->route('complaint.show', $complaint->complaintCode);
        }
    }

    public function response(Request $request, int $complaint)
    {
        $complaint = Complaint::find($complaint);
        if (!$complaint) {
            return redirect()->route('complaint.index')->with([
                'message' => 'No se encontró el reclamo con el código ingresado.',
                'error_code' => 404,
                'complaintCode' => $complaint,
            ]);
        } else {
            $date = now();
            Advance::create([
                'status' => Advance::ATTENDED_STATUS,
                'date' => $date,
                'complaint_id' => $complaint->id,
            ]);
            Advance::create([
                'status' => Advance::ARCHIVED_STATUS,
                'date' => $date->addSeconds(2),
                'complaint_id' => $complaint->id,
            ]);
            $complaint->answer = $request->input('answer');
            //            SI HAY ARCHIVOS ADJUNTOS
            $attachments = $request->file('attachments');
            if ($attachments) {
                $attachmentsPath = [];
                foreach ($attachments as $attachment) {
                    $fileName = time() . '_' . $attachment->getClientOriginalName();
                    $path = $attachment->storeAs('public', $fileName);
                    $attachmentsPath[] = $path;
                }

                logger($attachmentsPath);
                foreach ($attachmentsPath as $path) {
                    Attachment::create([
                        'route' => $path,
                        'complaint_id' => $complaint->id,
                    ]);
                }
            }
            $complaint->save();
            $company = Company::first();
            Mail::to($complaint->customer->email)->send(new ResponseComplaint(
                $complaint,
                $company,
                $attachmentsPath ?? []
            ));
        }

        return back()->with(
            [
                'message' => 'Respuesta enviada correctamente.',
                'action' => 'success'
            ]
        );
    }

    public function archive(int $complaint)
    {
        $complaint = Complaint::find($complaint);
        if (!$complaint) {
            return redirect()->route('complaint.index')->with([
                'message' => 'No se encontró el reclamo con el código ingresado.',
                'error_code' => 404,
                'complaintCode' => $complaint,
            ]);
        } else {
            Advance::create([
                'status' => Advance::ARCHIVED_STATUS,
                'date' => now(),
                'complaint_id' => $complaint->id,
            ]);
        }

        return back()->with(
            [
                'message' => 'Reclamo archivado correctamente.',
                'action' => 'success'
            ]
        );
    }

    public function process(int $complaint)
    {
        $complaint = Complaint::find($complaint);
        if (!$complaint) {
            return redirect()->route('complaint.index')->with([
                'message' => 'No se encontró el reclamo con el código ingresado.',
                'error_code' => 404,
                'complaintCode' => $complaint,
            ]);
        } else {
            Advance::create([
                'status' => Advance::IN_PROCESS_STATUS,
                'date' => now(),
                'complaint_id' => $complaint->id,
            ]);
            $company = Company::first();
            Mail::to($complaint->customer->email)->send(new ProcessComplaint(
                $complaint,
                $company
            ));
        }

        return back()->with(
            [
                'message' => 'Reclamo en proceso.',
                'action' => 'success'
            ]
        );
    }
}
