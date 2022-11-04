const open = document.getElementById('open');
const close = document.getElementById('close');
const brinkWrapper = document.querySelector('.brink-wrapper');

open.addEventListener('click', () => brinkWrapper.classList.add('show-nav'));

close.addEventListener('click', () =>
	brinkWrapper.classList.remove('show-nav')
);
