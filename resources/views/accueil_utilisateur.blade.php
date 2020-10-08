<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap&subset=cyrillic"
          rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href={{ asset("css/style.css") }}> 
    <script src={{asset("js/api/Transaction.js")}}></script>  
    <script src={{asset("js/api/User.js")}}></script>
    <script src={{asset("js/modal.js")}}></script>
    <title></title>
</head>

</head>

<body>
<input type="hidden" id="utilisateur" value="{{ Auth::user()->name }}">
<input type="hidden" id="idUtilisateur" value="{{ Auth::user()->id }}">

<div class="container-index">
    <div class="main-content">
        <div class="content-wrap">
            <a href="#" class="logo_accueille"><img src={{ asset("img/logo_vino.png") }} alt="vino"></a>
            <h2 class="slogan">Un petite verre de vino?</h2>
        </div>
        <aside  id="accueille">
            <nav class="header-nav accueille">
                <a class="header-nav-link active accueille" href="{{ route("mon_compte") }}">Mon compte</a>
                <a class="header-nav-link active accueille" href="{{ route("ajouter_bouteille") }}">Ajouter une bouteille au
                    cellier</a>
                <a class="header-nav-link" href="{{route("logout")}}"><i class="fa fa-sign-out fa-2x" aria-hidden="true"></i></a>
            </nav>

           <div class="message-bienvenu"><h2>Votre cellier</h2></div>

        </aside>
    </div>
</div>
<footer>2020 Vino | Group 1</footer>

</body>

<script src={{asset("js/api/Cellier.js")}}></script>
<script src={{asset("js/api/CellierBouteille.js")}}></script>
<script src={{asset("js/api/bouteilleDuCellierUtilisateur.js")}}></script>
<script src={{asset("js/functions.js")}}></script>
</html>