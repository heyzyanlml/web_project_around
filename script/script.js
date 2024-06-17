let popUp = document.querySelector(".pop-up");
let openButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".pop-up__close-button");
let saveButton = document.querySelector(".pop-up__save-button");
let likeButton = document.querySelectorAll(".element__button-heart");

/* Abrir y cerrar  el pop up */
function togglePopUp() {
  popUp.classList.toggle("pop-up_opened");
}

openButton.addEventListener("click", togglePopUp);
closeButton.addEventListener("click", togglePopUp);

/* Guardar pop up */
saveButton.addEventListener("click", savePopUp);

function savePopUp() {
  popUp.classList.remove("pop-up_opened");
}

/* Editar nombre y acerca de mi en el formulario */
// Selecciona formulario
let formElement = document.querySelector(".pop-up__form");

// Selecciona los elementos donde se muestra actualmente el nombre y el trabajo en el perfil
let profileName = document.querySelector(".profile__info-name");
let profileJob = document.querySelector(".profile__info_paragraph");

// Selecciona los elementos donde se introducirán los valores de los campos
let nameInput = formElement.querySelector(".pop-up__form-item-name");
let jobInput = formElement.querySelector(".pop-up__form-item-about");

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

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
