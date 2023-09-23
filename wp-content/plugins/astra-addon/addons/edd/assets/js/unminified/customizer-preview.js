/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra Addon
 * @since  1.6.10
 */

( function( $ ) {

	/**
	 * EDD Archive: Content Alignment
	 */
	wp.customize( 'astra-settings[edd-archive-product-align]', function( setting ) {
		setting.bind( function( alignment ) {

			var products = $(document).find('.ast-edd-archive-article, .edd_download');
			products.removeClass('align-left align-right align-center');
			products.addClass( alignment );
		} );
	} );

	/**
	 * Shop: Box Shadow
	 */
	wp.customize( 'astra-settings[edd-archive-product-shadow]', function( setting ) {
		setting.bind( function( product_shadow ) {

			var products = $(document).find('.ast-edd-archive-article, .edd_download');
			product_shadow = product_shadow > 5 ? 5 : ( product_shadow < 0 ? 0 : product_shadow );
			products.removeClass('box-shadow-0 box-shadow-1 box-shadow-2 box-shadow-3 box-shadow-4 box-shadow-5');
			products.addClass( 'box-shadow-' + product_shadow );
		} );
	} );

	/**
	 * Shop: Box Hover Shadow
	 */
	wp.customize( 'astra-settings[edd-archive-product-shadow-hover]', function( setting ) {
		setting.bind( function( product_shadow ) {

			var products = $(document).find('.ast-edd-archive-article, .edd_download');
			product_shadow = product_shadow > 5 ? 5 : ( product_shadow < 0 ? 0 : product_shadow );

			products.removeClass('box-shadow-0-hover box-shadow-1-hover box-shadow-2-hover box-shadow-3-hover box-shadow-4-hover box-shadow-5-hover');
			products.addClass( 'box-shadow-' + product_shadow + '-hover' );
		} );
	} );

	/**
	 * Shop: Button vertical padding
	 */
	wp.customize( 'astra-settings[edd-archive-button-v-padding]', function( setting ) {
		setting.bind( function( v_padding ) {

			var dynamicStyle = '';

			dynamicStyle += '.ast-edd-archive-block-wrap .edd-add-to-cart, .ast-edd-archive-block-wrap .edd_go_to_checkout, .ast-edd-archive-block-wrap .ast-edd-variable-btn, .edd_downloads_list .edd-add-to-cart, .edd_downloads_list .edd_go_to_checkout, .edd_downloads_list .ast-edd-variable-btn{';
			dynamicStyle += 'padding-top:' + v_padding + 'px;';
			dynamicStyle += 'padding-bottom:' + v_padding + 'px;';
			dynamicStyle += '}';

			astra_add_dynamic_css( 'edd-archive-button-v-padding', dynamicStyle );
		} );
	} );

	/**
	 * Shop: Button horizontal padding
	 */
	wp.customize( 'astra-settings[edd-archive-button-h-padding]', function( setting ) {
		setting.bind( function( h_padding ) {

			var dynamicStyle = '';

			dynamicStyle += '.ast-edd-archive-block-wrap .edd-add-to-cart, .ast-edd-archive-block-wrap .edd_go_to_checkout, .ast-edd-archive-block-wrap .ast-edd-variable-btn, .edd_downloads_list .edd-add-to-cart, .edd_downloads_list .edd_go_to_checkout, .edd_downloads_list .ast-edd-variable-btn{';
			dynamicStyle += 'padding-left:' + h_padding + 'px;';
			dynamicStyle += 'padding-right:' + h_padding + 'px;';
			dynamicStyle += '}';

			astra_add_dynamic_css( 'edd-archive-button-h-padding', dynamicStyle );
		} );
	} );
	/*
	 * Checkout Custom Width
	 */
	wp.customize( 'astra-settings[edd-checkout-content-max-width]', function( setting ) {
		setting.bind( function( width ) {

			var dynamicStyle = '@media all and ( min-width: 769px ) {';
				dynamicStyle += '.edd-checkout #edd_checkout_wrap{ max-width: ' + (  parseInt( width ) ) + 'px; margin: 0 auto; } ';
			dynamicStyle += '}';
			astra_add_dynamic_css( 'edd-checkout-content-max-width', dynamicStyle );

		} );
	});


	/**
	 * Cart icon style
	 */
	wp.customize( 'astra-settings[edd-header-cart-icon-style]', function( setting ) {
		setting.bind( function( icon_style ) {
				var buttons = $(document).find('.ast-edd-site-header-cart');
				buttons.removeClass('ast-edd-menu-cart-fill ast-edd-menu-cart-outline');
				buttons.addClass( 'ast-edd-menu-cart-' + icon_style );
				var dynamicStyle = '.ast-edd-site-header-cart a, .ast-edd-site-header-cart a *{ transition: all 0s; } ';
				astra_add_dynamic_css( 'edd-header-cart-icon-style', dynamicStyle );
		} );
	} );

	/**
	 * Cart Count Color.
	 */
	 wp.customize( 'astra-settings[edd-header-cart-product-count-color]', function( setting ) {
		setting.bind( function( color ) {
			var dynamicStyle = '.ast-edd-site-header-cart .ast-addon-cart-wrap span.astra-icon:after { color: ' + color + '; } ';
			astra_add_dynamic_css( 'edd-header-cart-product-count-color', dynamicStyle );
		} );
	} );

	/**
	 * EDD Cart Button Color
	 */
	wp.customize( 'astra-settings[edd-header-cart-icon-color]', function( setting ) {
		setting.bind( function( cart_icon_color ) {
			if ( cart_icon_color != '' ) {
				if( jQuery( '.ast-edd-site-header-cart' ).hasClass( 'ast-edd-menu-cart-outline' ) ) {
					var dynamicStyle = '.ast-edd-menu-cart-outline .ast-addon-cart-wrap { border: 1px solid ' + cart_icon_color + '; color: ' + cart_icon_color + '; background: #ffffff;}';
				}
				else {
					var dynamicStyle = '.ast-edd-site-header-cart.ast-edd-menu-cart-fill .ast-edd-cart-menu-wrap .count, .ast-edd-menu-cart-fill .ast-addon-cart-wrap, .ast-edd-menu-cart-fill .ast-addon-cart-wrap .ast-edd-header-cart-info-wrap, .ast-edd-menu-cart-fill .ast-addon-cart-wrap .ast-icon-shopping-cart { background-color: ' + cart_icon_color + '; color: #ffffff }';
				}
				astra_add_dynamic_css( 'primary-toggle-button-color', dynamicStyle );
			}
			wp.customize.preview.send( 'refresh' );
		});
	});

	/**
	 * Cart Border Width.
	 */
	astra_css( 'astra-settings[edd-header-cart-border-width]', 'border-width', '.ast-edd-menu-cart-outline .ast-addon-cart-wrap, .ast-theme-transparent-header .ast-edd-menu-cart-outline .ast-addon-cart-wrap', 'px' );

	/**
	 * Button Border Radius
	 */
	wp.customize( 'astra-settings[edd-header-cart-icon-radius]', function( setting ) {
		setting.bind( function( border ) {

			var dynamicStyle = '.ast-edd-site-header-cart.ast-edd-menu-cart-outline .ast-addon-cart-wrap, .ast-edd-site-header-cart.ast-edd-menu-cart-fill .ast-addon-cart-wrap{ border-radius: ' + ( parseInt( border ) ) + 'px } ';
			astra_add_dynamic_css( 'edd-header-cart-icon-radius', dynamicStyle );

		} );
	} );

	/**
	 * EDD Checkout Form Width
	 */
	wp.customize( 'astra-settings[edd-checkout-content-width]', function( setting ) {
		setting.bind( function( value ) {

			var dynamicStyle = '';

			var edd_checkout_content_max_width = wp.customize('astra-settings[edd-checkout-content-max-width]').get();

			if ( 'custom' === value  && undefined !== astAddonTabletBreakpoint.value ) {

				dynamicStyle += '@media (min-width: ' + astAddonTabletBreakpoint.value + 'px) {'
				dynamicStyle += '.edd-checkout #edd_checkout_wrap {';
				dynamicStyle += 'max-width: ' + edd_checkout_content_max_width + 'px;';
				dynamicStyle += 'margin: 0 auto;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
			}
			astra_add_dynamic_css( 'edd-checkout-content-width', dynamicStyle );

		} );
	} );

	// Single Typo.


	astra_generate_outside_font_family_css( 'astra-settings[font-family-edd-product-title]', '.single-download .entry-title' );
	astra_css( 'astra-settings[font-weight-edd-product-title]', 'font-weight', '.single-download .entry-title' );
	astra_responsive_font_size( 'astra-settings[font-size-edd-product-title]', '.single-download .entry-title' );
	astra_font_extras_css( 'font-extras-edd-product-title', '.single-download .entry-title' );

	astra_generate_outside_font_family_css( 'astra-settings[font-family-edd-product-content]', '.single-download .entry-content' );
	astra_css( 'astra-settings[font-weight-edd-product-content]', 'font-weight', '.single-download .entry-content' );
	astra_responsive_font_size( 'astra-settings[font-size-edd-product-content]', '.single-download .entry-content' );
	astra_font_extras_css( 'font-extras-edd-product-content', '.single-download .entry-content' );

	// Shop Typo.

	astra_generate_outside_font_family_css( 'astra-settings[font-family-edd-archive-product-title]', '.ast-edd-archive-block-wrap .edd_download_title a, .edd_downloads_list .edd_download_title a' );
	astra_css( 'astra-settings[font-weight-edd-archive-product-title]', 'font-weight', '.ast-edd-archive-block-wrap .edd_download_title a, .edd_downloads_list .edd_download_title a' );
	astra_responsive_font_size( 'astra-settings[font-size-edd-archive-product-title]', '.ast-edd-archive-block-wrap .edd_download_title a, .edd_downloads_list .edd_download_title a' );
	astra_font_extras_css( 'font-extras-edd-archive-product-title', '.ast-edd-archive-block-wrap .edd_download_title a, .edd_downloads_list .edd_download_title a' );

	astra_generate_outside_font_family_css( 'astra-settings[font-family-edd-archive-product-price]', '.ast-edd-archive-block-wrap .edd_price, .edd_downloads_list .edd_price,.ast-edd-archive-block-wrap .edd_price_options, .edd_downloads_list .edd_price_options' );
	astra_css( 'astra-settings[font-weight-edd-archive-product-price]', 'font-weight', '.ast-edd-archive-block-wrap .edd_price, .edd_downloads_list .edd_price,.ast-edd-archive-block-wrap .edd_price_options, .edd_downloads_list .edd_price_options' );
	astra_responsive_font_size( 'astra-settings[font-size-edd-archive-product-price]', '.ast-edd-archive-block-wrap .edd_price, .edd_downloads_list .edd_price,.ast-edd-archive-block-wrap .edd_price_options, .edd_downloads_list .edd_price_options' );
	astra_font_extras_css( 'font-extras-edd-archive-product-price', '.ast-edd-archive-block-wrap .edd_price, .edd_downloads_list .edd_price,.ast-edd-archive-block-wrap .edd_price_options, .edd_downloads_list .edd_price_options' );

	astra_generate_outside_font_family_css( 'astra-settings[font-family-edd-archive-product-content]', '.ast-edd-archive-block-wrap .edd_download_excerpt p, .edd_downloads_list .edd_download_excerpt p' );
	astra_css( 'astra-settings[font-weight-edd-archive-product-content]', 'font-weight', '.ast-edd-archive-block-wrap .edd_download_excerpt p, .edd_downloads_list .edd_download_excerpt p' );
	astra_responsive_font_size( 'astra-settings[font-size-edd-archive-product-content]', '.ast-edd-archive-block-wrap .edd_download_excerpt p, .edd_downloads_list .edd_download_excerpt p' );
	astra_font_extras_css( 'font-extras-edd-archive-product-content', '.ast-edd-archive-block-wrap .edd_download_excerpt p, .edd_downloads_list .edd_download_excerpt p' );

	// Single Product Colors.
	astra_css( 'astra-settings[edd-single-product-title-color]', 'color', '.single-download .entry-title' );
	astra_css( 'astra-settings[edd-single-product-content-color]', 'color', '.single-download .entry-content' );
	astra_css( 'astra-settings[edd-single-product-navigation-color]', 'color', '.single-download .post-navigation a' );

	// Shop Colors.
	astra_css( 'astra-settings[edd-archive-product-title-color]', 'color', '.ast-edd-archive-block-wrap .edd_download_title a, .edd_downloads_list .edd_download_title a' );
	astra_css( 'astra-settings[edd-archive-product-price-color]', 'color', '.ast-edd-archive-block-wrap .edd_price, .edd_downloads_list .edd_price,.ast-edd-archive-block-wrap .edd_price_options, .edd_downloads_list .edd_price_options' );
	astra_css( 'astra-settings[edd-archive-product-content-color]', 'color', '.ast-edd-archive-block-wrap .edd_download_excerpt p, .edd_downloads_list .edd_download_excerpt p' );

} )( jQuery );
