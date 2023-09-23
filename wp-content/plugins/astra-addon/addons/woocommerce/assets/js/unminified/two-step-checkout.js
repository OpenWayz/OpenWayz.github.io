/**
 * Two Step Checkout flexslider
 *
 * @since 1.1.0
 */

(function ($) {

	jQuery( window ).load(function() {
		jQuery( '.ast-checkout-slides' ).flexslider({
			selector: 		'.ast-two-step-checkout > li',
			slideshow: 		false,
			prevText: 		astra.checkout_prev_text,
			nextText: 		astra.checkout_next_text,
			animationLoop: 	false,
			manualControls: '.ast-checkout-control-nav li a',
		});

		jQuery( '.ast-checkout-slides .flex-direction-nav a' ).removeAttr( 'href' ).addClass( 'button' );

		jQuery( '.ast-checkout-slides .flex-direction-nav a' ).click(function() {
			jQuery( 'html, body' ).animate( {
				scrollTop: jQuery( 'form.checkout' ).offset().top
			}, 400 );
		});

		jQuery( '.ast-checkout-slides .flex-direction-nav a' ).on( 'touchstart', function() {
			jQuery( 'body' ).animate( {
				scrollTop: jQuery( 'form.checkout' ).offset().top
			}, 400 );
		});
	});
})(jQuery);