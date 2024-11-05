<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <title>Respuesta</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.5;
        }

        .header,
        .footer {
            width: 100%;
            text-align: center;
            position: fixed;
        }

        .content {
            margin-top: 10px;
            margin-bottom: 50px;
        }

        .content table {
            width: 100%;
            border-collapse: collapse;
        }

        .content th,
        .content td {
            border: 1px solid #000;
            /*padding: 8px;*/
            text-align: left;
            padding-left: 3px;
        }

        .content th {
            background-color: #e2e2e2;
        }

        .content {
            font-size: 12px;
        }

        .content .observaciones {
            margin-top: 20px;
        }

        .content .footer-section {
            display: flex;
            justify-content: space-between;
        }

        .center {
            text-align: center;
        }

        .right {
            text-align: right;
        }

        .left {
            text-align: left;
        }

        .text-sm {
            font-size: 10px;
        }

        .w100 {
            width: 100%;
        }

        .gray {
            color: #4d4d4d;
        }

        .w30 {
            width: 30%;
        }

        h1,
        h2,
        h3 {
            margin: 0;
        }

        .mb-2 {
            margin-bottom: 16px;
        }

        .mb-4 {
            margin-bottom: 32px;
        }

        .mb-10 {
            margin-bottom: 160px;
        }
    </style>
</head>

<body>
    <table class="w100 mb-2">
        <tr>
            <td class="center gray w30">
                <img height="90px" width="auto" class="logoImage" src="logo.png" alt="logo">

            </td>
            <td class="w100 center">
                <h3>Respuesta al Reclamo<span style="color:#233876"> | {{ $complaint->complaintCode }}</span></h3>
            </td>
        </tr>
    </table>

    <table class="w100 mb-4">
        <tr>
            <td class="right w100">
                {{ \Carbon\Carbon::parse($complaint->advances->last()->date)->locale('es')->isoFormat('dddd D [de] MMMM [de] YYYY h:mm:ss A') }}
            </td>
        </tr>
    </table>
    <table class="w100 mb-4">
        <tr>
            <td class="left w100">
                Estimado(a) Sr(a). <strong> {{ $complaint->customer->name }}</strong>:
            </td>
        </tr>
        <tr>
            <td>
                {{ $complaint->answer }}
            </td>
        </tr>
    </table>
    <table class="w100 mb-10">
        <tr>
            <td class="left w100">
                <strong>Atentamente,</strong>
            </td>
        </tr>
        <tr>
            <td class="left w100">
                Responsable de Atención al Cliente
            </td>
        </tr>
    </table>

</body>

</html>
