<?php
function sortir()
{
    die('<script>document.location.href=//vino/;</script>');
}
if (!isset($_GET['bouteille'])) sortir();
$id_transaction = intval($_GET['bouteille']);
?>

@extends("layouts.app")

@section("header")
    <script src="{{ asset('js/api/Transaction.js') }}"></script>
    <script src="{{ asset('js/api/Bouteille.js') }}"></script>
    <script src="{{ asset('js/composantes/ModifierBouteille.js') }}"></script>

    <title>Modifier une bouteille - Vino</title>
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
                <a class="header-nav-link active ajouter" href="{{ route("ajouter_bouteille") }}">Ajouter une bouteille
                    au cellier</a>
            </nav>
            <?php echo "<h2 class='slogan-ajouter' data-id='$id_transaction'> Modifier Bouteille $id_transaction </h2>" ?>


            <form class="form-ajouter" name="form1" action="/" method="post">
                <label for="quantite">Modifier Quantité:</label>
                <span><p class="fail" id="e.quantite"></p></span>
                <input  class="input-ajouter margin-bottom-10px"  type="text" id="quantite" name="quantite"><br>

                <label for="prix">Modifier Prix:</label>
                <span><p class="fail" id="e.prix"></p></span>
                <input class="input-ajouter margin-bottom-10px" type="text" id="prix" name="prix"><br>

                <label for="millesime">Modifier Millesime:</label>
                <span><p class="fail" id="e.millesime"></p></span>
                <input class="input-ajouter margin-bottom-10px" type="text" id="millesime" name="millesime"><br>

                <input type="hidden" class="input-ajouter" id="cellierId" name="cellierId">
                <input type="hidden" class="input-ajouter" id="bouteilleId" name="bouteilleId">
            </form>
            <div class="miniflex">
            <button class="btn btn-ajouter-bouteille"  id="modifierBtn" type="submit">Modifier</button>
            </div>
            <span><p class="fail" id="b.modification"></p></span>
        </aside>
    </div>
</div>
<script defer>importeModifierBouteille()</script>
@endsection

