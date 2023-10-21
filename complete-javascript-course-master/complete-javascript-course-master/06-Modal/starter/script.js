'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// The querySelectorAll method returns a static (non-live) NodeList of all elements that match a specified CSS selector within the document. If no matches are found, it returns an empty NodeList.
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const removeModalOverlay = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addModalOverlay = function () {
  console.log('Add Modal Overlay Called!');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let btn = 0; btn < btnsOpenModal.length; btn++) {
  console.log(btnsOpenModal[btn].textContent);
  btnsOpenModal[btn].addEventListener('click', removeModalOverlay);
}

btnCloseModal.addEventListener('click', addModalOverlay);
overlay.addEventListener('click', addModalOverlay);

//  TODO: Find out why Enter key not working for this code!
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  console.log(modal.classList.contains('hidden'));
  if (e.key === 'Enter' || e.key === 'Escape') {
    console.log('Inside if condition');
    if (!modal.classList.contains('hidden')) {
      console.log('Inside inner if condition');
      addModalOverlay();
    }
  }
});
