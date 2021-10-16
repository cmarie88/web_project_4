const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

//Wrappers
let form = document.querySelector('.form');
let popup = document.querySelector('.modal');
let placesList = document.querySelector('.card-container');

//Buttons
let openFormButton = document.querySelector('.profile__edit-button')
let closeButton = popup.querySelector('.close-button');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

//Inputs
let inputName = document.querySelector('.form__input_type_name');
let inputDescription = document.querySelector('.form__input_type_description');

//Functions

function toggleForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  popup.classList.toggle('modal_visible');
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  popup.classList.toggle('modal_visible');
}

//Event Listeners
openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);
form.addEventListener('submit', handleFormSubmit);

initialCards.forEach(function(card) {
  //clone template
  //query title element
  //query image element
  //add event listeners to elements
  //append it to the list


})
