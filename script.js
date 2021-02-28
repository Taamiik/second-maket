window.onload = function () {
let formBody = document.querySelector('.section_form_body');
let buttons = formBody.querySelectorAll('.curtain');
let closeBlocks = formBody.querySelectorAll('.closeblock');


showBlock(buttons,closeBlocks);

function showBlock(buttons,closeBlocks) {
	for(let elem of buttons) {
		elem.addEventListener('click', function func() {
			elem.classList.toggle('show');
			addClass(elem);	
		});
	}
}

function addClass(elem) {
	let item = elem.closest('.list');
	item.querySelector('.closeblock').classList.toggle('showblock');
}
}