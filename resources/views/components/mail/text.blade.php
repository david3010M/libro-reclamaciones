@props(['muted' => false])
<tr>
    <td style="padding-bottom:20px;">
        <p style="margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:{{ $muted ? '13px' : '15px' }};line-height:1.7;color:{{ $muted ? '#6b7280' : '#374151' }};">
            {{ $slot }}
        </p>
    </td>
</tr>
