$(document).ready(function() {

	// Class that disables css transitions while page is rendering
	$('.preload').removeClass('preload');

	//Enable popovers (Bootstrap)
	$('[data-toggle="popover"]').popover();
	//Enable tooltips (Bootstrap)
	$('[data-toggle="tooltip"]').tooltip();

	// Toggle sidebar (hamburger)
	$('[data-hook="sidebar-toggle"]').click(function() {
		$('.sidebar').toggleClass('sidebar--collapsed');
		$('.header').toggleClass('header--expanded');
		$('.vp-main').toggleClass('vp-main--expanded');
	});

	// Toggle mobile navigaion
	$('[data-hook="mobile-nav"]').click(function() {
		$('.sidebar').toggleClass('sidebar--mobile-open');
		$(this).toggleClass('header-hamburger--cross');
	});
	
	// Sidebar nav dropdown icon
	$('.subnav').on('show.bs.collapse', function() {
		$(this).siblings('.nav-dropdown-toggle').addClass('subnav-open');
	});
	$('.subnav').on('hide.bs.collapse', function() {
		$(this).siblings('.nav-dropdown-toggle').removeClass('subnav-open');
	});

	// Dashboard calendar toggle
	$('.dashboard-calendar__toggle').click(function() {
		$('.dashboard-calendar__dropdown').slideToggle();
	})

	// Search bars with 'x' button to clear
	// Show 'x' button when there is text in input
	$('[data-hook="search-clear-input"]').on('keyup', function() {
		if( $(this).val() == "") {
			$(this).siblings('[data-hook="search-clear-button"]').hide();
		} else {
			$(this).siblings('[data-hook="search-clear-button"]').show();
		}
	});
	// clear input when 'x' button is pressed
	$('[data-hook="search-clear-button"]').click(function() {
		$('[data-hook="search-clear-input"]').val("");
		$(this).hide();
	});

	// Font size range (Tests pages) - change attr on .tests-text to change styles
	$('#range-font-size').change(function() {
		let tests_text = $(this).siblings('.tests-text');
		switch( $(this).val() ) {
			case '0':
				tests_text.attr('data-text-size', 'text-size-small');
				break;
			case '1':
				tests_text.attr('data-text-size', 'text-size-medium');
				break;
			case '2':
				tests_text.attr('data-text-size', 'text-size-large');
				break;
			case '3':
				tests_text.attr('data-text-size', 'text-size-xlarge');
				break;
			default:
				tests_text.attr('data-text-size', 'text-size-meduim');
				break;
		}
	});



	// CLNDR.js (needs moment.js and underscore.js)
	const clndrCustomTemplate =   
	"<div class='clndr-aside'>" +  
		"<div class='clndr-controls'>" +
	        "<div class='clndr-control-button'>" +
	            "<span class='clndr-previous-button'><i class='fas fa-angle-left'></i></span>" +
	        '</div>' +
	        "<div class='month'>" + 
	        	"<div><%= month %></div> <div><%= year %></div>" + 

	        "</div>" +
	        "<div class='clndr-control-button rightalign'>" +
	            "<span class='clndr-next-button'><i class='fas fa-angle-right'></i></span>" +
	        '</div>' +
	    '</div>' +
    	"<div class='clndr-job-details'>" +
    		"<div class='clndr-job-date'></div>" +
    		"<ul class='clndr-job-list'></ul>" +
    	"</div>" +
    "</div>" +
    "<div class='clndr-table-container'><table class='clndr-table' border='0' cellspacing='0' cellpadding='0'>" +
        '<tbody>' +
        '<% for(var i = 0; i < numberOfRows; i++){ %>' +
            '<tr>' +
            '<% for(var j = 0; j < 7; j++){ %>' +
            '<% var d = j + i * 7; %>' +
                "<td class='<%= days[d].classes %>'>" +
                    "<div class='day-contents'><%= days[d].day %></div>" +
                '</td>' +
            '<% } %>' +
            '</tr>' +
        '<% } %>' +
        '</tbody>' +
    '</table></div>';

    if ($('.clndr-here').length) {
    	$('.clndr-here').clndr({
    		template: clndrCustomTemplate,
    		events: [
    		  {
    		    date: "2020-06-29",
    		    title: "TJ4738",
    		    jobLink: "somesite/tj4738"
    		  },
    		  {
    		    date: "2020-06-29",
    		    title: "TJ8379",
    		    jobLink: "somesite/TJ8379"
    		  },
    		  {
    		    date: "2020-06-22",
    		    title: "TJ8332",
    		    jobLink: "somesite/TJ8332"
    		  },
    		  {
    		    date: "2020-06-28",
    		    title: "TJ8323",
    		    jobLink: "somesite/TJ8332"
    		  },
    		  {
    		    date: "2021-07-28",
    		    title: "TJ8323",
    		    jobLink: "somesite/TJ8332"
    		  },
    		  {
    		    date: "2021-08-28",
    		    title: "TJ8323",
    		    jobLink: "somesite/TJ8332"
    		  },
    		  {
    		    date: "2021-09-22",
    		    title: "TJ8332",
    		    jobLink: "somesite/TJ8332"
    		  },
			  {
    		    date: "2021-10-22",
    		    title: "TJ8332",
    		    jobLink: "somesite/TJ8332"
    		  },
			  {
    		    date: "2021-11-05",
    		    title: "TJ8332",
    		    jobLink: "somesite/TJ8332"
    		  },
			  {
    		    date: "2021-11-27",
    		    title: "TJ8332",
    		    jobLink: "somesite/TJ8332"
    		  },
			  {
    		    date: "2021-12-07",
    		    title: "TJ8332",
    		    jobLink: "somesite/TJ8332"
    		  }
    		],
    		clickEvents: {
    			click: function(target) {
    				let eventsList = target.events;
    				// Clear any job details and date
    				$('.clndr-job-list').text('');
    				$('.clndr-job-date').text('');

    				// if there is an event for the date clicked...
    				if( eventsList.length > 0 ) {

    					// ...Display details of jobs for date clicked 
    			      	$('.clndr-job-date').text(`${target.date.format("ddd Do")}:`);
    					
    					for (let i = 0; i < eventsList.length; i++) {
    			      		$('.clndr-job-list').append(`<li><a href="${eventsList[i].jobLink}" target="_blank">${eventsList[i].title}</a></li>`)
    			      	}
    				}
    				
    		    }
    		}
    	});
    }


	// Crop image (Profile page) uses: https://foliotek.github.io/Croppie/
	var basic = $('#profile-image').croppie({
	    viewport: {
	        width: 200,
	        height: 200,
	        type: 'circle'
	    },
	    customClass: 'profile-pic-zoom',
	    // enableResize: true,
	    enforceBoundary: false,
	    mouseWheelZoom: false,
	    maxZoom: 500
	});
	basic.croppie('bind', {
		url: 'images/crop-image.png'
	});



});
