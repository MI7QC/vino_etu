@extends("layouts.app")

@section("header")
    <script src={{ asset("js/api/Bouteille.js") }}></script>
    <script src="{{ asset("js/functions.js") }}"></script>
    <script src="{{ asset("js/modal.js") }}"></script>
    <script src="{{ asset("js/composantes/ListeCatalogue.js") }}"></script>

    <style>
        footer {
            color: white;
            background-color: #000000;
        }
    </style>

    <title>Vino - Liste des bouteilles du catalogue</title>
@endsection

@section("content")
<div class="page_admin">
    <div class="logo_admin"><a href="{{ route("accueil") }}"><img src={{ asset("img/logo_vino.png") }} alt="vino"></a>
    </div>
    <h2 class="color-white text-align-center">Bonjour {{ Auth::user()->name }}</h2>
    <nav class="nav" class="wrap">
        <input type="checkbox" name="toggle" id="toggle"/>
        <label for="toggle"><i class="icon-reorder"></i> <i class="fa fa-bars"></i></label>
        <ul class="menu">
            <a class="header-nav-link active" href="{{ route("admin") }}">
                <li>Utilisateurs</li>
            </a>
            <a class="header-nav-link active" href="{{ route("admin.catalogue") }}">
                <li>Catalogue</li>
            </a>
            <a class="header-nav-link" href="{{ route("logout") }}">
                <i class="fa fa-sign-out fa-1x sign" aria-hidden="true"></i>
            </a>
        </ul>
    </nav>

    <div class="container margin-bottom-50px">
        <button class="btn btn-ajouter inline" btn="ajouter">Ajouter une bouteille</button>
        <button class="btn btn-supprimer inline" type="submit" onclick=window.location.href='{{ route('admin.saq') }}'>
            Catalogue SAQ
        </button>
    </div>


    <table class="info container">
        <thead>
        <tr>
            <th>#</th>
            <th>Nom</th>
            <th>code</th>
            <th>pays</th>
            <th>description</th>
            <th>prix</th>
            <th>url</th>
            <th>image</th>
            <th>format</th>
            <th>type</th>
            <th>Ajouté le</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <script defer>ListeBouteilles()</script>
        </tbody>
    </table>
</div>
@endsection