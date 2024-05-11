document.addEventListener("DOMContentLoaded", function () {
	// Variables
	let slider = document.querySelector(".participants__items .slider");
	let cards = document.querySelectorAll(".participants__items .slider article");
	let prevBtn = document.querySelector(".participants .rnds .btn-rnd.prev");
	let nextBtn = document.querySelector(".participants .rnds .btn-rnd.next");
	let qtyItems = document.querySelectorAll(".participants .rnds div span");

    // State
    let index = 0;
    let columnGap = getColumnGap(); // Ширина column-gap
    let numSlides = showNumSlides(); // Кол-во слайдов на экране
    let cardWidth = cards[0].clientWidth + columnGap; // Ширина одного слайда
    let windowWidthMobile = 768; // Ширина окна для мобильных

    // Events
    prevBtn.addEventListener("click", moveSlideBackward); // Клик по кнопке "назад"
    nextBtn.addEventListener("click", moveSlideForward); // Клик по кнопке "вперед"
    qtyItems[0].textContent = numSlides; // Изменить текущей номер слайда
    qtyItems[1].textContent = cards.length; // Изменить общее количество слайдов


    // Автоматическая прокрутка слайдов
	function startSlider() {
		intervalId = setInterval(function () {
			moveSlideForward();
		}, 4000);
	}

    // Сдвиг слайда назад 
    function moveSlideBackward() {
        const screenWidth = window.innerWidth; // Размер окна

        index--;
        numSlides--;

        // Для десктоп
        if(screenWidth >= windowWidthMobile && numSlides < cards.length / 2) {
            // Изменить состояние
            index = cards.length / 2;
            numSlides = cards.length;
        }

        // Для моб
        if(screenWidth <= windowWidthMobile && numSlides <= 0) {
            // Изменить состояние
            index = cards.length - 1;
            numSlides = cards.length;
        }

        qtyItems[0].textContent = numSlides; // Изменить номер слайда

        // Ширина смещения слада
        let offset = -index * cardWidth;
        slider.style.transform = `translateX(${offset}px)`;

        // Сбросить интервал
		clearInterval(intervalId);

		// Запустить интервал заново
		startSlider();
    }

    // Сдвиг слайда вперед 
    function moveSlideForward() {

        index++;
        numSlides++;

        // Если кол-во слайдов больше длинны массива с карточками участников
        if(numSlides > cards.length) {
            // Сбросить состояние к начальному
            index = 0;
            numSlides = showNumSlides();
        }

        qtyItems[0].textContent = numSlides; // Изменить номер слайда

        // Ширина смещения слада
        let offset = -index * cardWidth;
        slider.style.transform = `translateX(${offset}px)`;

        // Сбросить интервал
		clearInterval(intervalId);

		// Запустить интервал заново
		startSlider();
    }

    // Ширина column-gap
	function getColumnGap() {
		let computedStyle = getComputedStyle(slider);
		let columnGap = computedStyle.columnGap;
		columnGap = columnGap.slice(0, -2) * 1;

		return columnGap;
	}

    // Кол-во слайдов отображаемых на экране
    function showNumSlides() {
		let cardContainer = cards[0].parentElement.clientWidth; // Ширина контейнера со слайдами
		let cardWidth = cards[0].clientWidth; // Ширина одного слайда
		let currentNumCards = Math.floor(cardContainer / cardWidth); // Кол-во слайдов на экране 

		return currentNumCards;
	}

    // Автоматическая прокрутка слайдов
	startSlider();



    // Обновить стр при изменении размера окна для сброса состояния (для теста)
    window.addEventListener('resize', function() {
        // Получаем текущую ширину окна
        let windowWidth = window.innerWidth;
      
        // Проверяем, достигла ли ширина окна 960px
        if (windowWidth < 970 || windowWidth > 970) {
          // Перезагружаем страницу
          location.reload();
        }
    });

});