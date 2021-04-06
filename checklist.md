- check your work using basic recommendations [here](https://github.com/mate-academy/layout_search-bar-airbnb/blob/master/checklist.md)
- use product item from `product card` task and header from `moyo header` task
- check your classes, are they ok? do they follow BEM methodology?
- remember about hover effects
- one `h1` tag per page
- don't forget about semantics, div development is not a better option
- follow BEM naming convention:
>**WRONG WAY**
>```html
><div class="product__rating">
>  <div class="product__stars stars--4">
>    <div class="star"></div>
>    <div class="star"></div>
>    <div class="star"></div>
>    <div class="star"></div>
>    <div class="star"></div>
>  </div>
></div>
>```
>`stars--4` is a modifier of the `stars` block, but `stars` block does not exist in HTML;
>`star` is another block, stars should be the elements of the `stars` block
>
>**RIGHT WAY**
>```html
><div class="product__rating">
>  <div class="product__stars stars">
>    <div class="stars__star"></div>
>    <div class="stars__star"></div>
>    <div class="stars__star"></div>
>    <div class="stars__star"></div>
>    <div class="stars__star"></div>
>  </div>
></div>
>```

- BEM block should not use margins, add them as a mix to a parent block's element
- create a separate file per each BEM block that have the same name as the block
- if you want to reset default styles, do it in `_reset.scss` file
- if you need margins only for bottom side, use `margin-bottom: 20px` not `margin: 0 0 20px`
- write your card__code-text so that the small design changes (like header height or card width) require you to change only 1 value
- if you want to round corners of an element, the radius shouldn't be greater than a half of a width or a height
- delete styles that you don't use
- if you make a mixin for some kind of font style, consider adding mixins for other font style too
- write styles for different states of BEM-element inside the element itself
>**WRONG WAY**
>```scss
>&__buy-link {
>  display: flex;
>  margin-top: 20px;
>}
>
>&__buy-link:hover {
>  color: blue;
>}
>```
>**RIGHT WAY**
>```scss
>&__buy-link {
>  display: flex;
>  margin-top: 20px;
>
>  &:hover {
>    color: blue;
>  }
>}
>```
- if you want to create a mixin with font styles, it should contain all font styles not just some part of it
>**WRONG WAY**
>```scss
>@mixin smallTex() {
>  font-size: 11px;
>  line-height: 13px;
>}
>
>@mixin normalTex() {
>  font-size: 12px;
>  font-weight: 500;
>}
>```
>it's better to add parameters to the mixin than include the existing one with different styles
>**RIGHT WAY**
>```scss
>@mixin normalTex($lineHeight: 15px) {
>  font-size: 12px;
>  lineHeight: $lineHeight;
>  font-weight: 400;
>}
>
>normalText(14px)
>```
- use variables for the main values (don't overuse variables) so that you'll be able to reuse them and give them descriptive names
- any values that depend on others (width of some smaller element, number of the cards, etc.) should be calculated with formula
- do not combine selectors with `,` operator, it's hard to find them later (reset style files are not included here)
- if you need to adjust positioning with `1px` or fractional numbers like `0.5`, you do something wrong, change the alignment technique you use
- BEM doesn't allow nesting selectors, it increases selectors specificity and card__code-text nesting
>**WRONG WAY**
>```scss
>.card__rating {
>  height: 15px;
>  display: flex;
>
>  .card__stars {
>    display: flex;
>
>    .card__star {
>      height: 15px;
>    }
>  }
>}
>```
- reuse your card__code-text, if you've already written card__code-text for stars in the previous homework, use it as an independent block
- there is no need to add `--first` modifier to the first element, use pseudo-classes
- empty lines between sibling blocks of card__code-text improve readability, but not between a parent and a child
>**WRONG WAY**
>```html
><main class="main container">
>
>  <section class="catalog">
>
>    <article data-qa="catd" class="catalog__card">
>```
- don't add extra wrappers if you can add styles to the tag itself
- if you have many sections in a row, add margins either to the bottom or to the top so that it will be easier to identify how to position the next element
- don't split a name of a BEM-element in SCSS, it should be easy to find the element searching by its name like `__element-name`
>**WRONG WAY**
>```scss
>&__price {
>  align-items: flex-end;
>
>  &-title {
>    line-height: 14px;
>  }
>}
>```
>**RIGHT WAY**
>```scss
>&__price {
>  align-items: flex-end;
>}
>
>&__price-title {
>  line-height: 14px;
>}
>```

- are you sure you've polished your card__code-text? :)
