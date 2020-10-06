    let eDivIndex = document.querySelector(".container-index");    
    let listCelliers = document.querySelector("#listCelliers h1");
    let eUl = document.createElement("ul");
    let idUtilisateur = document.getElementById("idUtilisateur").value
    let userApi = new User;
    userApi.showCellier(idUtilisateur).then((data => {
    console.log(data);
        if(data.length === 0){
            creeCellier();
            location.reload();
        }else{            
            data.map(cellier => {
                bouteilles(cellier.id)
        })
        }
    }))


function creeCellier(){
    let celliers = new Cellier();
        let cellier = {
            nom: "cellier",
            user_id: idUtilisateur,
        };
        celliers.store(cellier);
}

    function bouteilles(evt) {        
       
        let idCellier = evt;
        console.log(idCellier);
        let accueille = document.getElementById("accueille")
            console.log(accueille);
            let containerBouteille = document.createElement("div");
            containerBouteille.setAttribute("class","container_bouteille")
            let eTable = document.createElement("table");
            accueille.appendChild(containerBouteille).appendChild(eTable);
            var reponse = fetch("http://vino-etu/api/affichageDetails/"+idCellier);
            var reponseJson = reponse.then(function(res){
                return res.json();
            });
            reponseJson.then(function(reponse){
                        console.log("je suis dans le fetch de bouteille",reponse);
                        for(let i =0; i<reponse.length; i++){
                           //console.log(reponse[i])

                            let eTr1 = document.createElement("tr");
                            let eDivImg = document.createElement("div");
                            eDivImg.setAttribute("class","img_bouteille");
                            eTd1 = document.createElement("td");
                            eImg = document.createElement("img");
                            eImg.setAttribute("class","grosseur_img")
                            eImg.setAttribute("src",reponse[i].url_image);
                            eImg.setAttribute("alt","bouteille");
                            eTable.appendChild(eTr1).appendChild(eDivImg).appendChild(eTd1).appendChild(eImg);
                            eTd2 = document.createElement("td");
                            ePNom = document.createElement("p");
                            eTextNom = document.createTextNode("Nom: "+reponse[i].nom);
                            ePNom.appendChild(eTextNom);
                            ePQuantite = document.createElement("p");
                            eTextQuantite = document.createTextNode("Quantite: "+reponse[i].quantite);
                            ePQuantite.appendChild(eTextQuantite);
                            ePPays = document.createElement("p");
                            eTextPays = document.createTextNode("Pays: "+reponse[i].pays);
                            ePPays.appendChild(eTextPays);
                            ePType = document.createElement("p");
                            eTextType = document.createTextNode("Type: "+reponse[i].type);
                            ePType.appendChild(eTextType);
                            ePMillesime = document.createElement("p");
                            eTextMillesime = document.createTextNode("Millesime: "+reponse[i].millesime);
                            ePMillesime.appendChild(eTextMillesime);
                           eLien = document.createElement("a");                            
                           eLien.setAttribute("href",reponse[i].url_saq);
                           eLien.setAttribute("alt","lien ver la bouteille "+reponse[i].nom+"du site SAQ");
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
                           eBoutonModifier.setAttribute("class","btn btn-modifier inline");
                           eBoutonModifier.setAttribute("btn","modifier_"+reponse.code_saq);
                           eBoutonModifier.addEventListener("click",function(){
                               console.log("transaction "+reponse[i].transaction_id+" millisime "+reponse[i].millesime);
                               var idTransaction = reponse[i].transaction_id;
                             
                               let t = new Transaction();
                                    t.show(idTransaction).then(dataU => {
                                    console.log({dataU});
                                });

                           })
                           eTextModifier = document.createTextNode("Modifier")
                           eBoutonModifier.appendChild(eTextModifier);
                           eBoutonAjouter = document.createElement("button");
                           eBoutonAjouter.setAttribute("class","btn btn-ajouter inline");
                           eBoutonAjouter.setAttribute("btn","ajouter_"+reponse.code_saq);
                           eBoutonAjouter.addEventListener("click",function(){
                            console.log("je suis Ajouter");
                        })
                           eTextAjouter = document.createTextNode("Ajouter")
                           eBoutonAjouter.appendChild(eTextAjouter);
                           eBoutonBoire = document.createElement("button");
                           eBoutonBoire.setAttribute("class","btn btn-boire inline");
                           eBoutonBoire.setAttribute("btn","boire_"+reponse.code_saq);
                           eBoutonBoire.addEventListener("click",function(){
                            console.log("je suis Boire");
                        })                           
                           eTextBoire = document.createTextNode("Boire")
                           eBoutonBoire.appendChild(eTextBoire);
                           eDivBouton.appendChild(eBoutonModifier);
                           eDivBouton.appendChild(eBoutonAjouter);
                           eDivBouton.appendChild(eBoutonBoire);
                            eTd2.appendChild(eDivBouton);
                        }
/*
<table>
    <tr>
        <div class="img_bouteille">
        <td>
            <img src="${data.url_image}" alt="bouteille" witdh="150" height="225">
        </td>
        </div>
        <td>
        <p>Nom : <b>${data.nom}</b></p>
        <p>Pays : <b>${data.pays}</b></p>
        <p>Type : <b>${getType(data.type_id)}</b></p>
        <a href="${data.url_saq}">Voir SAQ</a>
        <div class="btn_bouteille">
        <button class="btn btn-modifier inline" btn="modifier_${data.code_saq}">Modifier</button>
        <button class="btn btn-ajouter inline" btn="ajouter_${data.code_saq}">Ajouter</button>
        <button class="btn btn-boire inline" btn="boire_${data.code_saq}">Boire</button>
        </div>
    </td>
    </tr>
</table>
*/
                    })
                    
    }

