function ListeBouteilles() {

    bouteilles = new Bouteille();
    bouteilles.index().then(data => {
        let tableau = document.querySelector(".info tbody")
        tableau.innerHTML = "";

        new Modal();
        let modalContent = document.getElementsByClassName("modal-content");


        data.map(b => {

            let date = new Date(b.created_at);
            date = `${date.getDate()} ${nomMois(date.getMonth())} ${date.getFullYear()}`

            let tr = document.createElement("tr")
            tr.innerHTML = `
                    <td aria-label="#">${b.id}</td>
                    <td aria-label="nom">${b.nom}</td>
                    <td aria-label="code_saq">${b.code_saq ?? "&Oslash;" }</td>
                    <td aria-label="pays">${b.pays}</td>
                    <td aria-label="description">${b.description ?? "&Oslash;"}</td>
                    <td aria-label="prix">${b.prix_saq ? b.prix_saq + "$" : "&Oslash;"}</td>
                    <td aria-label="url"><a href="${b.url_saq ?? "#"}">${b.url_saq ?? "&Oslash;"}</a></td>
                    <td aria-label="image"><img class="width-100px" src="${b.url_image ?? "https://www.saq.com/media/wysiwyg/placeholder/category/06.png"}" alt="${b.description}"></td>
                    <td aria-label="format">${b.format}</td>
                    <td aria-label="type">${getType(b.type_id)}</td>
                    <td aria-label="created_at">${date}</td>
                    <td aria-label="actions" >
                        <button class="btn btn-boire inline btn_modal_window width-max-content margin-bottom-10px" btn="modifier_${b.code_saq}" type="submit">Modifier</button>
                        <button class="btn btn-accepter inline btn_modal_window width-max-content" btn="supprimer_${b.code_saq}" type="submit">Supprimer</button>
                    </td>
                `;
            tableau.appendChild(tr);

            // Bouton supprimer
            let btnSupprimer = document.querySelector(`[btn="supprimer_${b.code_saq}"]`);
            // Modal bouton supprimer
            btnSupprimer.addEventListener("click", () => {
                modalContent[0].innerHTML = `
                        <span class="close-button">&times;</span>
                        <h2>Confirmation suppression</h2>
                        <p>Voulez vous vraiment supprimer la bouteille "${b.nom}" ?</p>
                        <button class="btn btn-accepter inline width-max-content" id="oui">Oui</button>
                        <button class="btn btn-accepter inline width-max-content" type="submit" id="non">Non</button>`;
                Modal.showModal();

                document.getElementById("oui").addEventListener("click", () => {
                    supprimerBouteille(b.id);
                    tr.remove();
                })


                document.getElementById("non").addEventListener("click", () => {
                    Modal.closeModal();
                })


            })

            // TODO : Messages erreurs et modification
            // Bouton modifier
            let btnModifier = document.querySelector(`[btn="modifier_${b.code_saq}"]`);
            // Modal bouton modifier
            btnModifier.addEventListener("click", () => {
                modalContent[0].innerHTML = `
                        <span class="close-button">&times;</span>
                        <h2>Modifier une bouteille</h2>
                        <form class="form-ajouter" action="/" method="post">
                          <label for="nom">Nom : </label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="nom" name="nom" value="${b.nom}"><br><br>
                          <label for="code_saq">Code : </label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="code_saq" name="code_saq" value="${b.code_saq}"><br><br>
                          <label for="pays">Pays :</label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="pays" name="pays" value="${b.pays}"><br><br>
                          <label for="description">Description :</label>
                          <textarea class="input-ajouter margin-bottom-10px margin-bottom-10px" id="description" name="description">${b.description}</textarea>
                          <label for="url_saq">URL : </label>
                          <input class="input-ajouter margin-bottom-10px" name="url_saq" id="url_saq" value="${b.url_saq}"><br><br>
                          <label for="url_image">URL de l'image : </label>
                          <input class="input-ajouter margin-bottom-10px" name="url_image" id="url_image" value="${b.url_image}"><br><br>
                          <label for="format">Format : </label>
                          <input class="input-ajouter margin-bottom-10px" name="format" id="format" value="${b.format}"><br><br>
                          <label for="type">Type de vin : </label>
                          <select class="input-ajouter" name="type" id="type">
                            <option name="rouge" id="rouge" value="1">Rouge</option>
                            <option name="blanc" id="blanc" value="1">Blanc</option>
                            <option name="rose" id="rose" value="1">Rosé</option>
                          </select>
                          <button class="btn btn-accepter">Accepter</button>
                        </form>`;


                Modal.showModal();
            })
        })

        // TODO : Messages erreurs et ajout
        // Bouton ajouter
        let btnAjouter = document.querySelector(`[btn="ajouter"]`);

        // Modal bouton ajouter
        btnAjouter.addEventListener("click", () => {
            modalContent[0].innerHTML = `
                        <span class="close-button">&times;</span>
                        <h2>Ajouter une bouteille</h2>
                        <form class="form-ajouter" action="/" method="post">
                          <span class="fail font-weight-bold" id="mess-nom"></span>
                          <label for="nom">Nom : </label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="nom" name="nom"><br>
                          <span class="fail font-weight-bold" id="mess-code"></span>
                          <label for="code_saq">Code : </label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="code_saq" name="code_saq"><br>
                          <span class="fail font-weight-bold" id="mess-pays"></span>
                          <label for="pays">Pays :</label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="pays" name="pays"><br>
                          <span class="fail font-weight-bold" id="mess-description"></span>
                          <label for="description">Description :</label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="description" name="description"><br>
                          <span class="fail font-weight-bold" id="mess-prix"></span>
                          <label for="prix">Prix :</label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="prix" name="prix"><br>
                          <span class="fail font-weight-bold" id="mess-url"></span>
                          <label for="url_saq">ULR : </label>
                          <input class="input-ajouter margin-bottom-10px" name="url_saq" id="url_saq"><br>
                          <span class="fail font-weight-bold" id="mess-image"></span>
                          <label for="url_image">URL de l'image : </label>
                          <input class="input-ajouter margin-bottom-10px" name="url_image" id="url_image"><br>
                          <span class="fail font-weight-bold" id="mess-format"></span>
                          <label for="format">Format : </label>
                          <input class="input-ajouter margin-bottom-10px" name="format" id="format"><br>
                          <label for="type">Type de vin : </label>
                          <select class="input-ajouter margin-bottom-10px" name="type" id="type">
                            <option name="rouge" id="rouge" value="1">Rouge</option>
                            <option name="blanc" id="blanc" value="2">Blanc</option>
                            <option name="rose" id="rose" value="3">Rosé</option>
                          </select>
                          <button class="btn btn-accepter" id="accepter">Accepter</button>
                        </form>`
            Modal.showModal();

            document.getElementById("accepter").addEventListener("click", (evt) => {
                evt.preventDefault();
                let bouteille = {
                    nom: document.getElementById("nom").value,
                    pays: document.getElementById("pays").value,
                    format: document.getElementById("format").value,
                    type_id: document.getElementById("type").value
                };

                if (document.getElementById("code_saq").value) {
                    bouteille.code_saq = document.getElementById("code_saq").value
                }
                if (document.getElementById("description").value) {
                    bouteille.description = document.getElementById("description").value
                }
                if (document.getElementById("url_saq").value) {
                    bouteille.url_saq = document.getElementById("url_saq").value
                }
                if (document.getElementById("url_image").value) {
                    bouteille.url_image = document.getElementById("url_image").value
                }
                ajouterBouteille(bouteille);
            })
        })
    })
}


function ajouterBouteille(bouteille) {
    let bouteilles = new Bouteille();

    let erreurs = validation(bouteille);

    if (erreurs.length === 0) {
        bouteilles.store(bouteille).then(() => {
            Modal.closeModal();
            ListeBouteilles();
        })
    }
}


function supprimerBouteille(id) {
    let bouteilles = new Bouteille();
    bouteilles.destroy(id);
    Modal.closeModal();
}

function validation(bouteille) {

    let erreurs = [];

    let messNom = document.getElementById("mess-nom");
    let messPays = document.getElementById("mess-pays");
    let messUrl = document.getElementById("mess-url");
    let messImage = document.getElementById("mess-image");
    let messFormat = document.getElementById("mess-format");

    messNom.innerText = "";
    messPays.innerText = "";
    messUrl.innerText = "";
    messImage.innerText = "";
    messFormat.innerText = "";

    // Validation des données
    if (bouteille.nom.length <= 0) {
        messNom.innerText = "Le nom est requis !";
        erreurs.push("nom");
    }

    if (bouteille.pays.length <= 0) {
        messPays.innerText = "Le pays est requis !";
        erreurs.push("pays");
    }

    if (bouteille.url_saq.length > 0 && !isURL(bouteille.url_saq)) {
        messUrl.innerText = "Une URL valide est requise !";
        erreurs.push("url_saq");
    }

    if (bouteille.url_image.length > 0 && !isURL(bouteille.url_image)) {
        messImage.innerText = "Une URL valide est requise !";
        erreurs.push("url_image");
    }

    if (bouteille.format.length <= 0) {
        messFormat.innerText = "Le format est requis !";
        erreurs.push("format");
    }

    return erreurs;
}