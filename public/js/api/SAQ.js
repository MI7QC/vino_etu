/**
 * Interface avec L'API saq
 */
class SAQ {
    constructor() {
        this._URL_SAQ = `http://${window.location.host}/api/saq`;
    }

    /**
     * Retourne sous forme de promesse les résultats d'une recherche dans le catalogue de la SAQ.
     * @param type Type de vin
     * @param page Numéro de la page
     * @returns {Promise<*>}
     */
    async index(type = "rouge", page = 1) {
        return await fetch(`${this._URL_SAQ}?type=${type}&page=${page}`)
            .then(res => res.json())
            .then(data => data);
    }

    /**
     * Enregistre une bouteille de la SAQ dans la table bouteilles si elle n'y est pas déjà présente
     * @param bouteille
     * @returns {Promise<void>}
     */
    async store(bouteille) {
        return await fetch(`${this._URL_SAQ}`, {
            method: "POST",
            body: JSON.stringify(bouteille),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if (json == "Déjà en inventaire") {
                    return false;
                }
                return true;
            })
            .catch(err => err);
    };

    /**
     * Enregistre toutes le bouteilles résultant d'une recherche dans le catalogue de la SAQ
     * @param type
     * @param page
     */
    // TODO: Optimiser le nombre de requêtes (ne plus passer pas this.index)
    async storeAll(type, page) {
        let nbr_ajout = 0;
        let index = this.index(type, page).then(async data => {
            data.map(async b => {
                let store = this.store(b)
              return  store.then(json => {
                    if (json) {
                        nbr_ajout++;
                    }
                    document.getElementById("message").innerText = `${nbr_ajout} bouteilles ajoutées.`
                }).catch(err => err);
            });
        })
    };
}