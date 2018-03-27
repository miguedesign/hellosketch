// Scroll reveal with scroll
var scrollreveal = function(){

	var ScrollReveal = require('../vendor/scrollreveal.min');

	var fooReveal = {
	  delay    : 200,
	  distance : '90px',
	  easing: 'cubic-bezier( 0.03, 0.3, 0.65, 0.94)',
	  scale    : 1,
	  viewFactor : 0.05
	};

	if(window.matchMedia('(min-width:1200px)').matches){

		window.sr = ScrollReveal({ duration: 700 });
		sr.reveal('.animatedFadeInUp', fooReveal);

	}

	


}

module.exports = scrollreveal;
