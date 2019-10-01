let sliderItem = document.querySelectorAll('.slider-item');
let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');
let percent = 0;

btnLeft.addEventListener('click', leftSlide);
btnRight.addEventListener('click', rightSlide);

function slide(e) {
    sliderItem.forEach(item => item.style.transform = `translateX(${percent}%)`);
    
    e.preventDefault();
}

function rightSlide(e) {
    percent >= (sliderItem.length - 2) * -100 ? percent -= 100 : percent = 0;

    slide(e);
}

function leftSlide(e) {
    percent === 0 ? percent = (sliderItem.length - 1) * -100 : percent += 100;

    slide(e);
}

