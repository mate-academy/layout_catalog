'use strict';

import '../styles/index.scss';
import cardHTML from '../components/card.html?raw';
import productImage from '../images/imac.jpeg';

const catalog = document.querySelector('#catalog');

if (catalog) {
  catalog.innerHTML = Array(8).fill(cardHTML).join('');

  catalog.querySelectorAll('.card').forEach((card, index) => {
    card.querySelector('.card__image').src = productImage;

    if (index === 0) {
      card.setAttribute('data-qa', 'card');
      card.querySelector('.card__buy')
        .setAttribute('data-qa', 'card-hover');
    }
  });
}
