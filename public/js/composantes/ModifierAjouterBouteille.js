function importeModifierAjouterBouteille() {
    let bouteilles = new Bouteille();

    bouteilles.index().then(dataB => {
        var sel = document.getElementById('search');
        var opt = null;

        var options = {
            search: input => {
                if (input.length < 1) {
                    return []
                }
                return dataB.filter(b => {
                    return b.nom.toLowerCase()
                        .startsWith(input.toLowerCase())
                })
            },
            onSubmit: result => {
                // mettre la valeur du ID dans le search input
                sel.value = result.id
            },
            getResultValue: (suggestion) => suggestion.nom
        }
        new Autocomplete('#autocomplete', options)
    });


    // recuperation de l'id utilisateur connecter
    var userId = document.getElementById("idUtilisateur").value;

    let cellier = new User();

    //recupere les cellier de l'utilisateur
    cellier.showCellier(userId).then(dataC => {

        var sel = document.getElementById('cellier');
        var opt = null;

        for (i = 0; i < dataC.length; i++) {
            opt = document.createElement('option');
            opt.setAttribute("value", dataC[i].id);
            opt.nom = dataC[i].nom;
            opt.innerHTML = dataC[i].nom
            sel.appendChild(opt);
        }
    });

   

   


    document.getElementById("btnAjouter").addEventListener("click", function () {
  
        // Sélectionner l'élément input et récupérer sa valeur
        var bouteilleId = document.getElementById("search").value;
        var millesime = document.getElementById("millesime").value;
        var quantite = document.getElementById("quantite").value;
        var date = document.getElementById("date").value;
        var garde = document.getElementById("garde").value;
        var cellier = document.getElementById("cellier").value;
        var notes = document.getElementById("notes").value;
        var price = document.getElementById("price").value;
        // Afficher la valeur
        // alert(bouteilleId + millesime + quantite + price + date + garde +  cellier + notes);


        // validation du formulaire
        var f = document.form1;
        var msgErr;

        //Millesime
        msgErr = "";
        milles = f.millesime.value.trim();
        if (milles === "") {
            msgErr = "valeurs obligatoire"
        } else if (milles.length > 4) {
            msgErr = "entrer 4 valeurs numériques"
        } else if (!/^\d{4}$/.test(milles)) {
            msgErr = "Millesime non valide"
        }


        f.millesime.value = milles;
        if (msgErr !== "") erreur = true;
        document.getElementById("b.millesime").innerHTML = msgErr;


        //Quantité
        msgErr = "";
        quanti = f.quantite.value.trim();
        if (quanti === "") {
            msgErr = "Quantité Obligatoire";
        } else {

            if (!/^[0-9]*$/.test(quanti)) {
                msgErr = !/^[0-9]*$/.test(quanti) ?
                    "Quantité non valide" :
                    ""
            }
        }
        f.quantite.value = quanti;
        if (msgErr !== "") erreur = true;
        document.getElementById("b.quantieRequis").innerHTML = msgErr;


        //Prix
        msgErr = "";
        prix = f.price.value.trim();
        if (prix === "") {
            msgErr = "Prix Obligatoire";
        } else {

            if (!/^\-?\d+\.\d{2}$/.test(prix)) {
                msgErr = !/^\-?\d+\.\d{2}$/.test(prix) ?
                    "Prix non valide" :
                    ""
            }
        }
        f.price.value = prix;
        if (msgErr !== "") erreur = true;
        document.getElementById("b.prix").innerHTML = msgErr;


        //Date D'achat
        msgErr = "";
        dateAchat = f.date.value.trim();
        if (dateAchat === "") {
            msgErr = "date d'achat Obligatoire";
        } else {

            if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(dateAchat)) {
                msgErr = !/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(dateAchat) ?
                    "date d'achat non valide" :
                    ""
            }
        }
        f.date.value = dateAchat;
        if (msgErr !== "") erreur = true;
        document.getElementById("b.dateAchatPasValide").innerHTML = msgErr;


        //Garde justequa
        msgErr = "";
        gardeJusqua = f.garde.value.trim();
        if (gardeJusqua === "") {
            msgErr = "Date de Garde Obligatoire";
        } else {

            if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(gardeJusqua)) {
                msgErr = !/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(gardeJusqua) ?
                    "date d'achat non valide" :
                    ""
            }
        }
        f.garde.value = gardeJusqua;
        if (msgErr !== "") erreur = true;
        document.getElementById("b.gardeJustequa").innerHTML = msgErr;


        let bouteille = {
            bouteille_id: bouteilleId,
            cellier_id: cellier,
            quantite: quantite,
            date_achat: date,
            garde_jusqua: garde,
            notes: notes,
            prix: price,
            millesime: millesime
        }

        //transaction
        let transaction = new Transaction();

        transaction.store(bouteille).then(data => {

            //ajouter success
            document.getElementById("b.ajouter").innerHTML = "Ajout effectué";
            //refresh la page
            setTimeout(function () {
                location.reload();
                window.location.href = "/"
            }, 900);
        });
    })
}    
