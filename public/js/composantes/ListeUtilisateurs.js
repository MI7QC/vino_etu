function ListeUtilisateurs() {
    let users = new User();
    users.index().then(data => {
        new Modal();
        let modalContent = document.getElementsByClassName("modal-content");

        // Injection des données des bouteilles
        let tableau = document.querySelector(".info tbody");
        tableau.innerHTML = "";
        data.map(u => {
            let tr = document.createElement("tr")
            tr.innerHTML = `
                    <td aria-label="#">${u.id}</td>
                    <td aria-label="nom">${u.name}</td>
                    <td aria-label="email">${u.email}</td>
                    <td aria-label="type">${u.roles[0] ? u.roles[0].name : "utilisateur"}</td>
                    <td aria-label="actions">
                        <button class="btn btn-boire inline btn_modal_window width-max-content" btn="modifier_${u.email}" type="submit">Modifier</button>
                        <button class="btn btn-accepter inline btn_modal_window width-max-content" btn="supprimer_${u.email}" type="submit">Supprimer</button>
                    </td>`;

            tableau.appendChild(tr);

            // Bouton supprimer
            let btnSupprimer = document.querySelector(`[btn="supprimer_${u.email}"]`);
            // Modal bouton supprimer
            btnSupprimer.addEventListener("click", () => {
                modalContent[0].innerHTML = `
                        <span class="close-button">&times;</span>
                        <h2>Confirmation suppression</h2>
                        <p>Voulez vous vraiment supprimer l'utilisateur dont l'email est ${u.email} ?</p>
                        <button class="btn btn-accepter inline width-max-content" id="oui">Oui</button>
                        <button class="btn btn-accepter inline width-max-content" type="submit" id="non">Non</button>`;
                Modal.showModal();

                document.getElementById("oui").addEventListener("click", () => {
                    supprimerUtilisateur(u.id);
                    tr.remove();
                })

                document.getElementById("non").addEventListener("click", () => {
                    Modal.closeModal();
                })
            })

            // TODO : Messages erreurs et modification
            // Bouton modifier
            let btnModifier = document.querySelector(`[btn="modifier_${u.email}"]`);
            // Modal bouton modifier
            btnModifier.addEventListener("click", () => {
                modalContent[0].innerHTML = `<span class="close-button">&times;</span>
                        <h2>Modifier un utilisateur</h2>
                        <form class="form-ajouter" action="/" method="post">
                          <input type="hidden" name="id" id="id" value="${u.id}">
                          <span class="fail font-weight-bold" id="mess-nom"></span>
                          <label for="name">Nom : </label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="name" name="name" value="${u.name}"><br>
                          <span class="fail font-weight-bold" id="mess-email"></span>
                          <label for="email">Adresse courriel : </label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="email" name="email" value="${u.email}"><br>
                          <label for="type">rôle :</label>
                            <select class="input-ajouter margin-bottom-5px" id="role" name="role">
                                <option value=2>Utilisateur</option>
                                <option value=1 ${u.roles[0].name === "administrateur" ? "selected" : ""}>Administrateur</option>
                            </select><br>
                          <span class="fail font-weight-bold" id="mess-password"></span>
                          <label for="password">Mot de passe :</label>
                          <input class="input-ajouter margin-bottom-10px" type="password" id="password" name="password"><br>
                          <span class="fail font-weight-bold" id="mess-confirmation"></span>
                          <label for="confirmation">Confirmation du Mot de passe :</label>
                          <input class="input-ajouter margin-bottom-10px" type="password" id="confirmation" name="confirmation"><br>
                          <button class="btn btn-accepter margin-top-30px" id="accepter">Accepter</button>
                        </form>`;
                Modal.showModal();

                document.getElementById("accepter").addEventListener("click", (evt) => {
                    evt.preventDefault();
                    let user = {
                        id: document.getElementById("id").value,
                        name: document.getElementById("name").value,
                        email: document.getElementById("email").value,
                        role: document.getElementById("role").value,
                        password: document.getElementById("password").value,
                        confirmation: document.getElementById("confirmation").value
                    }
                    modifierUtilisateur(user);
                })
            })
        })

        // Bouton ajouter
        let btnAjouter = document.querySelector(`[btn="ajouter"]`);

        // Modal bouton ajouter
        btnAjouter.addEventListener("click", () => {
            modalContent[0].innerHTML = `
                        <span class="close-button">&times;</span>
                        <h2>Enregistrer un utilisateur</h2>
                        <form class="form-ajouter" action="/" method="post">
                          <span class="fail font-weight-bold" id="mess-nom"></span>
                          <label for="name">Nom : </label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="name" name="name"><br>
                          <span class="fail font-weight-bold" id="mess-email"></span>
                          <label for="email">Adresse courriel : </label>
                          <input class="input-ajouter margin-bottom-10px" type="text" id="email" name="email"><br>
                          <label for="type">rôle :</label>
                            <select class="input-ajouter margin-bottom-5px" id="role" name="role">
                                <option value=2>Utilisateur</option>
                                <option value=1>Administrateur</option>
                            </select><br>
                          <span class="fail font-weight-bold" id="mess-password"></span>
                          <label for="password">Mot de passe :</label>
                          <input class="input-ajouter margin-bottom-10px" type="password" id="password" name="password"><br>
                          <span class="fail font-weight-bold" id="mess-confirmation"></span>
                          <label for="confirmation">Confirmation du Mot de passe :</label>
                          <input class="input-ajouter margin-bottom-10px" type="password" id="confirmation" name="confirmation"><br>
                          <button class="btn btn-accepter margin-top-30px" id="accepter">Accepter</button>
                        </form>`;
            Modal.showModal();

            document.getElementById("accepter").addEventListener("click", (evt) => {
                evt.preventDefault();
                let user = {
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    role: document.getElementById("role").value,
                    password: document.getElementById("password").value,
                    confirmation: document.getElementById("confirmation").value
                }
                ajouterUtilisateur(user);
            })
        })
    })
}

function ajouterUtilisateur(user) {
    let users = new User();

    let erreurs = validation(user);
    let messPassword = document.getElementById("mess-password");
    messPassword.innerText = "";

    if (user.password.length < 8) {
        messPassword.innerText = "Le mot de passe doit faire au moins 8 caractères de long."
        erreurs.push("password");
    }

    if (erreurs.length === 0) {
        users.store(user).then(() => {
            Modal.closeModal();
            ListeUtilisateurs();
        })
    }
}

function modifierUtilisateur(user) {
    let users = new User();

    let erreurs = validation(user);
    let messPassword = document.getElementById("mess-password");
    messPassword.innerText = "";

    if (user.password.length > 0 && user.password.length < 8) {
        messPassword.innerText = "Le mot de passe doit faire au moins 8 caractères de long."
        erreurs.push("password");
    }

    if (erreurs.length === 0) {
        users.update(user.id, {
            name: user.name,
            email: user.email,
            role: user.role
        }).then(() => {
            Modal.closeModal();
            ListeUtilisateurs();
        })
    }
}

function supprimerUtilisateur(id) {
    let users = new User();
    users.destroy(id)
        .then(() => {
            Modal.closeModal();
        });
}

function validation(user) {

    let erreurs = [];

    let messNom = document.getElementById("mess-nom");
    let messEmail = document.getElementById("mess-email");
    let messConfirmation = document.getElementById("mess-confirmation");

    messNom.innerText = "";
    messEmail.innerText = "";
    messConfirmation.innerText = "";

    // Validation des données
    if (user.name.length <= 0) {
        messNom.innerText = "Le nom est requis !";
        erreurs.push("nom");
    }

    if (!isEmail(user.email)) {
        messEmail.innerText = "Adresse courriel non valide !";
        erreurs.push("email");
    }

    if (user.password !== user.confirmation) {
        messConfirmation.innerText = "Les mots de passes ne concordent pas."
        erreurs.push("confirmation");
    }

    return erreurs;
}