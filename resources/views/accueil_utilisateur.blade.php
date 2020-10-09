@extends('layouts.app')

@section("header")
    <title>Mon cellier - Vino</title>

    <script src={{ asset("js/api/Transaction.js")}}></script>
    <script src={{ asset("js/api/User.js")}}></script>
    <script src={{ asset("js/modal.js")}}></script>
    <script src={{asset("js/functions.js")}}></script>

    <script src={{asset("js/api/Cellier.js")}} defer></script>
    <script src={{asset("js/api/CellierBouteille.js")}} defer></script>
    <script src={{asset("js/api/bouteilleDuCellierUtilisateur.js")}} defer></script>
@endsection

@section('content')
    <input type="hidden" id="utilisateur" value="{{ Auth::user()->name }}">
    <input type="hidden" id="idUtilisateur" value="{{ Auth::user()->id }}">

    <div class="container-index">
        <div class="main-content">
            <div class="content-wrap">
                <a href="#" class="logo_accueille"><img src={{ asset("img/logo_vino.png") }} alt="vino"></a>
                @if(auth()->user()->getRoles()[0] === 'administrateur')
                    <h3 class="text-align-center"><a href="{{ route("admin") }}">Administration</a></h3>
                @endif
                <h2 class="slogan">Un petite verre de vino?</h2>
            </div>
            <aside id="accueille">
                <nav class="header-nav accueille">
                    <a class="header-nav-link active accueille" href="{{ route("mon_compte") }}">Mon compte</a>
                    <a class="header-nav-link active accueille" href="{{ route("ajouter_bouteille") }}">Ajouter une
                        bouteille au
                        cellier</a>
                    <a class="header-nav-link" href="{{route("logout")}}"><i class="fa fa-sign-out fa-2x color-black"
                                                                             aria-hidden="true"></i></a>
                </nav>
                <div class="message-bienvenu"><h2>Votre cellier</h2></div>
            </aside>
        </div>
    </div>
@endsection
