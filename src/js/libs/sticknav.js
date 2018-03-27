// stick navigation
var sticknav = function () {
 
	var sections = $('.section_nav'),
	  	nav = $('.StickNav'),
	  	nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	  
	  sections.each(function() {
	    var top = $(this).offset().top -150,
	        bottom = top + $(this).outerHeight();
	    
	    if (cur_pos >= top) {
	      nav.find('a').removeClass('is-current');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('is-current');
	    }
	  });
	});

	nav.find('a').on('click', function () {
	  var $el = $(this)
	    , id = $el.attr('href');
	  
	  $('html, body').animate({
	    scrollTop: $(id).offset().top -0
	  }, 500, 'easeInOutCirc');
	  return false;
	});



}

module.exports = sticknav;



