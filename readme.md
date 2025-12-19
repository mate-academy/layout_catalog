# Frontend practice with catalog page

Create an HTML page with a catalog. Develop semantic page structure as shown on [the mockup](https://www.figma.com/file/ojkArVazq7vsX0nbpn9CxZ/Moyo-%2F-Catalog-(ENG)?node-id=32249%3A354).

- use `Header`, `Stars` and `Card` blocks from previous tasks but rewrite them using BEM and SCSS X
- remove old `data-qa` attributes X
- add `data-qa="nav-hover"` (not just `hover`) to the 4th nav link for testing (`Laptops & computers`) X
- add `data-qa="card"` to the first card X
- add `data-qa="card-hover"` (not just `hover`) to the link `Buy` inside the first card X
- nav links color is not `black` anymore (nav links should have `#060b35` color) X
- add the class `is-active` to the first link (`Apple`) in the navigation X
- use `<main>` tag for cards container X
- use the grid for cards with different numbers of columns: X
  - 1 for the smaller screens
  - 2 starting at `488px`
  - 3 starting from `768px`
  - 4 starting from `1024px`
- cards have fixed width - `200px` X
- the gap between cards should be - `48px` horizontally and `46px` vertically X
- cards container(catalog) have fixed paddings (`50px` vertically and `40px` horizontally) X

Make all the changes smooth on hover (during 300ms):
- increase the card by 20 percent (neighboring cards **should not be** affected) X
- change the card title text color to `#34568b` when the card is hovered (`.card:hover .card__title`) X
- change navigation link text color to `#00acdc` X
- change the button background to `#fff` and text color to `#00acdc` on hover  X

> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

*Important note*: In this task, you are allowed to link `*.scss` files directly in HTML `<link>` tags using `href` attribute.
This is possible because [we use the Parcel library](https://en.parceljs.org/scss.html) to bundle your solution's source code.

## Checklist

❗️ Replace `<your_account>` with your GitHub username and copy the links to the `Pull Request` description:
- [DEMO LINK](https://<your_account>.github.io/layout_catalog/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_catalog/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [X] All components follow BEM and use SCSS
- [X] Repeated sizes and special colors are put to variables
- [X] Grid is used for the columns
- [X] Cards are shown in 1, 2, 3, or 4 columns based on screen resolution
- [X] All changes on `:hover` are smooth
- [X] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)
