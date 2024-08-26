import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleDeleteSubmit }) {
    super({ popupSelector });
    this._handleDeleteSubmit = handleDeleteSubmit;
    this._formElement = this._popUp.querySelector(".pop-up__form");
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleDeleteSubmit(); // Acá tiene que ir la tarjeta

      this.close();
    });
  }
}
