<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PasswordResetController extends Controller
{
    public function forgot()
    {
        return Inertia::render('Auth/ForgotPassword');
    }

    public function sendLink(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        // Siempre la misma respuesta: no revela si el correo existe.
        Password::sendResetLink($request->only('email'));

        return back()->with('success', 'Si el correo está registrado, te enviamos un enlace para restablecer tu contraseña.');
    }

    public function reset(Request $request, string $token)
    {
        return Inertia::render('Auth/ResetPassword', [
            'token' => $token,
            'email' => $request->query('email', ''),
        ]);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ], [
            'password.min' => 'La contraseña debe tener al menos 8 caracteres.',
            'password.confirmed' => 'Las contraseñas no coinciden.',
        ]);

        $status = Password::reset($data, function (User $user, string $password) {
            $user->forceFill([
                'password' => Hash::make($password),
                'remember_token' => Str::random(60),
            ])->save();
            event(new PasswordReset($user));
        });

        if ($status !== Password::PASSWORD_RESET) {
            return back()->withErrors(['email' => 'El enlace no es válido o ya venció. Solicita uno nuevo.']);
        }

        return redirect()->route('login.show')->with('success', 'Contraseña actualizada. Ya puedes iniciar sesión.');
    }
}
