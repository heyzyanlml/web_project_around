import { Card } from "./Card.js";

//Contenedor de Tarjetas
const cardContainer = document.querySelector(".elements");

const popUp = document.querySelector(".pop-up");

// Botones Formulario 'Editar Perfil'
const openButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".pop-up__close-button");
const saveButton = document.querySelector(".pop-up__save-button");

//Pop Up Zoom Imagen
const popUpImage = document.querySelector(".popup-image");
const popUpImageContent = document.querySelector(".pop-up__image-zoom");
const popUpImageTitle = document.querySelector(".pop-up__image-title");
const popUpImageCloseButton = popUpImage.querySelector(".pop-up__close-button");

const formElement = document.querySelector(".pop-up__form");
const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-paragraph");
const nameInput = formElement.querySelector(".pop-up__form-item-name");
const jobInput = formElement.querySelector(".pop-up__form-item-about");

// Elementos del popUp card'
const popUpCard = document.getElementById("popUp-Card");
const formAddCard = document.getElementById("popUp-Form");
const ButtonAddCard = document.querySelector(".profile__add-button");
const closeButton2 = popUpCard.querySelector(".pop-up__close-button");

export const formConfig = {
  formElement: ".pop-up__form",
  inputElement: ".pop-up__form-item",
  submitButton: ".pop-up__save-button",
  errorNode: ".pop-up__form-error_",
  errorClass: "pop-up__form-item_error",
};

/* ------------------------------------------------------------------------------------------------------ */

function openPopUp(popUp) {
  popUp.classList.add("pop-up_opened");
  document.addEventListener("keydown", escCloseHandler);
}

function closePopUp(popUp) {
  popUp.classList.remove("pop-up_opened");
  document.removeEventListener("keydown", escCloseHandler);
  document.removeEventListener("click", popupEventListeners);
}

function openProfilePopUp() {
  openPopUp(popUp);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

openButton.addEventListener("click", openProfilePopUp);
closeButton.addEventListener("click", () => closePopUp(popUp));

function savePopUp() {
  closePopUp(popUp);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  if (nameValue && jobValue) {
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
    formElement.reset();
    savePopUp();
  }
}

formElement.addEventListener("submit", handleProfileFormSubmit);

// Eventos para abrir y cerrar el formulario 'Agregar Tarjeta'
ButtonAddCard.addEventListener("click", () => openPopUp(popUpCard));
closeButton2.addEventListener("click", () => closePopUp(popUpCard));
popUpImageCloseButton.addEventListener("click", () => closePopUp(popUpImage));

// Función para el envío del formulario de agregar tarjeta
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = formAddCard.querySelector("#title");
  const linkValue = formAddCard.querySelector("#link");

  const newCard = {
    name: nameValue.value,
    link: linkValue.value,
  };

  const newCardInstance = new Card(newCard, "#card__template");
  const newcardElement = newCardInstance.createCard();

  cardContainer.prepend(newcardElement);

  closePopUp(popUpCard);
  formAddCard.reset();
}

formAddCard.addEventListener("submit", handleAddCardFormSubmit);

//Función para cerrar popUp dando click fuera de este
const popupEventListeners = () => {
  const popupList = Array.from(document.querySelectorAll(".pop-up"));
  popupList.forEach((popupElement) => {
    popupElement.addEventListener("click", function (evt) {
      if (evt.target.classList.contains("pop-up")) {
        closePopUp(popUp);
        closePopUp(popUpImage);
        closePopUp(popUpCard);
      }
    });
  });
};
popupEventListeners();

// Función para cerrar con 'esc'
function escCloseHandler(evt) {
  if (evt.key === "Escape") {
    document
      .querySelectorAll(".pop-up_opened")
      .forEach((popUp) => closePopUp(popUp));
  }
}

export {
  popUpImageContent,
  popUpImageTitle,
  openPopUp,
  popUpImage,
  cardContainer,
};
