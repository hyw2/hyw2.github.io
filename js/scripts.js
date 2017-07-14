$(document).ready(function() {
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
	window.sr=ScrollReveal();
	sr.reveal('#me', {delay: 500});
	sr.reveal('#linked', {delay: 750});
	sr.reveal('#github', {delay: 1000});
	sr.reveal('#res', {delay: 1250});
	sr.reveal('#about', {delay: 500});
});
