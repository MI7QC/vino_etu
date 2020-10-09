/**
 * Interface avec L'API celliers/bouteilles
 */
class CellierBouteille {
    constructor() {
        this._URL_CELLIERS = `http://${window.location.host}/api/celliers`;
    }

    /**
     * Retourne sous forme de promesse tout l'historique des transactions d'un cellier
     * @param cellier
     * @returns {Promise<*>}
     */
    index(cellier) {
        return fetch(`${this._URL_CELLIERS}/${cellier}/bouteilles`)
            .then(response => response.json())
            .then(data => data.data);
    }

    /**
     * Retourne sous forme de promesse l'historique des transactions d'une bouteille d'un cellier
     * @param cellier_id
     * @param bouteille_id
     * @returns {Promise<*>}
     */
    show(cellier_id, bouteille_id) {
        return fetch(`${this._URL_CELLIERS}/${cellier_id}/bouteilles/${bouteille_id}`)
            .then(response => response.json())
            .then(data => data.data);
    };

    /**
     * Ajoute une transaction d'une bouteille à un cellier précis
     * @param cellier_id
     * @param transaction
     * @returns {Promise<void>}
     */
    store(cellier_id, transaction) {
        return fetch(`${this._URL_CELLIERS}/${cellier_id}/bouteilles`, {
            method: "POST",
            body: JSON.stringify(transaction),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then(response => response.json())
            .catch(err => err);
    }
}