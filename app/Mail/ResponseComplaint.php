<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Attachment;

class ResponseComplaint extends Mailable
{
    use Queueable, SerializesModels;

    public $complaint;
    public $company;

    /**
     * Create a new message instance.
     */
    public function __construct($complaint, $company, $attachmentsPath)
    {
        $this->complaint = $complaint;
        $this->company = $company;
        $this->attachmentsPath = $attachmentsPath;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('mrsoft@gmail.com', 'Mr Soft'),
            subject: 'Reclamo Atendido',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.responseComplaint',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        if ($this->attachmentsPath) {
            $attachments = [];
            foreach ($this->attachmentsPath as $attachment) {
                $attachments[] = Attachment::fromStorage($attachment);
            }
            return $attachments;
        } else {
            return [];
        }
    }
}
