<!DOCTYPE html>

<html lang="en">

<head>
    <base href="./">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="keyword" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="apple-touch-icon" sizes="57x57" href="assets/favicon/apple-icon-57x57.png">
    <link rel="icon" type="image/png" sizes="192x192" href="assets/favicon/android-icon-192x192.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="assets/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@4.2.0/dist/js/coreui.bundle.min.js"></script>

    @routes
    @vite(['resources/scss/styles.scss', 'resources/js/app.js'])
    @inertiaHead
</head>

<body>
    @if (isset($page) && str_contains($page['component'], 'Auth'))
        @inertia
    @else
        @include('include.nav')
        <div class="wrapper d-flex flex-column min-vh-100 bg-light">
            @include('include.header')
            <div class="body flex-grow-1 px-3">
                @inertia
            </div>
        </div>
    @endif
</body>

</html>
