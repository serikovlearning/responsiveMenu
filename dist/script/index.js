const burgerBtn = document.querySelector('.burger');
const burgerBtnSpan = document.querySelector('.burger span');
const popup = document.querySelector('.popup');
const navbarMenu = document.querySelector('.navbar__menu').cloneNode(1)
const navbarBtn = document.querySelector('.btn--navbar').cloneNode(1)
const nav = document.querySelector('nav')
const body = document.querySelector('body')

let burgerCounter = false;

const burgerClick = () => {
  burgerBtn.classList.toggle('active');
  if (burgerCounter == false) {
    burgerBtnSpan.style = 'display: none;';
    burgerCounter = true;
    // nav.style.cssText = `
    // backdrop-filter: none;
    // background-color: #020A18;
    // `
    body.style = 'overflow-y: hidden'
  } else {
    burgerBtnSpan.style = 'display: block;';
    burgerCounter = false;
    // nav.style = 'background-color: $bgPrimary;'
    body.style = 'overflow-y: auto'
  }
  renderPopup()
};
const renderPopup = () => {
  popup.classList.toggle('active');
  popup.appendChild(navbarMenu);
  popup.appendChild(navbarBtn)
};



burgerBtn.addEventListener('click', burgerClick);
