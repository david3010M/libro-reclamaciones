<?php

namespace App\Models\Scopes;

use App\Mail\RejectComplaint;
use App\Models\Advance;
use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Support\Facades\Mail;

class UpdateStatusScope implements Scope
{
    public function apply(Builder $builder, Model $model)
    {
        $builder->getModel()->newQueryWithoutScopes()->each(function ($complaint) {
            if (Carbon::parse($complaint->created_at)->addSeconds(300000) < Carbon::now() && !$complaint->rejected && !$complaint->verified) {
                Advance::create([
                    'complaint_id' => $complaint->id,
                    'date' => Carbon::now(),
                    'status' => Advance::REJECTED_STATUS,
                ]);
                $complaint->rejected = true;
                $complaint->save();
                $company = Company::first();
                Mail::to($complaint->customer->email)->send(new RejectComplaint(
                    $complaint, $company
                ));
            }
        });
    }
}
