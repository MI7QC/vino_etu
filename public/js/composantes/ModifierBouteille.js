function importeModifierBouteille() {

    let id_transaction = document.getElementsByTagName("h2")[0].getAttribute("data-id");

    //Class Transaction
    let transact = new Transaction;

    //Appelle fonction show de class Transaction
    transact.show(id_transaction).then(dataT => {
        document.getElementById('quantite').value = dataT.quantite;
        document.getElementById('prix').value = dataT.prix;
        document.getElementById('millesime').value = dataT.millesime;
        document.getElementById('cellierId').value = dataT.cellier_id;
        document.getElementById('bouteilleId').value = dataT.bouteille_id;
        b = dataT.bouteille_id;


        let bouteilles = new Bouteille;

        bouteilles.show(b).then(dataB => {

            bouteilleNom = dataB.nom
            //remplace le titre H2 par le nom de la bouteille.
            var h2 = document.getElementsByTagName("h2")[0]
            h2.innerHTML = "Bouteille : " + bouteilleNom;
        });
    });




    document.getElementById("modifierBtn").addEventListener("click", function () {

        //Insertion des valeurs récupéré des champ input du serveur
        var quantite = document.getElementById("quantite").value;
        var prix = document.getElementById("prix").value;
        var millesime = document.getElementById("millesime").value;
        var cellierId = document.getElementById("cellierId").value;
        var bouteilleId = document.getElementById("bouteilleId").value;

        // validation du formulaire
        var f = document.form1;

        //Quantité
        var msgErrQ = "";
        quanti = f.quantite.value.trim();
        if (quanti === "") {
            msgErrQ = "Quantité Obligatoire";
        } else {
            if (!/^[0-9]*$/.test(quanti)) {
                msgErrQ = !/^[0-9]*$/.test(quanti) ?
                    "Quantité non valide" :
                    ""
            }
        }
        f.quantite.value = quanti;
        if (msgErrQ !== "") erreur = true;
        document.getElementById("e.quantite").innerHTML = msgErrQ;



        //Prix
        var msgErrP = "";
        prix = f.prix.value.trim();
        if (prix === "") {
            msgErrP = "Prix Obligatoire";
        } else {

            if (!/^\-?\d+\.\d{2}$/.test(prix)) {
                msgErrP = !/^\-?\d+\.\d{2}$/.test(prix) ?
                    "Prix non valide" :
                    ""
            }
        }
        f.prix.value = prix;
        if (msgErrP !== "") erreur = true;
        document.getElementById("e.prix").innerHTML = msgErrP;




        //Millesime
        var msgErrM = "";
        milles = f.millesime.value.trim();
        if (milles === "") {
            msgErrM = "valeurs obligatoire"
        } else if (milles.length > 4) {
            msgErrM = "entrer 4 valeurs numériques"
        } else if (!/^\d{4}$/.test(milles)) {
            msgErrM = "Millesime non valide"
        }

        f.millesime.value = milles;
        if (msgErrM == "") erreur = true;
        document.getElementById("e.millesime").innerHTML = msgErrM;



        if (msgErrM == "" && msgErrP == "" && msgErrQ == "") {

            let transactionInfo = {
                quantite: quantite,
                prix: prix,
                millesime: millesime,
                cellier_id: cellierId,
                bouteille_id: bouteilleId
            }


            transact.update(id_transaction, transactionInfo).then(data => {

                //// ajouter success
                document.getElementById("b.modification").innerHTML = "Modification effectué";
                //// refresh la page
                setTimeout(function () {
                    location.reload();
                    window.location.href = "/"
                }, 900);
            })
        }
    })
}