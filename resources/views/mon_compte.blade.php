<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap&subset=cyrillic"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/style.css">
  
  <script src="{{ asset('js/api/User.js') }}"></script>
  <script src="{{ asset('js/api/Cellier.js') }}"></script>
  <title></title>
</head>

</head>

<body>
  <div class="container-ajouter">
    <div class="main-content-ajouter">
      <div class="content-wrap-ajouter">
        <a href="/" class="logo_ajouter"><img src="img/logo_vino.png" alt="vino"></a>
        <div class="img_b">
          <img src="img/bouteille2.png" alt="bouteille2">
        </div>
      </div>
      <aside class="section_deux">
        <nav class="header-nav compte">
          <a class="header-nav-link active " href="{{ route("accueil_utilisateur") }}">Mon cellier</a>
          <a class="header-nav-link active " href="{{ route("ajouter_bouteille") }}">Ajouter une bouteille au cellier</a>
        </nav>
        <h2 class="titre-compte">Mon compte</h2>


        <input type="hidden" id="idUtilisateur" value="{{ Auth::user()->id }}">
        <label for="name" class="utilisateur">Utilisateur: {{ Auth::user()->name }} </label><br><br>

        <form class="form-compte" name="userF" action="/" method="post">
          
          <label for="email">Modifier Courriel:</label>
          <span><p class="fail" id="e.email"></p></span>
          <input class="input-ajouter" type="text" id="email" name="email">
          <input type="hidden" class="input-ajouter" type="text" id="emailHidden" name="emailHidden"><br><br>
          
          <label for="mdp">Modifier Mot de Passe:</label>
          <span><p class="fail" id="e.mdp"></p></span>
          <input class="input-ajouter" type="text" id="mdp" name="mdp" placeholder="Entrer mot de passe"><br><br>
        </form>
          <button id="modifierBtn" class="btn btn-modifier-compte">Modifier</button>
          <span><p class="fail" id="b.modifierBtn"></p></span>
        

        <form class="form-compte" name="userC" action="/" method="post">
          <label for="cellier">Modifier Nom Cellier:</label>
          <span><p class="fail" id="e.cellier"></p></span>
          <input class="input-ajouter" type="text" id="cellier" name="cellier"><br><br>
        </form> 
          <button id="modifierCellierBtn" class="btn btn-modifier-compte">Modifier</button>
          <span><p class="fail" id="b.modifierCellierBtn"></p></span>


        <form class="form-compte" name="suprimerF" action="/" method="delete">

          <label for="suprimer">Supprimer mon compte:</label>
          <span><p class="fail" id="e.suprimer"></p></span>
          <input class="input-ajouter" type="text" id="suprimer" name="suprimer" placeholder="Entrer courielle"><br><br>
        </form>
        <button id="supprimerBtn" class="btn btn-supprimer-compte">Supprimer mon compte</button>
        <span><p class="fail" id="b.supprimerBtn"></p></span>


      </aside>
      <aside class="section_trois">
        <a class="header-nav-link aj" href={{ route("logout") }}><i class="fa fa-sign-out fa-2x"
            aria-hidden="true"></i></a>
        </nav>
        <div class="img_marg">
          <img src="img/bouteille3.png" alt="bouteille">
        </div>
      </aside>
    </div>
  </div>
  <footer class="footer-ajouter">2020 Vino | Group 1</footer>
  <script src="{{ asset('js/composantes/ModifierMonCompte.js') }}"></script>
<script defer>importeModifierMonCompte()</script>
</body>
</html>