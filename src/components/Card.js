// Crear Tarjetas Iniciales
export class Card {
  constructor(
    cardData,
    cardSelector,
    user,
    { handleCardClick, handleDeleteCard, handleAddLike, handleRemoveLike }
  ) {
    this._cardData = cardData;
    this._src = cardData.link;
    this._alt = `imagen de ${cardData.name}`;
    this._text = cardData.name;
    this._user = user;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
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
        this._handleCardClick(this._src, this._text);
      });

    this._element
      .querySelector(".element__button-heart")
      .addEventListener("click", (evt) => {
        this._handleLikeCard(evt);
      });

    this._element
      .querySelector(".element__button-trash")
      .addEventListener("click", (evt) => {
        // Toma como parámetro el id de la tarjeta y si es el mío, borrará la tarjeta
        this._handleDeleteCard(this._cardData._id, () => {
          this._element.remove();
        });
      });
  }

  // Maneja el botón de 'like'
  _handleLikeCard(evt) {
    const counter = this._element.querySelector(".element__counter");

    // Si mi usuario ya le dio like, eliminalo
    if (this._cardData.likes.some((like) => like._id === this._user._id)) {
      this._handleRemoveLike(this._cardData._id).then((card) => {
        this._cardData = card;
        evt.target.classList.remove("element__button-heart_active");
        counter.textContent = this._cardData.likes.length;
      });
    } else {
      // Si mi usuario no le dio like, agregalo
      this._handleAddLike(this._cardData._id).then((card) => {
        this._cardData = card;
        evt.target.classList.add("element__button-heart_active");
        counter.textContent = this._cardData.likes.length;
      });
    }
  }

  // Método para el botón de eliminar tarjeta
  _handleDeleteCard(evt) {
    this._element.remove();
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__photo").src = this._src;
    this._element.querySelector(".element__photo").alt = this._alt;
    this._element.querySelector(".element__text").textContent = this._text;

    const trashButton = this._element.querySelector(".element__button-trash");
    const likeButton = this._element.querySelector(".element__button-heart");

    //Si la tarjeta no tiene mi id, no aparece el botón de eliminar
    if (this._user._id !== this._cardData.owner._id) {
      trashButton.remove();
    }

    // Verifica si el usuario actual ya ha dado "me gusta" a esta tarjeta,
    // Si es así, muestra el botón de "me gusta" como activo
    if (this._cardData.likes.some((like) => like._id === this._user._id)) {
      likeButton.classList.add("element__button-heart_active");
      const counter = this._element.querySelector(".element__counter");
      counter.textContent = this._cardData.likes.length;
    }

    return this._element;
  }
}
