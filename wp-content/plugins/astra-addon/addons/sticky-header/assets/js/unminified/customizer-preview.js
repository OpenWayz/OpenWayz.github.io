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

	let tablet_break_point    = ast_preview.tablet_break_point || 768,
		mobile_break_point    = ast_preview.mobile_break_point || 544;

	wp.customize( 'astra-settings[site-layout-box-width]', function( value ) {
		value.bind( function( width ) {
			/**
			 * Has sticky header?
			 */
			if ( jQuery( '*[data-stick-maxwidth]' ).length ) {
				jQuery( '*[data-stick-maxwidth]' ).find( '.ast-sticky-active, .ast-header-sticky-active, .ast-custom-footer' ).css( { 'max-width': width + 'px', 'transition': 'none' } );
				jQuery( '*[data-stick-maxwidth]' ).attr( 'data-stick-maxwidth', width );
			}
		} );
	} );

	wp.customize( 'astra-settings[site-layout-box-tb-margin]', function( value ) {
		value.bind( function( margin ) {

			header_top 			= (typeof ( wp.customize._value['astra-settings[above-header-layout]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[above-header-layout]']._value: '';
			header_below		= (typeof ( wp.customize._value['astra-settings[below-header-layout]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[below-header-layout]']._value: '';
			header_above_stick 	= (typeof ( wp.customize._value['astra-settings[header-above-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-above-stick]']._value: '';
			header_below_stick 	= (typeof ( wp.customize._value['astra-settings[header-below-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-below-stick]']._value: '';
			header_main_stick 	= (typeof ( wp.customize._value['astra-settings[header-main-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-main-stick]']._value: '';

			if( header_main_stick || ( header_top != 'disabled' && header_above_stick ) || ( header_below != 'disabled' && header_below_stick ) ) {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	wp.customize( 'astra-settings[site-layout-padded-pad]', function( value ) {
		value.bind( function( padding ) {

			header_top 			= (typeof ( wp.customize._value['astra-settings[above-header-layout]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[above-header-layout]']._value : '';
			header_below 		= (typeof ( wp.customize._value['astra-settings[below-header-layout]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[below-header-layout]']._value : '';
			header_above_stick 	= (typeof ( wp.customize._value['astra-settings[header-above-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-above-stick]']._value : '';
			header_below_stick 	= (typeof ( wp.customize._value['astra-settings[header-below-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-below-stick]']._value : '';
			header_main_stick 	= (typeof ( wp.customize._value['astra-settings[header-main-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-main-stick]']._value : '';

			if( header_main_stick || ( header_top != 'disabled' && header_above_stick ) || ( header_below != 'disabled' && header_below_stick ) ) {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

		var sticky_header_style = astSticky.sticky_header_style || '';
		var sticky_hide_on_scroll = astSticky.sticky_hide_on_scroll || '';
		var isHeaderBuilderActive = astSticky.header_builder_active || false;

		if( isHeaderBuilderActive ) {
			// Site Identity preview styles.
			astra_css( 'astra-settings[sticky-header-builder-site-title-color]', 'color', '[CLASS*="-sticky-header-active"] #ast-fixed-header.ast-header-sticked .site-title a, [CLASS*="-sticky-header-active"] .ast-header-sticked .site-title a, [CLASS*="-sticky-header-active"] .ast-header-sticked .site-title a:focus, [CLASS*="-sticky-header-active"] .ast-header-sticked .site-title a:hover, [CLASS*="-sticky-header-active"] .ast-header-sticked .site-title a:visited' );
			astra_css( 'astra-settings[sticky-header-builder-site-title-h-color]', 'color', '[CLASS*="-sticky-header-active"] #ast-fixed-header.ast-header-sticked .site-title a:hover, [CLASS*="-sticky-header-active"] .ast-header-sticked .site-title a:hover' );
			astra_css( 'astra-settings[sticky-header-builder-site-tagline-color]', 'color', '[CLASS*="-sticky-header-active"] #ast-fixed-header.ast-header-sticked .ast-site-identity .site-description, [CLASS*="-sticky-header-active"] .ast-header-sticked .ast-site-identity .site-description' );

			for ( var index = 1; index <= astSticky.component_limit; index++ ) {

				// Menu color preview styles.
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-color-responsive]', 'color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' > .menu-item > .menu-link' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-bg-obj-responsive]', 'background-color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index );

				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-h-color-responsive]', 'color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .menu-item > .menu-link:hover, [CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .menu-item:hover > .menu-link' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-h-bg-color-responsive]', 'background-color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .menu-item > .menu-link:hover, [CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .menu-item:hover > .menu-link' );

				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-a-color-responsive]', 'color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .menu-item.current-menu-item > .menu-link' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-a-bg-color-responsive]', 'background-color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .menu-item.current-menu-item > .menu-link' );

				// Submenu color preview styles.
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-submenu-color-responsive]', 'color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-link' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-submenu-bg-color-responsive]', 'background-color', '.ast-header-sticked .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu, .ast-header-sticked .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-link' );

				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-submenu-h-color-responsive]', 'color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-item > .menu-link:hover, [CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-item:hover > .menu-link' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-submenu-h-bg-color-responsive]', 'background-color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-item > .menu-link:hover, [CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-item:hover > .menu-link' );

				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-submenu-a-color-responsive]', 'color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-item.current-menu-item > .menu-link, [CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-item.current-menu-ancestor > .menu-link' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu'+ index +'-submenu-a-bg-color-responsive]', 'background-color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-item.current-menu-item > .menu-link, [CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' #ast-hf-menu-'+ index +' .sub-menu .menu-item.current-menu-ancestor > .menu-link' );

				if ( 3 > index ) {
					// Megamenu Heading color preview styles.
					astra_css( 'astra-settings[sticky-header-menu'+ index +'-header-megamenu-heading-color]', 'color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' .main-header-menu.ast-mega-menu-enabled .sub-menu .menu-item.menu-item-heading > .menu-link' );
					astra_css( 'astra-settings[sticky-header-menu'+ index +'-header-megamenu-heading-h-color]', 'color', '[CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' .main-header-menu.ast-mega-menu-enabled .sub-menu .menu-item.menu-item-heading:hover > .menu-link, [CLASS*="-sticky-header-active"] .ast-builder-menu-'+ index +' .main-header-menu.ast-mega-menu-enabled .sub-menu .menu-item.menu-item-heading > .menu-link:hover' );
				}
			}

		} else {
			if ( 'none' === sticky_header_style &&  '1' != sticky_hide_on_scroll ) {
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-site-title-responsive]','color', '.ast-primary-sticky-header-active .site-title a, .ast-primary-sticky-header-active .site-title a:focus, .ast-primary-sticky-header-active .site-title a:hover, .ast-primary-sticky-header-active .site-title a:visited' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-h-site-title-responsive]','color', '.ast-primary-sticky-header-active .site-header .site-title a:hover' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-site-tagline-responsive]','color', '.ast-primary-sticky-header-active .site-header .site-description' );
			} else {
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-site-title-responsive]','color', '#ast-fixed-header .site-title a, #ast-fixed-header .site-title a:focus, #ast-fixed-header .site-title a:hover, #ast-fixed-header .site-title a:visited' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-h-site-title-responsive]','color', '#ast-fixed-header.site-header .site-title a:hover' );
				astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-site-tagline-responsive]','color', '#ast-fixed-header.site-header .site-description' );
			}
		}

		if ( 'none' === sticky_header_style &&  '1' != sticky_hide_on_scroll ) {

			/**
			 * Sticky Primary Header
			 */
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-bg-color-responsive]','background', '.ast-transparent-header.ast-primary-sticky-header-active .main-header-bar, .ast-primary-sticky-header-active .ast-main-header-wrap .main-header-bar, .ast-primary-sticky-header-active.ast-header-break-point .main-header-bar, .ast-primary-sticky-enabled .ast-main-header-wrap .main-header-bar.ast-header-sticked' );

			// Sticky -- Primary Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-bg-color-responsive]','background-color', '.ast-primary-sticky-header-active .main-header-bar-navigation .main-header-menu, .ast-header-break-point.ast-primary-sticky-header-active .main-header-menu, .ast-header-break-point.ast-primary-sticky-header-active .main-header-bar-navigation .site-navigation, .ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-color-responsive]','color', '.ast-primary-sticky-header-active .main-header-menu, .ast-primary-sticky-header-active .main-header-menu .menu-link, .ast-primary-sticky-header-active .ast-builder-menu-1 .main-header-menu .menu-item > .menu-link, .ast-primary-sticky-header-active .ast-builder-menu-2 .main-header-menu .menu-item > .menu-link, .ast-primary-sticky-header-active .ast-header-custom-item, .ast-header-custom-item a, .ast-primary-sticky-header-active li.ast-masthead-custom-menu-items, .ast-primary-sticky-header-active li.ast-masthead-custom-menu-items a, .ast-primary-sticky-header-active .ast-masthead-custom-menu-items .ast-inline-search form' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-h-color-responsive]','color', '.ast-primary-sticky-header-active .main-header-menu .menu-item.current-menu-item > .menu-link, .ast-primary-sticky-header-active .main-header-menu .menu-item.current-menu-ancestor > .menu-link, .ast-primary-sticky-header-active .main-header-menu, .ast-primary-sticky-header-active .ast-builder-menu-1 .main-header-menu .menu-item > .menu-link:hover, .ast-primary-sticky-header-active .main-header-menu, .ast-primary-sticky-header-active .ast-builder-menu-2 .main-header-menu .menu-item > .menu-link:hover, .ast-header-custom-item a:hover, .ast-primary-sticky-header-active .main-header-menu .menu-item:hover > .menu-link, .ast-primary-sticky-header-active .main-header-menu .menu-item.focus > .menu-link, .ast-primary-sticky-header-active .main-header-menu .ast-masthead-custom-menu-items a:hover, .ast-primary-sticky-header-active .main-header-menu .menu-item:hover > .ast-menu-toggle, .ast-primary-sticky-header-active .main-header-menu .menu-item.focus > .ast-menu-toggle' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-h-a-bg-color-responsive]','background-color', '.ast-primary-sticky-header-active .main-header-menu .menu-item.current-menu-item > .menu-link, .ast-primary-sticky-header-active .main-header-menu .menu-item.current-menu-ancestor > .menu-link,.ast-primary-sticky-header-active .main-header-menu .menu-link:hover, .ast-header-custom-item a:hover, .ast-primary-sticky-header-active .main-header-menu .menu-item:hover > .menu-link, .ast-primary-sticky-header-active .main-header-menu .menu-item.focus > .menu-link' );


			// Sticky -- Primary Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-bg-color-responsive]','background-color', '.ast-primary-sticky-header-active .main-navigation .main-header-menu .sub-menu, .ast-header-break-point.ast-primary-sticky-header-active .main-header-menu .sub-menu, .ast-flyout-menu-enable.ast-header-break-point.ast-primary-sticky-header-active .main-header-bar-navigation .main-header-menu .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-color-responsive]','color', '.ast-primary-sticky-header-active .main-header-bar-navigation .main-header-menu .sub-menu, .ast-primary-sticky-header-active .main-header-bar-navigation .main-header-menu .sub-menu .menu-link, .ast-primary-sticky-header-active .main-header-bar-navigation .main-header-menu .sub-menu .menu-item > .ast-menu-toggle' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-h-color-responsive]','color', '.ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-link:hover, .ast-primary-sticky-header-active .main-header-bar-navigation .main-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-item.focus > .menu-link, .ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, .ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-item.focus > .ast-menu-toggle, .ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-h-a-bg-color-responsive]','background-color', '.ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-link:hover, .ast-primary-sticky-header-active .main-header-bar-navigation .main-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-item.focus > .menu-link, .ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-primary-sticky-header-active .main-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link' );


			// Sticky -- Custom Menu item outside
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-text-color-responsive]','color', '.ast-primary-sticky-header-active div.ast-masthead-custom-menu-items, .ast-primary-sticky-header-active div.ast-masthead-custom-menu-items .widget, .ast-primary-sticky-header-active div.ast-masthead-custom-menu-items .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-link-color-responsive]','color', '.ast-primary-sticky-header-active div.ast-masthead-custom-menu-items a, .ast-primary-sticky-header-active div.ast-masthead-custom-menu-items .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-link-h-color-responsive]','color', '.ast-primary-sticky-header-active div.ast-masthead-custom-menu-items a:hover, .ast-primary-sticky-header-active div.ast-masthead-custom-menu-items .widget a:hover' );


			/**
			 * Sticky Above Header
			 */
			if( isHeaderBuilderActive ) {
				var above_header_sticky_selctor = '.ast-above-sticky-header-active .ast-above-header.ast-header-sticked';
			} else {
				var above_header_sticky_selctor = '.ast-above-sticky-header-active .ast-above-header-wrap .ast-above-header';
			}

			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-bg-color-responsive]','background', above_header_sticky_selctor );

			// Sticky -- Above Header Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-bg-color-responsive]','background-color', '.ast-header-break-point.ast-above-sticky-header-active .ast-above-header-section-separated .ast-above-header-navigation, .ast-header-break-point.ast-above-sticky-header-active .ast-above-header-section-separated .ast-above-header-navigation > ul, .ast-above-sticky-header-active .ast-above-header .ast-search-menu-icon .search-field, .ast-above-sticky-header-active .ast-above-header .ast-search-menu-icon .search-field:focus, .ast-above-sticky-header-active .ast-above-header-navigation .ast-above-header-menu, .ast-header-break-point.ast-above-sticky-header-active .ast-above-header-section-separated .ast-above-header-navigation .ast-above-header-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-navigation .ast-above-header-menu .menu-link, .ast-header-break-point .ast-above-header-navigation > .ast-above-header-menu > .menu-item-has-children:not(.current-menu-item) > .ast-menu-toggle' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-h-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-navigation .menu-item:hover > .menu-link, .ast-above-sticky-header-active .ast-above-header-navigation .menu-item.focus > .menu-link, .ast-above-sticky-header-active .ast-above-header-navigation .menu-item.current-menu-item > .menu-link, .ast-above-sticky-header-active .ast-above-header-navigation .menu-item.current-menu-ancestor > .menu-link, .ast-header-break-point .ast-above-header-navigation > ul > .menu-item-has-children.current-menu-item > .ast-menu-toggle, .ast-header-break-point .ast-above-header-navigation .menu-item-has-children:hover > .ast-menu-toggle' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-h-a-bg-color-responsive]','background-color', '.ast-above-sticky-header-active .ast-above-header-navigation .menu-item.current-menu-item > .menu-link, .ast-above-sticky-header-active .ast-above-header-navigation .menu-item.current-menu-ancestor > .menu-link, .ast-above-sticky-header-active .ast-above-header-navigation .menu-item:hover > .menu-link, .ast-above-sticky-header-active .ast-above-header-navigation .menu-item.focus > .menu-link' );


			// Sticky -- Above Header Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-bg-color-responsive]','background-color', '.ast-above-sticky-header-active .ast-above-header-navigation .ast-above-header-menu .sub-menu, .ast-header-break-point.ast-above-sticky-header-active .ast-above-header-section-separated .ast-above-header-navigation .sub-menu, .ast-header-break-point.ast-above-sticky-header-active .ast-above-header-section-separated .ast-above-header-navigation .submenu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-navigation .ast-above-header-menu .sub-menu .menu-link, .ast-above-sticky-header-active .ast-above-header-navigation .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-h-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.ast-submenu-expanded + .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item:focus > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.focus > .menu-link,.ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item:focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.focus > .ast-menu-toggle,.ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item:hover > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item:focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item.focus > .ast-menu-toggle,.ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-h-a-bg-color-responsive]','background-color', '.ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.ast-submenu-expanded > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item:focus > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.focus > .menu-link,.ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item:focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link' );


			// Sticky -- Above Header Content Section.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-text-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-section .user-select, .ast-above-sticky-header-active .ast-above-header-section .widget, .ast-above-sticky-header-active .ast-above-header-section .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-link-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-section .user-select a, .ast-above-sticky-header-active .ast-above-header-section .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-link-h-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-section .user-select a:hover, .ast-above-sticky-header-active .ast-above-header-section .widget a:hover' );

			/**
			 * Sticky Below Header
			 */
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-bg-color-responsive]','background', '.ast-below-sticky-header-active .ast-below-header-wrap .ast-below-header' );


			// Sticky -- below Header Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-bg-color-responsive]','background-color', '.ast-below-sticky-header-active .ast-below-header-actual-nav, .ast-flyout-below-menu-enable.ast-header-break-point.ast-below-sticky-header-active .ast-below-header-navigation-wrap .ast-below-header-actual-nav, .ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap' );
			astra_color_responsive_css('sticky-header-menu-link', 'astra-settings[sticky-below-header-menu-color-responsive]','color', '.ast-below-sticky-header-active .ast-below-header-menu, .ast-below-sticky-header-active .ast-below-header-menu .menu-link,.ast-below-sticky-header-active .below-header-user-select .widget,.ast-below-sticky-header-active .below-header-user-select .widget-title,.ast-below-sticky-header-active .below-header-user-select, .ast-below-sticky-header-active .below-header-user-select a, .ast-below-sticky-header-active .below-header-user-select .widget a' );
			astra_color_responsive_css('sticky-header-search-border', 'astra-settings[sticky-below-header-menu-color-responsive]','border-color', '.ast-below-sticky-header-active .below-header-user-select input.search-field:focus, .ast-below-sticky-header-active .below-header-user-select input.search-field.focus' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-h-color-responsive]','color', '.ast-below-sticky-header-active .ast-below-header-menu .menu-item:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .menu-item:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .menu-item.focus > .menu-link,.ast-below-sticky-header-active .ast-below-header-menu .menu-item.current-menu-ancestor > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .menu-item.current-menu-item > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .menu-item.current-menu-ancestor > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .menu-item.current-menu-item > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .ast-menu-toggle,.ast-below-sticky-header-active .below-header-user-select a:hover, .ast-below-sticky-header-active .below-header-user-select .widget a:hover, #ast-fixed-header .below-header-user-select .widget a:hover, .ast-header-break-point .ast-below-header-menu .menu-item:hover > .ast-menu-toggle' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-h-a-bg-color-responsive]','background-color', '.ast-below-sticky-header-active .ast-below-header-menu .menu-item:hover > .menu-link, .ast-below-header-menu .menu-item:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .menu-item.focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .menu-item.current-menu-ancestor > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .menu-item.current-menu-item > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link, .ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .menu-item .menu-link:hover' );

			// Sticky -- below Header Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-bg-color-responsive]','background-color', '.ast-below-sticky-header-active .ast-below-header-menu .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-color-responsive]','color', '.ast-below-sticky-header-active .ast-below-header-menu .sub-menu, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-h-color-responsive]','color', '.ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-h-a-bg-color-responsive]','background-color', '.ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link' );


			// Sticky -- Below Header Content Section.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-text-color-responsive]','color', '.ast-below-sticky-header-active .below-header-user-select, .ast-below-sticky-header-active .below-header-user-select .widget,.ast-below-sticky-header-active .below-header-user-select .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-link-color-responsive]','color', '.ast-below-sticky-header-active .below-header-user-select a, .ast-below-sticky-header-active .below-header-user-select .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-link-h-color-responsive]','color', '.ast-below-sticky-header-active .below-header-user-select a:hover, .ast-below-sticky-header-active .below-header-user-select .widget a:hover' );
		} else{

			/**
			 * Sticky Primary Header
			 */
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-bg-color-responsive]','background', '.ast-transparent-header #ast-fixed-header .main-header-bar, #ast-fixed-header .main-header-bar, #ast-fixed-header .ast-masthead-custom-menu-items .ast-inline-search .search-field, #ast-fixed-header .ast-masthead-custom-menu-items .ast-inline-search .search-field:focus' );

			// Sticky -- Primary Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-bg-color-responsive]','background-color', '#ast-fixed-header .main-header-menu, .ast-header-break-point.ast-primary-sticky-header-active .main-header-bar-navigation .site-navigation, .ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-color-responsive]','color', '#ast-fixed-header .main-header-menu, #ast-fixed-header .main-header-menu .menu-link, #ast-fixed-header .ast-header-custom-item, .ast-header-custom-item a, #ast-fixed-header li.ast-masthead-custom-menu-items, #ast-fixed-header li.ast-masthead-custom-menu-items a, #ast-fixed-header .ast-masthead-custom-menu-items .ast-inline-search form' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-h-color-responsive]','color', '#ast-fixed-header .main-header-menu .menu-item.current-menu-item > .menu-link, #ast-fixed-header .main-header-menu .menu-link:hover, .ast-header-custom-item a:hover, #ast-fixed-header .main-header-menu .menu-item:hover > .menu-link, #ast-fixed-header .main-header-menu .menu-item.focus > .menu-link, #ast-fixed-header .main-header-menu .ast-masthead-custom-menu-items a:hover, #ast-fixed-header .main-header-menu .menu-item:hover > .ast-menu-toggle, #ast-fixed-header .main-header-menu .menu-item.focus > .ast-menu-toggle' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .main-header-menu .menu-item.current-menu-item > .menu-link,#ast-fixed-header .main-header-menu .menu-link:hover, .ast-header-custom-item a:hover, #ast-fixed-header .main-header-menu .menu-item:hover > .menu-link, #ast-fixed-header .main-header-menu .menu-item.focus > .menu-link' );


			// Sticky -- Primary Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-bg-color-responsive]','background-color', '#ast-fixed-header .main-navigation ul .sub-menu, .ast-header-break-point #ast-fixed-header .main-header-menu .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-color-responsive]','color', '#ast-fixed-header .main-header-menu .sub-menu, #ast-fixed-header .main-header-menu .sub-menu .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-h-color-responsive]','color', '#ast-fixed-header .main-header-menu .sub-menu .menu-link:hover, #ast-fixed-header .main-header-menu .sub-menu .menu-item:hover > .menu-link, #ast-fixed-header .main-header-menu .sub-menu .menu-item.focus > .menu-link, #ast-fixed-header .main-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, #ast-fixed-header .main-header-menu .sub-menu .menu-item.focus > .ast-menu-toggle, #ast-fixed-header .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, #ast-fixed-header .main-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .main-header-menu .sub-menu .menu-link:hover, #ast-fixed-header .main-header-menu .sub-menu .menu-item:hover > .menu-link, #ast-fixed-header .main-header-menu .sub-menu .menu-item.focus > .menu-link, #ast-fixed-header .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, #ast-fixed-header .main-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link' );


			// Sticky -- Custom Menu item outside
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-text-color-responsive]','color', '#ast-fixed-header div.ast-masthead-custom-menu-items, #ast-fixed-header div.ast-masthead-custom-menu-items .widget, #ast-fixed-header div.ast-masthead-custom-menu-items .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-link-color-responsive]','color', '#ast-fixed-header div.ast-masthead-custom-menu-items a, #ast-fixed-header div.ast-masthead-custom-menu-items .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-link-h-color-responsive]','color', '#ast-fixed-header div.ast-masthead-custom-menu-items a:hover, #ast-fixed-header div.ast-masthead-custom-menu-items .widget a:hover' );


			/**
			 * Sticky Above Header
			 */
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-bg-color-responsive]','background', '#ast-fixed-header .ast-above-header' );

			// Sticky -- Above Header Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-bg-color-responsive]','background-color', '.ast-header-break-point #ast-fixed-header .ast-above-header-section-separated .ast-above-header-navigation, .ast-header-break-point #ast-fixed-header .ast-above-header-section-separated .ast-above-header-navigation ul, #ast-fixed-header .ast-above-header .ast-search-menu-icon .search-field, #ast-fixed-header .ast-above-header .ast-search-menu-icon .search-field:focus, #ast-fixed-header .ast-above-header-navigation .ast-above-header-menu,.ast-header-break-point #ast-fixed-header .ast-above-header-section-separated .ast-above-header-navigation .ast-above-header-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-color-responsive]','color', '#ast-fixed-header .ast-above-header-navigation .ast-above-header-menu .menu-link, #ast-fixed-header .ast-above-header-navigation > .ast-above-header-menu > .menu-item-has-children:not(.current-menu-item) > .ast-menu-toggle' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-h-color-responsive]','color', '#ast-fixed-header .ast-above-header-navigation .menu-item:hover > .menu-link, #ast-fixed-header .ast-above-header-navigation .menu-item.focus > .menu-link, #ast-fixed-header .ast-above-header-navigation .menu-item.current-menu-item > .menu-link, #ast-fixed-header .ast-above-header-navigation .menu-item.current-menu-ancestor > .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .ast-above-header-navigation .menu-item.current-menu-item > .menu-link, #ast-fixed-header .ast-above-header-navigation .menu-item.current-menu-ancestor > .menu-link, #ast-fixed-header .ast-above-header-navigation .menu-item:hover > .menu-link, #ast-fixed-header .ast-above-header-navigation .menu-item.focus > .menu-link' );

			// Sticky -- Above Header Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-bg-color-responsive]','background-color', '#ast-fixed-header .ast-above-header-navigation .ast-above-header-menu .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-color-responsive]','color', '#ast-fixed-header .ast-above-header-navigation .ast-above-header-menu .sub-menu .menu-link, #ast-fixed-header .ast-above-header-navigation .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-h-color-responsive]','color', '#ast-fixed-header .ast-above-header-menu .sub-menu .menu-item:hover > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item:focus > .menu-link,#ast-fixed-header .ast-above-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item:focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.focus > .ast-menu-toggle,#ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item:hover > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item:focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item.focus > .ast-menu-toggle,#ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .ast-above-header-menu .sub-menu .menu-item:hover > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item:focus > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.focus > .menu-link,#ast-fixed-header .ast-above-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item:focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, #ast-fixed-header .ast-above-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link' );


			// Sticky -- Above Header Content Section.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-text-color-responsive]','color', '#ast-fixed-header .ast-above-header-section .user-select, #ast-fixed-header .ast-above-header-section .widget, #ast-fixed-header .ast-above-header-section .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-link-color-responsive]','color', '#ast-fixed-header .ast-above-header-section .user-select a, #ast-fixed-header .ast-above-header-section .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-link-h-color-responsive]','color', '#ast-fixed-header .ast-above-header-section .user-select a:hover, #ast-fixed-header .ast-above-header-section .widget a:hover' );

			/**
			 * Sticky Below Header
			 */
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-bg-color-responsive]','background', '#ast-fixed-header .ast-below-header' );


			// Sticky -- below Header Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-bg-color-responsive]','background-color', '#ast-fixed-header .ast-below-header-actual-nav' );
			astra_color_responsive_css('sticky-header-menu-link', 'astra-settings[sticky-below-header-menu-color-responsive]','color', '#ast-fixed-header .ast-below-header-menu, #ast-fixed-header .ast-below-header-menu .menu-link,#ast-fixed-header .below-header-user-select .widget,#ast-fixed-header .below-header-user-select .widget-title,#ast-fixed-header .below-header-user-select, #ast-fixed-header .below-header-user-select a, #ast-fixed-header .below-header-user-select .widget a' );
			astra_color_responsive_css('sticky-header-search-border', 'astra-settings[sticky-below-header-menu-color-responsive]','border-color', '#ast-fixed-header .below-header-user-select input.search-field:focus, #ast-fixed-header .below-header-user-select input.search-field.focus' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-h-color-responsive]','color', '#ast-fixed-header .ast-below-header-menu .menu-item:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .menu-item:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .menu-item.focus > .menu-link,#ast-fixed-header .ast-below-header-menu .menu-item.current-menu-ancestor > .menu-link, #ast-fixed-header .ast-below-header-menu .menu-item.current-menu-item > .menu-link, #ast-fixed-header .ast-below-header-menu .menu-item.current-menu-ancestor > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .menu-item.current-menu-item > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .ast-menu-toggle,#ast-fixed-header .below-header-user-select a:hover, #ast-fixed-header .below-header-user-select .widget a:hover' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .ast-below-header-menu .menu-item:hover > .menu-link, .ast-below-header-menu .menu-item:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .menu-item.focus > .menu-link, #ast-fixed-header .ast-below-header-menu .menu-item.current-menu-ancestor > .menu-link, #ast-fixed-header .ast-below-header-menu .menu-item.current-menu-item > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link' );


			// Sticky -- below Header Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-bg-color-responsive]','background-color', '#ast-fixed-header .ast-below-header-menu .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-color-responsive]','color', '#ast-fixed-header .ast-below-header-menu .sub-menu, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-h-color-responsive]','color', '#ast-fixed-header .ast-below-header-menu .sub-menu .menu-item:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .ast-below-header-menu .sub-menu .menu-item:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor.focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:hover > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item:focus > .menu-link, #ast-fixed-header .ast-below-header-menu .sub-menu .menu-item.current-menu-item.focus > .menu-link' );



			// Sticky -- Below Header Content Section.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-text-color-responsive]','color', '#ast-fixed-header .below-header-user-select, #ast-fixed-header .below-header-user-select .widget,#ast-fixed-header .below-header-user-select .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-link-color-responsive]','color', '#ast-fixed-header .below-header-user-select a, #ast-fixed-header .below-header-user-select .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-link-h-color-responsive]','color', '#ast-fixed-header .below-header-user-select a:hover, #ast-fixed-header .below-header-user-select .widget a:hover' );
		}


	/**
	 * Sticky Above Header background color opacity
	 */
	wp.customize( 'astra-settings[sticky-header-logo-width]', function( setting ) {
		setting.bind( function( logo_width ) {
			if ( logo_width['desktop'] != '' || logo_width['tablet'] != '' || logo_width['mobile'] != '' ) {
				var dynamicStyle = '.ast-hfb-header .site-logo-img .sticky-custom-logo img {max-width: ' + logo_width['desktop'] + 'px;} #masthead .site-logo-img .sticky-custom-logo .astra-logo-svg, .site-logo-img .sticky-custom-logo .astra-logo-svg, .ast-sticky-main-shrink .ast-sticky-shrunk .site-logo-img .astra-logo-svg { width: ' + logo_width['desktop'] + 'px;} @media( max-width: 768px ) { .ast-hfb-header .site-logo-img .sticky-custom-logo img {max-width: ' + logo_width['tablet'] + 'px;} #masthead .site-logo-img .sticky-custom-logo .astra-logo-svg, .site-logo-img .sticky-custom-logo .astra-logo-svg, .ast-sticky-main-shrink .ast-sticky-shrunk .site-logo-img .astra-logo-svg { width: ' + logo_width['tablet'] + 'px;} } @media( max-width: 544px ) { .ast-hfb-header .site-logo-img .sticky-custom-logo img {max-width: ' + logo_width['mobile'] + 'px;} #masthead .site-logo-img .sticky-custom-logo .astra-logo-svg, .site-logo-img .sticky-custom-logo .astra-logo-svg, .ast-sticky-main-shrink .ast-sticky-shrunk .site-logo-img .astra-logo-svg { width: ' + logo_width['mobile'] + 'px;} }'
				astra_add_dynamic_css( 'sticky-header-logo-width', dynamicStyle );
			}
			else{
				wp.customize.preview.send( 'refresh' );
			}
		});
	});

	astra_css( 'astra-settingsheader-main-rt-sticky-section-button-text-color]', 'color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button' );
	astra_css( 'astra-settingsheader-main-rt-sticky-section-button-back-color]', 'background-color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button' );
	astra_css( 'astra-settingsheader-main-rt-sticky-section-button-text-h-color]', 'color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button:hover' );
	astra_css( 'astra-settingsheader-main-rt-sticky-section-button-back-h-color]', 'background-color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button:hover' );
	astra_responsive_spacing( 'astra-settings[header-main-rt-sticky-section-button-padding]','.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button', 'padding', ['top', 'right', 'bottom', 'left' ] );
	astra_css( 'astra-settings[header-main-rt-sticky-section-button-border-radius]', 'border-radius', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button', 'px' );
	astra_css( 'astra-settings[header-main-rt-sticky-section-button-border-color]', 'border-color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button' );
	astra_css( 'astra-settings[header-main-rt-sticky-section-button-border-h-color]', 'border-color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button:hover' );

	/**
	 * Button border
	 */
	wp.customize( 'astra-settings[sticky-header-button-border-group]', function( value ) {
		value.bind( function( value ) {

			var optionValue = JSON.parse(value);
			var border =  optionValue['header-main-rt-sticky-section-button-border-size'];

			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {
				var dynamicStyle = '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button';
					dynamicStyle += '{';
					dynamicStyle += 'border-top-width:'  + border.top + 'px;';
					dynamicStyle += 'border-right-width:'  + border.right + 'px;';
					dynamicStyle += 'border-left-width:'   + border.left + 'px;';
					dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
					dynamicStyle += 'border-style: solid;';
					dynamicStyle += '}';

				astra_add_dynamic_css( 'header-main-rt-sticky-section-button-border-size', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Sticky Header Site Title color
	 */
	wp.customize( 'astra-settings[header-color-site-title]', function( setting ) {
		setting.bind( function( site_title ) {
			if ( site_title != '' ) {
				var dynamicStyle = '#ast-fixed-header .main-header-bar .site-title a, #ast-fixed-header .main-header-bar .site-title a:focus, #ast-fixed-header .main-header-bar .site-title a:hover, #ast-fixed-header .main-header-bar .site-title a:visited, .main-header-bar.ast-sticky-active .site-title a, .main-header-bar.ast-sticky-active .site-title a:focus, .main-header-bar.ast-sticky-active .site-title a:hover, .main-header-bar.ast-sticky-active .site-title a:visited { color: ' + site_title + '}';
				astra_add_dynamic_css( 'sticky-header-site-title-color', dynamicStyle );
			}
			else{
				wp.customize.preview.send( 'refresh' );
			}
		});
	});

	/**
	 * Sticky Header Site Title Hover color
	 */
	wp.customize( 'astra-settings[header-color-h-site-title]', function( setting ) {
		setting.bind( function( site_title_hover ) {
			if ( site_title_hover != '' ) {
				var dynamicStyle = '#ast-fixed-header .main-header-bar .site-title a:hover, .main-header-bar.ast-sticky-active .site-title a:hover { color: ' + site_title_hover + '}';
				astra_add_dynamic_css( 'sticky-header-site-title-hover-color', dynamicStyle );
			}
			else{
				wp.customize.preview.send( 'refresh' );
			}
		});
	});

	/**
	 * Sticky Header Site Tagline color
	 */
	wp.customize( 'astra-settings[header-color-site-tagline]', function( setting ) {
		setting.bind( function( site_tagline_hover ) {
			if ( site_tagline_hover != '' ) {
				var dynamicStyle = '#ast-fixed-header .main-header-bar .site-description, .main-header-bar.ast-sticky-active .site-description { color: ' + site_tagline_hover + '}';
				astra_add_dynamic_css( 'sticky-header-site-tagline-hover-color', dynamicStyle );
			}
			else{
				wp.customize.preview.send( 'refresh' );
			}
		});
	});

	/**
	 * Sticky Header Button Dynamic CSS.
	 *
	 */


	function prepare_button_preview( index ) {

		var prefix = 'button' + index;
		var selector = '.ast-header-sticked .ast-header-button-' + index + ' .ast-builder-button-wrap';
		var padding_selector = '.ast-header-sticked .ast-header-button-' + index + '[data-section*="section-hb-button-"] .ast-builder-button-wrap';

		// Button Text Color.
		astra_color_responsive_css(
			'hfb-button-color',
			'astra-settings[sticky-header-' + prefix + '-text-color]',
			'color',
			selector + ' .ast-custom-button'
		);
		astra_color_responsive_css(
			'hfb-button-color-h',
			'astra-settings[sticky-header-' + prefix + '-text-h-color]',
			'color',
			selector + ':hover .ast-custom-button'
		);

		// Button Background Color.
		astra_color_responsive_css(
			'hfb-button-bg-color',
			'astra-settings[sticky-header-' + prefix + '-back-color]',
			'background-color',
			selector + ' .ast-custom-button'
		);
		astra_color_responsive_css(
			'hfb-button-bg-color-h',
			'astra-settings[sticky-header-' + prefix + '-back-h-color]',
			'background-color',
			selector + ':hover .ast-custom-button'
		);

		// Border Color.
		astra_color_responsive_css(
			'hfb-button-border-color',
			'astra-settings[sticky-header-' + prefix + '-border-color]',
			'border-color',
			selector + ' .ast-custom-button'
		);
		astra_color_responsive_css(
			'hfb-button-border-color-h',
			'astra-settings[sticky-header-' + prefix + '-border-h-color]',
			'border-color',
			selector + ' .ast-custom-button:hover'
		);

		astra_responsive_spacing( 'astra-settings[sticky-header-' + prefix + '-padding]', padding_selector + ' .ast-custom-button', 'padding', [ 'top', 'bottom', 'right', 'left' ] );

		(function( index ) {
			// Border Size for Button.
			wp.customize( 'astra-settings[sticky-header-button' + index + '-border-size]', function( setting ) {
				setting.bind( function( border ) {
					var dynamicStyle = '.ast-header-sticked .ast-header-button-' + index + ' .ast-builder-button-wrap .ast-custom-button {';
					dynamicStyle += 'border-top-width:'  + border.top + 'px;';
					dynamicStyle += 'border-right-width:'  + border.right + 'px;';
					dynamicStyle += 'border-left-width:'   + border.left + 'px;';
					dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
					dynamicStyle += '} ';
					astra_add_dynamic_css( 'astra-settings[sticky-header-button' + index + '-border-size]', dynamicStyle );
				} );
			} );
			// Border Radius Fields for Button.
			wp.customize( 'astra-settings[sticky-header-button' + index + '-border-radius-fields]', function( setting ) {
				setting.bind( function( border ) {
					let globalSelector = '.ast-header-sticked .ast-header-button-' + index + ' .ast-builder-button-wrap .ast-custom-button';
					let dynamicStyle = globalSelector + '{ border-top-left-radius :' + border['desktop']['top'] + border['desktop-unit']
							+ '; border-bottom-right-radius :' + border['desktop']['bottom'] + border['desktop-unit'] + '; border-bottom-left-radius :'
							+ border['desktop']['left'] + border['desktop-unit'] + '; border-top-right-radius :' + border['desktop']['right'] + border['desktop-unit'] + '; } ';

					dynamicStyle += '@media (max-width: ' + tablet_break_point + 'px) { ' + globalSelector + '{ border-top-left-radius :' + border['tablet']['top'] + border['tablet-unit']
							+ '; border-bottom-right-radius :' + border['tablet']['bottom'] + border['tablet-unit'] + '; border-bottom-left-radius :'
							+ border['tablet']['left'] + border['tablet-unit'] + '; border-top-right-radius :' + border['tablet']['right'] + border['tablet-unit'] + '; } } ';

					dynamicStyle += '@media (max-width: ' + mobile_break_point + 'px) { ' + globalSelector + '{ border-top-left-radius :' + border['mobile']['top'] + border['mobile-unit']
							+ '; border-bottom-right-radius :' + border['mobile']['bottom'] + border['mobile-unit'] + '; border-bottom-left-radius :'
							+ border['mobile']['left'] + border['mobile-unit'] + '; border-top-right-radius :' + border['mobile']['right'] + border['mobile-unit'] + '; } } ';
					astra_add_dynamic_css( 'astra-settings[sticky-header-button' + index + '-border-radius-fields]', dynamicStyle );
				} );
			} );
		})( index );

	}

	function prepare_social_preview(index) {
		var selector = '.ast-header-sticked .ast-header-social-' + index + '-wrap';

		// Icon Color.
		astra_color_responsive_css(
			index + 'hfb-soc-color',
			'astra-settings[sticky-header-social-' + index + '-color]',
			'color',
			selector + ' .ast-social-color-type-custom .ast-builder-social-element'
		);
		astra_color_responsive_css(
			index + 'hfb-soc-svg-color',
			'astra-settings[sticky-header-social-' + index + '-color]',
			'fill',
			selector + ' .ast-social-color-type-custom .ast-builder-social-element svg'
		);
		astra_color_responsive_css(
			index + 'hfb-soc-color-h',
			'astra-settings[sticky-header-social-' + index + '-h-color]',
			'color',
			selector + ' .ast-social-color-type-custom .ast-builder-social-element:hover'
		);
		astra_color_responsive_css(
			index + 'hfb-soc-svg-color-label',
			'astra-settings[sticky-header-social-' + index + '-color]',
			'color',
			selector + ' .ast-social-color-type-custom .ast-builder-social-element .social-item-label'
		);
		astra_color_responsive_css(
			index + 'hfb-soc-color-h-label',
			'astra-settings[sticky-header-social-' + index + '-h-color]',
			'color',
			selector + ' .ast-social-color-type-custom .ast-builder-social-element:hover .social-item-label'
		);
		astra_color_responsive_css(
			index + 'hfb-soc-svg-color-h',
			'astra-settings[sticky-header-social-' + index + '-h-color]',
			'fill',
			selector + ' .ast-social-color-type-custom .ast-builder-social-element:hover svg'
		);

		// Icon Background Color.
		astra_color_responsive_css(
			index + 'hfb-soc-bg-color',
			'astra-settings[sticky-header-social-' + index + '-bg-color]',
			'background-color',
			selector + ' .ast-social-color-type-custom .ast-builder-social-element'
		);
		astra_color_responsive_css(
			index + 'hfb-soc-bg-color-h',
			'astra-settings[sticky-header-social-' + index + '-bg-h-color]',
			'background-color',
			selector + ' .ast-social-color-type-custom .ast-builder-social-element:hover'
		);
	}

	function prepare_html_preview(index) {

		var selector = '.ast-header-sticked .site-header-section .ast-builder-layout-element.ast-header-html-' + index;

		// HTML color.
		astra_css(
			'astra-settings[sticky-header-html-' + index + 'color]',
			'color',
			selector + ' .ast-builder-html-element'
		);

	}

	function prepare_divider_preview( index ) {
		var selector = '.ast-header-sticked .site-header-section .ast-builder-layout-element.ast-header-divider-' + index;

		// Divider color.
		astra_css(
			'astra-settings[sticky-header-divider-' + index + '-color]',
			'border-color',
			selector + ' .ast-divider-wrapper'
		);
	}

	for ( var index = 1; index <= astSticky.component_limit; index++ ) {

		prepare_button_preview(index);
		prepare_social_preview(index);
		prepare_html_preview(index);
		prepare_divider_preview(index);

	}

	/**
	 * Sticky Header Search Dynamic CSS.
	 *
	 */

	var selector = '.ast-header-sticked .ast-header-search';

	// Icon Color.
	astra_css(
		'astra-settings[sticky-header-search-icon-color]',
		'color',
		selector + ' .astra-search-icon, ' + selector + ' .search-field::placeholder,' + selector + ' .ast-icon'
	);

	// Box icon hover Color.
	astra_css(
		'astra-settings[sticky-header-search-icon-h-color]',
		'color',
		selector + ' .astra-search-icon:hover,' + selector + ' .ast-icon:hover'
	);

	// search text Color.
	astra_css(
		'astra-settings[sticky-header-search-text-placeholder-color]',
		'color',
		selector + ' .ast-search-menu-icon .search-field, ' + selector + ' .ast-search-menu-icon .search-field::placeholder'
	);

	// Box Background Color.
	astra_css(
		'astra-settings[sticky-header-search-box-background-color]',
		'background-color',
		selector + ' .ast-search-menu-icon .search-field, ' + selector + ' .ast-search-menu-icon .search-form, ' + selector + ' .ast-search-menu-icon .search-submit '
	);

	// Box Background hover Color.
	astra_css(
		'astra-settings[sticky-header-search-box-background-h-color]',
		'background-color',
		selector + ' .ast-search-menu-icon:hover .search-field, ' + selector + ' .ast-search-menu-icon:hover .search-form, ' + selector + ' .ast-search-menu-icon:hover .search-submit,' + selector + ' .ast-search-menu-icon:focus .search-field, ' + selector + ' .ast-search-menu-icon:focus .search-form, ' + selector + ' .ast-search-menu-icon:focus .search-submit '
	);

	/**
	 * Sticky Header language switcher Dynamic CSS.
	 *
	 */
	wp.customize( 'astra-settings[sticky-header-language-switcher-color]', function( value ) {
		value.bind( function( color ) {

			if( ! color ) {
				color = 'inherit';
			}

			var dynamicStyle =  '.ast-header-sticked .ast-lswitcher-item-header {';
			dynamicStyle += 'color: ' + color + ';';
			dynamicStyle += '} ';
			astra_add_dynamic_css( 'sticky-header-language-switcher-color', dynamicStyle );
		} );
	} );

	/**
	 * Sticky Header Widget Dynamic CSS.
	 *
	 */

	for ( var index = 1; index <= astSticky.component_limit; index++ ) {

		var selector = '.ast-header-sticked .header-widget-area[data-section="sidebar-widgets-header-widget-' + index + '"]';

		if( astSticky.is_flex_based_css ){
			selector = selector + '.header-widget-area-inner';
		}else{
			selector = selector + ' .header-widget-area-inner';
		}

		// Widget Content Color.
			astra_css(
				'astra-settings[sticky-header-widget-' + index + '-color]',
				'color',
				selector
			);

			// Widget Link Color.
			astra_css(
				'astra-settings[sticky-header-widget-' + index + '-link-color]',
				'color',
				selector + ' a'
			);

			// Widget Link Hover Color.
			astra_css(
				'astra-settings[sticky-header-widget-' + index + '-link-h-color]',
				'color',
				selector + ' a:hover'
			);

		// Widget Title Color.
		astra_css(
			'astra-settings[sticky-header-widget-' + index + '-title-color]',
			'color',
			selector + ' .widget-title'
		);
	}


	/**
	 * Sticky Header account Dynamic CSS.
	 *
	 */

	var account_selector = '.ast-header-sticked .ast-header-account-wrap';

	// Icon Color.
	wp.customize( 'astra-settings[sticky-header-account-icon-color]', function( value ) {
		value.bind( function( color ) {
			if( ! color ) {
				color = 'inherit';
			}
			var dynamicStyle =  account_selector + ' .ast-header-account-type-icon .ahfb-svg-iconset svg path:not(.ast-hf-account-unfill), ' + account_selector + ' .ast-header-account-type-icon .ahfb-svg-iconset svg circle {';
			dynamicStyle += 'fill: ' + color + ';';
			dynamicStyle += '} ';
			astra_add_dynamic_css( 'sticky-header-account-icon-color', dynamicStyle );
		} );
	} );

	// Icon Color.
	astra_css(
		'astra-settings[sticky-header-account-type-text-color]',
		'color',
		account_selector + ' .ast-header-account-text'
	);

	// Menu - Normal Color
	astra_css(
		'astra-settings[sticky-header-account-menu-color]',
		'color',
		account_selector + ' .main-header-menu .menu-item > .menu-link'
	);

	// Menu - Hover Color
	astra_css(
		'astra-settings[sticky-header-account-menu-h-color]',
		'color',
		account_selector + ' .menu-item:hover > .menu-link'
	);

	// Menu - Active Color
	astra_css(
		'astra-settings[sticky-header-account-menu-a-color]',
		'color',
		account_selector + ' .menu-item.current-menu-item > .menu-link'
	);

	// Menu - Background
	astra_css(
		'astra-settings[sticky-header-account-menu-bg-obj]',
		'background',
		account_selector + ' .account-main-navigation ul, ' + account_selector + ' .account-woo-navigation ul,' + account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item > .menu-link'
	);

	// Menu - Hover Background
	astra_css(
		'astra-settings[sticky-header-account-menu-h-bg-color]',
		'background',
		account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item:hover > .menu-link'
	);

	// Menu - Active Background
	astra_css(
		'astra-settings[sticky-header-account-menu-a-bg-color]',
		'background',
		account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item.current-menu-item > .menu-link'
	);

	/**
	 * Sticky Header menu-toggle Dynamic CSS.
	 */
	var toggle_selector = '[CLASS*="-sticky-header-active"] .ast-header-sticked [data-section="section-header-mobile-trigger"]';

	// Trigger Icon Color.
	astra_css(
		'astra-settings[sticky-header-toggle-btn-color]',
		'fill',
		toggle_selector + ' .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg'
	);

	// Trigger Label Color.
	astra_css(
		'astra-settings[sticky-header-toggle-btn-color]',
		'color',
		toggle_selector + ' .ast-button-wrap .mobile-menu-wrap .mobile-menu'
	);

	// Trigger Button Background Color.
	astra_css(
		'astra-settings[sticky-header-toggle-btn-bg-color]',
		'background',
		toggle_selector + ' .ast-button-wrap .menu-toggle.ast-mobile-menu-trigger-fill'
	);

	// Border Color.
	astra_css(
		'astra-settings[sticky-header-toggle-border-color]',
		'border-color',
		toggle_selector + ' .ast-button-wrap .menu-toggle.ast-mobile-menu-trigger-outline'
	);

} )( jQuery );
