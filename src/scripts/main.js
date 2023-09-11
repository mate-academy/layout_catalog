'use strict';

const navigation = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const navList = document.querySelectorAll('.nav__list');
const logo = document.querySelector('.logo');

navList.forEach((list) => {
  addEvent(list);
});

addEvent(burger);

logo.addEventListener('click', () => {
  navigation.classList.remove('nav--active');
  burger.classList.remove('burger--active');
});

function addEvent(object1) {
  object1.addEventListener('click', () => {
    navigation.classList.toggle('nav--active');
    burger.classList.toggle('burger--active');
  });
}
