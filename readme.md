# Frontend practice with catalog page

Create an HTML page with a catalog. Develop semantic page structure as shown on [the mockup](https://www.figma.com/file/ojkArVazq7vsX0nbpn9CxZ/Moyo-%2F-Catalog-(ENG)?node-id=32249%3A354).

x- use `Header`, `Stars` and `Card` blocks from previous tasks but rewrite them using BEM and SCSS
x- remove old `data-qa` attributes
x- add `data-qa="nav-hover"` (not just `hover`) to the 4th nav link for testing (`Laptops & computers`)
x- add `data-qa="card"` to the first card
x- add `data-qa="card-hover"` (not just `hover`) to the link `Buy` inside the first card
x- nav links color is not `black` anymore (nav links should have `#060b35` color)
x- add the class `is-active` to the first link (`Apple`) in the navigation
x- use `<main>` tag for cards container
x- use the grid for cards with different numbers of columns:
x  - 1 for the smaller screens
x  - 2 starting at `488px`
x  - 3 starting from `768px`
x  - 4 starting from `1024px`
x- cards have fixed width - `200px`
x- the gap between cards should be - `46px` horizontally and `48px` vertically
x- cards container(catalog) have fixed paddings (`50px` vertically and `40px` horizontally)

x Make all the changes smooth on hover (during 300ms):
x- increase the card by 20 percent (neighboring cards **should not be** affected)
x- change the card title text color to `#34568b` when the card is hovered (`.card:hover .card__title`)
x- change navigation link text color to `#00acdc`
x- change the button background to `#fff` and text color to `#00acdc` on hover

> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

*Important note*: In this task, you are allowed to link `*.scss` files directly in HTML `<link>` tags using `href` attribute.
This is possible because [we use the Parcel library](https://en.parceljs.org/scss.html) to bundle your solution's source code.

## Checklist

❗️ Replace `<your_account>` with your GitHub username and copy the links to the `Pull Request` description:
- [DEMO LINK](https://o-koszalka.github.io/layout_catalog/)
- [TEST REPORT LINK](https://o-koszalka.github.io/layout_catalog/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [x] All components follow BEM and use SCSS
- [x] Repeated sizes and special colors are put to variables
- [x] Grid is used for the columns
- [x] Cards are shown in 1, 2, 3, or 4 columns based on screen resolution
- [x] All changes on `:hover` are smooth
- [x] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)
