'use strict';
const formDonate = document.getElementById('form-donate');
const btnFacebook = document.getElementById('btn-facebook');
const modalSignIn = document.getElementById('modal-sign-in');
const modalSignInOverlay = document.getElementById('modal-sign-in-overlay');

formDonate.addEventListener('submit', e => {
  modalSignInOverlay.classList.add('shown');  
  e.preventDefault();
});

modalSignIn.addEventListener('click', e => {
  e.stopPropagation();
});

modalSignInOverlay.addEventListener('click', () => {
  modalSignInOverlay.classList.remove('shown');
});

btnFacebook.addEventListener('click', () => {
  formDonate.submit();
});
