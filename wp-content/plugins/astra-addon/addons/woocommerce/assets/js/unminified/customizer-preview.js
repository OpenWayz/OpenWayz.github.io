/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra Addon
 * @since  1.0.0
 */

( function( $ ) {

	var selector = '.woocommerce div.product .woocommerce-tabs ul.tabs';
	const selectorActive = '.woocommerce div.product:not(.ast-product-tabs-layout-vertical):not(.ast-product-tabs-layout-horizontal) .woocommerce-tabs ul.tabs';
	const singleProductTabSelector = 'div.product .ast-woocommerce-tabs .ast-tab-header';
	const singleProductAccordionSelector = 'div.product .ast-woocommerce-accordion .ast-accordion-header';
	const singleProductTabBar = '.woocommerce div.product .woocommerce-tabs ul.tabs li.active:before, .woocommerce div.ast-product-tabs-layout-vertical .woocommerce-tabs ul.tabs li:hover::before'

	// Single Product Heading Tab Normal color.
	astra_css(
		'astra-settings[single-product-heading-tab-normal-color]',
		'color',
		selector + ' li a,' + singleProductTabSelector
	);

	// Single Product Heading Tab Hover color.
	astra_css(
		'astra-settings[single-product-heading-tab-hover-color]',
		'color',
		selector + ' li a:hover,' + singleProductAccordionSelector + ':not(.active):hover'
	);

	// Single Product Heading Tab Active color.
	astra_css(
		'astra-settings[single-product-heading-tab-active-color]',
		'color',
		selectorActive + ' li.active a,' + singleProductTabSelector + '.active'
	);

	// Single Product Heading Tab Active Background.
	astra_css(
		'astra-settings[single-product-heading-tab-active-color]',
		'background',
		singleProductTabBar
	);

	/**
	 * Shop: Box Shadow
	 */
	 wp.customize( 'astra-settings[shop-item-box-shadow-control]', function( value ) {
		value.bind( function( shadow ) {
			var dynamicStyle = '';

			if( shadow.x != '' && shadow.y != '' && shadow.blur != '' && shadow.spread != '' ) {
				var position = wp.customize( 'astra-settings[shop-item-box-shadow-position]' ).get();
				var color = wp.customize( 'astra-settings[shop-item-box-shadow-color]' ).get();

				dynamicStyle = astra_addon_get_shop_items_shadow_css( '.woocommerce-page ul.products li.product, .woocommerce ul.products li.product', shadow, position, color );
			}
			astra_add_dynamic_css( 'shop-item-box-shadow-control', dynamicStyle );

		} );
	} );

	/**
	 * Box Shadow Color.
	 */
	wp.customize( 'astra-settings[shop-item-box-shadow-color]', function( value ) {
		value.bind( function( color ) {
			var dynamicStyle = '';

			if( '' != color ) {
				var shadow = wp.customize( 'astra-settings[shop-item-box-shadow-control]' ).get();
				var position = wp.customize( 'astra-settings[shop-item-box-shadow-position]' ).get();

				dynamicStyle = astra_addon_get_shop_items_shadow_css( '.woocommerce-page ul.products li.product, .woocommerce ul.products li.product', shadow, position, color );
			}
			astra_add_dynamic_css( 'shop-item-box-shadow-color', dynamicStyle );
		} );
	} );

	/**
	 * Box Shadow Position.
	 */
	wp.customize( 'astra-settings[shop-item-box-shadow-position]', function( value ) {
		value.bind( function( position ) {
			var dynamicStyle = '';

			if( '' != position ) {
				var shadow = wp.customize( 'astra-settings[shop-item-box-shadow-control]' ).get();
				var color = wp.customize( 'astra-settings[shop-item-box-shadow-color]' ).get();

				dynamicStyle = astra_addon_get_shop_items_shadow_css( '.woocommerce-page ul.products li.product, .woocommerce ul.products li.product', shadow, position, color );
			}
			astra_add_dynamic_css( 'shop-item-box-shadow-position', dynamicStyle );
		} );
	} );

	/**
	 * Shop: Box Shadow hover
	 */
	 wp.customize( 'astra-settings[shop-item-hover-box-shadow-control]', function( value ) {
		value.bind( function( shadow ) {
			var dynamicStyle = '';

			if( shadow.x != '' && shadow.y != '' && shadow.blur != '' && shadow.spread != '' ) {
				var position = wp.customize( 'astra-settings[shop-item-hover-box-shadow-position]' ).get();
				var color = wp.customize( 'astra-settings[shop-item-hover-box-shadow-color]' ).get();

				dynamicStyle = astra_addon_get_shop_items_shadow_css( '.woocommerce-page ul.products li.product:hover, .woocommerce ul.products li.product:hover', shadow, position, color );
			}
			astra_add_dynamic_css( 'shop-item-hover-box-shadow-control', dynamicStyle );

		} );
	} );

	/**
	 * Box Shadow hover Color.
	 */
	wp.customize( 'astra-settings[shop-item-hover-box-shadow-color]', function( value ) {
		value.bind( function( color ) {
			var dynamicStyle = '';

			if( '' != color ) {
				var shadow = wp.customize( 'astra-settings[shop-item-hover-box-shadow-control]' ).get();
				var position = wp.customize( 'astra-settings[shop-item-hover-box-shadow-position]' ).get();

				dynamicStyle = astra_addon_get_shop_items_shadow_css( '.woocommerce-page ul.products li.product:hover, .woocommerce ul.products li.product:hover', shadow, position, color );
			}
			astra_add_dynamic_css( 'shop-item-hover-box-shadow-color', dynamicStyle );
		} );
	} );

	/**
	 * Box Shadow hover Position.
	 */
	wp.customize( 'astra-settings[shop-item-hover-box-shadow-position]', function( value ) {
		value.bind( function( position ) {
			var dynamicStyle = '';

			if( '' != position ) {
				var shadow = wp.customize( 'astra-settings[shop-item-hover-box-shadow-control]' ).get();
				var color = wp.customize( 'astra-settings[shop-item-hover-box-shadow-color]' ).get();

				dynamicStyle = astra_addon_get_shop_items_shadow_css( '.woocommerce-page ul.products li.product:hover, .woocommerce ul.products li.product:hover', shadow, position, color );
			}
			astra_add_dynamic_css( 'shop-item-hover-box-shadow-position', dynamicStyle );
		} );
	} );

	/**
	 * Shop: Button padding
	 */
	astra_responsive_spacing( 'astra-settings[shop-button-padding]','.woocommerce.archive ul.products li a.button, .woocommerce > ul.products li a.button, .woocommerce related a.button, .woocommerce .related a.button, .woocommerce .up-sells a.button .woocommerce .cross-sells a.button', 'padding', [ 'top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[shop-button-padding]','.woocommerce.archive ul.products li a.button, .woocommerce > ul.products li a.button, .woocommerce related a.button, .woocommerce .related a.button, .woocommerce .up-sells a.button .woocommerce .cross-sells a.button', 'padding', [ 'left', 'right' ] );

	/**
	 * Shop: Product content padding
	 */
	astra_responsive_spacing( 'astra-settings[shop-product-content-padding]','.woocommerce ul.products li.product .astra-shop-summary-wrap, .woocommerce-page ul.products li.product .astra-shop-summary-wrap, .woocommerce.ast-woocommerce-shop-page-list-style ul.products li.product .astra-shop-summary-wrap, .woocommerce-page.ast-woocommerce-shop-page-list-style ul.products li.product .astra-shop-summary-wrap', 'padding', [ 'top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[shop-product-content-padding]','.woocommerce ul.products li.product .astra-shop-summary-wrap, .woocommerce-page ul.products li.product .astra-shop-summary-wrap, .woocommerce.ast-woocommerce-shop-page-list-style ul.products li.product .astra-shop-summary-wrap, .woocommerce-page.ast-woocommerce-shop-page-list-style ul.products li.product .astra-shop-summary-wrap', 'padding', [ 'left', 'right' ] );

	/**
	 * Shop: Sale Bubble Shape
	 */
	wp.customize( 'astra-settings[product-sale-style]', function( setting ) {
		setting.bind( function( bubble_style ) {

			var buttons = $(document).find('.woocommerce-page .products .product .onsale, .woocommerce .products .product .onsale, .woocommerce .product .onsale');
			buttons.removeClass('circle square circle-outline square-outline');
			buttons.addClass( bubble_style );
		} );
	} );

	/**
	 * Shop: Shop Pagination Style
	 */
	wp.customize( 'astra-settings[shop-pagination-style]', function( setting ) {
		setting.bind( function( pagination_style ) {

			var body = $('body.woocommerce, body.woocommerce-page');

			body.removeClass('ast-woocommerce-pagination-default ast-woocommerce-pagination-circle ast-woocommerce-pagination-square');
			body.addClass( 'ast-woocommerce-pagination-' + pagination_style );
		} );
	} );

	/**
	 * Single Product: Gallery Layout
	 */
	wp.customize( 'astra-settings[single-product-gallery-layout]', function( setting ) {
		setting.bind( function( gallery_layout ) {

			var product = $(document).find('.woocommerce-page.single .ast-woocommerce-container .product, .woocommerce.single .ast-woocommerce-container .product');

			product.removeClass('ast-product-gallery-layout-vertical ast-product-gallery-layout-horizontal ast-product-gallery-layout-first-image-large ast-product-gallery-layout-vertical-slider ast-product-gallery-layout-horizontal-slider');
			product.addClass( 'ast-product-gallery-layout-' + gallery_layout );

			$(window).trigger('resize');
			$(window).trigger('resize');
		});
	} );

	/**
	 * Single Product: Image Width
	 */
	wp.customize( 'astra-settings[single-product-image-width]', function( setting ) {
		setting.bind( function( width ) {

			if ( width != '' ) {
				var dynamicStyle = '',
					desc_width = 96 - width;

				dynamicStyle += '@media (min-width: 769px) { ';
				dynamicStyle += '.woocommerce #content .ast-woocommerce-container div.product div.images, .woocommerce .ast-woocommerce-container div.product div.images, .woocommerce-page #content .ast-woocommerce-container div.product div.images, .woocommerce-page .ast-woocommerce-container div.product div.images { width: ' + width + '% }';
				dynamicStyle += '.woocommerce #content .ast-woocommerce-container div.product div.summary, .woocommerce .ast-woocommerce-container div.product div.summary, .woocommerce-page #content .ast-woocommerce-container div.product div.summary, .woocommerce-page .ast-woocommerce-container div.product div.summary { width: ' + desc_width + '% }';
				dynamicStyle += ' }';
				astra_add_dynamic_css( 'woocommerce-single-product-image-width', dynamicStyle );

				$(window).trigger('resize');
			}
			else{
				wp.customize.preview.send( 'refresh' );
			}
		});
	} );

	/**
	 * Single Product: Related & Upsell Product Columns
	 */
	wp.customize( 'astra-settings[single-product-related-upsell-grid]', function( setting ) {
		setting.bind( function( grid ) {
			wp.customize.preview.send( 'refresh' );
		});
	} );


	/*
	 * Checkout form width toggle
	 */
		wp.customize( 'astra-settings[checkout-content-width]', function( setting ) {
			setting.bind( function( type ) {

				if( 'custom '!== type ) {
					wp.customize.preview.send( 'refresh' );
				}

			} );
		});

	/*
	 * Checkout Custom Widt
	 */
	wp.customize( 'astra-settings[checkout-content-max-width]', function( setting ) {
		setting.bind( function( width ) {

			var dynamicStyle = '@media all and ( min-width: 769px ) {';
				dynamicStyle += '.woocommerce-checkout form.checkout{ max-width: ' + (  parseInt( width ) ) + 'px; margin: 0 auto; } ';
			dynamicStyle += '}';
			astra_add_dynamic_css( 'checkout-content-max-width', dynamicStyle );

		} );
	});

	/**
	 * Cart total display
	 */
	wp.customize( 'astra-settings[woo-header-cart-total-display]', function( setting ) {
		setting.bind( function( cart_total_display ) {
			$( document.body ).trigger( 'wc_fragment_refresh' );
		} );
	} );

	/**
	 * Cart title display
	 */
	wp.customize( 'astra-settings[woo-header-cart-title-display]', function( setting ) {
		setting.bind( function( cart_title_display ) {
			$( document.body ).trigger( 'wc_fragment_refresh' );
		} );
	} );

	/**
	 * Cart icon style
	 */
	wp.customize( 'astra-settings[woo-header-cart-icon-style]', function( setting ) {
		setting.bind( function( icon_style ) {
			var buttons = $(document).find('.ast-site-header-cart');
			buttons.removeClass('ast-menu-cart-fill ast-menu-cart-outline');
			buttons.addClass( 'ast-menu-cart-' + icon_style );
			var dynamicStyle = '.ast-site-header-cart a, .ast-site-header-cart a *{ transition: all 0s; } ';
			astra_add_dynamic_css( 'woo-header-cart-icon-style', dynamicStyle );
		} );
	} );

	/**
	 * Button Border Radius
	 */
	wp.customize( 'astra-settings[woo-header-cart-icon-radius]', function( setting ) {
		setting.bind( function( border ) {

			var dynamicStyle = '.ast-site-header-cart.ast-menu-cart-outline .ast-addon-cart-wrap, .ast-site-header-cart.ast-menu-cart-fill .ast-addon-cart-wrap{ border-radius: ' + ( parseInt( border ) ) + 'px } ';
			astra_add_dynamic_css( 'woo-header-cart-icon-radius', dynamicStyle );

		} );
	} );

	/**
	 * Sale Badge Border Radius
	 */

	wp.customize( 'astra-settings[woo-sale-border-radius]', function( setting ) {
		setting.bind( function( border ) {

			var dynamicStyle = 'body.woocommerce .onsale, body.woocommerce-page .onsale, .ast-onsale-card, body .wc-block-grid .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-onsale { border-radius: ' + ( parseInt( border ) ) + 'px !important } ';
			astra_add_dynamic_css( 'woo-sale-border-radius', dynamicStyle );

		} );
	} );

	/**
	 * Cart icon color
	 */
	wp.customize( 'astra-settings[header-woo-cart-icon-color]', function( setting ) {
		setting.bind( function( color ) {


			var dynamicStyle = '.ast-menu-cart-fill .ast-addon-cart-wrap .count, .ast-menu-cart-fill .ast-addon-cart-wrap { background-color: ' + color + '; } ';
			dynamicStyle += '.ast-site-header-cart .ast-addon-cart-wrap .count, .ast-site-header-cart .ast-addon-cart-wrap .count:after { border-color: ' + color + '; } ';
			astra_add_dynamic_css( 'header-woo-cart-icon-color', dynamicStyle );
			wp.customize.preview.send( 'refresh' );
		} );
	} );

	/**
	 * Extras heading title.
	 */
	wp.customize( 'astra-settings[single-product-extras-text]', function( setting ) {
		setting.bind( function( title ) {
			$('.ast-single-product-extras p strong').text( title );
		} );
	} );

	// Quantity Plus Minus Button (Color Options) NORMAL.
	astra_css( 'astra-settings[plusminus-text-normal-color]', 'color', '.woocommerce form .quantity .minus, .woocommerce form .quantity .plus, .woocommerce form input[type=number].qty.ast-no-internal-border ' );
	astra_css( 'astra-settings[plusminus-background-normal-color]', 'background-color', '.woocommerce form .quantity .minus, .woocommerce form .quantity .plus, .woocommerce form input[type=number].qty.ast-no-internal-border ' );

	// Quantity Plus Minus Button (Color Options) HOVER.
	astra_css( 'astra-settings[plusminus-text-hover-color]', 'color', '.woocommerce form .quantity .minus:hover, .woocommerce form .quantity .plus:hover' );
	astra_css( 'astra-settings[plusminus-background-hover-color]', 'background-color', '.woocommerce form .quantity .minus:hover, .woocommerce form .quantity .plus:hover, .woocommerce form input[type=number].qty.ast-no-internal-border:hover' );
	/**
	 * Refresh Extras list.
	 */

	/**
	 * Refresh Extras list.
	 */
	wp.customize( 'astra-settings[single-product-extras-list]', function( setting ) {
		setting.bind( function( flag ) {
			wp.customize.preview.send( 'refresh' );
		} );
	} );

	// Product Archive Background color.
	wp.customize( 'astra-settings[shop-product-background-color]', function( setting ) {
		setting.bind( function( color ) {
			var dynamicStyle = '.woocommerce ul.products li.product, .woocommerce-page ul.products li.product { background-color: ' + color + ' } ';
			astra_add_dynamic_css( 'global-color-palette', dynamicStyle );
		} );
	} );

	// Order Summary Background color.
	wp.customize( 'astra-settings[order-summary-background-color]', function( setting ) {
		setting.bind( function( color ) {
			var dynamicStyle = '.woocommerce-checkout .woocommerce .ast-mobile-order-review-wrap { background-color: ' + color + ' } ';
			var germanizedPluginActivated = document.body.classList.contains('woocommerce-gzd-checkout');
			var isSingleColumnCheckout = document.querySelector('article').classList.contains('ast-one-column-checkout');
			if(!germanizedPluginActivated) {
				dynamicStyle += isSingleColumnCheckout ? 'form #order_review:not(.elementor-widget-woocommerce-checkout-page #order_review) table { background-color: ' + color + ' } ' : 'form #order_review:not(.elementor-widget-woocommerce-checkout-page #order_review) { background-color: ' + color + ' } ';
			}
			dynamicStyle += '.woocommerce-page.woocommerce-checkout form #order_review table { background-color: ' + color + ' } ';
			astra_add_dynamic_css( 'order-summary-background-color', dynamicStyle );
		} );
	} );

	// Payment Option Content Background color.
	wp.customize( 'astra-settings[payment-option-content-background-color]', function( setting ) {
		setting.bind( function( color ) {
			var dynamicStyle = '.woocommerce-page.woocommerce-checkout #payment div.payment_box { background-color: ' + color + ' } ';
			dynamicStyle += '.woocommerce-page.woocommerce-checkout #payment div.payment_box::before { border-bottom-color: ' + color + ' } ';
			dynamicStyle += '.ast-modern-checkout .woocommerce #payment ul.payment_methods div.payment_box { background-color: ' + color + ' } ';
			astra_add_dynamic_css( 'payment-option-content-background-color', dynamicStyle );
		} );
	} );

	// Single Product Colors.
	astra_css( 'astra-settings[single-product-title-color]', 'color', '.single-product div.product .entry-title' );
	astra_css( 'astra-settings[single-product-price-color]', 'color', '.single-product div.product p.price, .single-product div.product span.price' );
	astra_css( 'astra-settings[single-product-content-color]', 'color', '.single-product div.product .woocommerce-product-details__short-description, .single-product div.product .product_meta, .single-product div.product .entry-content' );
	astra_css( 'astra-settings[single-product-breadcrumb-color]', 'color', '.single-product div.product .woocommerce-breadcrumb, .single-product div.product .woocommerce-breadcrumb a' );
	astra_css( 'astra-settings[single-product-category-color]', 'color', '.single-product-category a' );

	// Shop Colors.
	astra_css( 'astra-settings[shop-product-title-color]', 'color', '.woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce-page ul.products li.product .woocommerce-loop-product__title' );
	astra_css( 'astra-settings[shop-product-price-color]', 'color', '.woocommerce ul.products li.product .price, .woocommerce-page ul.products li.product .price' );
	astra_css( 'astra-settings[shop-product-content-color]', 'color', '.woocommerce ul.products li.product .ast-woo-product-category, .woocommerce-page ul.products li.product .ast-woo-product-category, .woocommerce ul.products li.product .ast-woo-shop-product-description, .woocommerce-page ul.products li.product .ast-woo-shop-product-description' );

	// General Color.
	astra_css( 'astra-settings[single-product-price-color]', 'color', '.woocommerce ul.products li.product .price, .woocommerce div.product p.price, .woocommerce div.product span.price' );
	astra_css( 'astra-settings[single-product-rating-color]', 'color', '.woocommerce .star-rating, .woocommerce .comment-form-rating .stars a, .woocommerce .star-rating::before' );

	// General Sale Color.
	astra_css( 'astra-settings[product-sale-color]', 'color', '.woocommerce ul.products li.product .onsale, .woocommerce-page ul.products li.product .onsale,.woocommerce span.onsale, .woocommerce div.product .onsale.circle-outline, .woocommerce div.product .onsale.square-outline, .woocommerce ul.products li.product .onsale.square-outline, .woocommerce ul.products li.product .onsale.circle-outline, .ast-onsale-card' );
	astra_css( 'astra-settings[product-sale-bg-color]', 'background-color', '.woocommerce ul.products li.product .onsale, .woocommerce-page ul.products li.product .onsale, .woocommerce span.onsale, .ast-onsale-card' );
	astra_css( 'astra-settings[product-sale-bg-color]', 'border-color', '.woocommerce ul.products li.product .onsale.circle-outline, .woocommerce ul.products li.product .onsale.square-outline, .woocommerce div.product .onsale.circle-outline, .woocommerce div.product .onsale.square-outline, .ast-onsale-card' );

	// Shop Product Title Typography
	astra_generate_outside_font_family_css( 'astra-settings[font-family-shop-product-title]', '.woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce-page ul.products li.product .woocommerce-loop-product__title' );

	astra_css( 'astra-settings[font-weight-shop-product-title]', 'font-weight', '.woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce-page ul.products li.product .woocommerce-loop-product__title' );

	astra_responsive_font_size( 'astra-settings[font-size-shop-product-title]', '.woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce-page ul.products li.product .woocommerce-loop-product__title' );

	astra_font_extras_css( 'font-extras-shop-product-title', '.woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce-page ul.products li.product .woocommerce-loop-product__title' );

	// Shop Product Price Typography
	astra_generate_outside_font_family_css( 'astra-settings[font-family-shop-product-price]', '.woocommerce ul.products li.product .price, .woocommerce-page ul.products li.product .price' );

	astra_css( 'astra-settings[font-weight-shop-product-price]', 'font-weight', '.woocommerce ul.products li.product .price, .woocommerce-page ul.products li.product .price' );

	astra_responsive_font_size( 'astra-settings[font-size-shop-product-price]', '.woocommerce ul.products li.product .price, .woocommerce-page ul.products li.product .price' );

	astra_font_extras_css( 'font-extras-shop-product-price', '.woocommerce ul.products li.product .price, .woocommerce-page ul.products li.product .price' );

	// Shop Product Content Typography
	astra_generate_outside_font_family_css( 'astra-settings[font-family-shop-product-content]', '.woocommerce ul.products li.product .ast-woo-product-category, .woocommerce-page ul.products li.product .ast-woo-product-category, .woocommerce ul.products li.product .ast-woo-shop-product-description, .woocommerce-page ul.products li.product .ast-woo-shop-product-description' );

	astra_css( 'astra-settings[font-weight-shop-product-content]', 'font-weight', '.woocommerce ul.products li.product .ast-woo-product-category, .woocommerce-page ul.products li.product .ast-woo-product-category, .woocommerce ul.products li.product .ast-woo-shop-product-description, .woocommerce-page ul.products li.product .ast-woo-shop-product-description' );

	astra_responsive_font_size( 'astra-settings[font-size-shop-product-content]', '.woocommerce ul.products li.product .ast-woo-product-category, .woocommerce-page ul.products li.product .ast-woo-product-category, .woocommerce ul.products li.product .ast-woo-shop-product-description, .woocommerce-page ul.products li.product .ast-woo-shop-product-description' );

	astra_font_extras_css( 'font-extras-shop-product-content', '.woocommerce ul.products li.product .ast-woo-product-category, .woocommerce-page ul.products li.product .ast-woo-product-category, .woocommerce ul.products li.product .ast-woo-shop-product-description, .woocommerce-page ul.products li.product .ast-woo-shop-product-description' );

	// Single Product Title Typography
	astra_generate_outside_font_family_css( 'astra-settings[font-family-product-title]', '.single-product div.product .entry-title' );

	astra_css( 'astra-settings[font-weight-product-title]', 'font-weight', '.single-product div.product .entry-title' );

	astra_responsive_font_size( 'astra-settings[font-size-product-title]', '.single-product div.product .entry-title' );

	astra_font_extras_css( 'font-extras-product-title', '.single-product div.product .entry-title' );

	// Single Product Category Typography
	astra_generate_outside_font_family_css( 'astra-settings[font-family-product-category]', '.single-product-category a' );

	astra_css( 'astra-settings[font-weight-product-category]', 'font-weight', '.single-product-category a' );

	astra_responsive_font_size( 'astra-settings[font-size-product-category]', '.single-product-category a' );

	astra_font_extras_css( 'font-extras-product-category', '.single-product-category a' );

	// Single Product price Typography
	astra_generate_outside_font_family_css( 'astra-settings[font-family-product-price]', '.single-product div.product p.price, .single-product div.product span.price' );

	astra_css( 'astra-settings[font-weight-product-price]', 'font-weight', '.single-product div.product p.price, .single-product div.product span.price' );

	astra_responsive_font_size( 'astra-settings[font-size-product-price]', '.single-product div.product p.price, .single-product div.product span.price' );

	astra_font_extras_css( 'font-extras-product-price', '.single-product div.product p.price, .single-product div.product span.price' );

	// Single Product Breadcrumbs Typography
	astra_generate_outside_font_family_css( 'astra-settings[font-family-product-breadcrumb]', '.single-product div.product .woocommerce-breadcrumb' );

	astra_css( 'astra-settings[font-weight-product-breadcrumb]', 'font-weight', '.single-product div.product .woocommerce-breadcrumb' );

	astra_responsive_font_size( 'astra-settings[font-size-product-breadcrumb]', '.single-product div.product .woocommerce-breadcrumb' );

	astra_font_extras_css( 'font-extras-product-breadcrumb', '.single-product div.product .woocommerce-breadcrumb' );

	// Single Product Content Typography
	astra_generate_outside_font_family_css( 'astra-settings[font-family-product-content]', '.single-product div.product .woocommerce-product-details__short-description, .single-product div.product .product_meta, .single-product div.product .entry-content' );

	astra_css( 'astra-settings[font-weight-product-content]', 'font-weight', '.single-product div.product .woocommerce-product-details__short-description, .single-product div.product .product_meta, .single-product div.product .entry-content' );

	astra_responsive_font_size( 'astra-settings[font-size-product-content]', '.single-product div.product .woocommerce-product-details__short-description, .single-product div.product .product_meta, .single-product div.product .entry-content' );

	astra_font_extras_css( 'font-extras-product-content', '.single-product div.product .woocommerce-product-details__short-description, .single-product div.product .product_meta, .single-product div.product .entry-content' );

	// Single product navigation color
	const astraProductNavigationColor = '.ast-product-navigation-wrapper .product-links a, .ast-product-navigation-wrapper.circle-outline .product-links a, .ast-product-navigation-wrapper.square-outline .product-links a';
	const astraProductNavigationSolid = '.ast-product-navigation-wrapper .product-links a';
	const astraProductNavigationColorHover = '.ast-product-navigation-wrapper .product-links a:hover, .ast-product-navigation-wrapper.circle-outline .product-links a:hover, .ast-product-navigation-wrapper.square-outline .product-links a:hover'

	astra_css( 'astra-settings[single-product-nav-icon-n-color]', 'color', astraProductNavigationColor );
	astra_css( 'astra-settings[single-product-nav-icon-h-color]', 'color', astraProductNavigationColorHover );

	astra_css( 'astra-settings[single-product-nav-bg-n-color]', 'background', astraProductNavigationSolid );
	astra_css( 'astra-settings[single-product-nav-bg-h-color]', 'background', astraProductNavigationColorHover );

	astra_css( 'astra-settings[single-product-nav-bg-n-color]', 'border-color',astraProductNavigationColor );
	astra_css( 'astra-settings[single-product-nav-bg-h-color]', 'border-color', astraProductNavigationColorHover );

	/**
	 * Shop Filter Max Height.
	 */
	wp.customize( 'astra-settings[shop-filter-scrollbar-max-height]', function( setting ) {
		setting.bind( function( height ) {
			let dynamicStyle = '';
			dynamicStyle += '.ast-collapse-filter .ast-filter-wrap {';
			dynamicStyle += 'max-height:' + height + 'px;';
			dynamicStyle += 'overflow-y: auto;';
			dynamicStyle += '}';
			astra_add_dynamic_css( 'shop-filter-scrollbar-max-height', dynamicStyle );
		} );
	} );


} )( jQuery );

// Refresh cart icon sessionstorage for woocommerce cart fragments.
function astra_customizer_refresh_fragments() {

	var cart_hash_key = ast_woocommerce.cart_hash_key;
	window.sessionStorage.setItem(cart_hash_key, 'blank');
}

astra_customizer_refresh_fragments();

// Converts HEX to rbg
function hexToRgb( hex ) {
	let c;
	if( /^#([A-Fa-f0-9]{3}){1,2}$/.test( hex ) ){
		c= hex.substring(1).split('');
		if( c.length== 3 ){
			c= [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c= '0x'+c.join('');
		return [(c>>16)&255, (c>>8)&255, c&255].join( ',' );
	}
	throw new Error( 'Bad Hex' );
}

/**
 * Button Component CSS.
 *
 * @param string builder_type Builder Type.
 * @param string button_count Button Count.
 *
 */
 function astra_addon_get_shop_items_shadow_css( selector, shadow, position, color ) {

	var dynamicStyle = '';

	if( shadow.x != '' && shadow.y != '' && shadow.blur != '' && shadow.spread != '' ) {
		var box_shadow_color = ( '' !== color ) ? color + ' ' : 'rgba(0,0,0,0.5) ';
		var shadow_position = ( 'undefined' != typeof position && 'inset' == position ) ? 'inset' : '';
		var x_val = ( '' !== shadow.x ) ? ( shadow.x + 'px ' ) : '0px ';
		var y_val = ( '' !== shadow.y ) ? ( shadow.y + 'px ' ) : '0px ';
		var blur_val = ( '' !== shadow.blur ) ? ( shadow.blur + 'px ' ) : '0px ';
		var spread_val = ( '' !== shadow.spread ) ? ( shadow.spread + 'px ' ) : '0px ';

		dynamicStyle = selector + ' {';
		dynamicStyle += 'box-shadow:' + x_val + y_val + blur_val + spread_val + box_shadow_color + shadow_position + ';';
		dynamicStyle += '}';
	}

	return dynamicStyle;
}
