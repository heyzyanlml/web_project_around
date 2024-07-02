let popUp = document.querySelector(".pop-up");

// Botones Formulario 'Editar Perfil'
let openButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".pop-up__close-button");
let saveButton = document.querySelector(".pop-up__save-button");

// Pop Up Zoom Imagen
const popUpImage = document.querySelector(".popup-image");
const popUpImageContent = document.querySelector(".pop-up__image-zoom");
const popUpImageTitle = document.querySelector(".pop-up__image-title");
const popUpImageCloseButton = popUpImage.querySelector(".pop-up__close-button");

function togglePopUp() {
  popUp.classList.toggle("pop-up_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

openButton.addEventListener("click", togglePopUp);
closeButton.addEventListener("click", togglePopUp);

saveButton.addEventListener("click", savePopUp);

function savePopUp() {
  popUp.classList.remove("pop-up_opened");
}

let formElement = document.querySelector(".pop-up__form");
let profileName = document.querySelector(".profile__info-name");
let profileJob = document.querySelector(".profile__info-paragraph");
let nameInput = formElement.querySelector(".pop-up__form-item-name");
let jobInput = formElement.querySelector(".pop-up__form-item-about");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
}

formElement.addEventListener("submit", handleProfileFormSubmit);

// Crear Tarjetas Iniciales

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const cardContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector("#card__template").content;
const cardClone = cardTemplate.cloneNode(true);
const cardElement = cardClone.querySelector(".element");

function createCard(card) {
  const cardClone = cardTemplate.cloneNode(true);
  const cardElement = cardClone.querySelector(".element");
  const cardPhoto = cardElement.querySelector(".element__photo");
  const cardInfo = cardElement.querySelector(".element__text");

  cardPhoto.src = card.link;
  cardPhoto.alt = `imagen de ${card.name}`;
  cardInfo.textContent = card.name;

  // Evento para abrir el pop-up de zoom de imagen
  cardPhoto.addEventListener("click", () => {
    popUpImageContent.src = card.link;
    popUpImageContent.alt = card.name;
    popUpImageTitle.textContent = card.name;
    popUpImage.classList.add("pop-up_opened");
  });

  // Evento para el botón de 'like'
  cardElement
    .querySelector(".element__button-heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__button-heart_active");
    });

  // Evento para el botón de eliminar tarjeta
  cardElement
    .querySelector(".element__button-trash")
    .addEventListener("click", function (evt) {
      cardElement.remove();
    });

  return cardElement;
}

// Agrega las tarjetas iniciales al DOM
document.addEventListener("DOMContentLoaded", () => {
  initialCards.forEach((card) => {
    const cardElement = createCard(card);
    cardContainer.appendChild(cardElement);
  });
});

// Elementos del formulario 'Agregar Tarjeta'
let popUpCard = document.getElementById("popUp-Card");
let formAddCard = document.getElementById("popUp-Form");
let ButtonAddCard = document.querySelector(".profile__add-button");
let closeButton2 = popUpCard.querySelector(".pop-up__close-button");

// Eventos para abrir y cerrar el formulario 'Agregar Tarjeta'
ButtonAddCard.addEventListener("click", function () {
  popUpCard.classList.add("pop-up_opened");
});

closeButton2.addEventListener("click", function () {
  popUpCard.classList.remove("pop-up_opened");
});

popUpImageCloseButton.addEventListener("click", function () {
  popUpImage.classList.remove("pop-up_opened");
});

// Función para el envío del formulario de agregar tarjeta
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  let nameValue = formAddCard.querySelector("#title");
  let linkValue = formAddCard.querySelector("#link");

  const newCard = {
    name: nameValue.value,
    link: linkValue.value,
  };

  const newcardElement = createCard(newCard);
  cardContainer.prepend(newcardElement);

  popUpCard.classList.remove("pop-up_opened");
  formAddCard.reset();
}

formAddCard.addEventListener("submit", handleAddCardFormSubmit);
