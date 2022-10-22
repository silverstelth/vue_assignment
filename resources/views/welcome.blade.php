<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Test</title>
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('img/favicon.ico') }}" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body class="antialiased">

    <div id="app"></div>

    <?= vite_tags() ?>
</body>

</html>
