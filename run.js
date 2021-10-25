$(document).ready(function() {


	$('.filter__btn').on('click', function() {
		var $filter = $(this).attr('data-filter');

		$('.website').css('display', 'block');
		$('.website').not($filter).css('display', 'none');
	});

	$('.filter__btn--all').on('click', function() {
		$('.website').css('display', 'block');
	});

	$('.js-hamburger').click(function() {
		$(this).toggleClass('hamburger-cross');
		$('.js-dropdown-menu').toggleClass('dropdown-menu--open');
	});

	$('.dropdown-menu__link').click(function() {
		$('.js-dropdown-menu').removeClass('dropdown-menu--open');
		$('.js-hamburger').removeClass('hamburger-cross');
	})

	$('#svg-switch-input').click(function() {
		let svgImage = $('.header__role-image');
		let svgCircle = $('.svg-switch');
		this.checked ? svgImage.addClass('lights-off') : svgImage.removeClass('lights-off');
		this.checked ? svgCircle.addClass('lights-off') : svgCircle.removeClass('lights-off');
	})

});
