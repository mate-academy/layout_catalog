const products = [
  {
    imgSrc: 'images/imac.jpeg',
    altText: 'Apple iMac',
    title: 'APPLE A1419 iMac 27" Retina 5K Monoblock (MNED2UA/A)',
    code: '195434',
    reviews: 5,
    price: '$2,199',
  },
  // Другие карточки
];

const productContainer = document.getElementById('product-container');

products.forEach((product) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-qa', 'card');

  card.innerHTML = `
    <img class="card__img" src="${product.imgSrc}" alt="${product.altText}" />
    <h2 class="card__title">${product.title}</h2>
    <p class="card__text-code">Product code: ${product.code}</p>
    <div class="card__review">
      <div class="stars">
        <span class="stars__star"></span>
        <span class="stars__star"></span>
        <span class="stars__star"></span>
        <span class="stars__star"></span>
        <span class="stars__star"></span>
      </div>
      <p class="card__text-review">Reviews: ${product.reviews}</p>
    </div>
    <div class="card__price">
      <p class="card__text-price">Price:</p>
      <p class="card__text-value">${product.price}</p>
    </div>
    <a href="#" class="card__button">Buy</a>
  `;

  productContainer.appendChild(card);
});

