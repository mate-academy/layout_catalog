// Отримуємо шаблонну картку
const templateCard = document.querySelector(".product-card[data-qa='card']");

// Кількість копій, які потрібно створити
const numberOfClones = 8; // Наприклад, 5 копій

// Функція для клонування та додавання карток
function cloneCards(containerId, numberOfClones) {
  const container = document.getElementById(containerId);
  if (!container || !templateCard) return;

  // Видаляємо шаблонну картку з DOM, щоб вона не відображалася
  templateCard.remove();

  // Клонуємо шаблонну картку задану кількість разів
  for (let i = 0; i < numberOfClones; i++) {
    const card = templateCard.cloneNode(true); // Клонуємо картку
    container.appendChild(card); // Додаємо картку до контейнера
  }
}

// Запускаємо клонування при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  cloneCards("cards-container", numberOfClones);
});
