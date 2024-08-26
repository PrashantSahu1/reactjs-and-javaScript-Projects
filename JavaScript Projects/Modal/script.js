'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);

//const btnsOpenModal = document.querySelector(`.show-modal`); //this is the limitation of the querySelector that we will select only the first element amoung the 3 element with the same class.So we use querySelectorAll.

const btnsOpenModal = document.querySelectorAll(`.show-modal`); //now we have a list of all the elements with the same class so we can perform list operations on them.

const openModal = function () {
  console.log(`Button Clicked`);
  modal.classList.remove(`hidden`); //we can remove multiple classes with commas
  overlay.classList.remove(`hidden`);

  //other method is by manipulating the element style(but not the best way)
  //modal.style.display = `block`;
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

//using ESC key

//`e` here is a eventObject which is passed to the function as a parameter
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
