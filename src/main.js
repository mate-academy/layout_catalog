'use strict';
const card = `<div class="card" data-qa="card">
    <div class="image">
      <img src="./images/imac.jpeg" alt="">
    </div>
    <div class="info">
      <div class="title">
        <h3>Моноблок APPLE A1419 iMac 27" Retina 5K (MNED2UA/A)</h3>
      </div>
      <div class="product-code">
        <p>Код товара: 195434</p>
      </div>
      <div class="reviews">
        <div id="reviewStars-input">
          <input id="star-0" type="radio" class="stars">
          <label for="star-0">
            <img src="images/star-active.svg" alt="star">
          </label>
          <input id="star-1" type="radio" class="stars">
          <label for="star-1">
            <img src="images/star-active.svg" alt="star">
          </label>
          <input id="star-2" type="radio" class="stars">
          <label for="star-2">
            <img src="images/star-active.svg" alt="star">
          </label>
          <input id="star-3" type="radio" class="stars" checked>
          <label for="star-3">
            <img src="images/star-active.svg" alt="star">
          </label>
          <input id="star-4" type="radio" class="stars">
          <label for="star-4">
            <img src="images/star.svg" alt="star">
          </label>
        </div>
        <div class="number-of-reviews">
          <p>Отзывов: 5</p>
        </div>
      </div>
      <div class="price">
        <p>Цена: </p>
        <div class="cost">
          <p>69 999 грн</p>
        </div>
      </div>
      <div class="buy-button">
        <a href="#" data-qa="hover">Купить</a>
      </div>
    </div>
  </div>`;

let htmlElements = '';
for (let i = 0; i < 8; i++) {
  htmlElements += card;
}
const container = document.getElementById('container');
container.innerHTML = htmlElements;
