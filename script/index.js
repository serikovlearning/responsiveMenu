const burgerBtn = document.querySelector('.burger');
const burgerBtnSpan = document.querySelector('.burger span');
const popup = document.querySelector('.popup');
const navbarMenu = document.querySelector('.navbar__menu').cloneNode(1)
const navbarBtn = document.querySelector('.btn--navbar').cloneNode(1)

let burgerCounter = false;

const burgerClick = () => {
  burgerBtn.classList.toggle('active');

  if (burgerCounter == false) {
    burgerBtnSpan.style = 'display: none;';
    burgerCounter = true;
  } else {
    burgerBtnSpan.style = 'display: block;';
    burgerCounter = false;
  }
  renderPopup()
};
const renderPopup = () => {
  popup.classList.toggle('active');
  popup.appendChild(navbarMenu);
  popup.appendChild(navbarBtn)
};



burgerBtn.addEventListener('click', burgerClick);
