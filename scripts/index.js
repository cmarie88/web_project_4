let openFormButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.modal');
let closeButton = popup.querySelector('.close-button');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let inputName = document.querySelector('.form__input_type_name');
let inputDescription = document.querySelector('.form__input_type_description');

let form = document.querySelector('.form');

function toggleForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  popup.classList.toggle('modal_visible');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);


function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  popup.classList.toggle('modal_visible');
}

form.addEventListener('submit', handleFormSubmit);

