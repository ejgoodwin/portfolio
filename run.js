$(document).ready(function() {

	$('.website__image').on('mouseenter', function() {
		$(this).children('.website__link').slideDown();
	});
	$('.website__image').on('mouseleave', function() {
		$('.website__link').slideUp();
	});


	$('.filter__btn').on('click', function() {
		var $filter = $(this).attr('data-filter');

		$('.website').css('display', 'block');
		$('.website').not($filter).css('display', 'none');
		// $('.website').not($filter).fadeOut();
	});

	$('.filter__btn--all').on('click', function() {
		$('.website').css('display', 'block');
	});

});
