//Contenedor de Tarjetas
const cardContainer = document.querySelector(".elements");

//const popUp = document.querySelector(".pop-up");

// Formulario 'Editar Perfil'
const popUpProfile = document.getElementById("popUp-Profile");
export const openButton = document.querySelector(".profile__edit-button");

//Pop Up Zoom Imagen
const popUpImage = document.querySelector(".popup-image");
const popUpImageContent = document.querySelector(".pop-up__image-zoom");
const popUpImageTitle = document.querySelector(".pop-up__image-title");

const formElement = document.querySelector(".pop-up__form");
export const profileName = document.querySelector(".profile__info-name");
export const profileJob = document.querySelector(".profile__info-paragraph");
export const nameInput = formElement.querySelector(".pop-up__form-item-name");
export const jobInput = formElement.querySelector(".pop-up__form-item-about");

// Elementos del popUp card'
const popUpCard = document.getElementById("popUp-Card");
const formAddCard = document.getElementById("popUp-Form");
const ButtonAddCard = document.querySelector(".profile__add-button");

export const popUpConfirmation = document.querySelector("#popUp-Delete");

export const formConfig = {
  formElement: ".pop-up__form",
  inputElement: ".pop-up__form-item",
  submitButton: ".pop-up__save-button",
  errorNode: ".pop-up__form-error_",
  errorClass: "pop-up__form-item_error",
};

export {
  popUpImageContent,
  popUpImageTitle,
  popUpImage,
  cardContainer,
  formAddCard,
  popUpCard,
  ButtonAddCard,
  popUpProfile,
};
