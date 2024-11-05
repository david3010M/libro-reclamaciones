<?php

namespace App\Http\Controllers;

use App\Models\Advance;
use App\Models\Complaint;
use App\Http\Requests\StoreComplaintRequest;
use App\Http\Requests\UpdateComplaintRequest;
use Illuminate\Http\Request;

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
            Advance::create([
                'status' => Advance::RESPONDED_STATUS,
                'date' => now(),
                'complaint_id' => $complaint->id,
            ]);
            $complaint->answer = $request->input('answer');
            $complaint->save();
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Complaint $complaint)
    {
        //
    }
}
