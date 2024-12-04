<?php

namespace App\Console\Commands;

use App\Models\Advance;
use App\Models\Complaint;
use Carbon\Carbon;
use Illuminate\Console\Command;

class CheckTime extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:time';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Revisando el estado';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $complaints = Complaint::whereHas('advances', function ($query) {
            $query->where('status', Advance::REGISTER_STATUS);
        })->get();

        foreach ($complaints as $complaint) {
            $advance = Advance::where('complaint_id', $complaint->id)
                ->where('status', Advance::REGISTER_STATUS)
                ->first();
            $advanceDate = Carbon::parse($advance->date);
            $now = Carbon::now();

            $diff = $complaint->days - $advanceDate->diffInDays($now,false);

            $complaint->update([
                'timeToAnswer' => $diff,
            ]);
        }
    }
}
