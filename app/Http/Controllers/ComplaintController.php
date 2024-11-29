<?php

namespace App\Http\Controllers;

use App\Mail\ConfirmComplaint;
use App\Mail\NewComplaint;
use App\Mail\ProcessComplaint;
use App\Mail\ResponseComplaint;
use App\Models\Advance;
use App\Models\Company;
use App\Models\Complaint;
use App\Http\Requests\StoreComplaintRequest;
use App\Http\Requests\UpdateComplaintRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ComplaintController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->query('search', '');
        $complaints = Complaint::with(['answers.question', 'customer', 'advances'])
            ->where('complaintCode', 'like', "%$search%")
            ->orWhereHas('customer', function ($query) use ($search) {
                $query->where('name', 'like', "%$search%");
            })
            ->orderBy('created_at', 'desc')->paginate(6);
        return view('complaints.index', compact('complaints', 'search'));
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreComplaintRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $complaintCode)
    {
        $complaint = Complaint::with(['answers.question', 'customer', 'advances'])
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
                Mail::to($complaint->customer->email)->send(new ConfirmComplaint(
                    $complaint, $company
                ));

                $emails = $company ? explode(',', $company->email) : [];
                foreach ($emails as $email) {
                    Mail::to($email)->send(new NewComplaint(
                        $complaint, $company
                    ));
                }
            }
            return redirect()->route('complaint.show', $complaint->complaintCode);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Complaint $complaint)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateComplaintRequest $request, Complaint $complaint)
    {
        //
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
            $complaint->save();
            $company = Company::first();
            Mail::to($complaint->customer->email)->send(new ResponseComplaint(
                $complaint, $company
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
                $complaint, $company
            ));
        }

        return back()->with(
            [
                'message' => 'Reclamo en proceso.',
                'action' => 'success'
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Complaint $complaint)
    {
        //
    }
}
