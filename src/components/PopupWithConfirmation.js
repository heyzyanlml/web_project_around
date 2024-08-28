import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._formElement = this._popUp.querySelector(".pop-up__form");
  }

  open(handleDeleteSubmit) {
    super.open();
    this._handleDeleteSubmit = handleDeleteSubmit;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleDeleteSubmit();

      this.close();
    });
  }
}
