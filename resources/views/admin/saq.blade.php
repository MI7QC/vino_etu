@extends("layouts.app")

@section("header")
    <script src={{ asset("js/api/SAQ.js") }}></script>
    <script src="{{ asset("js/functions.js") }}"></script>
    <script src={{ asset("js/composantes/ListeSAQ.js") }}></script>

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
        <div class="logo_admin"><a href="{{ route("accueil") }}"><img
                        src={{ asset("img/logo_vino.png") }} alt="vino"></a></div>
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

        <div class="container margin-bottom-20px">
            <form action="">
                <legend class="color-white">Recherche</legend>
                <fieldset class="display-flex padding-bottom-18px">
                    <label for="type" class="margin-right-20">Type de vin : <select name="type" id="type"
                                                                                    class="inline">
                            <option value="rouge">Rouge</option>
                            <option value="blanc">Blanc</option>
                            <option value="rose">Rosé</option>
                        </select></label>
                    <label for="page" class="margin-right-20">Page :<input class="width-80px margin-left-20px inline"
                                                                           name="page" id="page"
                                                                           type="number"
                                                                           min="1" value="1"></label>
                    <button class="padding-8px height-50 width-max-content btn btn-boire" type="submit">Rechercher
                    </button>
                </fieldset>
            </form>
        </div>

        <div class="container margin-bottom-20px display-flex justify-content-center">
            <button class="btn btn-supprimer inline width-max-content" type="submit" id="ajouter_bouteilles_saq">
                Ajouter toutes les bouteilles de la page
            </button>
            <span id="message" class="margin-left-20px font-weight-bold color-white"></span>
        </div>

        <table class="info container">
            <thead>
            <tr>
                <th>Nom</th>
                <th>code</th>
                <th>pays</th>
                <th>description</th>
                <th>prix</th>
                <th>url</th>
                <th>image</th>
                <th>format</th>
                <th>type</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <script defer>ListeSAQ()</script>
            </tbody>
        </table>
    </div>
@endsection