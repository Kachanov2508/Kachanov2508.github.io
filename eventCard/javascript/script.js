let card = document.querySelector('.card');
let cardLeftImg = document.querySelector('.card-left-img');
let cardHeading = document.querySelector('.card-heading');
let cardLeft = document.querySelector('.card-left');
let cardRight = document.querySelector('.card-right');
let cardRightBottom = document.querySelector('.card-right-bottom');
let cardRightDescription = document.querySelector('.card-right-description');
let btnBasket = document.querySelector('.btn-basket');
let cardRightLogo = document.querySelector('.card-right-logo');
let cardPrice = document.querySelector('.card-price');

cardLeftImg.addEventListener('click', cardOpen);
cardHeading.addEventListener('click', cardOpen);

function cardOpen() {
    card.classList.toggle('card-open');
    cardLeft.classList.toggle('card-left-open');
    cardRight.classList.toggle('card-right-open');
    cardRightBottom.classList.toggle('card-right-bottom-open');
    cardRightDescription.classList.toggle('card-right-description-open');

    cardRightLogo.classList.toggle('card-right-logo-open');
    // cardPrice.classList.toggle('card-price-open');
}



/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */

const card2 = document.querySelector('.card2');
const card2Photo = document.querySelector('.card2__photo');
const cart2Heading = document.querySelector('.cart2__heading');
const card2Description = document.querySelector('.card2__description');
const card2Price = document.querySelector('.card2__price');
const card2Btn1 = document.querySelector('.card2__btn-1');
const card2Btn2 = document.querySelector('.card2__btn-2');
const card2Logo = document.querySelector('.card2__logo');


function card2Open() {
    card2.classList.toggle('card2--open');
    card2Photo.classList.toggle('card2__photo--open');
    cart2Heading.classList.toggle('cart2__heading--open');
    card2Description.classList.toggle('card2__description--open');
    card2Price.classList.toggle('card2__price--open');
    card2Btn1.classList.toggle('card2__btn-1--open');
    card2Btn2.classList.toggle('card2__btn-2--open');
    card2Logo.classList.toggle('card2__logo--open');

}


card2Photo.addEventListener('click', card2Open);