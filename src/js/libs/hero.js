// Hero
var hero = function(){
  
	$('.Hero').animate({'opacity':'1'}, 700, 'easeInOutCirc');

	setTimeout(function(){

		$('.Hero').addClass('is-load');
		
		console.log('hero');

	}, 500);

 

}

module.exports = hero;
