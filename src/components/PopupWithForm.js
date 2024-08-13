import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popUp.querySelector(".pop-up__form");
    this._inputList = this._formElement.querySelectorAll(".pop-up__form-item");
  }

  _getInputValues() {
    this._formValues = {}; // Crea un objeto vacío

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());

      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
