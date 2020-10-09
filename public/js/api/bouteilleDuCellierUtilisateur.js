    let eDivIndex = document.querySelector(".container-index");
    let listCelliers = document.querySelector("#listCelliers h1");
    let eUl = document.createElement("ul");
    let idUtilisateur = document.getElementById("idUtilisateur").value;
    let userApi = new User;
    userApi.showCellier(idUtilisateur).then((data => {
        if (data.length === 0) {
            creeCellier();
            location.reload();
        } else {
            data.map(cellier => {
                bouteilles(cellier.id)
            })
        }
    }))


    function creeCellier() {
        let celliers = new Cellier();
        let cellier = {
            nom: "cellier",
            user_id: idUtilisateur,
        };
        celliers.store(cellier);
    }

    function bouteilles(evt) {

        let idCellier = evt;
        let accueille = document.getElementById("accueille")
        let containerBouteille = document.createElement("div");
        containerBouteille.setAttribute("class", "container_bouteille")
        let eTable = document.createElement("table");
        accueille.appendChild(containerBouteille).appendChild(eTable);
        var reponse = fetch(`http://${window.location.host}/api/affichageDetails/${idCellier}`);
        var reponseJson = reponse.then(function (res) {
            return res.json();
        });
        reponseJson.then(function (reponse) {
            for (let i = 0; i < reponse.length; i++) {

                let eTr1 = document.createElement("tr");
                eTr1.setAttribute("id", "trBouteille" + reponse[i].bouteille_id);
                let eDivImg = document.createElement("div");
                eDivImg.setAttribute("class", "img_bouteille");
                eTd1 = document.createElement("td");
                eImg = document.createElement("img");
                eImg.setAttribute("class", "grosseur_img")
                eImg.setAttribute("src", reponse[i].url_image);
                eImg.setAttribute("alt", "bouteille");
                eTable.appendChild(eTr1).appendChild(eDivImg).appendChild(eTd1).appendChild(eImg);
                eTd2 = document.createElement("td");
                ePNom = document.createElement("p");
                eTextNom = document.createTextNode("Nom: " + reponse[i].nom);
                ePNom.appendChild(eTextNom);
                ePQuantite = document.createElement("p");
                ePQuantite.setAttribute("id", "quantite" + reponse[i].quantite);
                eTextQuantite = document.createTextNode("Quantite: " + reponse[i].quantite);
                ePQuantite.appendChild(eTextQuantite);
                ePPays = document.createElement("p");
                eTextPays = document.createTextNode("Pays: " + reponse[i].pays);
                ePPays.appendChild(eTextPays);
                ePType = document.createElement("p");
                eTextType = document.createTextNode("Type: " + reponse[i].type);
                ePType.appendChild(eTextType);
                ePMillesime = document.createElement("p");
                eTextMillesime = document.createTextNode("Millesime: " + reponse[i].millesime);
                ePMillesime.appendChild(eTextMillesime);
                eLien = document.createElement("a");
                eLien.setAttribute("href", reponse[i].url_saq);
                eLien.setAttribute("alt", "lien ver la bouteille " + reponse[i].nom + "du site SAQ");
                eTextSaq = document.createTextNode("Voir SAQ");
                eLien.appendChild(eTextSaq);
                eTr1.appendChild(eTd2);
                eTd2.appendChild(ePNom);
                eTd2.appendChild(ePQuantite);
                eTd2.appendChild(ePPays);
                eTd2.appendChild(ePType);
                eTd2.appendChild(ePMillesime);
                eTd2.appendChild(eLien);
                eDivBouton = document.createElement("div");
                eDivBouton.setAttribute("class", "btn_bouteille");
                eBoutonModifier = document.createElement("button");
                eBoutonModifier.setAttribute("class", "btn btn-modifier inline");
                eBoutonModifier.setAttribute("btn", "modifier_" + reponse.code_saq);
                eBoutonModifier.addEventListener("click", function () {
                    var idTransaction = reponse[i].transaction_id;
                    document.location.href = `/modifier_bouteille?bouteille=` + idTransaction + '-' + kebab_case(reponse[i].nom);
                    let t = new Transaction();
                    t.show(idTransaction).then(dataU => {
                       {dataU};
                    });
                })
                eTextModifier = document.createTextNode("Modifier")
                eBoutonModifier.appendChild(eTextModifier);
                eBoutonAjouter = document.createElement("button");
                eBoutonAjouter.setAttribute("class", "btn btn-ajouter inline");
                eBoutonAjouter.setAttribute("btn", "ajouter_" + reponse.code_saq);
                eBoutonAjouter.addEventListener("click", function () {
                    quantite = document.getElementById("quantite" + reponse[i].quantite);
                    quantite = quantite.innerHTML.replace("Quantite: ", "");
                    quantite++;
                    document.getElementById("quantite" + reponse[i].quantite).innerHTML = "Quantite: " + quantite;
                    let transactionInfo = {
                        quantite: quantite,
                        cellier_id: idCellier,
                        bouteille_id: reponse[i].bouteille_id
                    };
                    let transac = new Transaction;
                    transac.update(reponse[i].transaction_id, transactionInfo, ).then(data => {
                       data;
                    });
                })
                eTextAjouter = document.createTextNode("Ajouter")
                eBoutonAjouter.appendChild(eTextAjouter);
                eBoutonBoire = document.createElement("button");
                eBoutonBoire.setAttribute("class", "btn btn-boire inline");
                eBoutonBoire.setAttribute("btn", "boire_" + reponse.code_saq);
                eBoutonBoire.addEventListener("click", function () {
                    quantite = document.getElementById("quantite" + reponse[i].quantite);
                    quantite = quantite.innerHTML.replace("Quantite: ", "");
                    quantite--;
                    document.getElementById("quantite" + reponse[i].quantite).innerHTML = "Quantite: " + quantite;
                    let transactionInfo = {
                        quantite: quantite,
                        cellier_id: idCellier,
                        bouteille_id: reponse[i].bouteille_id
                    };
                    let transac = new Transaction;
                    transac.update(reponse[i].transaction_id, transactionInfo, ).then(data => {
                        data;
                    });

                    if (quantite == 0) {
                        transac.destroy(reponse[i].transaction_id);
                        eTr1 = document.getElementById("trBouteille" + reponse[i].bouteille_id);
                        eTr1.innerHTML = "";

                    }
                })
                eTextBoire = document.createTextNode("Boire")
                eBoutonBoire.appendChild(eTextBoire);
                eDivBouton.appendChild(eBoutonModifier);
                eDivBouton.appendChild(eBoutonAjouter);
                eDivBouton.appendChild(eBoutonBoire);
                eTd2.appendChild(eDivBouton);
            }

        })
    }