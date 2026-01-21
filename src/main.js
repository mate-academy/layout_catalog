'use strict';
let stars = document.querySelector('.card__stars');
let star = document.querySelector('.card__star');
stars.addEventListener('click',function(event){
  let ratingScale = stars.clientWidth;
  let mark ;
    const x = event.offsetX;

    if (x >= 0 && x < ratingScale / 5) {
      mark = 1;
    } else if (x >= ratingScale / 5 && x < 2 * ratingScale / 5) {
      mark = 2;
    } else if (x >= 2 * ratingScale / 5 && x < 3 * ratingScale / 5) {
      mark = 3;
    } else if (x >= 3 * ratingScale / 5 && x < 4 * ratingScale / 5) {
      mark = 4;
    } else if (x >= 4 * ratingScale / 5 && x < ratingScale) {
      mark = 5;
    }
    
    console.log(mark)
  for (let i = 0; i < stars.children.length; i++) {
    stars.children[i].classList.remove('active');
  }

  for (let i = 0; i < mark && i < stars.children.length; i++) {
    stars.children[i].classList.add('active');
  }
});
