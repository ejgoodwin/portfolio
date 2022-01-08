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

// Gallery.
const imageLinks = document.querySelectorAll('.gallery__item-link');
const modalCloseButton = document.querySelector('.gallery-modal__close');
const modalPrevButton = document.querySelector('.gallery-modal__prev');
const modalNextButton = document.querySelector('.gallery-modal__next');

const closeModal = () => {
	console.log(document.querySelector('.gallery-modal'));
	document.querySelector('.gallery-modal').classList.remove('gallery-modal--open');
	const currentImage = document.querySelector('.image-current');
	currentImage.classList.remove('image-current');
	modalPrevButton.removeAttribute('disabled');
	modalNextButton.removeAttribute('disabled');
}

const checkPrevNext = () => {
	const currentImage = document.querySelector('.image-current');
	console.log(currentImage.closest('.gallery__item'));
	const prevImage = currentImage.closest('.gallery__item').previousElementSibling;
	const nextImage = currentImage.closest('.gallery__item').nextElementSibling;

	!prevImage && modalPrevButton.setAttribute('disabled', '');
	!nextImage && modalNextButton.setAttribute('disabled', '');
}

const changeImage = e => {
	const next = e.target.closest('.gallery-modal__button').classList.contains('gallery-modal__next') ? true : false;
	modalPrevButton.removeAttribute('disabled');
	modalNextButton.removeAttribute('disabled');
	const modal = document.querySelector('.gallery-modal');
	const image = modal.querySelector('img');
	// Find current image
	const currentImage = document.querySelector('.image-current');
	const currentItem = currentImage.closest('.gallery__item');
	// Find sibling
	const nextImage = next ? currentItem.nextElementSibling.querySelector('img') : currentItem.previousElementSibling.querySelector('img');
	image.src = nextImage.dataset.image;
	currentImage.classList.remove('image-current');
	nextImage.classList.add('image-current');

	// Disable next button if on last image of gallery.
	checkPrevNext();
}

const galleryLink = (e) => {
	e.preventDefault();
	e.target.classList.add('image-current');
	const modal = document.querySelector('.gallery-modal');
	const image = modal.querySelector('img');
	modal.classList.add('gallery-modal--open');
	image.src = e.target.dataset.image;
	checkPrevNext();
}

modalCloseButton.addEventListener('click', closeModal);
modalNextButton.addEventListener('click', changeImage);
modalPrevButton.addEventListener('click', changeImage);
imageLinks.forEach(link => link.addEventListener('click', galleryLink));

