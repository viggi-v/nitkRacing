
$(window).load(function() {
	$('.flex_top').flexslider({
    animation: "slide",
    directionNav: false,
	controlNav: false,
	slideshowSpeed: 2500,
	animationSpeed: 500,
	smoothHeight: false,
  });
  $('.flex_bottom').flexslider({
    animation: "slide",
    directionNav: false,
	controlNav: false,
	slideshowSpeed: 2500,
	animationSpeed: 500,
	smoothHeight: false,
	reverse:true
  });
    $('.flexslider').flexslider({
		//The Carslider
		animation: "slide"
	});
  var width = $(window).width();
  if(width<768){
  		//Mobile we need to fix the carousel for the team page.
  		$(".contact_holder").flexslider({
  			slideshow:false,
  			touch:true,
  			controlNav:false,
  			directionNav:false
  		});
  }
});