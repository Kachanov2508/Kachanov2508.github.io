document.addEventListener("DOMContentLoaded", function () {
	// Variables
	let stepItems = document.querySelectorAll(".steps__items div");
	let rndStepItems = document.querySelectorAll(".steps__slider .rnds .rnd");
	let prevStepBtn = document.querySelector(".steps__slider .btn-rnd.prev");
	let nextStepBtn = document.querySelector(".steps__slider .btn-rnd.next");

	// State
	let stepLength = 0;
	let countStep = 1;
	let stepWidth = stepItems[0].offsetWidth;

	// Events
	prevStepBtn.addEventListener("click", () => stepPrevToggle(5));
	nextStepBtn.addEventListener("click", () => stepNextToggle(5));

	function stepPrevToggle() {
		stepLength = stepLength - stepWidth;
		countStep--;

		stepCycle(countStep);

		if (countStep <= 1) {
			prevStepBtn.disabled = true;
		} else {
			prevStepBtn.disabled = false;
			nextStepBtn.disabled = false;
		}
	}

	function stepNextToggle(numSlides) {
		stepLength = stepLength + stepWidth;
		countStep++;

		stepCycle(countStep);

		if (numSlides <= countStep) {
			nextStepBtn.disabled = true;
		} else {
			prevStepBtn.disabled = false;
			nextStepBtn.disabled = false;
		}
	}

	function stepCycle(count) {
		for (let index = 0; index < stepItems.length; index++) {
			let style = stepItems[index].style;
			style.setProperty("transform", `translate(-${stepLength}px)`);
		}

		for (let index = 0; index < rndStepItems.length; index++) {
			rndStepItems[index].classList.remove("active");
		}

		rndStepItems[count - 1].classList.add("active");
	}
});
