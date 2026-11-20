<?php

namespace App\Mail;

use App\Models\Company;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $company;
    public string $url;
    public int $minutes;

    public function __construct($user, string $token, $company = null)
    {
        $this->user = $user;
        $this->company = $company ?? Company::first();
        $this->minutes = (int) config('auth.passwords.' . config('auth.defaults.passwords') . '.expire', 60);
        $this->url = route('password.reset', [
            'token' => $token,
            'email' => $user->getEmailForPasswordReset(),
        ]);
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('mrsoft@gmail.com', 'Mr Soft'),
            subject: 'Restablece tu contraseña',
        );
    }

    public function content(): Content
    {
        return new Content(view: 'mail.resetPassword');
    }

    public function attachments(): array
    {
        return [];
    }
}
