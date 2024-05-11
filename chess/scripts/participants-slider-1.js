// Сдвиг слайда по клику вперед
// Сдвиг слайда по клику назад
// Сдвиг слайда по интервалу
// Изменить текущее кол-во слайдов в десктоп
// Изменить текущее кол-во слайдов в моб









document.addEventListener("DOMContentLoaded", function () {
	// Variables
	let slider = document.querySelector(".participants__items .slider");
	let cards = document.querySelectorAll(".participants__items .slider div");
	let prevBtn = document.querySelector(".participants .rnds .btn-rnd.prev");
	let nextBtn = document.querySelector(".participants .rnds .btn-rnd.next");
	let qtyItems = document.querySelectorAll(".participants .rnds div span");

	// State
	let columnGap = getColumnGap();
	let numSlides = showNumSlides();
	let index = 0;
	let cardWidth = cards[0].clientWidth + columnGap;
	let intervalId;

	// Events
	qtyItems[0].textContent = numSlides; // При загрузке стр отобразить кол-во слайдов
	qtyItems[1].textContent = cards.length; // При загрузке стр отобразить кол-во слайдов
	prevBtn.addEventListener("click", moveSlideBackward); // Клик по кнопке "назад"
	nextBtn.addEventListener("click", moveSlideForward); // Клик по кнопке "вперед"

	// Автоматическая прокрутка слайдов
	function startSlider() {
		intervalId = setInterval(function () {
			moveSlideForward();
		}, 4000);
	}







	// Переместить слайд назад
	function moveSlideBackward() {
		const screenWidth = window.innerWidth; // Размер окна
		let slidesToShow = 3; // По умолчанию показывается 3 карточки

		if (screenWidth <= 768) {
			// Для мобильных устройств
			slidesToShow = 1; // Показывается только 1 карточка
			index--;
			numSlides = numSlides - 1;
		} else {
			index = index + 3;
			numSlides = numSlides + 3;
		}
		qtyItems[0].textContent = numSlides; // Изменить текущее кол-во слайдов

		// Зацикливаем слайдер
		if (index >= cards.length) {
			index = 0;
			numSlides = showNumSlides();
			qtyItems[0].textContent = slidesToShow;
		}

		// Размер сдвига слайда
		let offset = (-index * (cardWidth * slidesToShow)) / slidesToShow;
		slider.style.transform = `translateX(${offset}px)`;

		// Сбросить интервал
		clearInterval(intervalId);

		// Запустить интервал заново
		startSlider();
	}








	// Переместить слайд вперед
	function moveSlideForward() {
		const screenWidth = window.innerWidth; // Размер окна
		let slidesToShow = 1; // По умолчанию показывается 3 карточки

		if (screenWidth <= 768) {
			// Для мобильных устройств
			slidesToShow = 1; // Показывается только 1 карточка
			// index++;
			numSlides = numSlides + 1;
		} else {
			// index++;
			numSlides = numSlides + 1;
		}
		
		// Зацикливаем слайдер
		if (index >= cards.length) {
			index = 0;
			qtyItems[0].textContent = slidesToShow;
			numSlides = showNumSlides();
		}
		
		numSlides++;
		index++;

		qtyItems[0].textContent = numSlides; // Изменить текущее кол-во слайдов

		// Размер сдвига слайда
		let offset = -index * cardWidth;
		slider.style.transform = `translateX(${offset}px)`;

		// Сбросить интервал
		clearInterval(intervalId);

		// Запустить интервал заново
		startSlider();
	}

	// Автоматическая прокрутка слайдов
	startSlider();

	// Текущее количество слайдов
	function showNumSlides() {
		let cardContainer = cards[0].parentElement.clientWidth;
		let cardWidth = cards[0].clientWidth;
		let currentNumCards = Math.floor(cardContainer / cardWidth);

		return currentNumCards;
	}

	// Ширина column-gap
	function getColumnGap() {
		let computedStyle = getComputedStyle(slider);
		let columnGap = computedStyle.columnGap;
		columnGap = columnGap.slice(0, -2) * 1;

		return columnGap;
	}

	// Сбросить состояние до начального при изменении размера окна
	window.addEventListener("resize", function () {
		columnGap = getColumnGap();
		numSlides = showNumSlides();
		index = 0;
		cardWidth = cards[0].clientWidth + columnGap;

		moveSlideForward();
	});
});
