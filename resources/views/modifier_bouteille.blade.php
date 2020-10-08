<?php 
function sortir(){
  die('<script>document.location.href=`//vino/`;</script>') ;
}
if( ! isset($_GET['bouteille'])) sortir();
$id_transaction = intval($_GET['bouteille']);
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap&subset=cyrillic"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/style.css">
  
  
  <script src="{{ asset('js/api/Transaction.js') }}"></script>
  <script src="{{ asset('js/api/Bouteille.js') }}"></script>
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
        <nav class="header-nav ajouter">
          <a class="header-nav-link active ajouter" href="{{ route("accueil_utilisateur") }}">Mon celliere</a>
          <a class="header-nav-link active ajouter" href="{{ route("ajouter_bouteille") }}">Ajouter une bouteille au cellier</a>
        </nav>
        <?php echo "<h2 class='slogan-ajouter' data-id='$id_transaction'> Modifier Bouteille $id_transaction </h2>" ?>
        
       

        <form class="form-ajouter" name="form1" action="/" method="post">  
          <label for="quantite">Modifier Quantité:</label>
          <span><p class="fail" id="e.quantite" ></p></span>
          <input class="input-ajouter" type="text" id="quantite" name="quantite"><br><br>
          
          <label for="prix">Modifier Prix:</label>
          <span><p class="fail" id="e.prix" ></p></span>
          <input class="input-ajouter" type="text" id="prix" name="prix"><br><br>

          <label for="millesime">Modifier Millesime:</label>
          <span><p class="fail" id="e.millesime" ></p></span>
          <input class="input-ajouter" type="text" id="millesime" name="millesime"><br><br>

          <input type="hidden" class="input-ajouter"  id="cellierId" name="cellierId">
          <input type="hidden" class="input-ajouter"  id="bouteilleId" name="bouteilleId">
        </form>
          <button class="btn btn-ajouter-bouteille" type="button"  id="modifierBtn" type="submit" >Modifier</button>
          <span><p class="fail" id="b.modification" ></p></span>
    </div>
  </div>
  <footer class="footer-ajouter">2020 Vino | Group 1</footer>
  <script src="{{ asset('js/composantes/ModifierBouteille.js') }}"></script>
  <script defer>importeModifierBouteille()</script>
</body>
</html>


