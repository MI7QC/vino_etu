/**
 * Class Modal qui permet de créer et gérer des modales.
 */
class Modal {
    constructor() {


        let modalElement = document.createElement("div");
        modalElement.className = "modal";

        modalElement.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
            </div>
        `;

        document.querySelector("body").appendChild(modalElement);
    }

    /**
     * Ouverture d'une fenêtre modal
     */
    static showModal() {
        let modal = document.querySelector(".modal");

        modal.classList.add("show-modal");

        document.querySelector(".close-button").addEventListener("click", evt => Modal.closeModal());;

        document.querySelector("body").addEventListener("keydown", evt => {
            if (evt.key === "Escape") {
                Modal.closeModal();
            }
        });

        modal.addEventListener("click", evt => {
            if (evt.target.classList.contains("modal")) {
                Modal.closeModal();
            }
        });
    }

    /**
     * Fermeture d'une fenêtre modal
     */
    static closeModal() {
        document.querySelector(".modal").classList.remove("show-modal");
        document.querySelector(".modal-content").innerHTML = "<span class='close-button'>&times;</span>";
    }

    /**
     * Réinitialisation du contenu du modal.
     * À utiliser quand plusieurs écrans doivent se succéder dans un modal.
     */
    static resetModal() {
        document.querySelector(".modal-content").innerHTML = "<span class='close-button'>&times;</span>";

        document.querySelector(".close-button").addEventListener("click", Modal.closeModal);
    }
}