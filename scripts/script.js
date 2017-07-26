	$(function() {

		$('.accordion').click(function() {
			$('.signature-carousel').resize();

			// store the NEXT panel of what is clicked in variable
			var activePanel = $(this).next();
			
			// protects current active panel from hiding
			$('.panel').not(activePanel).slideUp();
		   
			activePanel.slideToggle(900);

		});

		$('.main-carousel').slick({
			arrows: false,
			fade: true,
			autoplay: true,
			autoplaySpeed: 4000,
			draggable: true,
			cssEase: 'linear'
		});

		if ( $(window).width() <= 942 ) {
			$('.signature-carousel').slick({
				autoplay: true,
				autoplaySpeed: 4000,
				swipetToSlide: true,
				arrows: false,
				draggable: true,
				// dots: true
			}); 
		}

		$(window).scroll(function() {
			$('.signatureTitle').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("slideDown");
				}
			});
		});

		// taking animation out of mobil view
		if ($(window).width() > 480) {
			$(window).scroll(function() {
				$('.aboutBox').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
					if (imagePos < topOfWindow+400) {
						$(this).addClass("slideDown");
					}
				});
			});
		}

		$(window).scroll(function() {
			$('.clickOrder').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("slideDown");
				}
			});
		});

		// HOME

		$('.desktopFish').mouseenter(function() {
			$('.desktopNav').slideToggle(1000);
		});

		// MENU

		$('.overlay h3').mouseenter(function(){

			$(this).next().toggleClass('show').fadeIn(900);
		});

		$('.overlay h3').click(function(){

			$(this).next().removeClass('show').fadeOut(900);
		});


		// FOOTER


		$(".fa-map-marker").click(function(){

			$(".storeHours").slideUp('slow', function() {

				$(".googleMaps").slideToggle(900);
			});
		});

		$(".fa-clock-o").click(function(){

			$(".googleMaps").slideUp('slow', function() {

				$(".storeHours").slideToggle(900);
			});
		});

	});