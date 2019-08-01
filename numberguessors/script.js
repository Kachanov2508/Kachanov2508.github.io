let min = 1,
    max = 10,
    winningNumber = randomNumber(min, max),
    numberAttempts = 3;

const minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

// Add event listener for btn
guessBtn.addEventListener('click', numberGuesser);

// Play Again
document.querySelector('.game').addEventListener('mouseup', function(e){
    if(e.target.className === 'play-again') {
        message.remove();
        window.location.reload();
    }
});


function numberGuesser() {
    let number = parseFloat(guessInput.value);
    if (isNaN(number) || number < min || number > max) {
        showMessage(false, `specify number from ${min} to ${max}`);
    } else {
        gameOver(number);
    }
}

function gameOver(i) {
    numberAttempts -= 1;
    if (i === winningNumber) {
        playAgain()
        showMessage(true, `You win, ${winningNumber} winning number`);
    } else if (numberAttempts === 0) {
        playAgain()
        showMessage(false, `Game over, ${winningNumber} winning number`);
    } else {
        showMessage(false, `wrong, left ${numberAttempts} attempts`);
    }
}

function playAgain() {
    guessInput.disabled = true;
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

function showMessage(win, text) {
    let color;
    win === true ? color = 'green' : color = 'red';
    message.textContent = text;
    guessInput.style.borderColor = color;
    message.style.color = color;
    guessInput.value = '';
}

function randomNumber(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

console.log(winningNumber);