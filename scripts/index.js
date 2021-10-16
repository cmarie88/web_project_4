const initialCards = [
  {
    caption: "Horseshoe Bend",
    image: "../../images/horseshoe-bend.jpg"
  },
  {
    caption: "Lake Powell",
    image: "images/lake-powell.jpg"
  },
  {
    caption: "Treasure Falls",
    image: "images/treasure.Falls.lawrence-melosantos-9Cg3ebqBaVE-unsplash.jpg"
  },
  {
    caption: "Navajo Lake",
    image: "images/navajo-lake.jr.jpg"
  },
  {
    caption: "Mesa Verde",
    image: ".images/mesa-verde.mariola-grobelska-IheRlfkl4iA-unsplash.jpg"
  },
  {
    caption: "Wolf Creek",
    image: "images/wolf-creek.alain--N6HozFz49Q-unsplash.jpg"
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

//Templates
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

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

initialCards.forEach(function (card) {
  //clone template
  const cardElement = cardTemplate.cloneNode(true);
  //query title element
  cardElement.querySelector(".card__caption").textContent = card.caption;
  //query image element
  cardElement.querySelector(".card__image").style.backgroundImage = card.image;
  //add event listeners to elements
  //append it to the list
  placesList.append(cardElement);
});
