const inputNumber = document.getElementById('input-guessed-number');
const submitButton = document.getElementById('submit-button');
const rangeText = document.getElementById('guess-range');
const restartButton = document.getElementById('restart-game');
const result = document.getElementById('result');
const guessList = document.getElementById('guess-list');
let answer;
generateTheAnswer();
const numberOfTries = 10;
let count = 0;
let guessedNumbers = [];
function generateTheAnswer() {
	answer = Math.floor(Math.random() * 100) + 1;
}
function handleSubmit(e) {
	e.preventDefault();
	count++;
	guessedNumbers.push(inputNumber.value);
	guessList.textContent =
		guessedNumbers?.length > 0
			? `Your guesses : ${guessedNumbers.join(', ')}`
			: '';
	rangeText.textContent =
		parseInt(inputNumber.value) < answer ? 'Too Low!' : 'Too High!';
	if (count >= numberOfTries && parseInt(inputNumber.value) !== answer) {
		result.textContent = 'Oops! You lost. Try again';
		restartButton.removeAttribute('disabled');
		submitButton.setAttribute('disabled', true);
		return;
	}
	if (parseInt(inputNumber.value) === answer) {
		rangeText.textContent = '';
		result.textContent = 'Congrats! You won.';
		restartButton.removeAttribute('disabled');
		submitButton.setAttribute('disabled', true);
		return;
	}
}

function handleRestart() {
	generateTheAnswer();
	count = 0;
	guessedNumbers = [];
	guessList.textContent = '';
	rangeText.textContent = '';
	result.textContent = '';
	restartButton.setAttribute('disabled', true);
	submitButton.removeAttribute('disabled');
	inputNumber.value = '';
}

submitButton.addEventListener('click', handleSubmit);

restartButton.addEventListener('click', handleRestart);
