# Frontend practice with catalog page
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://ivan-kadykalo.github.io/layout_catalog/)
- [TEST REPORT LINK](https://ivan-kadykalo.github.io/layout_catalog/report/html_report/)

<!-- > Follow [this instructions](https://github.com/mate-academy/layout_task-guideline#how-to-solve-the-layout-tasks-on-github) -->
<!-- ___
> Write styles in `src/styles/main.scss` instead of `src/style.css`.
___ -->

<!-- ## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/layout_catalog/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️ -->

<!-- ## The task
Create HTML page with catalog. Develop semantic page structure as shown on [the mockup](https://www.figma.com/file/euXjY316CHKYkPRO1K0kjLsF/Moyo-Catalog?node-id=0%3A1). -->

## Requirements:
<!-- - use `Card` and `Header` blocks from previous tasks but rewrite them using BEM
and SCSS -->
<!-- - Nav links color is not `black` any more
- there should always be 4 cards in a row (not 2, 3 or 5) -->
  <!-- - use `:nth-child(4n)` to select every 4th element -->
  <!-- - use `:nth-last-child(-n + 4)` to select 4 last elements -->
<!-- - cards should have fixed width and fixed distances between them -->
<!-- - cards container should have fixed paddings (see 1024px example), bottom the same as top -->
<!-- - use semantic tags. `<header>`, `<nav>`, `<main>` -->
<!-- - add class `is-active` to the first link (`Apple`) in navigation -->
<!-- - remove old `data-qa` attributes -->
<!-- - add `data-qa="nav-hover"` (not just `hover`) to the 4th nav link for testing (`Ноутбуки и компьютеры`) -->
<!-- - add `data-qa="card"` to the first card -->
<!-- - add `data-qa="card-hover"` (not just `hover`) to the link `Купить` inside the first card -->
<!-- [LAYOUT] - Don't forget about semantics, div development is not a better option -->
<!-- [STYLES] - Get used to style all elements using classes. And don't increase selectors specificity unless completely necessary. -->
<!-- [STYLES] - If you need to adjust positioning with 1px or fractional numbers like 0.5, you are doing something wrong, change the alignment technique you use -->
<!-- [STYLES] - Be consistent with your margins - if you have many sections in a row, add margins either to the bottom or to the top so that it will be easier to identify how to position the next element -->
<!-- [BEM] - Check your BEM structure using BEM-linter (npm run lint) and this list -->
<!-- [BEM] - Make sure to follow BEM naming convention
[BEM & STYLES] - Don't add external styles (positioning or margins) to BEM-blocks. Use mix where necessary and move all external styles under element selector. -->
<!-- [BEM] - create a separate file per each BEM block styles that have the same name as the block -->
<!-- [SASS] - Make use of SASS nesting - write pseudo-class, pseudo-element selectors inside general selector. As well as media queries. -->
<!-- [SASS] - use variables for the main values so that you'll be able to reuse them and give them descriptive names. But don't overuse them, don't create variable for the value that's used just once. -->
[LAYOUT] - don't hardcode max-width, your catalog container should work fine for any number of cards
---
<!-- --> [CHECKLIST](https://github.com/mate-academy/layout_catalog/blob/master/checklist.md)
--- -->
<!-- ![screenshot](./references/catalog-example.png) -->

---
### Tips & Hints
<!-- Don't use flex `gap` property, it's not yet supported by tests. -->
