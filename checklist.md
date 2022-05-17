1. [LAYOUT] - Don't forget about semantics, div development is not a better
option
2. [CODE STYLE] - Add empty lines between multiline sibling blocks of HTML.
But don't add empty lines between parent and child elements

GOOD example:
```html
<ul>
  <li class="nav__item">
    <a href="#home">Home</a>
  </li>

  <li class="nav__item">
    <a href="#shop">Shop</a>
  </li>

  <li class="nav__item">
    <a href="#contacts">Contacts</a>
  </li>
</ul>
```
BAD example:
```html
<ul>

  <li class="nav__item">
    <a href="#home">Home</a>
  </li>
  <li class="nav__item">
    <a href="#shop">Shop</a>
  </li>
  <li class="nav__item">
    <a href="#contacts">Contacts</a>
  </li>

</ul>
```

3. [STYLES] - Get used to style all elements using classes. And don't increase
selectors specificity unless completely necessary.
4. [STYLES] - If you need to adjust positioning with `1px` or fractional numbers
like `0.5`, you are doing something wrong, change the alignment technique you use
5. [STYLES] - Be consistent with your margins - if you have many sections in a
row, add margins either to the bottom or to the top so that it will be easier
to identify how to position the next element
6. [BEM] - Check your BEM structure using BEM-linter (`npm run lint`) and
[this list](https://mate-academy.github.io/fe-program/css/typical-bem-mistakes)
7. [BEM] - Make sure to follow BEM naming convention

GOOD example:
```html
<div class="product__rating">
  <div class="product__stars stars stars--4">
    <div class="stars__star star"></div>
    <div class="stars__star star"></div>
    <div class="stars__star star"></div>
    <div class="stars__star star"></div>
    <div class="stars__star star"></div>
  </div>
</div>
```

BAD example:
```html
<div class="product__rating">
  <div class="product__stars stars--4">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
  </div>
</div>

`stars--4` is a modifier of the `stars` block, but `stars` block does not exist in HTML;
`star` is another block, stars should be the elements of the `stars` block
```

8. [BEM & STYLES] - Don't add external styles (positioning or margins) to
   BEM-blocks. Use mix where necessary and move all external styles under element
   selector.

GOOD example
```html
<!--index.html-->
<div class="container">
  <div class="container__card card">
    ...
  </div>
</div>
```
```css
/*style.css*/
.container__card {
  margin: 48px 24px;
}

.card {
  font-size: 16px;
  background-color: purple;
}
```

BAD example
```html
<!--index.html-->
<div class="container">
  <div class="card">
    ...
  </div>
</div>
```
```css
/*style.css*/
.card {
  margin: 48px 24px;
  font-size: 16px;
  background-color: purple;
}
```

9. [BEM] - create a separate file per each BEM block styles that have the same
name as the block
10. [SASS] - Make use of SASS nesting - write pseudo-class, pseudo-element
selectors inside general selector. As well as media queries.

GOOD example:
```scss
&__buy-link {
  display: flex;
  margin-top: 20px;

  &:hover {
    color: blue;
  }
}
```

BAD example:
```scss
&__buy-link {
  display: flex;
  margin-top: 20px;
}

&__buy-link:hover {
  color: blue;
}
```

11. [SASS] - use variables for the main values so that you'll be able to reuse
them and give them descriptive names. But don't overuse them, don't create
variable for the value that's used just once.

12. [CODE STYLE] - Remember about styles properties order - ([css order](https://codeguide.academy/html-css.html#css-order))

13. [LAYOUT] - don't hardcode max-width, your catalog container should work fine for any number of cards

GOOD example:

![Screenshot 2021-09-16 at 16 01 30](https://user-images.githubusercontent.com/32794096/133616959-0016cb9f-7083-4f93-8de6-f6a5c702e2ed.png)

BAD example:

![Screenshot 2021-09-16 at 16 02 44](https://user-images.githubusercontent.com/32794096/133616962-f10c4aff-ec05-4422-a470-931e51370c2f.png)


