var dice, score, current, activePlayer, playGame, doubleSix, playScore;

init();

function init() {
    score = [0, 0];
    activePlayer = 0;
    dice = 0;
    current = [0, 0];
    playGame = true;
    doubleSix = [0, 0];

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#name-0').textContent = "Player 1"
    document.querySelector('#name-1').textContent = "Player 2"

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

    playScore = prompt('Какой счет установить?');
}

// Действие при нажатии кнопки Roll dice
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (playGame) {
        // Случайное число от 1 до 6
        dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);

        // Смена картинки
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        document.querySelector('.dice').style.display = 'block';

        // Смена игрока при 1
        if (dice !== 1) {
            current[activePlayer] += dice;
            document.querySelector('#current-' + activePlayer).textContent = current[activePlayer];
        } else {
            nextPlayer();
        }

        // Две 6-ки
        doubleSix.push(dice);
        doubleSix.shift();
        console.log(doubleSix); 
        if (doubleSix[0] === 6 && doubleSix[1] === 6) {
            console.log('2x6');
            nextPlayer();
        }
    }

});

// Следующий игрок
function nextPlayer() {
    if (playGame) {
        if (activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }

        current[activePlayer] = 0;

        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        // Активный класс
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }
}



// Кнопка Hold
document.querySelector('.btn-hold').addEventListener('click', function () {
    score[activePlayer] += current[activePlayer];

    if (playGame) {
        // Победитель
        if (score[activePlayer] >= playScore) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('#name-' + activePlayer).innerHTML = '<b>Winner!</b>';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            playGame = false;
        }
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
        nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);