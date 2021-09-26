const openFormButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.modal');
const closeButton = popup.querySelector('.form__close-button');

function toggleForm() {
  popup.classList.toggle('modal_visible');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);
