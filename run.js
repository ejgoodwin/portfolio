// Gallery.
const galleryModal = document.querySelector('.gallery-modal');
const imageLinks = document.querySelectorAll('.gallery__item-link');
const modalCloseButton = document.querySelector('.gallery-modal__close');
const modalPrevButton = document.querySelector('.gallery-modal__prev');
const modalNextButton = document.querySelector('.gallery-modal__next');

const closeModal = () => {
  galleryModal.classList.remove('gallery-modal--open');
  const currentImage = document.querySelector('.image-current');
  currentImage.classList.remove('image-current');
  modalPrevButton.removeAttribute('disabled');
  modalNextButton.removeAttribute('disabled');
};

const checkPrevNext = () => {
  const currentImage = document.querySelector('.image-current');
  const prevImage =
    currentImage.closest('.gallery__item').previousElementSibling;
  const nextImage = currentImage.closest('.gallery__item').nextElementSibling;

  !prevImage && modalPrevButton.classList.add('hide');
  !nextImage && modalNextButton.classList.add('hide');

  prevImage &&
    modalPrevButton.classList.contains('hide') &&
    modalPrevButton.classList.remove('hide');

  nextImage &&
    modalNextButton.classList.contains('hide') &&
    modalNextButton.classList.remove('hide');
};

const changeImage = (e) => {
  const next = e.target
    .closest('.gallery-modal__button')
    .classList.contains('gallery-modal__next')
    ? true
    : false;
  modalPrevButton.removeAttribute('disabled');
  modalNextButton.removeAttribute('disabled');
  const image = galleryModal.querySelector('img');
  // Find current image
  const currentImage = document.querySelector('.image-current');
  const currentItem = currentImage.closest('.gallery__item');
  // Find sibling
  const nextImage = next
    ? currentItem.nextElementSibling.querySelector('img')
    : currentItem.previousElementSibling.querySelector('img');
  image.src = nextImage.dataset.image;
  currentImage.classList.remove('image-current');
  nextImage.classList.add('image-current');

  // Disable next button if on last image of gallery.
  checkPrevNext();
};

const openGalleryLink = (e) => {
  e.preventDefault();
  e.target.classList.add('image-current');
  const image = galleryModal.querySelector('img');
  galleryModal.classList.add('gallery-modal--open');
  image.src = e.target.dataset.image;
  checkPrevNext();
};

modalCloseButton.addEventListener('click', closeModal);
modalNextButton.addEventListener('click', changeImage);
modalPrevButton.addEventListener('click', changeImage);
imageLinks.forEach((link) => link.addEventListener('click', openGalleryLink));
galleryModal.addEventListener(
  'click',
  (e) => e.target === galleryModal && closeModal()
);
