$(document).ready(function() {


	$('.filter__btn').on('click', function() {
		var $filter = $(this).attr('data-filter');

		$('.website').css('display', 'block');
		$('.website').not($filter).css('display', 'none');
	});

	$('.filter__btn--all').on('click', function() {
		$('.website').css('display', 'block');
	});

});
