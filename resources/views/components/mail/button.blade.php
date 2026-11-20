@props(['href'])
<tr>
    <td class="m-btn-cell" align="left" style="padding:8px 0 28px 0;">
        <a href="{{ $href }}" target="_blank"
           style="display:inline-block;padding:13px 28px;background:#0e7490;color:#ffffff;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-decoration:none;border-radius:8px;letter-spacing:0.01em;">
            {{ $slot }}
        </a>
    </td>
</tr>
