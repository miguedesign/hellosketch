var register = function(){

	$('#FNAME').focus();
	
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

		$('#mce-EMAIL').val('');
		$('#FNAME').val('');
		$('#LNAME').val('');
		$resultElement.fadeOut();
	}


	
	var submit = $('#mc-embedded-subscribe'),
			input = $('#mce-EMAIL'),
			$resultElement = $('#resultElement'),
			$form = $("#mc-embedded-subscribe-form");


		/*
		Validar que haya correo valido
		------------------------------*/
		submit.on('click', function(e){
			
			e.preventDefault();
			// console.log('clicked');

			$(this).addClass('is-sending');

			$form.validate();
			if ($form.valid()) {
				// console.log('valid');
				
				submitSubscribeForm($form, $resultElement);

			}
			else{
				// console.log('no valid');
				$('#mce-EMAIL').focus();
				submit.removeClass('is-sending');

			}
			
		});

		function submitSubscribeForm($form, $resultElement){
			
			$.ajax({
				type: "GET",
				url: $form.attr("action"),
				data: $form.serialize(),
				cache: false,
				dataType: "jsonp",
				jsonp: "c", // trigger MailChimp to return a JSONP response
				contentType: "application/json; charset=utf-8",
				error: function(error){
					// According to jquery docs, this is never called for cross-domain JSONP requests
				},
				
				success: function(data){
					
					submit.removeClass('is-sending');

					if (data.result != "success") {
						var message = data.msg || "Lo sentimos, no es posible suscribirse. Por favor, inténtelo de nuevo.";
						$resultElement.addClass("is-error").fadeIn();

						if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
							message = "<p>Ya te encuentras suscrito al MeetUp, ¡Gracias!.</p>";
							$resultElement.removeClass("is-error").addClass("is-success").fadeIn();
						}

						$resultElement.html(message);

					} else {
						$resultElement.removeClass("is-error").addClass("is-success");
						// lanzar el modal
						window.location = "?r=chingon";
						
					}
				}
			});
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
