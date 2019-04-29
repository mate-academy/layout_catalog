'use strict';
const card = document.querySelector('.wraper');
const mainBlock = document.getElementsByTagName('section');
for (let i = 0; i < 7; i++) {
  const newCard = card.cloneNode(true);
  mainBlock[0].appendChild(newCard);
}
