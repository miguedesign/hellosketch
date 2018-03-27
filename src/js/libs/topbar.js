var topbar = function () {

	var btn_toggle = $('#btn_menu'),
		// item_project = $('.Projects a'),
		item_about = $('.Hero__arrow'),
		item_leave = $('.leave'),
		menu = $('#menu');
			

	// btn_toggle.on('click', function(e){
	// 	e.preventDefault();
	// 	console.log('me clickeaste');
	// 	$(this).toggleClass('is-clicked');
	// 	menu.toggleClass('is-open');
	// });


	// if(window.matchMedia('(min-width:1200px)').matches){
	//   btn_toggle.on('mouseenter', function(){
	// 		menu.addClass('is-open');
	// 		$(this).addClass('is-clicked');
	//   });
	// }


	var header = $('.Header'),
			socials = $('.Socials'),
			previousScroll = 0,
    	originalTop = header.offset().top;

	$(window).scroll(
	  function(e){
		  if ($(this).scrollTop() >= 150)
		  {
		    header.addClass('is-scrolled');
		    
		    setTimeout(function(){
		    	socials.addClass('is-load');
		    }, 2000);

		  }
		  else
		  {
		    header.removeClass('is-scrolled');
		    socials.removeClass('is-load');
		  } 
		});



	/* 
	* Function to animate leaving a page
	*/
	if(window.matchMedia('(min-width:1200px)').matches){ 
		item_leave.on('click', function(e){
			e.preventDefault();
			// $('body').animate({scrollTop: $('body').position().top }, 500, 'easeInOutCirc');

			linkLocation = this.href;
			leavePage(linkLocation);
		});
		// item_project.on('click', function(e){
		// 	e.preventDefault();
		// 	linkLocation = this.href;
		// 	leavePage(linkLocation);
		// });
		item_about.on('click', function(e){
			e.preventDefault();
			leaveHero();
			linkLocation = this.href;
			setTimeout( function(){
				leavePage(linkLocation);
		},100);
		});

	}

	function leaveHero() {
			$('.Hero__name').animate({'opacity':'0'}, 700, 'easeInOutCirc');
			$('.Hero__lead').animate({'left':'-100%'}, 700, 'easeInOutCirc');
			$('.Hero__image').animate({'width':'10%'}, 700, 'easeInOutCirc');
			$('.Hero__arrow').animate({'bottom':'-500px'}, 700, 'easeInOutCirc');
			$('.Hero__cta').animate({'right':'-1500px'}, 700, 'easeInOutCirc');
			$('.Hero').animate({'opacity':'0'}, 700, 'easeInOutCirc');
	}

	function leavePage(linkLocation) { 	
		$('.topbar').addClass('is-loading');
		// setTimeout( function(){
		// 	$('body').animate({'margin-top':'100%'}, 300, 'easeInOutCirc');
		// 	$('.topbar__menu').animate({'bottom':'-300px'}, 300, 'easeInOutCirc');
		// 	$('.Hero').animate({'opacity':'0'}, 200, 'easeInOutCirc');
		// 	$('.StickNav').animate({'opacity':'0', 'left': '-400px'}, 200, 'easeInOutCirc');
		// },400);

		setTimeout( function(){
			window.location = linkLocation;
		},1200);

	}


}

module.exports = topbar;
