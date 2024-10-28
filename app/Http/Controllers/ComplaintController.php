<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use App\Http\Requests\StoreComplaintRequest;
use App\Http\Requests\UpdateComplaintRequest;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
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
            return redirect()->route('complaint.index')->with([
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Complaint $complaint)
    {
        //
    }
}
