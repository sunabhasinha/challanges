const accordionParent = document.getElementById('accordion');
const type = document.getElementById('accordion-type');
const oneCaret = document.getElementById('one-caret');
const twoCaret = document.getElementById('two-caret');
const threeCaret = document.getElementById('three-caret');
const stepOneDescription = document.getElementById('step1');
const stepTwoDescription = document.getElementById('step2');
const stepThreeDescription = document.getElementById('step3');

const isUp = '▲';
const isDown = '▼';
const STYLE_DISPLAY_BLOCK = 'block';
const STYLE_DISPLAY_NONE = 'none';

const caretLookup = {
	one: {
		id: 'one-caret',
		ele: oneCaret,
		descriptionELe: stepOneDescription,
	},
	two: {
		id: 'two-caret',
		ele: twoCaret,
		descriptionELe: stepTwoDescription,
	},
	three: {
		id: 'three-caret',
		ele: threeCaret,
		descriptionELe: stepThreeDescription,
	},
};

function handleCaret(e) {
	console.log('type');
	Object.entries(caretLookup).forEach(([key, value]) => {
		const ele = value.ele;
		const selectedEleHTML = ele.innerHTML;
		if (value.id === e.target.id) {
			selectedEleHTML === isDown
				? showDescription(ele, value)
				: hideDescription(ele, value);
		} else {
			if (type.value !== 'true') {
				selectedEleHTML === isUp && hideDescription(ele, value);
			}
		}
	});
}

function handleType() {
	type.checked = type.value === 'false';
	type.value = type.checked ? 'true' : 'false';
}

function hideDescription(ele, value) {
	ele.innerHTML = isDown;
	value.descriptionELe.style.display = STYLE_DISPLAY_NONE;
}
function showDescription(ele, value) {
	ele.innerHTML = isUp;
	value.descriptionELe.style.display = STYLE_DISPLAY_BLOCK;
}

oneCaret.addEventListener('click', handleCaret);
twoCaret.addEventListener('click', handleCaret);
threeCaret.addEventListener('click', handleCaret);
type.addEventListener('input', handleType);
