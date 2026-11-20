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
use App\Mail\ExtendComplaint;
use App\Models\Sede;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ComplaintController extends Controller
{
    private const STATUSES = [
        Advance::REGISTER_TO_VERIFY_STATUS,
        Advance::REGISTER_STATUS,
        Advance::REJECTED_STATUS,
        Advance::IN_PROCESS_STATUS,
        Advance::ARCHIVED_STATUS,
    ];

    /** Página del panel: solo la estructura; los datos se piden por JSON a `list`. */
    public function index()
    {
        return Inertia::render('Complaints/Index', [
            'sedes' => Sede::orderBy('name')->get(['id', 'name']),
            'statuses' => self::STATUSES,
            'defaultStatus' => Advance::REGISTER_STATUS,
        ]);
    }

    /** Listado paginado y filtrable (status, search, sede_id, per_page, page) para la tabla del panel. */
    public function list(Request $request)
    {
        $data = $request->validate([
            'status' => ['nullable', 'string'],
            'search' => ['nullable', 'string', 'max:100'],
            'sede_id' => ['nullable', 'integer'],
            'per_page' => ['nullable', 'integer', 'min:5', 'max:50'],
        ]);

        $status = $data['status'] ?? Advance::REGISTER_STATUS;
        $search = trim($data['search'] ?? '');

        $complaints = Complaint::with(['customer', 'sede'])
            ->when($status !== 'TODOS', fn ($q) => $q->where('status', $status))
            ->when(!empty($data['sede_id']), fn ($q) => $q->where('sede_id', $data['sede_id']))
            ->when($search !== '', function ($q) use ($search) {
                $q->where(function ($q) use ($search) {
                    $q->where('complaintCode', 'like', "%$search%")
                        ->orWhereHas('customer', function ($q) use ($search) {
                            $q->where('name', 'like', "%$search%")
                                ->orWhere('document', 'like', "%$search%")
                                ->orWhere('email', 'like', "%$search%");
                        });
                });
            })
            ->orderByDesc('created_at')
            ->paginate($data['per_page'] ?? 8);

        return response()->json([
            'data' => $complaints->items(),
            'meta' => [
                'current_page' => $complaints->currentPage(),
                'last_page' => $complaints->lastPage(),
                'per_page' => $complaints->perPage(),
                'total' => $complaints->total(),
                'from' => $complaints->firstItem(),
                'to' => $complaints->lastItem(),
            ],
            'counts' => Complaint::selectRaw('status, count(*) as total')->groupBy('status')->pluck('total', 'status'),
        ]);
    }


    /** Página de detalle completa de un reclamo, con todo lo registrado y su historial. */
    public function detail(int $complaint)
    {
        $complaint = Complaint::with(['answers.question', 'customer', 'sede', 'advances', 'attachments'])->find($complaint);
        abort_if(!$complaint, 404);

        return Inertia::render('Complaints/Show', ['complaint' => $complaint]);
    }

    public function search()
    {
        return Inertia::render('Public/ComplaintSearch');
    }

    /** Página para responder: la hoja del cliente a un lado y el formulario de respuesta al otro. */
    public function respond(int $complaint)
    {
        $complaint = Complaint::with(['answers.question', 'customer'])->find($complaint);
        abort_if(!$complaint, 404);

        if ($complaint->status !== Advance::IN_PROCESS_STATUS) {
            return redirect()->route('complaint.view', $complaint->id)
                ->with('error', 'Solo se puede responder un reclamo que está en proceso.');
        }

        return Inertia::render('Complaints/Respond', ['complaint' => $complaint]);
    }

    /** Búsqueda por código desde "Buscar reclamo": si existe, lleva a la URL pública con token. */
    public function lookup(Request $request)
    {
        $code = trim((string) $request->query('code', ''));
        $complaint = $code === '' ? null : Complaint::where('complaintCode', $code)->first();

        if (!$complaint) {
            return redirect()->route('complaint.search')->with([
                'message' => 'No se encontró el reclamo con el código ingresado.',
                'error_code' => 404,
                'complaintCode' => $code,
            ]);
        }

        return redirect()->route('complaint.show', $complaint->token);
    }

    public function show(string $token)
    {
        $complaint = Complaint::with(['answers.question', 'customer', 'advances', 'attachments'])
            ->where('token', $token)->first();
        if (!$complaint) {
            return redirect()->route('complaint.search')->with([
                'message' => 'No se encontró el reclamo. Búscalo con su código.',
                'error_code' => 404,
                'complaintCode' => '',
            ]);
        }
        return Inertia::render('Public/AnswerShow', [
            'complaint' => $complaint,
        ]);
    }

    public function confirm(string $complaintHash)
    {
        $complaint = Complaint::with(['answers.question', 'customer', 'advances'])
            ->where('hash', $complaintHash)
            ->first();

        if (!$complaint) {
            return redirect()->route('complaint.search')->with([
                'message' => 'No se encontró el reclamo con el código ingresado.',
                'error_code' => 404,
                'complaintCode' => "",
            ]);
        } elseif ($complaint->rejected) {
            return redirect()->route('complaint.search')->with([
                'message' => 'El reclamo ha sido rechazado.',
                'error_code' => 404,
                'complaintCode' => $complaint->complaintCode,
            ]);
        } else {
            if (!$complaint->verified) {
                Advance::create([
                    'status' => Advance::REGISTER_STATUS,
                    'date' => now(),
                    'complaint_id' => $complaint->id,
                ]);
                $complaint->verified = true;
                $complaint->status = Advance::REGISTER_STATUS;
                $complaint->save();
                $company = Company::first();
                Mail::to($complaint->customer->email)->send(new ConfirmComplaint(
                    $complaint,
                    $company
                ));

                $emails = $company ? explode(',', $company->email) : [];
                foreach ($emails as $email) {
                    Mail::to($email)->send(new NewComplaint(
                        $complaint,
                        $company
                    ));
                }
            }
            Complaint::verifyStatusById($complaint->id);
            return redirect()->route('complaint.show', $complaint->token);
        }
    }

    public function response(Request $request, int $complaint)
    {
        $request->validate([
            'answer' => ['required', 'string'],
            'attachments' => ['nullable', 'array'],
            'attachments.*' => ['file', 'max:10240'],
        ]);

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
            $complaint->status = Advance::ARCHIVED_STATUS;
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

        return redirect()->route('complaint.view', $complaint->id)->with('success', 'Respuesta enviada correctamente.');
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
            $complaint->status = Advance::ARCHIVED_STATUS;
            $complaint->save();
        }

        return back()->with('success', 'Reclamo archivado correctamente.');
    }

    public function extend(int $complaint, Request $request)
    {
        $complaint = Complaint::find($complaint);
        if (!$complaint) {
            return redirect()->route('complaint.index')->with([
                'message' => 'No se encontró el reclamo con el código ingresado.',
                'error_code' => 404,
                'complaintCode' => $complaint,
            ]);
        } else {
            $daysToAdd = $request->input('daysToExtend');
            $complaint->days += $daysToAdd;
            $complaint->save();
            Complaint::verifyStatusById($complaint->id);

            $company = Company::first();
            Mail::to($complaint->customer->email)->send(new ExtendComplaint(
                $complaint,
                $company,
                $daysToAdd
            ));
        }

        return back()->with('success', 'Reclamo extendido correctamente.');
    }

    public function recover(int $complaint)
    {
        $complaint = Complaint::find($complaint);
        if (!$complaint) {
            return redirect()->route('complaint.index')->with([
                'message' => 'No se encontró el reclamo con el código ingresado.',
                'error_code' => 404,
                'complaintCode' => $complaint,
            ]);
        } elseif (!$complaint->rejected) {
            return back()->with([
                'message' => 'El reclamo no está rechazado.',
                'action' => 'error'
            ]);
        } else {
            Advance::create([
                'status' => Advance::REGISTER_STATUS,
                'date' => now(),
                'complaint_id' => $complaint->id,
            ]);
            $complaint->rejected = false;
            $complaint->verified = true;
            $complaint->status = Advance::REGISTER_STATUS;
            $complaint->save();
            Complaint::verifyStatusById($complaint->id);

            $company = Company::first();
            Mail::to($complaint->customer->email)->send(new ConfirmComplaint(
                $complaint,
                $company
            ));
            $emails = $company ? explode(',', $company->email) : [];
            foreach ($emails as $email) {
                Mail::to($email)->send(new NewComplaint(
                    $complaint,
                    $company
                ));
            }
        }

        return back()->with(
            [
                'message' => 'Reclamo confirmado correctamente.',
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
            $complaint->status = Advance::IN_PROCESS_STATUS;
            $complaint->save();
            $company = Company::first();
            Mail::to($complaint->customer->email)->send(new ProcessComplaint(
                $complaint,
                $company
            ));
        }

        return back()->with('success', 'Reclamo en proceso.');
    }
}
