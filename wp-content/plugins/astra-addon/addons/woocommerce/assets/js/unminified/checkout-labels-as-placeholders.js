/**
 * Checkout Labels as Placeholders
 *
 * @package Astra Addon
 * @since 1.1.0
 */
jQuery( function( $ ) {

	if( typeof astra === 'undefined' ) {
        return;
    }
	
	var astra_checkout_form = {
		ast_checkout_form: $( 'form.checkout #customer_details, form.woocommerce-form-login' ),
		init: function() {
			// Inline validation
			this.ast_checkout_form.on( 'input validate change', '.input-text', this.validate_field );
			$( document.body ).bind( 'init_checkout', this.init_checkout );

			$('.input-text').trigger('input');
		},
	
		validate_field: function( e ) {
			var $this             = $( this ),
				$parent           = $this.closest( '.form-row' );
				$parent_label     = $parent.find("label").text();
			var placeholder = $(this).attr('placeholder');
			if ( '' == placeholder ) {
				// Add respective Labels to placeholders attributes if field doesn't have any.
				$($this).attr("placeholder", $parent_label );
			}

			if ( $this.val() ) {
				$parent.addClass( 'ast-float-label' );
			}
			else{
				$parent.removeClass( 'ast-float-label' );	
			}
		},
	};

	astra_checkout_form.init();
});
