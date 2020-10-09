/**
 * Interface avec L'API transactions
 */
class Transaction {
    constructor() {
        this._URL_TRANSACTION = `http://${window.location.host}/api/transactions`;
    }

    /**
     * Retourne sous forme de promesse toutes les transactions liées aux bouteilles
     * @returns {Promise<*>}
     */
    index() {
        return fetch(`${this._URL_TRANSACTION}`)
            .then(response => response.json())
            .then(data => data.data);
    }

    /**
     * Retourne sous forme de promesse une transaction liée à une bouteille
     * @param id
     * @returns {Promise<*>}
     */
    show(id) {
        return fetch(`${this._URL_TRANSACTION}/${id}`)
            .then(response => response.json())
            .then(data => data.data);
    };

    /**
     * Enregistre une nouvelle transaction
     * @param transaction
     * @returns {Promise<void>}
     */
    store(transaction) {

        return fetch(`${this._URL_TRANSACTION}`, {
                method: "POST",
                body: JSON.stringify(transaction),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                if (!json.erreur) {
                    return "Ajout effectué";
                }
                throw json.erreur;
            })
    }

    /**
     * Modifie une transaction
     * @param id
     * @param data
     * @returns {Promise<void>}
     */
    update(id, data) {
        return fetch(`${this._URL_TRANSACTION}/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .catch(err => err);
    };


    /**
     * Supprime une transaction
     * @param id
     * @returns {Promise<void>}
     */
    destroy(id) {
        return fetch(`${this._URL_TRANSACTION}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .catch(err => err);
    }
}