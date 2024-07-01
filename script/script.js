let popUp = document.querySelector(".pop-up");

// Botones Formulario 'Editar Perfil'
let openButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".pop-up__close-button");
let saveButton = document.querySelector(".pop-up__save-button");

/* Abrir y cerrar  el pop up */
function togglePopUp() {
  popUp.classList.toggle("pop-up_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

openButton.addEventListener("click", togglePopUp);
closeButton.addEventListener("click", togglePopUp);
/* ------------------------------------------------------------------------ */
/* Guardar pop up */
saveButton.addEventListener("click", savePopUp);

function savePopUp() {
  popUp.classList.remove("pop-up_opened");
}
/* ------------------------------------------------------------------------ */
/* Editar nombre y acerca de mi en el formulario */

// Selecciona formulario
let formElement = document.querySelector(".pop-up__form");

// Selecciona los elementos donde se muestra actualmente el nombre y el trabajo en el perfil
let profileName = document.querySelector(".profile__info-name");
let profileJob = document.querySelector(".profile__info-paragraph");

// Selecciona los elementos donde se introducirán los valores de los campos
let nameInput = formElement.querySelector(".pop-up__form-item-name");
let jobInput = formElement.querySelector(".pop-up__form-item-about");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Obtén los valores de cada campo desde la propiedad 'value'
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  // Inserta los nuevos valores utilizando la propiedad 'textContent'
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener("submit", handleProfileFormSubmit);

/* ------------------------------------------------------------------------ */

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

// Contenedor de Tarjetas
const cardContainer = document.querySelector(".elements");
// Template de Tarjeta
const cardTemplate = document.querySelector("#card__template").content;

// Clona el contenido del template de tarjeta
const cardClone = cardTemplate.cloneNode(true);

// Selecciona y asigna los elementos del template
const cardElement = cardClone.querySelector(".element");

function createCard(card) {
  // Clona el contenido del template de tarjeta
  const cardClone = cardTemplate.cloneNode(true);

  // Selecciona y asigna los elementos del template
  const cardElement = cardClone.querySelector(".element");
  const cardPhoto = cardElement.querySelector(".element__photo");
  const cardInfo = cardElement.querySelector(".element__text");

  // Asigna los valores dinámicos
  cardPhoto.src = card.link;
  cardPhoto.alt = `imagen de ${card.name}`;
  cardInfo.textContent = card.name;

  // Botón de Like
  cardElement
    .querySelector(".element__button-heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__button-heart_active");
    });

  // Botón de Eliminar tarjeta
  cardElement
    .querySelector(".element__button-trash")
    .addEventListener("click", function (evt) {
      cardElement.remove();
    });

  // Devuelve el elemento completo de la tarjeta
  return cardElement;
}

// Agrega las tarjetas iniciales al DOM
document.addEventListener("DOMContentLoaded", () => {
  initialCards.forEach((card) => {
    const cardElement = createCard(card);
    cardContainer.appendChild(cardElement);
  });
});

/* --------------------------- Agregar Nuevas Tarjetas --------------------------------------------- */

// Selecciona formulario 'Agregar Tarjeta'
let popUpCard = document.getElementById("popUp-Card");
let formAddCard = document.getElementById("popUp-Form");

// Selecciona los botones del form
let ButtonAddCard = document.querySelector(".profile__add-button");
let closeButton2 = popUpCard.querySelector(".pop-up__close-button");

// Acción Abrir formulario
ButtonAddCard.addEventListener("click", function () {
  popUpCard.classList.add("pop-up_opened");
});

// Acción Cerrar formulario
closeButton2.addEventListener("click", function () {
  popUpCard.classList.remove("pop-up_opened");
});

// Función para el envío del formulario de agregar tarjeta
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  // Obtén los valores de cada campo desde la propiedad 'value'
  let nameValue = formAddCard.querySelector("#title");
  let linkValue = formAddCard.querySelector("#link");

  const newCard = {
    name: nameValue.value,
    link: linkValue.value,
  };

  // Crea y agrega la nueva tarjeta al inicio del contenedor
  const newcardElement = createCard(newCard);
  cardContainer.prepend(newcardElement);

  // Cerrar formulario
  popUpCard.classList.remove("pop-up_opened");

  // Resetea el formulario
  formAddCard.reset();
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formAddCard.addEventListener("submit", handleAddCardFormSubmit);
