<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComplaintMail extends Model
{
    const SENT = 'sent';
    const FAILED = 'failed';

    protected $fillable = ['complaint_id', 'type', 'recipient', 'subject', 'status', 'attachments', 'error'];

    protected $hidden = ['updated_at'];

    protected $casts = ['created_at' => 'datetime:Y-m-d H:i:s'];

    public function complaint()
    {
        return $this->belongsTo(Complaint::class);
    }
}
