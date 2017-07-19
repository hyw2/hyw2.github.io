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

	var divs = $('.inner');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({
            'margin-top' : -(st/30)+"px",
            'opacity' : 1 - st/50
        });
    });

		window.sr=ScrollReveal();
		sr.reveal('#about', {delay: 250});
		sr.reveal('#proj', {delay:250});
		sr.reveal('#tf', {delay:500});
		sr.reveal('#fuse', {delay:750});
		sr.reveal('#huff', {delay:1000});



		var oTop = $('#counter').offset().top - window.innerHeight;
    $(window).scroll(function(){

        var pTop = $('body').scrollTop();
        if( pTop > oTop ){
            start_count();
        }
    });
});
function start_count(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
}
