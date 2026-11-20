@props(['items' => []])
@php
    // Ícono por etiqueta (lucide vía iconify, igual que milla-backend).
    $icons = ['Código' => 'hash', 'Cliente' => 'user', 'Estado' => 'circle-dot', 'Plazo adicional' => 'calendar-plus'];
    $font = "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";
    $total = count($items);
@endphp
<tr>
    <td style="padding:0 0 12px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            @foreach($items as $label => $value)
                <tr>
                    <td style="padding:14px 0;{{ $loop->last ? '' : 'border-bottom:1px solid #f0f0f0;' }}">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                                {{-- Ícono dentro de un cuadro suave: da cuerpo y se alinea con las dos líneas de texto --}}
                                <td width="44" style="width:44px;vertical-align:middle;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="44" height="44" align="center" valign="middle" bgcolor="#ecf6f8"
                                                style="width:44px;height:44px;background:#ecf6f8;border-radius:10px;">
                                                <img src="https://api.iconify.design/lucide/{{ $icons[$label] ?? 'info' }}.svg?color=%230e7490&width=22&height=22" alt=""
                                                     width="22" height="22"
                                                     style="display:block;margin:0 auto;width:22px;height:22px;border:0;outline:none;text-decoration:none;">
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td style="vertical-align:middle;padding-left:16px;">
                                    <p style="margin:0 0 2px 0;font-family:{{ $font }};font-size:12px;color:#6b7280;line-height:1.4;">{{ $label }}</p>
                                    <p style="margin:0;font-family:{{ $font }};font-size:17px;font-weight:600;color:#111111;line-height:1.3;">{{ $value }}</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            @endforeach
        </table>
    </td>
</tr>
