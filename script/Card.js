import {
  popUpImageContent,
  popUpImageTitle,
  popUpImage,
  openPopUp,
} from "./utils.js";

// Crear Tarjetas Iniciales
export class Card {
  constructor(cardData, cardSelector) {
    this._src = cardData.link;
    this._alt = `imagen de ${cardData.name}`;
    this._text = cardData.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__photo")
      .addEventListener("click", () => {
        this._handleImageClick();
      });

    this._element
      .querySelector(".element__button-heart")
      .addEventListener("click", (evt) => {
        this._handleLikeCard(evt);
      });

    this._element
      .querySelector(".element__button-trash")
      .addEventListener("click", (evt) => {
        this._handleDeleteCard(evt);
      });
  }

  // Evento para abrir el pop-up de zoom de imagen
  _handleImageClick() {
    popUpImageContent.src = this._src;
    popUpImageContent.alt = `imagen de ${this._text}`;
    popUpImageTitle.textContent = this._text;

    openPopUp(popUpImage);
  }

  // Evento para el botón de 'like'
  _handleLikeCard(evt) {
    evt.target.classList.toggle("element__button-heart_active");
  }

  // Evento para el botón de eliminar tarjeta
  _handleDeleteCard(evt) {
    this._element.remove();
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__photo").src = this._src;
    this._element.querySelector(".element__photo").alt = this._alt;
    this._element.querySelector(".element__text").textContent = this._text;

    return this._element;
  }
}
