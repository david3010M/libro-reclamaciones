<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ExtendComplaint extends Mailable
{
    use Queueable, SerializesModels;

    public $complaint;
    public $company;
    public $days;

    /**
     * Create a new message instance.
     */
    public function __construct($complaint, $company, $days)
    {
        $this->complaint = $complaint;
        $this->company = $company;
        $this->days = $days;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('mrsoft@gmail.com', 'Mr Soft'),
            subject: 'Reclamo Extendido',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.extendComplaint',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
