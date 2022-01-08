// Menu.
const dropdownMenu = document.querySelector('.js-dropdown-menu');
const dropdownMenuLink = document.querySelectorAll('.dropdown-menu__link');
const hamburgerToggle = document.querySelector('.js-hamburger');

hamburgerToggle.addEventListener('click', function() {
	if (this.classList.contains('hamburger-cross')) {
		this.classList.remove('hamburger-cross');
		dropdownMenu.classList.remove('dropdown-menu--open');
	} else {
		this.classList.add('hamburger-cross');
		dropdownMenu.classList.add('dropdown-menu--open');
	}
});

// SVG toggle.
const switchToggle = document.querySelector('#svg-switch-input');

switchToggle.addEventListener('click', function() {
	let svgImage = document.querySelector('.header__role-image');
	let svgCircle = document.querySelector('.svg-switch');

		if (this.checked) {
			svgImage.classList.add('lights-off');
			svgImage.classList.remove('lights-on');
			svgCircle.classList.add('lights-off');
		} else {
			svgImage.classList.remove('lights-off');
			svgImage.classList.add('lights-on');
			svgCircle.classList.remove('lights-off');
		}
});
