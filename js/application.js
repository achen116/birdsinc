(function() {
	$(document).ready(function() {
		ticker();
		hover();

		$('.bird-img').colorbox({close: "x"});
	});

	var ticker = function() {
		$('.bxslider').bxSlider({
		  minSlides: 4,
		  maxSlides: 4,
		  slideWidth: 500,
		  ticker: true,
		  speed: 100000
		});
	}

	var hover = function() {
		$('.bird-img').hover(
			function() {
		    $(this).find('img').css('opacity', 0.4);
			},
			function() {
		    $(this).find('img').css('opacity', 1);
			}
		);
	}

})();