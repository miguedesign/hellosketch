var register = function(){

	var modal = $('#Modal'),
			container = $('#Modal__container');

	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	    results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	var r = getParameterByName('r');

	
	if (r == 'ok') {

		console.log('registro ok');

		modal.fadeIn(400,'easeInOutCubic').addClass('is-active');

	}

	function closeModal(){
    container.slideUp(500, 'easeInOutCubic');
		modal.fadeOut(1000,'easeInOutCubic').removeClass('is-active');
	}


	$(document)
	.on('click','[href="#close"]',function(e){
	    e.preventDefault();
	    closeModal();
	    })
	.on('click','.close-modal',function(e){
	    e.preventDefault();
	    closeModal();
	    })
	.keydown(function(tecla){
		if($('#Modal').hasClass('is-active')){
	    if (tecla.keyCode == 27) { 
        closeModal();
	    }
	  }
	});


}

module.exports = register;
