const burgerBtn = document.querySelector('.burger');
const burgerBtnSpan = document.querySelector('.burger span');
const popup = document.querySelector('.popup');
const navbarMenu = document.querySelector('.navbar__menu').cloneNode(1);
const navbarBtn = document.querySelector('.btn--navbar').cloneNode(1);
const nav = document.querySelector('nav');
const body = document.querySelector('body');

let burgerCounter = false;

const burgerClick = () => {
  burgerBtn.classList.toggle('active');
  if (burgerCounter == false) {
    burgerBtnSpan.style = 'display: none;';
    burgerCounter = true;
    body.style = 'overflow-y: hidden';
  } else {
    burgerBtnSpan.style = 'display: block;';
    burgerCounter = false;
    body.style = 'overflow-y: auto';
  }
  renderPopup();
};
const renderPopup = () => {
  popup.classList.toggle('active');
  popup.appendChild(navbarMenu);
  popup.appendChild(navbarBtn);
};
burgerBtn.addEventListener('click', burgerClick);

const swiper = new Swiper('.swiper', {
  speed: 1000,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  rewind: true,
  breakpoint: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
function endlessSlides() {
  setTimeout(function () {
    swiper.slideNext();
    endlessSlides();
  }, 5000);
}
endlessSlides();
