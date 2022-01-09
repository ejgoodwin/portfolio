$(document).ready(function() {

	//Enable popovers
	$('[data-toggle="popover"]').popover();

	//Enable tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// Toggle waveform
	$('[data-hook="toggle-waveform"]').click(function() {
	 	if($('.waveform').hasClass('waveform-expanded')) {
	 		$('.waveform').slideUp().removeClass('waveform-expanded');
	 		$('[data-hook="toggle-waveform"]').html('Timeline expand <i class="fas fa-arrow-up"></i>');
	 		$('[data-hook="toggle-waveform"]').children('i').addClass('rotate-180');
	 	} else  {
	 		$('.waveform').slideDown().addClass('waveform-expanded');
	 		$('[data-hook="toggle-waveform"]').html('Timeline collapse <i class="fas fa-arrow-up"></i>');
	 		$('[data-hook="toggle-waveform"]').children('i').removeClass('rotate-180');
	 	}
	});

	// Toggle tools sidebar (hamburger)
	$('[data-hook="toggle-sidebar"]').click(function() {
		$('.tools-section').toggleClass('tools-section--collapsed');
		$('.translation-section').toggleClass('translation-section--expanded');
	});
	// Open sidebar from collapsed (nav tab icons)
	$('.nav-link').click(function() {
		if($('.tools-section').hasClass('tools-section--collapsed')) {
			$('.tools-section').removeClass('tools-section--collapsed');
			$('.translation-section').removeClass('translation-section--expanded');
		}
	});

	// Tool sidebar tabs
	$("ul.nav-tabs a").click(function (e) {
	  e.preventDefault();  
	    $(this).tab('show');
	});

	// Switch layout to horizontal sidebar
	$('[data-hook="layout-switch"]').click(function() {
		$('.vertical-tools-section').removeClass('show');
		$('.translation-section').addClass('translation-section--full-width');
		$('.tools-section-horiz').addClass('show');
	});

	// Switch layout to vertical sidebar
	$('[data-hook="layout-switch-horizontal"]').click(function() {
		$('.tools-section-horiz').removeClass('show');
		$('.translation-section').removeClass('translation-section--full-width');
		$('.vertical-tools-section').addClass('show');
	});

	// Layout: switch between vertical/horizontal
	$("input[name='layoutRadio']").change(function() {
		let layoutRadio = $("input[name='layoutRadio']:checked");
		if(layoutRadio.val() == 'vertical') {
			$('.segment').addClass('segment--vertical');
		} else {
			$('.segment').removeClass('segment--vertical');
		}
	});

	// Theme: Switch between light and dark
	$("input[name='themeRadio']").change(function() {
		let themeRadio = $("input[name='themeRadio']:checked");
		if(themeRadio.val() == 'dark') {
			$('body').addClass('dark-theme');
		} else {
			$('body').removeClass('dark-theme');
		}
	});

	// Resize drag (horizontal toolbar)
	interact('.resizable')
	  .resizable({
	    edges: {
	      top   : '.resize-top',
	      left  : false,
	      bottom: false,
	      right : false
	    },
	  })
	  .on('resizemove', event => {
	    let y = event.target.dataset

	    y = parseFloat(y) || 0

	    Object.assign(event.target.style, {
	      height: `${event.rect.height}px`
	    })

	    Object.assign(event.target.dataset, y)
	  })
});
