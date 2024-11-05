<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
                <h3>Hoja de Reclamo<span style="color:#233876"> | {{ $complaint->complaintCode }}</span></h3>
            </td>
        </tr>
    </table>

    <table class="w100 mb-4">
        <tr>
            <td class="right w100">
                {{ \Carbon\Carbon::parse($complaint->created_at)->locale('es')->isoFormat('dddd D [de] MMMM [de] YYYY h:mm:ss A') }}
            </td>
        </tr>
    </table>
    <table class="w100 mb-4">
        <tr>
            <td class="left w100">
                <h3 class="mb-2">Tus datos</h3>
            </td>
        </tr>
        <tr>
            <td class="left w100">
                <strong>Nombre :</strong> {{ $complaint->customer->name }}
            </td>
        </tr>
        <tr>
            <td class="left w100">
                <strong>DNI :</strong> {{ $complaint->customer->document }}
            </td>
        </tr>
        <tr>
            <td class="left w100">
                <strong>Celular :</strong> {{ $complaint->customer->phone }}
            </td>
        </tr>
        <tr>
            <td class="left w100">
                <strong>Email :</strong> {{ $complaint->customer->email }}
            </td>
        </tr>
        <tr>
            <td class="left w100">
                <strong>Dirección :</strong> {{ $complaint->customer->address }}
            </td>
        </tr>

    </table>

    <table class="w100 mb-4">
        <tr>
            <td class="left w100">
                <h3 class="mb-2">Datos del Reclamo</h3>
            </td>
        </tr>

        @foreach ($complaint->answers as $answer)
            <tr>
                @if ($answer->question->type_question_id == '5')
                    <td class="left w100">
                        <strong>{{ $answer->question->title }} </strong>
                        <br>
                        <img src="storage/{{ $answer->answer }}" alt="imagen" style="width: 300px">
                    </td>
                @else
                    <td class="left w100">
                        <strong>{{ $answer->question->title }} </strong>
                        @foreach (explode("\n", $answer->answer) as $line)
                            <br> {{ $line }}
                        @endforeach
                    </td>
                @endif
            </tr>
        @endforeach

    </table>

</body>

</html>
