var register = function(){

	// $('#FNAME').focus();

	$('.Register_Title').on('click', function(){
				$('#FNAME').focus();
			});

	$('#mce-EMAIL, #FNAME').change(function(){
		$('.Label').addClass('valid');
		datos();
	});

	function datos(){
		if ($('#FNAME').val() == '') {
			$('.Label').removeClass('valid');
		}
	}

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

		// console.log('registro ok');

		modal.fadeIn(400,'easeInOutCubic').addClass('is-active');

	}

	function closeModal(){
    container.slideUp(500, 'easeInOutCubic');
		modal.fadeOut(300,'easeInOutCubic').removeClass('is-active');

		$('.Form').removeClass('is-hide');
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

			$(this).addClass('is-sending').attr('disabled', true);

			$form.validate();
			if ($form.valid()) {
				
				// console.log('Enviando formulario');
				$('#mce-LABEL').removeClass('invalid');
				
				submitSubscribeForm($form, $resultElement);
				// submitSubscribeForm($resultElement);


			}
			else{
				// console.log('no valid');
				$('#mce-EMAIL').focus();
				$('#mce-LABEL').addClass('invalid');
				submit.removeClass('is-sending').attr('disabled', false);;

			}
			
		});

		function submitSubscribeForm($form, $resultElement){

			// console.log('casi success')
			
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
					// console.log('data: ',data);
					
					submit.removeClass('is-sending').attr('disabled', false);

					if (data.result != "success") {
						var message = data.msg || "Lo sentimos, no es posible registrarse. Por favor, inténtelo de nuevo.";
						
						if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
							message = "Revisamos y ya te encontrabas registrado al MeetUp, ¡Gracias!";
						}

						$resultElement.html(message);
						$('.Form').addClass('is-hide');
						$('#resultElement').addClass("is-success").fadeIn();
						$('#Modal').fadeIn(400,'easeInOutCubic').addClass('is-active');

					} else {
						
						$('.Form').addClass('is-hide');
						$('#resultElement').addClass("is-success").fadeIn();
						$('#Modal').fadeIn(400,'easeInOutCubic').addClass('is-active');


						respuesta = data.result;
						// console.log(respuesta);

						// $resultElement.removeClass("is-error").addClass("is-success");
						// lanzar el modal
						// window.location = "?r=ok";
						
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
