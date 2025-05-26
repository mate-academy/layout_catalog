# Frontend practice with catalog page

Create an HTML page with a catalog. Develop semantic page structure as shown on [the mockup](https://www.figma.com/file/ojkArVazq7vsX0nbpn9CxZ/Moyo-%2F-Catalog-(ENG)?node-id=32249%3A354).

- use `Header`, `Stars` and `Card` blocks from previous tasks but rewrite them using BEM and SCSS
- remove old `data-qa` attributes
- add `data-qa="nav-hover"` (not just `hover`) to the 4th nav link for testing (`Laptops & computers`)
- add `data-qa="card"` to the first card
- add `data-qa="card-hover"` (not just `hover`) to the link `Buy` inside the first card
- nav links color is not `black` anymore (nav links should have `#060b35` color)
- add the class `is-active` to the first link (`Apple`) in the navigation
- use `<main>` tag for cards container
- use the grid for cards with different numbers of columns:
  - 1 for the smaller screens
  - 2 starting at `488px`
  - 3 starting from `768px`
  - 4 starting from `1024px`
- cards have fixed width - `200px`
- the gap between cards should be - `46px` horizontally and `48px` vertically
- cards container(catalog) have fixed paddings (`50px` vertically and `40px` horizontally)

Make all the changes smooth on hover (during 300ms):
- increase the card by 20 percent (neighboring cards **should not be** affected)
- change the card title text color to `#34568b` when the card is hovered (`.card:hover .card__title`)
- change navigation link text color to `#00acdc`
- change the button background to `#fff` and text color to `#00acdc` on hover

> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

*Important note*: In this task, you are allowed to link `*.scss` files directly in HTML `<link>` tags using `href` attribute.
This is possible because [we use the Parcel library](https://en.parceljs.org/scss.html) to bundle your solution's source code.

## Checklist

❗️ Replace `<your_account>` with your GitHub username and copy the links to the `Pull Request` description:
- [DEMO LINK](https://<your_account>.github.io/layout_catalog/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_catalog/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [ ] All components follow BEM and use SCSS
- [ ] Repeated sizes and special colors are put to variables
- [ ] Grid is used for the columns
- [ ] Cards are shown in 1, 2, 3, or 4 columns based on screen resolution
- [ ] All changes on `:hover` are smooth
- [ ] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)




Практика з Frontend — сторінка каталогу
Створи HTML-сторінку з каталогом. Розроби семантичну структуру сторінки, як показано на макеті.

Вимоги:
Використай блоки Header, Stars і Card з попередніх завдань, але перепиши їх, використовуючи BEM і SCSS.

Видали старі атрибути data-qa.

Додай data-qa="nav-hover" (саме так, не просто hover) до 4-го пункту меню навігації (Laptops & computers).

Додай data-qa="card" до першої картки.

Додай data-qa="card-hover" (не просто hover) до посилання "Buy" всередині першої картки.

Колір тексту посилань навігації більше не чорний — він має бути #060b35.

Додай клас is-active до першого посилання навігації (Apple).

Для контейнера з картками використай тег <main>.

Використай CSS Grid для карток з різною кількістю колонок:

1 колонка для найменших екранів

2 колонки — починаючи з ширини 488px

3 колонки — з 768px

4 колонки — з 1024px

Картки мають фіксовану ширину — 200px.

Відстані між картками:

Горизонтальна — 46px

Вертикальна — 48px

Внутрішні відступи (padding) для контейнера з картками — 50px зверху і знизу, 40px зліва і справа.

Анімації при наведенні (всі зміни повинні відбуватись плавно протягом 300 мс):
Збільшуй картку на 20% при наведенні (сусідні картки не повинні змінюватись).

Зміни колір тексту заголовка картки на #34568b, коли наводиш курсор на картку:

scss
Копіювати
Редагувати
.card:hover .card__title
Зміни колір тексту посилання навігації на #00acdc при наведенні.

Для кнопки "Buy" — при наведенні зроби фон #fff, а текст — #00acdc.

ℹ️ Примітка:
У цьому завданні дозволено безпосередньо підключати SCSS-файли в HTML за допомогою тега <link href="styles.scss" ...>, оскільки використовується бібліотека Parcel для збірки, яка підтримує SCSS:
Parcel і SCSS

✅ Чекліст
❗️ Замініть <your_account> на свій GitHub-акаунт та додайте посилання до опису Pull Request:

DEMO LINK

TEST REPORT LINK

❗️ Скопіюйте цей чекліст в опис PR після посилань і поставте - [x] навпроти кожного пункту, коли він виконаний.

 Усі компоненти дотримуються BEM і використовують SCSS

 Повторювані розміри й кольори винесені в змінні

 Для колонок використовується Grid

 Картки показуються у 1, 2, 3 або 4 колонки залежно від ширини екрану

 Всі зміни при наведенні є плавними

 Код відповідає вимогам до стилю ❗️
