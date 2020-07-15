- check your work using basic recommendations [here](https://github.com/mate-academy/layout_search-bar-airbnb/blob/master/checklist.md)
- use product item from `product card` task and header from `moyo header` task
- check your classes, are they ok? do they follow BEM methodology?
- remember about hover effects
- one `h1` tag per page
- don't forget about semantics, div development is not a better option 
- follow BEM principles:
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
>there is no `stars` block, `stars--4` is a modificator of the `stars` block;
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

- BEM block should not use margins, add them to the external block
- BEM block should have its own styles file that have the same name as the block
- if you want to reset default styles, do it in `_reset.scss` file
- if you need margins only for bottom side, use `margin-bottom: 20px` not `margin: 0 0 20px`
- think about your layout if there is some small changes in the design (like header height or card width)
- if you want to make round corners, use half of the element height
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
- try not to combine selectors with `,` operator, it's hard to find them later (reset style files are not included here)
- if you need to adjust positioning with `1px` or fractional numbers like `0.5`, you do something wrong, change positioning of other elements instead
- BEM doesn't allow nesting selectors, it increases selectors specificity and code nesting
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
- reuse your code, if you've already written code for stars in the previous homework, just copy and paste it in the file
- there is no need to add `--first` modifier to the first element, use pseudo-classes
- empty lines between blocks of code improve readability, but empty line between the parent and child tag is redundant
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
- don't divide name of the BEM-element in SCSS, it should be easy to find the element searching by its name like `__element-name`
>**WRONG WAY**
>```scss
>&__price {
>  margin: 18px 0 20px;
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
>  margin: 18px 0 20px;
>  align-items: flex-end;
>}
>
>&__price-title {
>  line-height: 14px;
>}
>```

- are you sure you've polished your code? :)
