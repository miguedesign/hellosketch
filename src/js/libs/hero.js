// Hero
var hero = function(){
  
	// $('.Hero').animate({'opacity':'1'}, 700, 'easeInOutCirc');
	
	
	setTimeout(function(){

		$('.js_show_bg').addClass('is-load');
		
	}, 1200);

	setTimeout(function(){

		$('.js_scale').addClass('is-load');
		
	}, 1000);

	setTimeout(function(){

		$('.js_show').addClass('is-load');
		
		console.log('hero');

	}, 2000);


	cambiarBG();

	function cambiarBG(){
		
		setTimeout(function(){
			
			$('.Handoff').addClass('Preload');
		
		}, 300);

		setTimeout(function(){
			$('.Handoff').addClass('Load');
			$('.Content').addClass('Load');
		}, 1500);

		setTimeout(function(){
			$('.Register').addClass('Load');
			$('.Sponsors').addClass('Load');
		}, 3000);

	}

 

}

module.exports = hero;
