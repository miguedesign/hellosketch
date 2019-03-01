var register = function(){


	var modal = $('#Modal'),
			container = $('#Modal__container');



	$('#Next').on('click', function(){
		// e.preventDefault();
		// e.stopPropagation();
		if(modal.hasClass('is-active')){
			// console.log('no hacer nada');
		}
		else{
			activeRegister();
			$('.Cta.Register').addClass('is-hide');
		}

	});

	// $('.Cta.Register').on('click', function(e){
	// 	e.preventDefault();
	// 	activeRegister();
	// 	$(this).addClass('is-hide');

	// });


	function activeRegister(){
		$('.Right').addClass('full');
		$('.Left').addClass('full');
		modal.addClass('is-active');
		$('.Detail').addClass('is-show');
		$('.bg-full').addClass('is-opacity');
		$('.Modal_Close').addClass('is-active');
		
		// Cambiar esto sólo para desktop

		if (window.matchMedia("(min-width: 400px)").matches) {
		  /* The viewport is at least 400 pixels wide */
			$('#FNAME').focus();
		} else {
		  /* The viewport is less than 400 pixels wide */
		  console.log('ño');
		}


	}


	// Active Modal for URL
	// function getParameterByName(name) {
	//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	//     results = regex.exec(location.search);
	//     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	// }

	// var r = getParameterByName('r');
	// if (r == 'ok') {
	// 	// console.log('registro ok');
	// 	modal.fadeIn(400,'easeInOutCubic').addClass('is-active');
	// }




	function closeModal(){
      $('.Right').removeClass('full');
    	$('.Left').removeClass('full');
    	$('.Detail').removeClass('is-show');
    	$('.Cta.Register').removeClass('is-hide');
    	$('.bg-full').removeClass('is-opacity');
    	$('.Modal_Close').removeClass('is-active');
			modal.removeClass('is-active');
			$('.FormComponent').removeClass('is-hide');

	}

	$('body').on('click', '#BtnAgain', function(e){
		e.preventDefault();
		
		$('.FormComponent').removeClass('is-hide');
		$resultComponent.html('').removeClass('is-success');
		submit.removeClass('is-Sending').attr('disabled', false);
		$('#mce-EMAIL').val('');
		$('#FNAME').val('');
		$('#LNAME').val('');


	});


	
	var submit = $('#mc-embedded-subscribe'),
			$resultComponent = $('#resultComponent'),
			$form = $("#mc-embedded-subscribe-form");

		/*
		Validar que haya correo valido
		------------------------------*/
		submit.on('click', function(e){
			
			e.preventDefault();

			$(this).addClass('is-Sending').attr('disabled', true);
			// console.log('clicked + sending');

			$form.validate();

			if ($form.valid()) {
				
				
			submitSubscribeForm($form, $resultComponent);
			// console.log('Enviando formulario');

			}
			else{
				console.log('no valid');
				$('#mce-EMAIL').focus();
				$(this).removeClass('is-Sending').attr('disabled', false);

			}
			
		});

		function submitSubscribeForm($form, $resultComponent){

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
					console.log('data: ',data);
					
					submit.removeClass('is-Sending').attr('disabled', false);

					if (data.result != "success") {
						var message = data.msg || "Lo sentimos, no es posible registrarse. Por favor, inténtelo de nuevo.";
						
						if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
							message = '<h3 class="Success">Listo</h3> <p>Revisamos y ya te encontrabas registrado al MeetUp, ¡Gracias!</p>';
						}

						$resultComponent.addClass('is-success');
						$('.FormComponent').addClass('is-hide');
						
						setTimeout(function(){
							$resultComponent.html(message);
						},500);
						
						
						setTimeout(function(){
							$resultComponent.removeClass('is-success').html('');
							$('.FormComponent').removeClass('is-hide');
						},5000);

					} else {
						
						message = '<h3 class="Success">Gracias por <br /> tu registro</h3> <p>Nos vemos el 14 de marzo 7:00 pm.</p> <p>Recuerda traer una identificación para tener acceso a Centraal.</p> <a href="#" id="BtnAgain">Registrar otro</a>';

						$('.FormComponent').addClass('is-hide');
						$resultComponent.addClass('is-success');

						setTimeout(function(){
							$resultComponent.html(message);
						},500);

						
					}
				}
			});
	  }

	$(document)
		.on('click','[href="#close"]',function(e){
		    e.preventDefault();

		    console.log('click close');

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
