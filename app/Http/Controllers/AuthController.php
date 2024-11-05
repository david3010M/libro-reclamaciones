<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\RedirectResponse;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $validator = Validator::make($credentials, [
            'email' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return back()->with('error', 'Los campos son requeridos.');
        }

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended(route('complaint.index'));
        } else {
            return back()->with('error', 'Las credenciales no coinciden.');
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login')->withCookie(Cookie::forget('laravel_session'))->withCookie(Cookie::forget('XSRF-TOKEN'));
    }
}
