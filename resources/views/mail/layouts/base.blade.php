{{-- Plantilla base de todos los correos. Uso: @extends('mail.layouts.base') + @section('title' | 'subtitle' | 'content') --}}
@php
    $font = "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";
    $brand = $company->name ?? config('app.name');
    $logoFile = !empty($company->logo) ? public_path($company->logo) : null;
    $logo = null;
    if ($logoFile && is_file($logoFile)) {
        // Incrustado en el correo (CID): se ve aunque el cliente bloquee imágenes remotas o el sitio no sea público.
        $logo = isset($message) ? $message->embed($logoFile) : rtrim(config('app.url'), '/') . '/' . ltrim($company->logo, '/');
    }
@endphp
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="x-apple-disable-message-reformatting"/>
    <title>@yield('email_subject', $brand)</title>
    <style>
        @media only screen and (max-width: 600px) {
            .m-wrap { padding: 32px 20px 24px !important; }
            .m-title { font-size: 30px !important; }
            .m-btn-cell, .m-btn-cell a { display: block !important; text-align: center !important; }
        }
    </style>
</head>
<body style="margin:0;padding:0;background:#ffffff;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ffffff">
    <tr>
        <td align="center" class="m-wrap" style="padding:52px 24px 40px 24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:540px;">

                {{-- Marca --}}
                <tr>
                    <td align="left" style="padding-bottom:36px;">
                        @if($logo)
                            {{-- Logo + nombre: el logo solo se pierde, el nombre lo acompaña --}}
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="vertical-align:middle;">
                                        <img src="{{ $logo }}" alt="{{ $brand }}" height="52"
                                             style="display:block;height:52px;width:auto;max-width:160px;border:0;outline:none;">
                                    </td>
                                    <td style="vertical-align:middle;padding-left:14px;">
                                        <span style="font-family:{{ $font }};font-size:18px;font-weight:600;color:#111111;letter-spacing:-0.3px;">{{ $brand }}</span>
                                    </td>
                                </tr>
                            </table>
                        @else
                            <span style="font-family:{{ $font }};font-size:15px;font-weight:600;color:#111111;letter-spacing:-0.2px;">{{ $brand }}</span>
                        @endif
                    </td>
                </tr>

                {{-- Título --}}
                <tr>
                    <td align="left" style="padding-bottom:10px;">
                        <h1 class="m-title" style="margin:0;font-family:{{ $font }};font-size:36px;font-weight:600;line-height:1.15;color:#111111;letter-spacing:-1px;">
                            @yield('title')
                        </h1>
                    </td>
                </tr>

                {{-- Subtítulo --}}
                <tr>
                    <td align="left" style="padding-bottom:24px;border-bottom:1px solid #f0f0f0;">
                        <p style="margin:0;font-family:{{ $font }};font-size:15px;line-height:1.6;color:#6b7280;">
                            @yield('subtitle')
                        </p>
                    </td>
                </tr>

                <tr><td style="height:28px;font-size:0;line-height:0;">&nbsp;</td></tr>

                {{-- Contenido (filas <tr>) --}}
                @yield('content')

                <tr><td style="height:20px;font-size:0;line-height:0;">&nbsp;</td></tr>

                {{-- Pie --}}
                <tr>
                    <td style="padding-top:24px;border-top:1px solid #f0f0f0;">
                        <p style="margin:0;font-family:{{ $font }};font-size:12px;line-height:1.6;color:#9ca3af;">
                            Este correo fue enviado automáticamente, por favor no lo respondas.
                        </p>
                        <p style="margin:0;font-family:{{ $font }};font-size:12px;line-height:1.6;color:#9ca3af;">
                            &copy; {{ date('Y') }} {{ $brand }}. Todos los derechos reservados.
                        </p>
                    </td>
                </tr>

            </table>
        </td>
    </tr>
</table>
</body>
</html>
