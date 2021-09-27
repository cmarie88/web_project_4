const openFormButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.modal');
const closeButton = popup.querySelector('.form__close-button');

function toggleForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  popup.classList.toggle('modal_visible');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const inputName = document.querySelector('.form__input_type_name');
const inputDescription = document.querySelector('.form__input_type_description');

const form = document.querySelector('.form');

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
}

form.addEventListener('submit', handleFormSubmit);

