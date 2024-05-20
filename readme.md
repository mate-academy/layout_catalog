# Frontend practice with catalog page

Create HTML page with catalog. Develop semantic page structure as shown on [the mockup](https://www.figma.com/file/ojkArVazq7vsX0nbpn9CxZ/Moyo-%2F-Catalog-(ENG)?node-id=32249%3A354).

- use `Header`, `Stars` and `Card` blocks from previous tasks but rewrite them using BEM and SCSS
- remove old `data-qa` attributes
- add `data-qa="nav-hover"` (not just `hover`) to the 4th nav link for testing (`Laptops & computers`)
- add `data-qa="card"` to the first card
- add `data-qa="card-hover"` (not just `hover`) to the link `Buy` inside the first card
- nav links color is not `black` any more (nav links should have `#060b35` color)
- add class `is-active` to the first link (`Apple`) in navigation
- use `<main>` tag for cards container
- use grid for cards with different number of columns:
  - 1 for the smaller screens
  - 2 starting at `488px`
  - 3 starting from `768px`
  - 4 starting from `1024px`
- cards have fixed width - `200px`
- gap between cards should be - `46px` horyzontally and `48px` vertically
- cards container(catalog) have fixed paddings (`50px` vertically and `40px` horyzontally)

Make all the changes smooth on hover (during 300ms):
- increase the card by 20 percent (neighboring cards **should not be** affected)
- change the card title text color to `#34568b` when the card is hovered (`.card:hover .card__title`)
- change navigation link text color to `#00acdc`
- change the button background to `#fff` and text color to `#00acdc` on hover

> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

## Checklist

❗️ Replace `<your_account>` with your Github username and copy the links to `Pull Request` description:
- [DEMO LINK](https://SerhiiDielovskiy.github.io/layout_catalog/)
- [TEST REPORT LINK](https://SerhiiDielovskiy.github.io/layout_catalog/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [ ] All component follow BEM and use SCSS
- [ ] repaeted sizes and special colors are put to variables
- [ ] Grid is used for the columns
- [ ] cards are shown in 1, 2, 3 or 4 columns based on screen resolution
- [ ] All changes on `:hover` are smooth
- [ ] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)
