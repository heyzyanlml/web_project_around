import "./index.css";
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
  popUpConfirmation,
  popUpAvatar,
  avatarImage,
} from "../utils/utils.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import api from "../components/Api.js";

/*------------------------------------------------------------- */

const avatarNode = document.querySelector(".profile__avatar");

// Se inicializan variables sin datos para asignarselos después
let currentUser = null;
let cardList = null;

// Maneja la información del usuario
const userInfo = new UserInfo({
  nameSelector: profileName,
  jobSelector: profileJob,
});

// Muestra la información del Usuario
api.getUserInfo().then((user) => {
  currentUser = user;
  userInfo.setUserInfo({ name: user.name, job: user.about });
  avatarNode.src = user.avatar;
  // Crea las tarjetas iniciales
  api.getInitialCards().then((cards) => {
    cardList = new Section(
      {
        items: cards,
        renderer: (cardItem) => {
          const card = new Card(cardItem, "#card__template", currentUser, {
            handleCardClick: (src, text) =>
              popupImage.open({
                link: src,
                name: text,
              }),
            handleDeleteCard: (cardId, callback) => {
              deleteForm.open(() => {
                api.deleteCard(cardId).then(() => {
                  callback();
                });
              });
            },
            handleAddLike: (cardId) => {
              return api.addCardLike(cardId);
            },

            handleRemoveLike: (cardId) => {
              return api.deleteCardLike(cardId);
            },
          });

          const cardElement = card.createCard();

          cardList.addItem(cardElement);
        },
      },
      cardContainer
    );

    // Renderiza las tarjetas iniciales en el DOM
    cardList.renderItems();
  });
});

// Pop Up de Confirmación para Eliminar Tarjeta
const deleteForm = new PopupWithConfirmation({
  popupSelector: popUpConfirmation,
});
deleteForm.setEventListeners();

// PopUp con Imagen Zoom
const popupImage = new PopupWithImage({
  popupSelector: popUpImage,
});
popupImage.setEventListeners();

// Agregar tarjetas
const addCard = new PopupWithForm({
  popupSelector: popUpCard,
  handleFormSubmit: (formData) => {
    return api.createCard(formData.link, formData.title).then((card) => {
      const newCardInstance = new Card(card, "#card__template", currentUser, {
        handleCardClick: (src, text) =>
          popupImage.open({
            link: src,
            name: text,
          }),
        handleDeleteCard: (cardId, callback) => {
          deleteForm.open(() => {
            api.deleteCard(cardId).then(() => {
              callback();
            });
          });
        },
        handleAddLike: (cardId) => {
          return api.addCardLike(cardId);
        },

        handleRemoveLike: (cardId) => {
          return api.deleteCardLike(cardId);
        },
      });

      const newcardElement = newCardInstance.createCard();

      cardContainer.prepend(newcardElement);
    });
  },
});
ButtonAddCard.addEventListener("click", () => {
  enableValidation(formConfig);
  addCard.open();
});
addCard.setEventListeners();

// Editar el Perfil
const editProfile = new PopupWithForm({
  popupSelector: popUpProfile,
  handleFormSubmit: (inputValues) => {
    return api
      .updateUserProfile(inputValues.name, inputValues.about)
      .then((user) => {
        userInfo.setUserInfo({ name: user.name, job: user.about });
        //editProfile.close();
      });
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

// Actualizar foto de perfil del avatar
const avatarForm = new PopupWithForm({
  popupSelector: popUpAvatar,
  handleFormSubmit: (inputValues) => {
    return api
      .updateAvatar(inputValues.link)
      .then((user) => {
        // Actualiza el DOM con la nueva imagen del avatar
        document.querySelector(".profile__avatar").src = user.avatar;
        //avatarForm.close();
      })
      .catch((err) => console.error(err));
  },
});

avatarImage.addEventListener("click", () => {
  // enableValidation(formConfig);
  avatarForm.open();
});

avatarForm.setEventListeners();

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
