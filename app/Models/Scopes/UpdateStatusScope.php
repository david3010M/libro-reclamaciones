<?php

namespace App\Models\Scopes;

use App\Mail\RejectComplaint;
use App\Models\Advance;
use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use App\Services\ComplaintMailer;

class UpdateStatusScope implements Scope
{
    public function apply(Builder $builder, Model $model)
    {
        // Solo los candidatos a rechazo (antes recorría TODOS los reclamos en cada consulta).
        $builder->getModel()->newQueryWithoutScopes()
            ->where('verified', false)
            ->where('rejected', false)
            ->where('created_at', '<', Carbon::now()->subDays(2))
            ->each(function ($complaint) {
                $complaint->recordAdvance(Advance::REJECTED_STATUS);
                $complaint->status = Advance::REJECTED_STATUS;
                $complaint->rejected = true;
                $complaint->save();

                // Un correo que falla no debe tumbar la consulta que lo disparó (queda en la bitácora).
                ComplaintMailer::send($complaint, $complaint->customer->email, new RejectComplaint($complaint, Company::first()), 'reject');
            });
    }
}
