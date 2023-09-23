/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra Addon
 * @since  1.6.0
 */
( function( $ ) {

	// Above Header.

	astra_css( 'astra-settings[above-header-megamenu-heading-color]', 'color', '.ast-desktop .ast-mega-menu-enabled.ast-above-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[above-header-megamenu-heading-h-color]', 'color', '.ast-desktop .ast-mega-menu-enabled.ast-above-header-menu .sub-menu .menu-item.menu-item-heading:hover > .menu-link, .ast-desktop .ast-mega-menu-enabled.ast-above-header-menu .sub-menu.menu-item .menu-item-heading:focus > .menu-link, .ast-desktop .ast-mega-menu-enabled.ast-above-header-menu .sub-menu .menu-item.menu-item-heading.focus > .menu-link, .ast-desktop .ast-mega-menu-enabled.ast-above-header-menu .sub-menu .menu-item.menu-item-heading > .menu-link:hover' );
	astra_responsive_spacing( 'astra-settings[above-header-megamenu-heading-space]','.ast-desktop .ast-above-header-navigation .ast-mega-menu-enabled.ast-above-header-menu .astra-megamenu .menu-item-heading > .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );
	
	astra_generate_outside_font_family_css( 'astra-settings[above-header-megamenu-heading-font-family]', '.ast-desktop .ast-mega-menu-enabled.ast-above-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[above-header-megamenu-heading-font-weight]', 'font-weight', '.ast-desktop .ast-mega-menu-enabled.ast-above-header-menu .menu-item-heading > .menu-link' );
	astra_responsive_font_size( 'astra-settings[above-header-megamenu-heading-font-size]', '.ast-desktop .ast-mega-menu-enabled.ast-above-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[above-header-megamenu-heading-text-transform]', 'text-transform', '.ast-desktop .ast-mega-menu-enabled.ast-above-header-menu .menu-item-heading > .menu-link' );

	// Primary Header.
	astra_css( 'astra-settings[primary-header-megamenu-heading-color]', 'color', '.ast-desktop .ast-mega-menu-enabled.main-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[primary-header-megamenu-heading-h-color]', 'color', '.ast-desktop .ast-mega-menu-enabled.main-header-menu .menu-item.menu-item-heading > .menu-link:hover, .ast-desktop .ast-mega-menu-enabled.main-header-menu .menu-item.menu-item-heading > .menu-link:focus' );
	astra_responsive_spacing( 'astra-settings[primary-header-megamenu-heading-space]','.ast-desktop .ast-mega-menu-enabled.main-header-menu .menu-item-heading > .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );

	astra_generate_outside_font_family_css( 'astra-settings[primary-header-megamenu-heading-font-family]', '.ast-desktop .ast-mega-menu-enabled.main-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[primary-header-megamenu-heading-font-weight]', 'font-weight', '.ast-desktop .ast-mega-menu-enabled.main-header-menu .menu-item-heading > .menu-link' );
	astra_responsive_font_size( 'astra-settings[primary-header-megamenu-heading-font-size]', '.ast-desktop .ast-mega-menu-enabled.main-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[primary-header-megamenu-heading-text-transform]', 'text-transform', '.ast-desktop .ast-mega-menu-enabled.main-header-menu .menu-item-heading > .menu-link' );

	// Below Header.
	astra_css( 'astra-settings[below-header-megamenu-heading-color]', 'color', '.ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[below-header-megamenu-heading-h-color]', 'color', '.ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link:hover, .ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link:focus, .ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link.focus' );
	
	astra_responsive_spacing( 'astra-settings[below-header-megamenu-heading-space]','.ast-desktop .ast-below-header-navigation .ast-mega-menu-enabled.ast-below-header-menu .astra-megamenu .menu-item-heading > .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );
	astra_responsive_font_size( 'astra-settings[below-header-megamenu-heading-font-size]', '.ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[below-header-megamenu-heading-text-transform]', 'text-transform', '.ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link' );

	astra_generate_outside_font_family_css( 'astra-settings[below-header-megamenu-heading-font-family]', '.ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[below-header-megamenu-heading-font-weight]', 'font-weight', '.ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link' );
	astra_responsive_font_size( 'astra-settings[below-header-megamenu-heading-font-size]', '.ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[below-header-megamenu-heading-text-transform]', 'text-transform', '.ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link' );

	// Sticky Above Header.
	astra_css( 'astra-settings[sticky-above-header-megamenu-heading-color]', 'color', '.ast-desktop.ast-below-sticky-header-active .ast-mega-menu-enabled .menu-item-heading > .menu-link, .ast-desktop.ast-below-sticky-header-active #ast-fixed-header .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[sticky-above-header-megamenu-heading-h-color]', 'color', '.ast-desktop.ast-above-sticky-header-active .ast-mega-menu-enabled .menu-item-heading > .menu-link:hover, .ast-desktop.ast-above-sticky-header-active .ast-mega-menu-enabled .menu-item-heading > .menu-link:focus, .ast-desktop.ast-above-sticky-header-active .ast-mega-menu-enabled .menu-item-heading > .menu-link.focus, .ast-desktop.ast-above-sticky-header-active #ast-fixed-header .ast-mega-menu-enabled.ast-above-header-menu .menu-item-heading > .menu-link:hover, .ast-desktop.ast-above-sticky-header-active #ast-fixed-header .ast-mega-menu-enabled.ast-above-header-menu .menu-item-heading > .menu-link:focus, .ast-desktop.ast-above-sticky-header-active #ast-fixed-header .ast-mega-menu-enabled.ast-above-header-menu .menu-item-heading > .menu-link.focus' );

	// Sticky Below Header.
	astra_css( 'astra-settings[sticky-below-header-megamenu-heading-color]', 'color', '.ast-desktop.ast-below-sticky-header-active .ast-mega-menu-enabled .menu-item-heading > .menu-link, .ast-desktop.ast-below-sticky-header-active #ast-fixed-header .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[sticky-below-header-megamenu-heading-h-color]', 'color', '.ast-desktop.ast-below-sticky-header-active .ast-mega-menu-enabled .menu-item-heading > .menu-link:hover, .ast-desktop.ast-below-sticky-header-active .ast-mega-menu-enabled .menu-item-heading > .menu-link:focus, .ast-desktop.ast-below-sticky-header-active .ast-mega-menu-enabled .menu-item-heading > .menu-link.focus, .ast-desktop.ast-below-sticky-header-active #ast-fixed-header .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link:hover, .ast-desktop.ast-below-sticky-header-active #ast-fixed-header .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link:focus, .ast-desktop.ast-below-sticky-header-active #ast-fixed-header .ast-mega-menu-enabled.ast-below-header-menu .menu-item-heading > .menu-link.focus' );
	
	// Sticky Primary Header.
	astra_css( 'astra-settings[sticky-primary-header-megamenu-heading-color]', 'color', '.ast-desktop.ast-primary-sticky-header-active .ast-mega-menu-enabled.main-header-menu .sub-menu .menu-item.menu-item-heading > .menu-link, .ast-desktop #ast-fixed-header .ast-mega-menu-enabled.main-header-menu .sub-menu .menu-item.menu-item-heading > .menu-link' );
	astra_css( 'astra-settings[sticky-primary-header-megamenu-heading-h-color]', 'color', '.ast-desktop.ast-primary-sticky-header-active .ast-mega-menu-enabled.main-header-menu .menu-item-heading > .menu-link:hover, .ast-desktop.ast-primary-sticky-header-active .ast-mega-menu-enabled.main-header-menu .menu-item-heading > .menu-link:focus, .ast-desktop.ast-primary-sticky-header-active .ast-mega-menu-enabled.main-header-menu .menu-item-heading > .menu-link.focus, .ast-desktop #ast-fixed-header .ast-mega-menu-enabled.main-header-menu .sub-menu .menu-item-heading > .menu-link:hover, .ast-desktop #ast-fixed-header .ast-mega-menu-enabled.main-header-menu .sub-menu .menu-item-heading > .menu-link:focus, .ast-desktop #ast-fixed-header .ast-mega-menu-enabled.main-header-menu .sub-menu .menu-item-heading > .menu-link.focus' );
	/**
	 * Primary Submenu border
	 */
	wp.customize( 'astra-settings[primary-submenu-border]', function( value ) {
		value.bind( function( border ) {

			var color = (typeof ( wp.customize._value['astra-settings[primary-submenu-b-color]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[primary-submenu-b-color]']._value : '';

			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {
				var dynamicStyle  = '.ast-desktop .main-header-menu.ast-mega-menu-enabled.submenu-with-border .astra-full-megamenu-wrapper';
					dynamicStyle += '{';
					dynamicStyle += 'border-top-width:'   + border.top + 'px;';
					dynamicStyle += 'border-left-width:'   + border.left + 'px;';
					dynamicStyle += 'border-right-width:'   + border.right + 'px;';
					dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
					dynamicStyle += 'border-color:' + color + ';';
					dynamicStyle += 'border-style: solid;';
					dynamicStyle += '}';
					astra_add_dynamic_css( 'primary-megamenu-border', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Primary Submenu border color
	 */
	wp.customize( 'astra-settings[primary-submenu-b-color]', function( value ) {
		value.bind( function( color ) {

			var border = (typeof ( wp.customize._value['astra-settings[primary-submenu-border]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[primary-submenu-border]']._value : '';
			if ( '' != color ) {
				if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {
					var dynamicStyle  = '.ast-desktop .main-header-menu.ast-mega-menu-enabled.submenu-with-border .astra-full-megamenu-wrapper';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'   + border.top + 'px;';
						dynamicStyle += 'border-left-width:'   + border.left + 'px;';
						dynamicStyle += 'border-right-width:'   + border.right + 'px;';
						dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += 'border-style: solid;';
						dynamicStyle += '}';
						astra_add_dynamic_css( 'primary-megamenu-border-color', dynamicStyle );
				}
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Above header submenu border
	 */
	wp.customize( 'astra-settings[above-header-submenu-border]', function( value ) {
		value.bind( function( border ) {

			var color = (typeof ( wp.customize._value['astra-settings[above-header-submenu-border-color]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[above-header-submenu-border-color]']._value : '';


			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {
				var dynamicStyle  = '.astub-menu, .ast-above-header-menu.ast-mega-menu-enabled.submenu-with-border .astra-full-megamenu-wrapper';
					dynamicStyle += '{';
					dynamicStyle += 'border-top-width:'  + border.top + 'px;';
					dynamicStyle += 'border-right-width:'  + border.right + 'px;';
					dynamicStyle += 'border-left-width:'   + border.left + 'px;';
					dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
					dynamicStyle += 'border-style: solid;';
					dynamicStyle += 'border-color:' + color + ';';
					dynamicStyle += '}';

				astra_add_dynamic_css( 'above-header-megamenu-border', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Above header submenu border color
	 */
	wp.customize( 'astra-settings[above-header-submenu-border-color]', function( value ) {
		value.bind( function( color ) {

			var border = (typeof ( wp.customize._value['astra-settings[above-header-submenu-border]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[above-header-submenu-border]']._value : '';


			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {
				var dynamicStyle  = '.astub-menu, .ast-above-header-menu.ast-mega-menu-enabled.submenu-with-border .astra-full-megamenu-wrapper';
					dynamicStyle += '{';
					dynamicStyle += 'border-top-width:'  + border.top + 'px;';
					dynamicStyle += 'border-right-width:'  + border.right + 'px;';
					dynamicStyle += 'border-left-width:'   + border.left + 'px;';
					dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
					dynamicStyle += 'border-style: solid;';
					dynamicStyle += 'border-color:' + color + ';';
					dynamicStyle += '}';

				astra_add_dynamic_css( 'above-header-megamenu-border-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Below header submenu border
	 */
	wp.customize( 'astra-settings[below-header-submenu-border]', function( value ) {
		value.bind( function( border ) {

			var color = (typeof ( wp.customize._value['astra-settings[below-header-submenu-border-color]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[below-header-submenu-border-color]']._value : '';

			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {
				var dynamicStyle  = '.astub-menu, .ast-below-header-menu.ast-mega-menu-enabled.submenu-with-border .astra-full-megamenu-wrapper';
					dynamicStyle += '{';
					dynamicStyle += 'border-top-width:'  + border.top + 'px;';
					dynamicStyle += 'border-right-width:'  + border.right + 'px;';
					dynamicStyle += 'border-left-width:'   + border.left + 'px;';
					dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
					dynamicStyle += 'border-style: solid;';
					dynamicStyle += 'border-color:' + color + ';';
					dynamicStyle += '}';

				astra_add_dynamic_css( 'below-header-megamenu-border', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Below header submenu border color
	 */
	wp.customize( 'astra-settings[below-header-submenu-border-color]', function( value ) {
		value.bind( function( color ) {

			var border = (typeof ( wp.customize._value['astra-settings[below-header-submenu-border]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[below-header-submenu-border]']._value : '';

			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {
				var dynamicStyle  = '.astub-menu, .ast-below-header-menu.ast-mega-menu-enabled.submenu-with-border .astra-full-megamenu-wrapper';
					dynamicStyle += '{';
					dynamicStyle += 'border-top-width:'  + border.top + 'px;';
					dynamicStyle += 'border-right-width:'  + border.right + 'px;';
					dynamicStyle += 'border-left-width:'   + border.left + 'px;';
					dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
					dynamicStyle += 'border-style: solid;';
					dynamicStyle += 'border-color:' + color + ';';
					dynamicStyle += '}';

				astra_add_dynamic_css( 'below-header-megamenu-border-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	astra_color_responsive_css( 'above-header-megamenu-bg', 'astra-settings[above-header-submenu-bg-color-responsive]', 'background-color', '.ast-above-header-menu.ast-mega-menu-enabled.submenu-with-border .astra-full-megamenu-wrapper' );
	
} )( jQuery );