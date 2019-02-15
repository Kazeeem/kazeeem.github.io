//=========== Preloader Script============

    $(window).load(function() {
        $("#loading").delay(350).fadeOut(350);
    });

//============ End of Preloader Script==============

AOS.init({
	easing: 'ease-out-back',
	duration: 1000
});
    
//=========== Smooth scroll plugin initialiser=================

	var scroll = new SmoothScroll('a[href*="#"]');

//=========== End of Smooth scroll plugin initialiser=============

//=========== Window scrolling function that changes the navigation bar background and shows the scroll to top button
	$(window).on("scroll", function() {
		if ($(window).scrollTop() > 700) { // if we've scrolled more than 700 pixels from top, change the background and display the scrolling button
			$(".scroll-top").show();
			$(".navbar").addClass("active");
		} 
		else {
			$(".scroll-top").fadeOut().hide();
			$(".navbar").removeClass("active");
		}
	});

//=========== End of Window scrolling function that changes the navigation bar background and shows the scroll to top button

// Google map

function initMap() {
	var location = {lat:6.6568936, lng:3.5056879 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
}