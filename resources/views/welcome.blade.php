<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
        <!--<link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">-->
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <title>Quick Pallet Market - Client</title>
    </head>
    <body>
        <div id = "app">
            <v-app color = "#f9f9f9">
                <app />
            </v-app>           
        </div>
        <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
        <script src="{{ asset('js/app.js') }}"></script>
        <style type = "text/css">
            body {
                background: #f7f7f7;
            }
        </style>
    </body>
</html>
