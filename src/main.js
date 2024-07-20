'use strict';

const container = document.getElementById('container');

const cardTemplate = document.getElementById('card-template');

for (let i = 0; i < 7; i++) {
  const clone = cardTemplate.cloneNode(true);
  clone.removeAttribute('id');
  container.appendChild(clone);
}
