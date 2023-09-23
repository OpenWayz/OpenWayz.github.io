(function($){

	if ( undefined == window.astra ) {
		return;
	}

	astraSingleProductAjax = {

		/**
		 * Quick view AJAX add to cart
		 */
		quick_view_enable       : astra.shop_quick_view_enable || false,

		/**
		 * Single product AJAX add to cart
		 */
		ajax_add_to_cart_enable : astra.single_product_ajax_add_to_cart || false,
	
		/**
		 * Init
		 */
		init: function()
		{
			this._bind();
		},
		
		/**
		 * Binds events
		 */
		_bind: function()
		{
			if ( astraSingleProductAjax.ajax_add_to_cart_enable ) {
				$( document ).on( 'click', 'body.single-product .product:not(.product-type-external) button.single_add_to_cart_button, #sticky-add-to-cart .single_add_to_cart_button', astraSingleProductAjax._processAjaxRequest );
			}

			if ( astraSingleProductAjax.quick_view_enable ) {
				$( document.body ).on( 'click', '#ast-quick-view-content .product:not(.product-type-external) button.single_add_to_cart_button', astraSingleProductAjax._processAjaxRequest );
			}

			$( document.body ).on( 'added_to_cart', astraSingleProductAjax._updateButton );

			$( "form.variations_form" ).on( 'woocommerce_variation_has_changed', astraSingleProductAjax._updateSaleBadge );

		},

		/**
		 * Process add to cart AJAX request
		 *
		 * @param  object e Event object.
		 * @return void
		 */
		_processAjaxRequest: function( e )
		{
			e.preventDefault();

			var $form = $(this).closest('form');

			// If the form inputs are invalid
			if( ! $form[0].checkValidity() ) {
				$form[0].reportValidity();
				return false;
			}

			var $thisbutton  = $( this ),
				product_id 	 = $(this).val() || '',
				variation_id = $('input[name="variation_id"]').val() || '';
			
			if( $thisbutton.hasClass( 'disabled' ) ) {
				return;
			}

			// Add loading to the button.
			$thisbutton.removeClass( 'added' );
			$thisbutton.addClass( 'loading' );

			// Set Quantity.
			// 
			// For grouped product quantity should be array instead of single value
			// For that set the quantity as array for grouped product.
			var quantity = $('input[name="quantity"]').val()
			if( $('.woocommerce-grouped-product-list-item' ).length )
			{
				var quantities = $('input.qty'),
					quantity   = [];

				$.each(quantities, function(index, val) {

					var name = $( this ).attr( 'name' );

					name = name.replace('quantity[','');
					name = name.replace(']','');
					name = parseInt( name );

					if( $( this ).val() ) {
						quantity[ name ] = $( this ).val();
					}
				});
			}

			// Process the AJAX
			var cartFormData = $form.serialize();

			$.ajax ({
				url: astra.ajax_url,
				type:'POST',
				data:'action=astra_add_cart_single_product&add-to-cart='+product_id+'&'+cartFormData,
				success:function(results) {

					if( 0 === results.length ) {
						location.reload();
						return false;
					}

					// Trigger event so themes can refresh other areas.
					$( document.body ).trigger( 'wc_fragment_refresh' );
					$( document.body ).trigger( 'added_to_cart', [ results.fragments, results.cart_hash, $thisbutton ] );


					if( astra.is_single_product ) {
						const slideInCart = $( '#astra-mobile-cart-drawer' );

						if( 'slide_in_cart' === astra.add_to_cart_options_single && slideInCart ) {
							slideInCart.addClass( 'active' );
							$( 'html' ).addClass( 'ast-mobile-cart-active' );
						}

						if( 'redirect_cart_page' === astra.add_to_cart_options_single ) {
							window.open( astra.cart_url ,"_self");
						}

						if( 'redirect_checkout_page' === astra.add_to_cart_options_single ) {
							window.open( astra.checkout_url ,"_self");
						}

						if( 'default' === astra.add_to_cart_options_single ) {

							if ( typeof wc_add_to_cart_params === 'undefined' ) {
								return;
							}

							// Redirect to cart option.
							if ( wc_add_to_cart_params.cart_redirect_after_add === 'yes' ) {
								window.location = wc_add_to_cart_params.cart_url;
								return;
							}
						}
					}

				}
			});
		},

		/**
		 * Update cart page elements after add to cart events.
		 */
		_updateButton: function( e, fragments, cart_hash, button )
		{
			button = typeof button === 'undefined' ? false : button;

			if ( $( 'button.single_add_to_cart_button' ).length ) {

				$( button ).removeClass( 'loading' );
				$( button ).addClass( 'added' );

				// View cart text.
				if ( ! astra.is_cart && $(button).parent().find( '.added_to_cart' ).length === 0 ) {
					$(button).after( ' <a href="' + astra.cart_url + '" class="added_to_cart wc-forward" title="' +
						astra.view_cart + '">' + astra.view_cart + '</a>' );
				}

				$( document.body ).trigger( 'wc_cart_button_updated', [ button ] );
			}

		},

		/**
		 * Update sale badge percentage when product variation is switched.
		 */
		_updateSaleBadge: function( e ) 
		{
			var $form = $(this);
			var selected_variation = $form.find('.variation_id').val();
			
			if( '' != selected_variation ) {
				var sale_badge = $form.closest( '.product-type-variable').find( 'span.onsale' );
				var sale_notification = sale_badge.data( 'notification' );

				if( 'sale-percentage' == sale_notification ) {
					var sale_data = sale_badge.data('sale');

					if( 'undefined' != typeof sale_data[selected_variation] ) {
						var sale_percentage_text = sale_badge.data('sale-per-text');
						sale_percentage_text = sale_percentage_text.replace( '[value]', sale_data[selected_variation] );
						sale_badge.text( sale_percentage_text );
					}
				}
			}
		}

	};

	/**
	 * Initialization
	 */
	$(function(){
		astraSingleProductAjax.init();
	});

})(jQuery);