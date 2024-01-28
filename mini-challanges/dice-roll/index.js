const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const button = document.getElementById('btn');

function setVisible(selectedDot, visibility = 'visible') {
	if (!selectedDot) return;
	selectedDot.style.visibility = visibility;
}
function displayNumber(number) {
	if (number === 1) {
		setVisible(one, 'hidden');
		setVisible(two, 'hidden');
		setVisible(three, 'hidden');
		setVisible(four);
		setVisible(five, 'hidden');
		setVisible(six, 'hidden');
		setVisible(seven, 'hidden');
	}
	if (number === 2) {
		setVisible(one);
		setVisible(two, 'hidden');
		setVisible(three, 'hidden');
		setVisible(four, 'hidden');
		setVisible(five, 'hidden');
		setVisible(six, 'hidden');
		setVisible(seven);
	}
	if (number === 3) {
		setVisible(one);
		setVisible(two, 'hidden');
		setVisible(three, 'hidden');
		setVisible(four);
		setVisible(seven);
	}
	if (number === 4) {
		setVisible(one);
		setVisible(two);
		setVisible(three, 'hidden');
		setVisible(four, 'hidden');
		setVisible(five, 'hidden');
		setVisible(six);
		setVisible(seven);
	}
	if (number === 5) {
		setVisible(one);
		setVisible(two);
		setVisible(three, 'hidden');
		setVisible(four);
		setVisible(five, 'hidden');
		setVisible(six);
		setVisible(seven);
	}
	if (number === 6) {
		setVisible(one);
		setVisible(two);
		setVisible(three);
		setVisible(four, 'hidden');
		setVisible(five);
		setVisible(six);
		setVisible(seven);
	}
}

function handleClick() {
	const diceRolledNumber = Math.floor(Math.random() * 6) + 1;
	function displayNumberRecursively(i) {
		if (i > diceRolledNumber) return;

		displayNumber(i);

		setTimeout(() => {
			displayNumberRecursively(i + 1);
		}, 50);
	}

	displayNumberRecursively(1);
}
displayNumber(6);

button.addEventListener('click', handleClick);
