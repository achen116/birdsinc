$(document).ready(function() {
	$('.bxslider').bxSlider({
	  minSlides: 4,
	  maxSlides: 4,
	  slideWidth: 500,
	  // slideMargin: 10,
	  ticker: true,
	  speed: 100000
	});

	$('.bird-img').colorbox({close: "x"});

});