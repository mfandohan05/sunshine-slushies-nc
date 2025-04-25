const hamburgerMenu = document.querySelector(".hamburger-menu");
const slideoutMenu = document.querySelector(".slideout-menu");
const closeButton = document.querySelector(".close-button");
const body = document.querySelector("body");

hamburgerMenu.addEventListener('click', (e) => {
    slideoutMenu.classList.toggle('active');
    body.style.overflow = 'hidden';
    body.classList.toggle('no-scroll');
    e.preventDefault();
}) 
closeButton.addEventListener('click', () => {
    slideoutMenu.classList.remove('active');
    body.style.overflow = 'auto';
    body.classList.remove('no-scroll');
});