const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const resetButton = document.getElementById('reset-button');
const changeValue = document.getElementById('change-value');
const counterValue = document.getElementById('counter-value');

function handleIncrement() {
	counterValue.textContent =
		parseInt(counterValue.textContent) + parseInt(changeValue.value);
}
function handleDecrement() {
	counterValue.textContent =
		parseInt(counterValue.textContent) - parseInt(changeValue.value);
}

function handleReset() {
	counterValue.textContent = 0;
}

incrementButton.addEventListener('click', handleIncrement);
decrementButton.addEventListener('click', handleDecrement);
resetButton.addEventListener('click', handleReset);
