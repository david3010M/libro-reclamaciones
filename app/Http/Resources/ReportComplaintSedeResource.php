<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReportComplaintSedeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'complaintCode' => $this->complaintCode,
            'customer' => $this->customer->name,
            'customerDocument' => $this->customer->document,
            'customerEmail' => $this->customer->email,
            'status' => $this->advances[0]->status,
            'link' => route('complaint.show', $this->complaintCode),
        ];
    }
}
