'use strict';

const container = document.querySelector('.container__cards');

const createCards = function(parentEl) {
  let count = 0;
  while (count !== 8) {
    parentEl.innerHTML += `
    <div class="card__wrapper">
    <div class="card" data-qa="card">
    <div class="card__image">
    <img src="images/imac.jpeg" alt="">
    </div>
    <span class="card__product-name">
     Моноблок APPLE A1419 iMac
     27" Retina 5K (MNED2UA/A)
    </span>
    <div class="card__code">
        Код товара: 195434
     </div>
     <div class="card__stars">
     <span></span>
      <span></span>
        <span></span>
        <span></span>
        <span class="card__stars-noactive"></span>
        <span>Отзывов: 5</span>
      </div>
      <div class="card__price">
        <span class="text">Цена:</span>
       <span class="price">69 999 грн</span>
     </div>
     <a href="#" class="card__button-buy" data-qa="hover" >Купить</a>
    </div>
    </div>
    `;
    count++;
  }
};

createCards(container);
