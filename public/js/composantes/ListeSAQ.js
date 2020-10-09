function ListeSAQ() {
    const urlParams = new URLSearchParams(window.location.search);
    const recherche = {type: urlParams.get("type"), page: urlParams.get("page")};

    let recherche_type = document.getElementById("type");
    let recherche_page = document.getElementById("page");

    saq = new SAQ();
    saq.index(recherche.type, recherche.page).then(data => {
        let tableau = document.querySelector(".info tbody")
        tableau.innerHTML = ""


        data.map(b => {
            let tr = document.createElement("tr")
            tr.innerHTML = `
                    <td aria-label="nom">${b.nom}</td>
                    <td aria-label="code_saq">${b.code_saq}</td>
                    <td aria-label="pays">${b.pays}</td>
                    <td aria-label="description">${b.description}</td>
                    <td aria-label="prix">${b.prix_saq}$</td>
                    <td aria-label="url"><a href="${b.url_saq}">${b.url_saq}</a></td>
                    <td aria-label="image"><img class="width-100px" src="${b.url_image}" alt="${b.description}"></td>
                    <td aria-label="format">${b.format}</td>
                    <td aria-label="type">${getType(b.type_id)}</td>
                    <td aria-label="actions">
                       <button class="btn btn-ajouter inline width-max-content" type="submit" id=${b.code_saq}>Ajouter</button>
                        <span><p id="message_${b.code_saq}" class="margin-top-20px"</p></span>
                    </td>
                `;
            tableau.appendChild(tr);

            document.getElementById(b.code_saq).addEventListener("click", (evt) => {
                saq.store(b).then((json) => {
                    if (json) {
                        let pMessage = document.getElementById(`message_${evt.target.id}`);
                        pMessage.innerHTML = "Ajout bien effectué !";
                        pMessage.className = "success"
                    } else {
                        let pMessage = document.getElementById(`message_${evt.target.id}`);
                        pMessage.innerHTML = "Déjà en inventaire";
                        pMessage.className = "fail"

                    }
                })
            })
        })
        document.getElementById("ajouter_bouteilles_saq").addEventListener("click", (evt) => {
            saq.storeAll(recherche.type, recherche.page)
                .then(data => {
                    document.getElementById("ajouter_bouteilles_saq").disabled = true;
                    document.getElementById("ajouter_bouteilles_saq").style.cursor = "not-allowed"
                });
        })
    })
}
