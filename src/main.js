'use strict';
const card = `<div class="card" data-qa="card">\n`
  + `  <div class="image">\n`
  + `    <img src="./images/imac.jpeg" alt="">\n`
  + `  </div>\n`
  + `  <div class="info">\n`
  + `    <div class="title">\n`
  + `      <h3>Моноблок APPLE A1419 iMac 27" Retina 5K (MNED2UA/A)</h3>\n`
  + `    </div>\n`
  + `    <div class="product-code">\n`
  + `      <p>Код товара: 195434</p>\n`
  + `    </div>\n`
  + `    <div class="reviews">\n`
  + `      <div id="reviewStars-input">\n`
  + `        <input id="star-0" type="radio" class="stars">\n`
  + `        <label for="star-0">\n`
  + `          <img src="images/star-active.svg" alt="star">\n`
  + `        </label>\n`
  + `        <input id="star-1" type="radio" class="stars">\n`
  + `        <label for="star-1">\n`
  + `          <img src="images/star-active.svg" alt="star">\n`
  + `        </label>\n`
  + `        <input id="star-2" type="radio" class="stars">\n`
  + `        <label for="star-2">\n`
  + `          <img src="images/star-active.svg" alt="star">\n`
  + `        </label>\n`
  + `        <input id="star-3" type="radio" class="stars" checked>\n`
  + `        <label for="star-3">\n`
  + `          <img src="images/star-active.svg" alt="star">\n`
  + `        </label>\n`
  + `        <input id="star-4" type="radio" class="stars">\n`
  + `        <label for="star-4">\n`
  + `          <img src="images/star.svg" alt="star">\n`
  + `        </label>\n`
  + `      </div>\n`
  + `      <div class="number-of-reviews">\n`
  + `        <p>Отзывов: 5</p>\n`
  + `      </div>\n`
  + `    </div>\n`
  + `    <div class="price">\n`
  + `      <p>Цена: </p>\n`
  + `      <div class="cost">\n`
  + `        <p>69 999 грн</p>\n`
  + `      </div>\n`
  + `    </div>\n`
  + `    <div class="buy-button">\n`
  + `      <a href="#" data-qa="hover">Купить</a>\n`
  + `    </div>\n`
  + `  </div>\n`
  + `</div>`;

let htmlElements = '';
for (let i = 0; i < 8; i++) {
  htmlElements += card;
}
const container = document.getElementById('container');
container.innerHTML = htmlElements;
