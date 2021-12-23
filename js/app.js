const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
	menuBtn.classList.toggle('open');
});

menuLinks.forEach(e => {
	e.addEventListener('click', () => {
		menu.classList.remove('menu--active');
		menuBtn.classList.remove('open');
	});
});