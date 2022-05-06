'use strict';

const prev = document.querySelector('.sliders__btn--prev');
const next = document.querySelector('.sliders__btn--next');

const slideOne = document.querySelector('.main__slide-box__slide--1');
const slideTwo = document.querySelector('.main__slide-box__slide--2');

prev.addEventListener('click', () => {
  if (slideOne.classList.contains('hide')) {
    slideOne.classList.remove('hide');
    slideTwo.classList.add('hide');
  }
});

next.addEventListener('click', () => {
  if (slideTwo.classList.contains('hide')) {
    slideTwo.classList.remove('hide');
    slideOne.classList.add('hide');
  }
});
