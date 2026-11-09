'use strict';

const input = document.getElementById('cardInput');
const container = document.getElementById('cardsContainer');

input.addEventListener('input', () => {
  const count = parseInt(input.value) || 0;
  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);
  } 
});
