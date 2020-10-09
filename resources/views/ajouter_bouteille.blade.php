@extends("layouts.app")

@section("header")
    <script src="https://unpkg.com/@trevoreyre/autocomplete-js"></script>
    <script src="{{ asset('js/api/Bouteille.js') }}"></script>
    <script src="{{ asset('js/api/Transaction.js') }}"></script>
    <script src="{{ asset('js/api/User.js') }}"></script>
    <script src="{{ asset('js/composantes/ModifierAjouterBouteille.js') }}"></script>
    <link rel="stylesheet" href="https://unpkg.com/@trevoreyre/autocomplete-js/dist/style.css"/>

    <title>Ajouter une bouteille - Vino</title>
@endsection

@section("content")
<div class="container-ajouter">
    <div class="main-content-ajouter">
        <div class="content-wrap-ajouter">
            <a href="/" class="logo_ajouter"><img src="img/logo_vino.png" alt="vino"></a>
            <div class="img_b">
                <img src="img/bouteille2.png" alt="bouteille2">
            </div>
        </div>
        <aside class="section_deux">
            <nav class="header-nav ajouter">
                <a class="header-nav-link active ajouter" href="{{ route("accueil") }}">Mon cellier</a>
                <a class="header-nav-link active ajouter" href="{{ route("ajouter_bouteille") }}">Ajouter une bouteille au cellier</a>
            </nav>
            <h3 class="slogan-ajouter">Ajouter une bouteille?</h3>
            <button  class="btn btn-ajouter-bouteille2" id="btnA" type="submit" formaction="#">Ajouter la bouteille</button>


            <form class="form-ajouter" name="form1" action="/" method="post">

                {{-- test: listeAutoComplete --}}

                <div id="autocomplete" class="autocomplete">
                    <input class="autocomplete-input"/>
                    <ul class="autocomplete-result-list"></ul>
                </div>

                {{-- <label for="name">Nom: {{ Auth::user()->name }} </label><br><br> --}}
                <input type="hidden" id="idUtilisateur" value="{{ Auth::user()->id }}">


                <input type="hidden" class="input-ajouter" id="search" name="search"/><br><br>

                <label for="millesime">Millesime:</label>
                <span><p class="fail" id="b.millesime" style="margin-top: 20px"></p></span>
                <input class="input-ajouter" type="text" id="millesime" name="millesime"><br><br>


                <label for="quantite">Quantité:</label>
                <span><p class="fail" id="b.quantieRequis" style="margin-top: 20px"></p></span>
                <input class="input-ajouter" type="text" id="quantite" name="quantite"><br><br>

                <label for="price">Prix:</label>
                <span><p class="fail" id="b.prix" style="margin-top: 20px"></p></span>
                <input class="input-ajouter" type="text" id="price" name="price"><br><br>

                <label for="date">Date achat:</label>
                <span><p class="fail" id="b.dateAchatPasValide" style="margin-top: 20px"></p></span>
                <input class="input-ajouter" type="text" id="date" name="date" placeholder="2020-09-29"><br><br>

                <label for="garde">Garde:</label>
                <span><p class="fail" id="b.gardeJustequa" style="margin-top: 20px"></p></span>
                <input class="input-ajouter" type="text" id="garde" name="garde" placeholder="2020-09-30"><br><br>

                <label for="cellier">Nom du cellier:</label>
                <select class="input-ajouter" name="cellier" id="cellier">
                </select><br><br>
                <label for="notes">Notes:</label>
                <input class="input-ajouter" name="notes" id="notes"><br><br>
            </form>


        </aside>
        <aside class="section_trois">
            <a class="header-nav-link aj" href={{ route("logout") }}><i class="fa fa-sign-out fa-2x"
            aria-hidden="true"></i></a>
            </nav>
            <div class="img_marg">
                <img src="img/bouteille3.png" alt="bouteille">
            </div>
            <span><p class="fail" id="b.ajouter" style="margin-top: 20px"></p></span>
            <button class="btn btn-ajouter-bouteille" type="button" id="btnAjouter" type="submit" formaction="#">Ajouter la bouteille
            </button>

        </aside>
    </div>
</div>
<script defer>importeModifierAjouterBouteille()</script>
@endsection
