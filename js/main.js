jQuery(document).ready(function ($) {
	//-- Crear Cookie si se subscribio ---------------------------------------------
	jQuery('#form45, #pop-up-newsletter').on('submit', function () {
	  localStorage.setItem('subscribe','newsletter_blog');
	});
	//-- Si no hay cookie de subscripci贸n ------------------------------------------
	var storage = localStorage.getItem('subscribe');
	if ( storage !== "newsletter_blog" ) {
	  /* Con retraso de 6 seg disparar ventana modal de subscripcion */
	  setTimeout(function(){
	    jQuery('#pop-up-newsletter').modal();
	  }, 6000);
	} else {
	  console.log('Ya está subscrito');
	}
});