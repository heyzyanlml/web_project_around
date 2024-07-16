// Función para mostrar el error
const showInputError = (
  formElement,
  inputElement,
  validationMessage,
  config
) => {
  console.log(inputElement);
  const errorNode = formElement.querySelector(
    `${config.errorNode}${inputElement.name}`
  );
  inputElement.classList.add(config.errorClass);
  errorNode.textContent = validationMessage;
};

// Función para esconder el error
const hideInputError = (formElement, inputElement, config) => {
  const errorNode = formElement.querySelector(
    `${config.errorNode}${inputElement.name}`
  );
  inputElement.classList.remove(config.errorClass);
  errorNode.textContent = "";
};

// Función para validar las entradas del usuario
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

// Función para verificar si hay entradas inválidas
const hasInvalidInput = (inputElements) => {
  return inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Función para habilitar/deshabilitar el botón de envío
const toggleButtonState = (inputElements, submitButton, config) => {
  if (hasInvalidInput(inputElements)) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

// Función para agregar event listeners a las entradas del formulario
const setEventListeners = (formElement, config) => {
  const inputElements = Array.from(
    formElement.querySelectorAll(config.inputElement)
  );
  const submitButton = formElement.querySelector(config.submitButton);
  toggleButtonState(inputElements, submitButton, config);

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (event) => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputElements, submitButton, config);
    });
  });
};

// Función para habilitar la validación en todos los formularios
const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formElement);
  forms.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

enableValidation({
  formElement: ".pop-up__form",
  inputElement: ".pop-up__form-item",
  submitButton: ".pop-up__save-button",
  errorNode: ".pop-up__form-error_",
  errorClass: "pop-up__form-item_error",
});
