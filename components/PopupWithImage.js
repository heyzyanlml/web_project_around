import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popUpImageZoom = this._popUp.querySelector(".pop-up__image-zoom");
    this._popUpImageTitle = this._popUp.querySelector(".pop-up__image-title");
  }

  // Evento para abrir el pop-up de zoom de imagen
  open({ link, name }) {
    this._popUpImageZoom.src = link;
    this._popUpImageZoom.alt = name;
    this._popUpImageTitle.textContent = name;

    super.open();
  }
}
