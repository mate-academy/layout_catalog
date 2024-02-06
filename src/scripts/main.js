'use strict';

const body = document.querySelector('.body');
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuList.classList.toggle('active');
  body.classList.toggle('active');
});
