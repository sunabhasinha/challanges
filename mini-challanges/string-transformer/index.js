const lower = document.getElementById('lower');
const upper = document.getElementById('upper');
const camel = document.getElementById('camel');
const pascal = document.getElementById('pascal');
const kebab = document.getElementById('kebab');
const snake = document.getElementById('snake');

const input = document.getElementById('inputString');

function convertToPascalAndCamelCase(str, type) {
	if (!str) return;
	const camelCase = str
		.trim()
		.toLowerCase()
		.split(' ')
		.reduce((a, b) => {
			return a + b[0]?.toUpperCase() + b.substring(1)?.toLowerCase();
		}, '');
	return type === 'pascal'
		? camelCase
		: camelCase[0].toLowerCase() + camelCase.substring(1);
}

function convertToKebabAndSnake(str, type) {
	if (!str) return;
	return str
		.split(' ')
		.join(type === 'kebab' ? '-' : '_')
		.toLowerCase();
}

function handleInputChange() {
	lower.textContent = input.value.toLowerCase();
	upper.textContent = input.value.toUpperCase();
	pascal.textContent = convertToPascalAndCamelCase(input.value, 'pascal');
	camel.textContent = convertToPascalAndCamelCase(input.value, 'camel');
	kebab.textContent = convertToKebabAndSnake(input.value, 'kebab');
	snake.textContent = convertToKebabAndSnake(input.value, 'snake');
}

input.addEventListener('input', handleInputChange);
handleInputChange(input);
