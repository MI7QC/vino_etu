/**
 * Interface avec L'API celliers
 */

class Cellier {
    constructor() {
        this._URL_CELLIERS = `http://${window.location.host}/api/celliers`;
    }

    /**
     * Retourne sous forme de promesse tous les celliers
     * @returns {Promise<*>}
     */
    index() {
        return fetch(`${this._URL_USERS}`)
            .then(response => response.json())
            .then(data => data.data);
    }

    /**
     * Retourne sous forme de promesse les informations concernant un cellier en particulier
     * @param id
     * @returns {Promise<*>}
     */
    show(id) {
        return fetch(`${this._URL_CELLIERS}/${id}`)
            .then(response => response.json())
            .then(data => data.data);
    };

    /**
     * Enregistre un nouveau cellier
     * @param cellier
     * @returns {Promise<void>}
     */
    store(cellier) {
        return fetch(`${this._URL_CELLIERS}`, {
            method: "POST",
            body: JSON.stringify(cellier),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then(response => response.json())
            .catch(err => err);
    }

    /**
     * Modifie un cellier
     * @param id
     * @param data
     * @returns {Promise<void>}
     */
    update(id, data) {
        return fetch(`${this._URL_CELLIERS}/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then(response => response.json())
            .catch(err => err);
    };

    /**
     * Supprime un cellier
     * @param id
     * @returns {Promise<void>}
     */
    destroy(id) {
        return fetch(`${this._URL_CELLIERS}/${id}`, {
            method: "DELETE",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .catch(err => err);
    }
}