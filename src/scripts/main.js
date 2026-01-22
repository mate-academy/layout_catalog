// Динамическое добавление звезд на основе количества отзывов
document.querySelectorAll('.stars').forEach(starsContainer => {
  const reviewCount = parseInt(starsContainer.dataset.reviews, 10) || 0;
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    star.className = i < reviewCount ? 'stars__star stars__star--filled' : 'stars__star';
    starsContainer.appendChild(star);
  }
});

// Обработчик событий для кнопки "Buy"
document.querySelectorAll('.card__button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    // Логика обработки кнопки "Buy", например, открытие модального окна или переход на страницу покупки
    window.location.href = '/buy/product-id'; // или другой путь к странице покупки
  });
});
