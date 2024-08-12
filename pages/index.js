import { Card } from "../components/Card.js";
import {
  cardContainer,
  formConfig,
  popUpImage,
  popUpCard,
  ButtonAddCard,
  popUpProfile,
  openButton,
  profileName,
  profileJob,
  nameInput,
  jobInput,
} from "../utils/utils.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

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

// Crea una instancia de `Section` para manejar las tarjetas iniciales
const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const card = new Card(cardItem, "#card__template", {
        handleCardClick: (src, text) =>
          popupImage.open({
            link: src,
            name: text,
          }),
      });

      const cardElement = card.createCard();

      cardList.addItem(cardElement);
    },
  },
  cardContainer
);

// Renderiza las tarjetas iniciales en el DOM
cardList.renderItems();

//Crea una instancia del PopUp con Imagen Zoom
const popupImage = new PopupWithImage({
  popupSelector: popUpImage,
});
popupImage.setEventListeners();

// Crea una instancia del PopUpWithForm para agregar Imagenes
const addCard = new PopupWithForm({
  popupSelector: popUpCard,
  handleFormSubmit: (formData) => {
    const newCardInstance = new Card(
      {
        name: formData.title,
        link: formData.link,
      },
      "#card__template"
    );

    const newcardElement = newCardInstance.createCard();

    cardContainer.prepend(newcardElement);
  },
});
ButtonAddCard.addEventListener("click", () => {
  enableValidation(formConfig);
  addCard.open();
});
addCard.setEventListeners();

// Crea una instancia del PopUpWithForm para el Form de Editar el Perfil
const userInfo = new UserInfo({
  nameSelector: profileName,
  jobSelector: profileJob,
});

const editProfile = new PopupWithForm({
  popupSelector: popUpProfile,
  handleFormSubmit: (inputValues) => {
    profileName.textContent = inputValues.name;
    profileJob.textContent = inputValues.about;
    editProfile.close();
  },
});
openButton.addEventListener("click", () => {
  enableValidation(formConfig);
  editProfile.open();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
});
editProfile.setEventListeners();

// Activa la validación en todos los formularios - Instacia la validación de cada form
const enableValidation = (formConfig) => {
  const forms = document.querySelectorAll(formConfig.formElement);
  forms.forEach((formElement) => {
    const formValidator = new FormValidator(formConfig, formElement);
    formValidator.enableValidation();
  });
};

// Habilita la validación para todos los formularios
enableValidation(formConfig);
