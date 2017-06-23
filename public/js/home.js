'use strict';

const searchButton = document.getElementById('form-autcomplete');
const charities = [
  'Housing and Services Inc',
  'City Harvest',
  'Foodbank NYC',
];

function searchFromList() {
  console.log(charities);
}

searchButton.addEventListener('search', searchFromList);
