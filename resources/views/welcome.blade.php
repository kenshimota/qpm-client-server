<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Quick Pallet Market - Client</title>
    </head>
    <body>
        <div id = "app">
            <app />
        </div>
        <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
