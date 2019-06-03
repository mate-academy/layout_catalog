'use strict';

var prodItem = '\
  <article class="prodCard" data-qa="card">\
    <img class="prodPic" src="./images/imac.jpeg" alt="I-Mac monoblock computer"></br>\
    <h1 class="prodName">Моноблок APPLE A1419 iMac 27" Retina 5K (MNED2UA/A)</h1>\
    <p class="prodID">Код товара: 195434</p>\
\
    <div class="prodRefContainer">\
      <div class="prodRefStar">\
        <img src="./images/star-active.svg" alt="1st star active">\
        <img src="./images/star-active.svg" alt="2nd star active">\
        <img src="./images/star-active.svg" alt="3rd star active">\
        <img src="./images/star-active.svg" alt="4th star active">\
        <img src="./images/star.svg" alt="5th star inactive">\
      </div>\
      <p class="prodRef">Отзывов: 5</p>\
    </div>\
\
    <div class="prodPriceContainer">\
      <p>Цена:</p>\
      <p class="prodPrice">69 999 грн</p>\
    </div>\
\
    <a class="buy" href="#" data-qa="hover">КУПИТЬ</a>\
  </article>';

document.write(prodItem);
