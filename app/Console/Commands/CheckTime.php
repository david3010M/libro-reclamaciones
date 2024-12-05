<?php

namespace App\Console\Commands;

use App\Models\Complaint;
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
        Complaint::verifyStatus();
    }
}
