export default class Popup {
  constructor({ popupSelector }) {
    this._popUp = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButton = this._popUp.querySelector(".pop-up__close-button");
  }

  open() {
    this._popUp.classList.add("pop-up_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popUp.classList.remove("pop-up_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    // Listener para el botón de cierre
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    // Listener para cerrar el popup haciendo clic fuera del contenido
    this._popUp.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("pop-up")) {
        this.close();
      }
    });
  }
}
