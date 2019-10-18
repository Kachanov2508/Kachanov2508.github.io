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