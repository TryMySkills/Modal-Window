'use strict';
const openModal = document.querySelector('.show');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close');

const addHidden = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeModal.addEventListener('click', addHidden);

overlay.addEventListener('click', addHidden);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    addHidden();
  }
});
