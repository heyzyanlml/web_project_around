import { Card } from "./Card.js";
import { cardContainer, formConfig } from "./utils.js";
import { FormValidator } from "./FormValidator.js";

/*------------------------------------------------------------- */

// Objeto para Tarjetas Iniciales
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

// Agrega las tarjetas iniciales al DOM -  Instacia
initialCards.forEach((item) => {
  const card = new Card(item, "#card__template");
  const cardElement = card.createCard();

  cardContainer.appendChild(cardElement);
});

// Activar la validación en todos los formularios - Instacia la validación de cada form
const enableValidation = (formConfig) => {
  const forms = document.querySelectorAll(formConfig.formElement);
  forms.forEach((formElement) => {
    const formValidator = new FormValidator(formConfig, formElement);
    formValidator.enableValidation();
  });
};

enableValidation(formConfig);
