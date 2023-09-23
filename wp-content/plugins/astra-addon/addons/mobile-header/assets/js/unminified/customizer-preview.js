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


/**
 * Mobile Header Responsive colors
 *
 * [1]- Mobile Header General colors
 * [2]- Mobile Header Primary menu Responsive colors
 * [3]- Mobile Header Primary menu for Fullscreen Menu style colos
 */
 	//[2] Main Header Spacing for Flyout-Fullscreen when click on the toggle menu button
 	astra_responsive_spacing( 'astra-settings[header-spacing]','.ast-flyout-menu-enable.ast-main-header-nav-open .main-header-bar,.ast-fullscreen-menu-enable.ast-main-header-nav-open .main-header-bar', 'padding', [ 'bottom' ] );

	//[2] Mobile Header Priamry Menu Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[primary-menu-color-responsive]', 	 'color', 	'.ast-header-break-point .main-header-menu, .ast-header-break-point .main-header-menu .menu-link, .ast-header-break-point .main-header-menu .menu-item:hover > .ast-menu-toggle, .ast-header-break-point .main-header-menu .menu-item.focus > .ast-menu-toggle, .ast-header-break-point .main-header-menu .current-menu-item > .ast-menu-toggle, .ast-header-break-point .main-header-menu .current-menu-ancestor > .ast-menu-toggle, .ast-header-break-point .ast-header-custom-item, .ast-header-break-point .ast-header-custom-item a, .ast-header-break-point .ast-masthead-custom-menu-items, .ast-header-break-point .ast-masthead-custom-menu-items a, .ast-header-break-point .ast-masthead-custom-menu-items .ast-inline-search form .ast-header-break-point .ast-below-header-merged-responsive .below-header-user-select, .ast-header-break-point .ast-above-header-menu-items, .ast-header-break-point .ast-above-header-menu-items .menu-link, .ast-header-break-point .ast-below-header-menu-items, .ast-header-break-point .ast-below-header-menu-items .menu-link, .ast-header-break-point .ast-below-header-merged-responsive .below-header-user-select .widget, .ast-header-break-point .ast-below-header-merged-responsive .below-header-user-select .widget-title,.ast-flyout-menu-enable.ast-header-break-point .main-header-bar-navigation .close,.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar-navigation .close' );

	//[2] Mobile Header Priamry Menu BG Color.
	wp.customize( 'astra-settings[primary-menu-bg-obj-responsive]', function( value ) {
		value.bind( function( bg_obj ) {
				if ( jQuery('body').hasClass('ast-fullscreen-menu-enable') || jQuery('body').hasClass('ast-flyout-menu-enable') ) {
					var primaryMenuBgStyle = '.main-header-menu, .ast-header-break-point .main-header-menu, .ast-header-break-point .ast-header-custom-item, .ast-header-break-point .ast-header-sections-navigation, .ast-flyout-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation, .ast-flyout-menu-enable.ast-header-break-point .ast-primary-menu-disabled .ast-merge-header-navigation-wrap, .ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation, .ast-fullscreen-menu-enable.ast-header-break-point.admin-bar.ast-admin-bar-visible .ast-primary-menu-disabled .ast-header-custom-item .ast-merge-header-navigation-wrap { {{css}} }';
					astra_responsive_background_obj_css( wp.customize, bg_obj, 'primary-menu-bg-obj-responsive', primaryMenuBgStyle, 'desktop' );
					var primaryMenuBgStyle = '.main-header-menu, .ast-header-break-point .main-header-menu, .ast-header-break-point .ast-header-custom-item, .ast-header-break-point .ast-header-sections-navigation, .ast-flyout-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation, .ast-flyout-menu-enable.ast-header-break-point .ast-primary-menu-disabled .ast-merge-header-navigation-wrap, .ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation, .ast-fullscreen-menu-enable.ast-header-break-point.admin-bar.ast-admin-bar-visible .ast-primary-menu-disabled .ast-header-custom-item .ast-merge-header-navigation-wrap { {{css}} }';
					astra_responsive_background_obj_css( wp.customize, bg_obj, 'primary-menu-bg-obj-responsive', primaryMenuBgStyle, 'tablet' );
					var primaryMenuBgStyle = '.main-header-menu, .ast-header-break-point .main-header-menu, .ast-header-break-point .ast-header-custom-item, .ast-header-break-point .ast-header-sections-navigation, .ast-flyout-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation, .ast-flyout-menu-enable.ast-header-break-point .ast-primary-menu-disabled .ast-merge-header-navigation-wrap, .ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation, .ast-fullscreen-menu-enable.ast-header-break-point.admin-bar.ast-admin-bar-visible .ast-primary-menu-disabled .ast-header-custom-item .ast-merge-header-navigation-wrap { {{css}} }';
					astra_responsive_background_obj_css( wp.customize, bg_obj, 'primary-menu-bg-obj-responsive', primaryMenuBgStyle, 'mobile' );

					var dynamicStyle = '.ast-flyout-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation, .ast-flyout-menu-enable.ast-header-break-point .ast-primary-menu-disabled .ast-merge-header-navigation-wrap, .ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar-navigation .site-navigation,.ast-fullscreen-menu-enable.ast-header-break-point.admin-bar.ast-admin-bar-visible .ast-primary-menu-disabled .ast-header-custom-item .ast-merge-header-navigation-wrap{ transition: background 0s;}';
					astra_add_dynamic_css( 'mobile-header-fullscreen-flyout-bg-color', dynamicStyle );
				}
		} );
	} );

	//[2] Mobile Header Active Link BG Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[primary-menu-a-bg-color-responsive]', 	'background-color', 	'.ast-header-break-point .main-header-menu .menu-item.current-menu-item > .menu-link,.ast-header-break-point .main-header-menu .menu-item.current-menu-ancestor > .menu-link,.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .menu-item.current-menu-item,.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .menu-item.current-menu-ancestor' );

	wp.customize( 'astra-settings[primary-menu-a-bg-color-responsive]', function( value ) {
		value.bind( function( color ) {
			if( '' != color.desktop || '' != color.tablet || '' != color.mobile ) {
					var dynamicStyle = '.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .menu-item.current-menu-item > .menu-link,';
						dynamicStyle += '.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .menu-item.current-menu-ancestor > .menu-link';
						dynamicStyle += ' { background-color: transparent;}';
				astra_add_dynamic_css( 'mobile-header-menu-a-bg-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	//[2] Mobile Header Active Link BG Color.
	astra_color_responsive_css( 'mobile-header-no-toggle-menu-a-bg-color', 'astra-settings[primary-menu-a-bg-color-responsive]', 	'background-color', 	'.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item:hover, .ast-fullscreen-menu-overlay .main-header-menu .menu-item.current-menu-item:hover, .ast-fullscreen-menu-overlay .main-header-menu .menu-item.current-menu-item, .ast-fullscreen-menu-overlay .main-header-menu .menu-item.current-menu-ancestor', 'background-color' );

	//[2] Mobile Header Active Link Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[primary-menu-a-color-responsive]', 		'color',				'.ast-header-break-point .main-header-menu .menu-item.current-menu-item > .menu-link, .ast-header-break-point .main-header-menu .menu-item.current-menu-item > .ast-menu-toggle, .ast-header-break-point .main-header-menu .menu-item.current-menu-ancestor > .ast-menu-toggle, .ast-header-break-point .main-header-menu .menu-item.current-menu-ancestor > .menu-link' );

	//[2] Mobile Header Active Link Color.
	astra_color_responsive_css( 'mobile-header-no-toggle-primary-menu-a-color', 'astra-settings[primary-menu-a-color-responsive]', 		'color',				'.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item > .menu-link, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item > .ast-menu-toggle, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item:hover > .menu-link, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item:hover > .ast-menu-toggle' );

	//[2] Mobile Header Active Link Color.
	astra_color_responsive_css( 'mobile-header-no-toggle-menu-a-color', 'astra-settings[primary-menu-a-color-responsive]', 		'color',				'.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item > .menu-link, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item:hover > .menu-link' );

	//[2] Mobile Header Link Hover Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[primary-menu-h-color-responsive]', 		'color', 				'.ast-header-break-point .main-header-menu .menu-link:hover, .ast-header-break-point .ast-header-custom-item a:hover,.ast-header-break-point .main-header-menu .ast-masthead-custom-menu-items a:hover, .ast-header-break-point .main-header-menu .menu-item:hover > .ast-menu-toggle, .ast-header-break-point .main-header-menu .menu-item.focus > .ast-menu-toggle,.ast-header-break-point .main-header-menu .menu-item:hover > .menu-link, .ast-header-break-point .main-header-menu .menu-item.focus > .menu-link ' );

	//[2] Primary Submenu.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[primary-submenu-color-responsive]', 	 'color', 				'.ast-header-break-point .main-header-menu .sub-menu, .ast-header-break-point .main-header-menu .sub-menu .menu-link, .ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .sub-menu .menu-item *' );

	//[2] Primary Submenu Hover.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[primary-submenu-h-color-responsive]', 	 'color', 				'.ast-header-break-point .main-header-menu .sub-menu .menu-link:hover, .ast-header-break-point .main-header-menu .sub-menu .menu-link:focus,.ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-link:hover, .ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-item.focus > .menu-link, .ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, .ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-item.focus > .ast-menu-toggle, .ast-fullscreen-menu-overlay .ast-header-sections-navigation .sub-menu .menu-link:hover' );

	//[2] Primary Submenu Hover.
	astra_color_responsive_css( 'mobile-header-no-toggle-submenu-h-color', 'astra-settings[primary-submenu-h-color-responsive]', 	 'color', 				'.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .sub-menu .menu-item:hover > .menu-link' );

	//[2] Mobile Header Submenu Link Hover Background Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[primary-submenu-h-bg-color-responsive]', 'background-color', 	'.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .sub-menu .menu-item:hover, .ast-header-break-point .main-header-menu .sub-menu .menu-link:hover, .ast-header-break-point .main-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-header-break-point .main-header-menu .sub-menu .menu-item.focus > .menu-link,.ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-item:hover, .ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-item.focus, .ast-fullscreen-menu-overlay .ast-header-sections-navigation .sub-menu .menu-item:hover, .ast-fullscreen-menu-overlay .ast-header-sections-navigation .sub-menu .menu-item.focus' );

	wp.customize( 'astra-settings[primary-submenu-h-bg-color-responsive]', function( value ) {
		value.bind( function( color ) {
			if( '' != color.desktop || '' != color.tablet || '' != color.mobile ) {
				var dynamicStyle  = '.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .sub-menu .menu-link:hover, .ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .sub-menu .menu-link:focus, .ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-link:hover, .ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-fullscreen-menu-overlay .main-header-menu .sub-menu .menu-item.focus > .menu-link, .ast-fullscreen-menu-overlay .ast-header-sections-navigation .sub-menu .menu-link:hover, .ast-fullscreen-menu-overlay .ast-above-header-menu-items .sub-menu .menu-link:hover, .ast-fullscreen-menu-overlay .ast-below-header-menu-items .sub-menu .menu-link:hover { background-color: transparent; }';
				astra_add_dynamic_css( 'mobile-header-submenu-h-bg-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	astra_color_responsive_css( 'mobile-header-no-toggle-submenu-h-bg-color', 'astra-settings[primary-submenu-h-bg-color-responsive]', 'background-color', 	'.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .sub-menu .menu-item:hover' );

	//[2] Mobile Header Active Link Color.
	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-submenu-a-color-responsive]', 	 'color', 				'.ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link,.ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link,.ast-header-break-point .ast-header-sections-navigation .sub-menu .menu-item.current-menu-item > .menu-link,.ast-header-break-point .ast-above-header-menu-items .sub-menu .menu-item.current-menu-item > .menu-link,.ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item.current-menu-item > .menu-link' );

	//[2] Mobile Header Active Link Color.
	astra_color_responsive_css( 'mobile-header-no-toggle-submenu-a-color', 'astra-settings[primary-submenu-a-color-responsive]', 	 'color', 				'.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link' );

	//[2] Mobile Header Active Link Background Color.
	astra_color_responsive_css( 'mobile-header-no-toggle-submenu-a-bg-color', 'astra-settings[primary-submenu-a-bg-color-responsive]', 'background-color', 	'.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .sub-menu .menu-item.current-menu-item' );

	//[2] Mobile Header Active Link Background Color.
	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-submenu-a-bg-color-responsive]', 'background-color', 	'.ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link,.ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link,.ast-header-break-point .ast-header-sections-navigation .sub-menu .menu-item.current-menu-item > .menu-link,.ast-header-break-point .ast-above-header-menu-items .sub-menu .menu-item.current-menu-item > .menu-link,.ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item.current-menu-item > .menu-link, .ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-item,.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-ancestor,.ast-fullscreen-menu-overlay .ast-header-break-point .ast-header-sections-navigation .sub-menu .menu-item.current-menu-item,.ast-fullscreen-menu-overlay .ast-header-break-point .ast-above-header-menu-items .sub-menu .menu-item.current-menu-item,.ast-fullscreen-menu-overlay .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item.current-menu-item' );

	wp.customize( 'astra-settings[primary-submenu-a-bg-color-responsive]', function( value ) {
		value.bind( function( color ) {
			if( '' != color.desktop || '' != color.tablet || '' != color.mobile ) {
				var dynamicStyle = '.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link,';
				dynamicStyle += '.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link,';
				dynamicStyle += '.ast-fullscreen-menu-overlay .ast-header-break-point .ast-header-sections-navigation .sub-menu .menu-item.current-menu-item > .menu-link,';
				dynamicStyle += '.ast-fullscreen-menu-overlay .ast-header-break-point .ast-above-header-menu-items .sub-menu .menu-item.current-menu-item > .menu-link,';
				dynamicStyle += '.ast-fullscreen-menu-overlay .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item.current-menu-item > .menu-link { background-color: transparent;}';
				astra_add_dynamic_css( 'mobile-header-submenu-a-bg-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	//[2] Mobile Header Submenu Background Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[primary-submenu-bg-color-responsive]', 	 'background-color', 	'.ast-header-break-point .main-header-menu .sub-menu,.ast-header-break-point .main-header-menu .sub-menu, .ast-header-break-point .ast-header-sections-navigation .sub-menu, .ast-header-break-point .ast-above-header-menu-items .sub-menu, .ast-header-break-point .ast-below-header-menu-items .sub-menu, .ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children .sub-menu' );

	//[2] Mobile Header Primary menu Spacing.
	wp.customize( 'astra-settings[primary-menu-spacing]', function( value ) {
		value.bind( function( padding ) {
			if( padding.desktop.bottom != '' || padding.tablet.bottom != '' || padding.mobile.bottom != '' ) {
				var dynamicStyle = '';
				dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-header-bar .main-header-menu > .menu-item-has-children > .ast-menu-toggle {';
				dynamicStyle += 'padding-left: ' + padding['desktop']['left'] + padding['desktop-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['desktop']['right'] + padding['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle +=  '@media (max-width: 768px) {';
				dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-header-bar .main-header-menu > .menu-item-has-children > .ast-menu-toggle {';
				dynamicStyle += 'padding-left: ' + padding['tablet']['left'] + padding['tablet-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['tablet']['right'] + padding['tablet-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
				dynamicStyle +=  '@media (max-width: 544px) {';
				dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-header-bar .main-header-menu > .menu-item-has-children > .ast-menu-toggle {';
				dynamicStyle += 'padding-left: ' + padding['mobile']['left'] + padding['mobile-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['mobile']['right'] + padding['mobile-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
				astra_add_dynamic_css( 'header-primary-menu-spacing-toggle-button', dynamicStyle );
			}
		} );
	} );

	/**
	 * Fullscreen Menu style -- Primary Menu Custom changes
	 *
	 */
	//[3] Fullscreen Menu style - Primary Menu Active Link color.
	astra_color_responsive_css( 'mobile-header-full-screen-menu', 'astra-settings[primary-menu-a-color-responsive]', 	 'background-color', 	'.ast-fullscreen-menu-overlay .main-header-menu .menu-item.current-menu-item, .ast-fullscreen-menu-overlay .main-header-menu .menu-item.current-menu-ancestor' );

	//[3] Fullscreen Menu Style - Primary Menu Link hover color.
	astra_color_responsive_css( 'mobile-header-full-screen-menu', 'astra-settings[primary-menu-h-color-responsive]', 	 'color', 	'.ast-fullscreen-menu-overlay .main-header-menu .menu-link:hover,.ast-fullscreen-menu-overlay .ast-header-custom-item a:hover,.ast-fullscreen-menu-overlay .main-header-menu .menu-item:hover > .menu-link,.ast-fullscreen-menu-overlay .main-header-menu .menu-item.focus > .menu-link,.ast-fullscreen-menu-overlay .ast-header-break-point .ast-header-sections-navigation a:hover,.ast-fullscreen-menu-overlay .ast-header-break-point .ast-header-sections-navigation a:focus' );

	//[2] Mobile Header Menu Link Hover Background Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[primary-menu-h-bg-color-responsive]', 'background-color', '.ast-header-break-point .main-header-menu .menu-link:hover,.ast-header-break-point .ast-header-custom-item a:hover,.ast-header-break-point .main-header-menu .menu-item:hover > .menu-link,.ast-header-break-point .main-header-menu .menu-item.focus > .menu-link' );

	//[3] Fullscreen Menu -- Primary Menu Link hover bg color.
	astra_color_responsive_css( 'mobile-header-full-screen-menu', 'astra-settings[primary-menu-h-bg-color-responsive]', 'background-color', '.ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .menu-item:hover, .ast-fullscreen-menu-overlay .ast-header-break-point .main-header-menu .menu-item.focus, .ast-fullscreen-menu-overlay .main-header-menu .menu-item:hover, .ast-fullscreen-menu-overlay .ast-header-custom-item li:hover, .ast-fullscreen-menu-overlay .main-header-menu .menu-item:hover, .ast-fullscreen-menu-overlay .main-header-menu .menu-item.focus, .ast-fullscreen-menu-overlay .ast-header-break-point .ast-header-sections-navigation li:hover, .ast-fullscreen-menu-overlay .ast-header-break-point .ast-header-sections-navigation li:focus' );

	//[3] No Toggle Menu Style - Primary Menu Link hover color.
	astra_color_responsive_css( 'mobile-header-no-toggle-menu-h-color', 'astra-settings[primary-menu-h-color-responsive]', 'color', 	'.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item:hover > .menu-link, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item:hover > .ast-menu-toggle, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.focus > .menu-link' );

	//[3] Fullscreen Menu -- Primary Menu Link hover bg color.
	astra_color_responsive_css( 'mobile-header-no-toggle-menu-h-bg-color', 'astra-settings[primary-menu-h-bg-color-responsive]', 'background-color', '.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item:not(.ast-masthead-custom-menu-items):hover, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .sub-menu .menu-item:hover' );

/**
 * Mobile Above Header Responsive colors
 *
 * [1]- Mobile Above Header General colors
 * [2]- Mobile Above Header menu Responsive colors
 * [3]- Mobile Above Header menu for Fullscreen Menu style colos
 */
	//[1] Above Header Toggle Button Style.
	wp.customize( 'astra-settings[mobile-above-header-toggle-btn-style]', function( setting ) {
		setting.bind( function( icon_style ) {
			var buttons = $(document).find('.ast-above-header .menu-toggle');
			buttons.removeClass('ast-above-mobile-menu-buttons-default ast-above-mobile-menu-buttons-fill ast-above-mobile-menu-buttons-outline');
			buttons.addClass( 'ast-above-mobile-menu-buttons-' + icon_style );
		} );
	} );

	//[1] Above Header Toggle Button Border Radius.
	wp.customize( 'astra-settings[mobile-above-header-toggle-btn-border-radius]', function( setting ) {
		setting.bind( function( border ) {

			var dynamicStyle = '.ast-header-break-point .ast-above-header .ast-button-wrap .menu-toggle { border-radius: ' + ( parseInt( border ) ) + 'px } ';
			astra_add_dynamic_css( 'mobile-above-header-toggle-btn-border-radius', dynamicStyle );

		} );
	} );

	/**
	 * [2] Mobile Above Header Menu Background
	 */

	wp.customize( 'astra-settings[above-header-menu-bg-obj-responsive]', function( value ) {
		value.bind( function( bg_obj ) {
				var primaryMenuBgStyle = '.ast-header-break-point .ast-above-header-menu, .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .ast-above-header-navigation,.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'above-header-menu-bg-obj-responsive', primaryMenuBgStyle, 'desktop' );
				var primaryMenuBgStyle = '.ast-header-break-point .ast-above-header-menu, .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .ast-above-header-navigation,.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'above-header-menu-bg-obj-responsive', primaryMenuBgStyle, 'tablet' );
				var primaryMenuBgStyle = '.ast-header-break-point .ast-above-header-menu, .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .ast-above-header-navigation,.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'above-header-menu-bg-obj-responsive', primaryMenuBgStyle, 'mobile' );

				if ( jQuery('body').hasClass('ast-fullscreen-above-menu-enable') || jQuery('body').hasClass('ast-flyout-above-menu-enable') ) {
					var headerBgStyle = '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap,.ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .ast-above-header-navigation { {{css}} }';
					astra_responsive_background_obj_css( wp.customize, bg_obj, 'full-fly-above-header-menu-bg-obj-responsive', headerBgStyle, 'desktop' );
					var headerBgStyle = '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap,.ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .ast-above-header-navigation { {{css}} }';
					astra_responsive_background_obj_css( wp.customize, bg_obj, 'full-fly-above-header-menu-bg-obj-responsive', headerBgStyle, 'tablet' );
					var headerBgStyle = '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap,.ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .ast-above-header-navigation { {{css}} }';
					astra_responsive_background_obj_css( wp.customize, bg_obj, 'full-fly-above-header-menu-bg-obj-responsive', headerBgStyle, 'mobile' );
				}

		} );
	} );

	//[2] Mobile Above Header Link hover Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-link-h-color-responsive]', 	 'color', '.ast-header-break-point .ast-above-header-section .user-select a:hover, .ast-header-break-point .ast-above-header-section .widget a:hover' );

	//[2] Mobile Above Header Text Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-text-color-responsive]', 	 'color', '.ast-header-break-point .ast-above-header-section .user-select, .ast-header-break-point .ast-above-header-section .widget, .ast-header-break-point .ast-above-header-section .widget-title' );

	//[2] Mobile Above Header Link Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-link-color-responsive]', 	 'color', '.ast-header-break-point .ast-above-header-section .user-select a, .ast-header-break-point .ast-above-header-section .widget a' );

	//[2] Mobile Above Header Link Hover Background Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-menu-h-bg-color-responsive]', 	 'background-color', '.ast-header-break-point .ast-above-header-navigation a:hover,.ast-header-break-point .ast-above-header-navigation .menu-item:hover > .menu-link, .ast-header-break-point .ast-above-header-navigation .menu-item.focus > .menu-link, .ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation li:hover' );

	wp.customize( 'astra-settings[above-header-menu-h-bg-color-responsive]', function( value ) {
		value.bind( function( color ) {
			if( '' != color.desktop || '' != color.tablet || '' != color.mobile ) {
					var dynamicStyle = '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation li:hover a:hover,';
					dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item:hover > .menu-link,';
					dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.focus > .menu-link {';
					dynamicStyle += '	background-color: transparent;';
					dynamicStyle += '}';
				astra_add_dynamic_css( 'mobile-above-header-menu-h-bg-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	//[2] Mobile Above Header Link Hover Background Color.
	astra_color_responsive_css( 'mobile-header-no-toggle-above-menu', 'astra-settings[above-header-menu-active-bg-color-responsive]', 	 'background-color', '.ast-no-toggle-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor > .ast-menu-toggle, .ast-no-toggle-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-item:hover > .menu-link,.ast-no-toggle-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-item > .menu-link,.ast-no-toggle-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor:hover > .menu-link,.ast-no-toggle-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor > .menu-link,.ast-no-toggle-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor:hover > .ast-menu-toggle,.ast-no-toggle-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor > .ast-menu-toggle');

	//[2] Mobile Above Header Link Hover Background Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-menu-active-bg-color-responsive]', 	 'background-color', '.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-item > .menu-link,.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor > .menu-link,.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-item,.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor' );

	wp.customize( 'astra-settings[above-header-menu-active-bg-color-responsive]', function( value ) {
		value.bind( function( color ) {
			if( '' != color.desktop || '' != color.tablet || '' != color.mobile ) {
					var dynamicStyle = '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-item > .menu-link,';
					dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor > .menu-link';
					dynamicStyle += ' { background-color: transparent;}';
					astra_add_dynamic_css( 'mobile-above-header-menu-a-bg-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	//[2] Mobile Above Header menu colors.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-menu-color-responsive]', 'color', '.ast-header-break-point .ast-above-header-menu, .ast-header-break-point .ast-above-header-navigation a, .ast-header-break-point .ast-above-header-navigation .menu-item.focus > .ast-menu-toggle, .ast-header-break-point .ast-above-header-navigation  .current-menu-item > .ast-menu-toggle, .ast-header-break-point .ast-above-header-navigation .current-menu-ancestor > .ast-menu-toggle,.ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .close,.ast-fullscreen-above-menu-overlay .ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .close' );

	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-menu-h-color-responsive]', 'color', '.ast-header-break-point .ast-above-header-navigation .menu-link:hover, .ast-header-break-point .ast-above-header-navigation .menu-item:hover > .menu-link, .ast-header-break-point .ast-above-header-navigation .menu-item.focus > .menu-link, .ast-header-break-point .ast-above-header-navigation .menu-item:hover > .ast-menu-toggle, .ast-header-break-point .ast-above-header-navigation .menu-item.focus > .ast-menu-toggle' );

	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-menu-active-color-responsive]', 'color', '.ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-item > .ast-menu-toggle, .ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-item > .menu-link, .ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor > .ast-menu-toggle, .ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-ancestor > .menu-link, .ast-header-break-point .ast-above-header-navigation .menu-item.current-menu-item > .menu-link' );

	//[2] Mobile Above Header submenu colors.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-submenu-text-color-responsive]', 'color', '.ast-header-break-point .ast-above-header-navigation .sub-menu, .ast-header-break-point .ast-above-header-navigation .sub-menu .menu-link' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-submenu-bg-color-responsive]', 'background-color', '.ast-header-break-point .ast-above-header-section-separated .ast-above-header-navigation .sub-menu, .ast-header-break-point .ast-above-header-menu .sub-menu .menu-item, .ast-header-break-point .ast-above-header-section-separated .ast-above-header-navigation .sub-menu, .ast-header-break-point .ast-above-header-menu .sub-menu' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-submenu-hover-color-responsive]', 'color', '.ast-header-break-point .ast-above-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-header-break-point .ast-above-header-menu .sub-menu .menu-item:focus > .menu-link' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-submenu-bg-hover-color-responsive]', 'background-color', '.ast-header-break-point .ast-above-header-menu .sub-menu .menu-link:hover, .ast-header-break-point .ast-above-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-header-break-point .ast-above-header-menu .sub-menu .menu-item.focus > .menu-link,.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-menu .sub-menu .menu-item:hover' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-submenu-active-color-responsive]', 'color', '.ast-header-break-point .ast-above-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-header-break-point .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[above-header-submenu-active-bg-color-responsive]', 'background-color', '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-menu .sub-menu .menu-item.current-menu-item, .ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor,.ast-header-break-point .ast-above-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-header-break-point .ast-above-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link' );

	//[2] Mobile Below Header Menu Spacing.
	wp.customize( 'astra-settings[below-header-menu-spacing]', function( value ) {
		value.bind( function( padding ) {
			if( padding.desktop.bottom != '' || padding.tablet.bottom != '' || padding.mobile.bottom != '' ) {
				var dynamicStyle = '';
				dynamicStyle += '.ast-no-toggle-below-menu-enable .ast-below-header-navigation .ast-below-header-menu > .menu-item-has-children > .ast-menu-toggle, .ast-no-toggle-below-menu-enable .ast-below-header-menu-items .ast-below-header-menu > .menu-item-has-children > .ast-menu-toggle, .ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu > .menu-item-has-children > .menu-link {';
				dynamicStyle += 'padding-left: ' + padding['desktop']['left'] + padding['desktop-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['desktop']['right'] + padding['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle +=  '@media (max-width: 768px) {';
				dynamicStyle += '.ast-no-toggle-below-menu-enable .ast-below-header-navigation .ast-below-header-menu > .menu-item-has-children > .ast-menu-toggle, .ast-no-toggle-below-menu-enable .ast-below-header-menu-items .ast-below-header-menu > .menu-item-has-children > .ast-menu-toggle, .ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu > .menu-item-has-children > .menu-link {';
				dynamicStyle += 'padding-left: ' + padding['tablet']['left'] + padding['tablet-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['tablet']['right'] + padding['tablet-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
				dynamicStyle +=  '@media (max-width: 544px) {';
				dynamicStyle += '.ast-no-toggle-below-menu-enable .ast-below-header-navigation .ast-below-header-menu > .menu-item-has-children > .ast-menu-toggle, .ast-no-toggle-below-menu-enable .ast-below-header-menu-items .ast-below-header-menu > .menu-item-has-children > .ast-menu-toggle, .ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu > .menu-item-has-children > .menu-link {';
				dynamicStyle += 'padding-left: ' + padding['mobile']['left'] + padding['mobile-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['mobile']['right'] + padding['mobile-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
				astra_add_dynamic_css( 'below-header-menu-spacing-toggle-button', dynamicStyle );
			}
		} );
	} );

/**
 * Mobile Below Header Responsive colors
 *
 * [1]- Mobile Below Header General colors
 * [2]- Mobile Below Header menu Responsive colors
 * [3]- Mobile Below Header menu for Fullscreen Menu style colos
 */

	/**
	 * [2] Mobile Below Header Menu Background
	 */
	/**
	 * Below Menu Bg colors & image
	 */

	 /**
	 * [2] Mobile Below Header Menu Background
	 */
	/**
	 * Below Menu Bg colors & image
	 */
	wp.customize( 'astra-settings[below-header-menu-bg-obj-responsive]', function( value ) {
		value.bind( function( bg_obj ) {
				var primaryMenuBgStyle = ' .ast-header-break-point .ast-below-header-section-separated .ast-below-header-actual-nav { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'below-header-menu-bg-obj-responsive', primaryMenuBgStyle, 'desktop' );
				var primaryMenuBgStyle = '.ast-header-break-point .ast-below-header-section-separated .ast-below-header-actual-nav { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'below-header-menu-bg-obj-responsive', primaryMenuBgStyle, 'tablet' );
				var primaryMenuBgStyle = '.ast-header-break-point .ast-below-header-section-separated .ast-below-header-actual-nav { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'below-header-menu-bg-obj-responsive', primaryMenuBgStyle, 'mobile' );

				if ( jQuery('body').hasClass('ast-fullscreen-below-menu-enable') || jQuery('body').hasClass('ast-flyout-below-menu-enable') ) {
					var headerBgStyle = '.ast-fullscreen-below-menu-overlay .ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap,.ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap .ast-below-header-actual-nav { {{css}} }';
					astra_responsive_background_obj_css( wp.customize, bg_obj, 'full-fly-below-header-menu-bg-obj-responsive', headerBgStyle, 'desktop' );
					var headerBgStyle = '.ast-fullscreen-below-menu-overlay .ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap,.ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap .ast-below-header-actual-nav { {{css}} }';
					astra_responsive_background_obj_css( wp.customize, bg_obj, 'full-fly-below-header-menu-bg-obj-responsive', headerBgStyle, 'tablet' );
					var headerBgStyle = '.ast-fullscreen-below-menu-overlay .ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap,.ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap .ast-below-header-actual-nav { {{css}} }';
					astra_responsive_background_obj_css( wp.customize, bg_obj, 'full-fly-below-header-menu-bg-obj-responsive', headerBgStyle, 'mobile' );
				}
		} );
	} );

	//[2] Mobile Below Header Link hover Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-link-hover-color-responsive]', 	 'color', '.ast-header-break-point .below-header-user-select a:hover, .ast-header-break-point .below-header-user-select .widget a:hover' );

	//[2] Mobile Below Header Text Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-text-color-responsive]', 	 'color', '.ast-header-break-point .below-header-user-select,.ast-header-break-point .below-header-user-select .widget' );

	//[2] Mobile Below Header Link Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-link-color-responsive]', 	 'color', '.ast-header-break-point .below-header-user-select a, .ast-header-break-point .below-header-user-select .widget a' );

	//[2] Mobile Above Header Active Link Hover Background Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-current-menu-bg-color-responsive]', 	 'background-color', '.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-item > .menu-link,.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-ancestor > .menu-link,.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-item,.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-ancestor' );

	wp.customize( 'astra-settings[below-header-current-menu-bg-color-responsive]', function( value ) {
		value.bind( function( color ) {
			if( '' != color.desktop || '' != color.tablet || '' != color.mobile ) {
					var dynamicStyle = '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-item > .menu-link,';
					dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-ancestor > .menu-link';
					dynamicStyle += '{ background-color: transparent; }';
				astra_add_dynamic_css( 'mobile-below-header-current-menu-bg-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	//[2] Mobile Above Header Hover Background Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-menu-bg-hover-color-responsive]', 	 'background-color', '.ast-header-break-point .ast-below-header-navigation a:hover,.ast-header-break-point .ast-below-header-navigation .menu-item:hover > .menu-link,.ast-header-break-point .ast-below-header-navigation .menu-item.focus > .menu-link,.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation li:hover' );
	wp.customize( 'astra-settings[below-header-menu-bg-hover-color-responsive]', function( value ) {
		value.bind( function( color ) {
			if( '' != color.desktop || '' != color.tablet || '' != color.mobile ) {
				var dynamicStyle = '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation li:hover a:hover,';
				dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item:hover > .menu-link,';
				dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item.focus > .menu-link';
				dynamicStyle += '{ background-color: transparent; }';
				astra_add_dynamic_css( 'mobile-below-header-menu-bg-hover-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	//[1] Below Header Toggle Button Style
	wp.customize( 'astra-settings[mobile-below-header-toggle-btn-style]', function( setting ) {
		setting.bind( function( icon_style ) {
			var buttons = $(document).find('.ast-below-header .menu-toggle');
			buttons.removeClass('ast-below-mobile-menu-buttons-default ast-below-mobile-menu-buttons-fill ast-below-mobile-menu-buttons-outline');
			buttons.addClass( 'ast-below-mobile-menu-buttons-' + icon_style );
		} );
	} );

	//[1] Below Header Toggle Button Border Radius.
	wp.customize( 'astra-settings[mobile-below-header-toggle-btn-border-radius]', function( setting ) {
		setting.bind( function( border ) {

			var dynamicStyle = '.ast-header-break-point .ast-below-header .ast-button-wrap .menu-toggle { border-radius: ' + ( parseInt( border ) ) + 'px } ';
			astra_add_dynamic_css( 'mobile-below-header-toggle-btn-border-radius', dynamicStyle );

		} );
	} );

	//[2] Mobile Below Header Link hover Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-link-hover-color-responsive]', 	 'color', '.ast-header-break-point .below-header-user-select a:hover, .ast-header-break-point .below-header-user-select .widget a:hover' );

	//[2] Mobile Below Header Text Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-text-color-responsive]', 	 'color', '.ast-header-break-point .below-header-user-select,.ast-header-break-point .below-header-user-select .widget' );

	//[2] Mobile Below Header Link Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-link-color-responsive]', 	 'color', '.ast-header-break-point .below-header-user-select a, .ast-header-break-point .below-header-user-select .widget a' );

	//[2] Mobile Above Header Active Link Hover Background Color.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-current-menu-bg-color-responsive]', 	 'background-color', '.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-item > .menu-link,.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-ancestor > .menu-link,.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-item,.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-ancestor' );

	wp.customize( 'astra-settings[below-header-current-menu-bg-color-responsive]', function( value ) {
		value.bind( function( color ) {
			if( '' != color.desktop || '' != color.tablet || '' != color.mobile ) {
					var dynamicStyle = '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-item > .menu-link,';
					dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-ancestor > .menu-link';
					dynamicStyle += '{ background-color: transparent; }';
				astra_add_dynamic_css( 'mobile-below-header-current-menu-bg-color', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	//[2] Mobile Below Header menu colors.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-menu-text-color-responsive]', 'color', '.ast-header-break-point .ast-below-header-menu .current-menu-ancestor:hover > .ast-menu-toggle, .ast-header-break-point .ast-below-header-menu .current-menu-ancestor > .ast-menu-toggle, .ast-header-break-point .ast-below-header-menu, .ast-header-break-point .ast-below-header-menu .menu-link, .ast-header-break-point .ast-below-header-menu .menu-item:hover > .ast-menu-toggle, .ast-header-break-point .ast-below-header-menu .menu-item.focus > .ast-menu-toggle, .ast-header-break-point .ast-below-header-menu .current-menu-item > .ast-menu-toggle, .ast-header-break-point .ast-below-header-menu .current-menu-ancestor > .ast-menu-toggle' );

	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-menu-text-hover-color-responsive]', 'color', '.ast-header-break-point .ast-below-header-navigation .menu-link:hover, .ast-header-break-point .ast-below-header-navigation .menu-item:hover > .menu-link, .ast-header-break-point .ast-below-header-navigation .menu-item.focus > .menu-link, .ast-header-break-point .ast-below-header-navigation .menu-item:hover > .ast-menu-toggle, .ast-header-break-point .ast-below-header-navigation .menu-item.focus > .ast-menu-toggle' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-current-menu-text-color-responsive]', 'color', '.ast-header-break-point .ast-below-header-navigation .menu-item.current-menu-item > .menu-link' );
	//[2] Mobile Below Header submenu colors.
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-submenu-text-color-responsive]', 'color', '.ast-header-break-point .ast-below-header-navigation .sub-menu, .ast-header-break-point .ast-below-header-navigation .sub-menu .menu-link' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-submenu-bg-color-responsive]', 'background-color', '.ast-header-break-point .ast-below-header-menu .sub-menu, .ast-header-break-point .ast-below-header-menu .sub-menu' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-submenu-hover-color-responsive]', 'color', '.ast-header-break-point .ast-below-header-menu .sub-menu .menu-item:hover > .menu-link, .ast-header-break-point .ast-below-header-menu .sub-menu .menu-item:focus > .menu-link, .ast-header-break-point .ast-below-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, .ast-header-break-point .ast-below-header-menu .sub-menu .menu-item:focus > .ast-menu-toggle' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-submenu-bg-hover-color-responsive]', 'background-color', '.ast-below-header .sub-menu .menu-item:hover > .menu-link, .ast-desktop .ast-mega-menu-enabled.ast-below-header-menu .sub-menu .menu-item .menu-link:hover, .ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-menu .sub-menu .menu-item:hover' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-submenu-active-color-responsive]', 'color', '.ast-header-break-point .ast-below-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-header-break-point .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link' );
	astra_color_responsive_css( 'mobile-header', 'astra-settings[below-header-submenu-active-bg-color-responsive]', 'background-color', '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-menu .sub-menu .menu-item.current-menu-item, .ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor, .ast-header-break-point .ast-below-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .ast-header-break-point .ast-below-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link' );

	/**
	 * Mobile Header Color
	 */

	wp.customize( 'astra-settings[mobile-header-menu-all-border]', function( value ) {
		value.bind( function( border ) {
			var color = wp.customize( 'astra-settings[mobile-header-menu-b-color]' ).get();
			var menu_style = wp.customize( 'astra-settings[mobile-menu-style]' ).get();

			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {

				if( 'fullscreen' === menu_style ) {
					var dynamicStyle = '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu > .menu-item';
						dynamicStyle += '{';
						dynamicStyle += 'border-right-width:'  + border.right + 'px;';
						dynamicStyle += 'border-left-width:'   + border.left + 'px;';
						dynamicStyle += 'border-style:'        + 'solid;';
						dynamicStyle += 'border-color:'        + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu > .menu-item:not(:first-child):not(:last-child)';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:' + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu .menu-item:first-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:'  + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu .menu-item:last-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu .menu-item.ast-submenu-expanded .sub-menu .menu-item';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:' + '0';
						dynamicStyle += 'border-style:'      + 'solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu .ast-masthead-custom-menu-items';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
						dynamicStyle += 'border-left-width:'  + border.left + 'px;';
						dynamicStyle += 'border-right-width:'  + border.right + 'px;';
						dynamicStyle += 'border-style:'      + 'solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
				} else if ('no-toggle' === menu_style ) {

					var dynamicStyle  = '.ast-no-toggle-menu-enable.ast-header-break-point .main-header-bar-navigation ul li';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-left-width:' + border.left + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';

						dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li, .ast-no-toggle-menu-enable.ast-header-break-point .main-header-bar-navigation .sub-menu .menu-item:last-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += '}';

						dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > .ast-above-header-menu > .menu-item:last-child, .ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li:last-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';

						dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-header-bar-navigation ul > li:first-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';

						dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li:first-child, .ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li';
						dynamicStyle += '{';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';

						dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li';
						dynamicStyle += '{';
						dynamicStyle += 'margin-right: -' + border.right + 'px;';
						dynamicStyle += '}';

						dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li > .sub-menu';
						dynamicStyle += '{';
						dynamicStyle += 'margin-left: -' + border.left + 'px;';
						dynamicStyle += '}';
				} else{
					var dynamicStyle = '.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-left-width:' + border.left + 'px;';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point .main-navigation ul li a';
						dynamicStyle += '{';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += '}';
						//Custom menu item.
						dynamicStyle += '.ast-header-break-point li.ast-masthead-custom-menu-items';
						dynamicStyle += '{';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += 'border-style:solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += 'margin-top:0;';
						dynamicStyle += 'margin-bottom:0;';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu,.ast-header-break-point .main-navigation ul li a';
						dynamicStyle += '{';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';

				}

				astra_add_dynamic_css( 'mobile-header-menu-all-border', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

/**
	 * Mobile Above Header Color
	 */
	wp.customize( 'astra-settings[mobile-above-header-menu-all-border]', function( value ) {
		value.bind( function( border ) {
			var color = wp.customize( 'astra-settings[mobile-above-header-menu-b-color]' ).get();
			var menu_style = wp.customize( 'astra-settings[mobile-above-header-menu-style]' ).get();

			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {

				if( 'fullscreen' === menu_style ) {
					var dynamicStyle = '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu > .menu-item';
						dynamicStyle += '{';
						dynamicStyle += 'border-right-width:'  + border.right + 'px;';
						dynamicStyle += 'border-left-width:'   + border.left + 'px;';
						dynamicStyle += 'border-style:'        + 'solid;';
						dynamicStyle += 'border-color:'        + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu > .menu-item:not(:first-child):not(:last-child)';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:' + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu .menu-item:first-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:'  + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu .menu-item:last-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu .menu-item.ast-submenu-expanded .sub-menu .menu-item';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:' + '0';
						dynamicStyle += 'border-style:'      + 'solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu .ast-masthead-custom-menu-items';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
						dynamicStyle += 'border-left-width:'  + border.left + 'px;';
						dynamicStyle += 'border-right-width:'  + border.right + 'px;';
						dynamicStyle += 'border-style:'      + 'solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
				} else if ('no-toggle' === menu_style ) {

					var dynamicStyle = '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation ul li';
					dynamicStyle += '{';
					dynamicStyle += 'border-top-width:' + border.top + 'px;';
					dynamicStyle += 'border-left-width:' + border.left + 'px;';
					dynamicStyle += 'border-right-width:' + border.right + 'px;';
					dynamicStyle += 'border-color:' + color + ';';
					dynamicStyle += '}';

					dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li, .ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation .sub-menu .menu-item:last-child';
					dynamicStyle += '{';
					dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
					dynamicStyle += '}';

					dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > .ast-above-header-menu > .menu-item:last-child, .ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li:last-child';
					dynamicStyle += '{';
					dynamicStyle += 'border-right-width:' + border.right + 'px;';
					dynamicStyle += 'border-color:' + color + ';';
					dynamicStyle += '}';

					dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation ul > li:first-child, .ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-menu-items .sub-menu > .menu-item:first-child';
					dynamicStyle += '{';
					dynamicStyle += 'border-top-width:' + border.top + 'px;';
					dynamicStyle += 'border-color:' + color + ';';
					dynamicStyle += '}';

					dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li:first-child, .ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li';
					dynamicStyle += '{';
					dynamicStyle += 'border-right-width:' + border.right + 'px;';
					dynamicStyle += 'border-color:' + color + ';';
					dynamicStyle += '}';

					dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li {';
					dynamicStyle += '    margin-right: -' + border.right + 'px;';
					dynamicStyle += '}';
					dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li > .sub-menu {';
					dynamicStyle += '    margin-left: -' + border.left + 'px;';
					dynamicStyle += '}';

				} else{
					var dynamicStyle = '.ast-header-break-point .ast-above-header-section-separated .ast-above-header-menu';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-left-width:' + border.left + 'px;';

						if( 'no-toggle' === menu_style ) {
							dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						}
						dynamicStyle += '}';

						if( 'no-toggle' !== menu_style ) {
							dynamicStyle += '.ast-header-break-point .ast-above-header-navigation ul li a, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item .menu-link, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item:first-child .menu-link, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item:last-child .menu-link';
							dynamicStyle += '{';
							dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
							dynamicStyle += '}';
						}

						dynamicStyle += '.ast-header-break-point .ast-above-header-section-separated .ast-above-header-menu,.ast-header-break-point .ast-above-header-navigation ul li a, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item .menu-link, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item:first-child .menu-link, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item:last-child .menu-link';
						dynamicStyle += '{';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
				}

				astra_add_dynamic_css( 'mobile-above-header-menu-all-border', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );


	/**
	 * Mobile Below Header Color
	 */
	wp.customize( 'astra-settings[mobile-below-header-menu-all-border]', function( value ) {
		value.bind( function( border ) {
			var color = wp.customize( 'astra-settings[mobile-below-header-menu-b-color]' ).get();
			var menu_style = wp.customize( 'astra-settings[mobile-below-header-menu-style]' ).get();

			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {

				if( 'fullscreen' === menu_style ) {
					var dynamicStyle = '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu > .menu-item';
						dynamicStyle += '{';
						dynamicStyle += 'border-right-width:'  + border.right + 'px;';
						dynamicStyle += 'border-left-width:'   + border.left + 'px;';
						dynamicStyle += 'border-style:'        + 'solid;';
						dynamicStyle += 'border-color:'        + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu > .menu-item:not(:first-child):not(:last-child)';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:' + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu .menu-item:first-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:'  + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
						dynamicStyle += 'border-color:'      + color + ';';

						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu .menu-item:last-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu .menu-item.ast-submenu-expanded .sub-menu .menu-item';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:' + '0;';
						dynamicStyle += 'border-style:'      + 'solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu .ast-masthead-custom-menu-items';
						dynamicStyle += '{';

						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
						dynamicStyle += 'border-left-width:'  + border.left + 'px;';
						dynamicStyle += 'border-right-width:'  + border.right + 'px;';
						dynamicStyle += 'border-style:'      + 'solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
				} else if ('no-toggle' === menu_style ) {
					var dynamicStyle = '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu .menu-item {';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += 'border-left-width:' + border.left + 'px;';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-actual-nav ul > li:first-child, .ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu-items .sub-menu > .menu-item:first-child {';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header .ast-below-header-menu > .menu-item:last-child {';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-actual-nav .sub-menu .menu-item:last-child,.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-actual-nav ul ul li:last-child {';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu > .menu-item > .sub-menu .menu-item:last-child {';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu > .menu-item {';
						dynamicStyle += 'margin-right: -' + border.right + 'px;';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu > .menu-item > .sub-menu {';
						dynamicStyle += 'margin-left: -' + border.left + 'px;';
						dynamicStyle += '}';

				} else{
					var dynamicStyle = '.ast-header-break-point .ast-below-header-section-separated .ast-below-header-menu';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-left-width:' + border.left + 'px;';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point .ast-below-header-actual-nav ul li a, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-link';
						dynamicStyle += '{';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point .ast-below-header-section-separated .ast-below-header-menu,.ast-header-break-point .ast-below-header-actual-nav ul li a, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-link';
						dynamicStyle += '{';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
				}

				astra_add_dynamic_css( 'mobile-below-header-menu-all-border', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );


	/**
	 * Mobile Header Border Color
	 */
	wp.customize( 'astra-settings[mobile-header-menu-b-color]', function( value ) {
		value.bind( function( color ) {

			if( '' != color ) {
				var border = wp.customize( 'astra-settings[mobile-header-menu-all-border]' ).get();
				var menu_style = wp.customize( 'astra-settings[mobile-menu-style]' ).get();

				if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {
					if( 'fullscreen' === menu_style ) {
						var dynamicStyle = '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu > .menu-item';
							dynamicStyle += '{';
							dynamicStyle += 'border-right-width:'  + border.right + 'px;';
							dynamicStyle += 'border-left-width:'   + border.left + 'px;';
							dynamicStyle += 'border-style:'        + 'solid;';
							dynamicStyle += 'border-color:'        + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu > .menu-item:not(:first-child):not(:last-child)';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
							dynamicStyle += 'border-bottom-width:' + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu .menu-item:first-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
							dynamicStyle += 'border-bottom-width:'  + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu .menu-item:last-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
							dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu .menu-item.ast-submenu-expanded .sub-menu .menu-item';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + border.top + 'px;';
							dynamicStyle += 'border-bottom-width:' + '0';
							dynamicStyle += 'border-style:'      + 'solid;';
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu .ast-masthead-custom-menu-items';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
							dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
							dynamicStyle += 'border-left-width:'  + border.left + 'px;';
							dynamicStyle += 'border-right-width:'  + border.right + 'px;';
							dynamicStyle += 'border-style:'      + 'solid;';
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
							console.log(dynamicStyle);
					} else if ('no-toggle' === menu_style ) {

						var dynamicStyle  = '.ast-no-toggle-menu-enable.ast-header-break-point .main-header-bar-navigation ul li';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:' + border.top + 'px;';
							dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
							dynamicStyle += 'border-right-width:' + border.right + 'px;';
							dynamicStyle += 'border-left-width:' + border.left + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

							dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li, .ast-no-toggle-menu-enable.ast-header-break-point .main-header-bar-navigation .sub-menu .menu-item:last-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
							dynamicStyle += '}';

							dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > .ast-above-header-menu > .menu-item:last-child, .ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li:last-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-right-width:' + border.right + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

							dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-header-bar-navigation ul > li:first-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:' + border.top + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

							dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li:first-child, .ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li';
							dynamicStyle += '{';
							dynamicStyle += 'border-right-width:' + border.right + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

							dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li';
							dynamicStyle += '{';
							dynamicStyle += 'margin-right: -' + border.right + 'px;';
							dynamicStyle += '}';

							dynamicStyle += '.ast-no-toggle-menu-enable.ast-header-break-point .main-navigation > ul > li > .sub-menu';
							dynamicStyle += '{';
							dynamicStyle += 'margin-left: -' + border.left + 'px;';
							dynamicStyle += '}';

					} else {
						var dynamicStyle = '.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-left-width:' + border.left + 'px;';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point .main-navigation ul li a';
						dynamicStyle += '{';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += '}';
						//Custom menu item.
						dynamicStyle += '.ast-header-break-point li.ast-masthead-custom-menu-items';
						dynamicStyle += '{';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += 'border-style:solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += 'margin-top:0;';
						dynamicStyle += 'margin-bottom:0;';
						dynamicStyle += '}';

						dynamicStyle += '.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu,.ast-header-break-point .main-navigation ul li a';
						dynamicStyle += '{';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
					}
					astra_add_dynamic_css( 'mobile-header-menu-border-color', dynamicStyle );
				}

			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );


	/**
	 * Mobile Above Header Border Color
	 */
	wp.customize( 'astra-settings[mobile-above-header-menu-b-color]', function( value ) {
		value.bind( function( color ) {

			if( '' != color ) {
				var border = wp.customize( 'astra-settings[mobile-above-header-menu-all-border]' ).get();
				var menu_style = wp.customize( 'astra-settings[mobile-above-header-menu-style]' ).get();

				if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {

					if( 'fullscreen' === menu_style ) {
						var dynamicStyle = '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu > .menu-item';
						dynamicStyle += '{';
						dynamicStyle += 'border-right-width:'  + border.right + 'px;';
						dynamicStyle += 'border-left-width:'   + border.left + 'px;';
						dynamicStyle += 'border-style:'        + 'solid;';
						dynamicStyle += 'border-color:'        + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu > .menu-item:not(:first-child):not(:last-child)';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:' + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu .menu-item:first-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:'  + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu .menu-item:last-child';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu .menu-item.ast-submenu-expanded .sub-menu .menu-item';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:' + '0';
						dynamicStyle += 'border-style:'      + 'solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header .ast-above-header-navigation .ast-above-header-menu .ast-masthead-custom-menu-items';
						dynamicStyle += '{';
						dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
						dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
						dynamicStyle += 'border-left-width:'  + border.left + 'px;';
						dynamicStyle += 'border-right-width:'  + border.right + 'px;';
						dynamicStyle += 'border-style:'      + 'solid;';
						dynamicStyle += 'border-color:'      + color + ';';
						dynamicStyle += '}';
					} else if ('no-toggle' === menu_style ) {
						var dynamicStyle = '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation ul li';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:' + border.top + 'px;';
							dynamicStyle += 'border-left-width:' + border.left + 'px;';
							dynamicStyle += 'border-right-width:' + border.right + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

							dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li, .ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation .sub-menu .menu-item:last-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
							dynamicStyle += '}';

							dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > .ast-above-header-menu > .menu-item:last-child, .ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li:last-child';

							dynamicStyle += '{';
							dynamicStyle += 'border-right-width:' + border.right + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

							dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation ul > li:first-child, .ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-menu-items .sub-menu > .menu-item:first-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:' + border.top + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

							dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li:first-child, .ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li';
							dynamicStyle += '{';
							dynamicStyle += 'border-right-width:' + border.right + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

							dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li {';
							dynamicStyle += '    margin-right: -' + border.right + 'px;';
							dynamicStyle += '}';
							dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation > ul > li > .sub-menu {';
							dynamicStyle += '    margin-left: -' + border.left + 'px;';
							dynamicStyle += '}';

							dynamicStyle += '{';
							dynamicStyle += 'border-right-width:' + border.right + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

							dynamicStyle += '.ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-navigation ul > li:first-child, .ast-header-break-point.ast-no-toggle-above-menu-enable .ast-above-header-menu-items .sub-menu > .menu-item:first-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:' + border.top + 'px;';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';

					} else{

						var dynamicStyle = '.ast-header-break-point .ast-above-header-section-separated .ast-above-header-menu';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:' + border.top + 'px;';
							dynamicStyle += 'border-right-width:' + border.right + 'px;';
							dynamicStyle += 'border-left-width:' + border.left + 'px;';

							if( 'no-toggle' === menu_style ) {
								dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
							}
							dynamicStyle += '}';

							if( 'no-toggle' !== menu_style ) {
								dynamicStyle += '.ast-header-break-point .ast-above-header-navigation ul li a, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item .menu-link, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item:first-child .menu-link, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item:last-child .menu-link';
								dynamicStyle += '{';
								dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
								dynamicStyle += '}';
							}

							dynamicStyle += '.ast-header-break-point .ast-above-header-section-separated .ast-above-header-menu,.ast-header-break-point .ast-above-header-navigation ul li a, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item .menu-link, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item:first-child .menu-link, .above-header-nav-padding-support.ast-header-break-point .ast-above-header-menu .menu-item:last-child .menu-link';
							dynamicStyle += '{';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';
					}

					astra_add_dynamic_css( 'mobile-above-header-menu-border-color', dynamicStyle );
				}
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );


	/**
	 * Mobile Below Header Border Color
	 */
	wp.customize( 'astra-settings[mobile-below-header-menu-b-color]', function( value ) {
		value.bind( function( color ) {

			if( '' != color ) {
				var border = wp.customize( 'astra-settings[mobile-below-header-menu-all-border]' ).get();
				var menu_style = wp.customize( 'astra-settings[mobile-below-header-menu-style]' ).get();

				if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {

					if( 'fullscreen' === menu_style ) {
						var dynamicStyle = '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu > .menu-item';
							dynamicStyle += '{';
							dynamicStyle += 'border-right-width:'  + border.right + 'px;';
							dynamicStyle += 'border-left-width:'   + border.left + 'px;';
							dynamicStyle += 'border-style:'        + 'solid;';
							dynamicStyle += 'border-color:'        + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu > .menu-item:not(:first-child):not(:last-child)';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
							dynamicStyle += 'border-bottom-width:' + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu .menu-item:first-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + border.top + 'px;';
							dynamicStyle += 'border-bottom-width:'  + ( ( '' != border.bottom && '' != border.top ) ? border.bottom / 2 + 'px;' : border.bottom + 'px;' );
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu .menu-item:last-child';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
							dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu .menu-item.ast-submenu-expanded .sub-menu .menu-item';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + border.top + 'px;';
							dynamicStyle += 'border-bottom-width:' + '0;';
							dynamicStyle += 'border-style:'      + 'solid;';
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
							dynamicStyle += '.ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header .ast-below-header-navigation .ast-below-header-menu .ast-masthead-custom-menu-items';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:'  + ( ( '' != border.top && '' != border.bottom ) ? border.top / 2 + 'px;' : border.top + 'px;' );
							dynamicStyle += 'border-bottom-width:'  + border.bottom + 'px;';
							dynamicStyle += 'border-left-width:'  + border.left + 'px;';
							dynamicStyle += 'border-right-width:'  + border.right + 'px;';
							dynamicStyle += 'border-style:'      + 'solid;';
							dynamicStyle += 'border-color:'      + color + ';';
							dynamicStyle += '}';
					}  else if ('no-toggle' === menu_style ) {

						var dynamicStyle = '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu .menu-item {';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += 'border-left-width:' + border.left + 'px;';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-actual-nav ul > li:first-child, .ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu-items .sub-menu > .menu-item:first-child {';
						dynamicStyle += 'border-top-width:' + border.top + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header .ast-below-header-menu > .menu-item:last-child {';
						dynamicStyle += 'border-right-width:' + border.right + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-actual-nav .sub-menu .menu-item:last-child,.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-actual-nav ul ul li:last-child {';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu > .menu-item > .sub-menu .menu-item:last-child {';
						dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
						dynamicStyle += 'border-color:' + color + ';';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu > .menu-item {';
						dynamicStyle += 'margin-right: -' + border.right + 'px;';
						dynamicStyle += '}';
						dynamicStyle += '.ast-header-break-point.ast-no-toggle-below-menu-enable .ast-below-header-menu > .menu-item > .sub-menu {';
						dynamicStyle += 'margin-left: -' + border.left + 'px;';
						dynamicStyle += '}';

					} else{
						var dynamicStyle = '.ast-header-break-point .ast-below-header-section-separated .ast-below-header-menu';
							dynamicStyle += '{';
							dynamicStyle += 'border-top-width:' + border.top + 'px;';
							dynamicStyle += 'border-right-width:' + border.right + 'px;';
							dynamicStyle += 'border-left-width:' + border.left + 'px;';
							dynamicStyle += '}';
							dynamicStyle += '.ast-header-break-point .ast-below-header-actual-nav ul li a, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-link';
							dynamicStyle += '{';
							dynamicStyle += 'border-bottom-width:' + border.bottom + 'px;';
							dynamicStyle += '}';
							dynamicStyle += '.ast-header-break-point .ast-below-header-section-separated .ast-below-header-menu,.ast-header-break-point .ast-below-header-actual-nav ul li a, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-link';
							dynamicStyle += '{';
							dynamicStyle += 'border-color:' + color + ';';
							dynamicStyle += '}';
					}

					astra_add_dynamic_css( 'mobile-below-header-menu-border-color', dynamicStyle );
				}
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );


	/**
	 * Mobile Header : Above Header Fullscreen/Flyout Background
	 */
	wp.customize( 'astra-settings[above-header-bg-obj-responsive]', function( value ) {
		value.bind( function( bg_obj ) {
			var aboveHeaderMenuBgColor = (typeof ( wp.customize._value['astra-settings[below-header-menu-bg-obj-responsive]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[below-header-menu-bg-obj-responsive]']._value: '';
			if ( undefined !== aboveHeaderMenuBgColor['desktop'] && undefined !== aboveHeaderMenuBgColor['tablet'] && undefined !== aboveHeaderMenuBgColor['mobile'] ) {
				if ( '' !== aboveHeaderMenuBgColor['desktop']['background-color'] || '' !== aboveHeaderMenuBgColor['tablet']['background-color'] ||'' !== aboveHeaderMenuBgColor['mobile']['background-color'] ) {
					return;
				}
			}

			if ( jQuery('body').hasClass('ast-fullscreen-above-menu-enable') || jQuery('body').hasClass('ast-flyout-above-menu-enable') ) {
				var headerBgStyle = '  .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .ast-above-header-navigation,.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'mobile-above-header-bg-obj-responsive', headerBgStyle, 'desktop' );
				var headerBgStyle = '  .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .ast-above-header-navigation,.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'mobile-above-header-bg-obj-responsive', headerBgStyle, 'tablet' );
				var headerBgStyle = '  .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap .ast-above-header-navigation,.ast-fullscreen-above-menu-enable.ast-header-break-point .ast-above-header-navigation-wrap { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'mobile-above-header-bg-obj-responsive', headerBgStyle, 'mobile' );
			}
		} );
	} );

	/**
	 * Mobile Header : Above Header Fullscreen/Flyout Background
	 */

	wp.customize( 'astra-settings[below-header-bg-obj-responsive]', function( value ) {
		value.bind( function( bg_obj ) {
			var belowHeaderMenuBgColor = (typeof ( wp.customize._value['astra-settings[below-header-menu-bg-obj-responsive]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[below-header-menu-bg-obj-responsive]']._value: '';
			if ( undefined !== belowHeaderMenuBgColor['desktop'] && undefined !== belowHeaderMenuBgColor['tablet'] && undefined !== belowHeaderMenuBgColor['mobile'] ) {
				if ( '' !== belowHeaderMenuBgColor['desktop']['background-color'] || '' !== belowHeaderMenuBgColor['tablet']['background-color'] ||'' !== belowHeaderMenuBgColor['mobile']['background-color'] ) {
					return;
				}
			}

			if ( jQuery('body').hasClass('ast-fullscreen-below-menu-enable') || jQuery('body').hasClass('ast-flyout-below-menu-enable') ) {
				var headerBgStyle = '.ast-fullscreen-below-menu-overlay .ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap,.ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap .ast-below-header-actual-nav { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'mobile-below-header-bg-obj-responsive', headerBgStyle, 'desktop' );
				var headerBgStyle = '.ast-fullscreen-below-menu-overlay .ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap,.ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap .ast-below-header-actual-nav { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'mobile-below-header-bg-obj-responsive', headerBgStyle, 'tablet' );
				var headerBgStyle = '.ast-fullscreen-below-menu-overlay .ast-fullscreen-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap,.ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-navigation-wrap .ast-below-header-actual-nav { {{css}} }';
				astra_responsive_background_obj_css( wp.customize, bg_obj, 'mobile-below-header-bg-obj-responsive', headerBgStyle, 'mobile' );
			}

		} );
	} );

	wp.customize( 'astra-settings[above-header-menu-spacing]', function( value ) {
		value.bind( function( padding ) {
			if( padding.desktop.bottom != '' || padding.tablet.bottom != '' || padding.mobile.bottom != '' ) {
				var dynamicStyle = '';
				dynamicStyle += '.ast-no-toggle-below-menu-enable .ast-above-header-navigation .ast-above-header-menu > .menu-item-has-children > .ast-menu-toggle, .ast-no-toggle-below-menu-enable .ast-above-header-menu-items .ast-above-header-menu > .menu-item-has-children > .ast-menu-toggle {';
				dynamicStyle += 'padding-left: ' + padding['desktop']['left'] + padding['desktop-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['desktop']['right'] + padding['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle +=  '@media (max-width: 768px) {';
				dynamicStyle += '.ast-no-toggle-below-menu-enable .ast-above-header-navigation .ast-above-header-menu > .menu-item-has-children > .ast-menu-toggle, .ast-no-toggle-below-menu-enable .ast-above-header-menu-items .ast-above-header-menu > .menu-item-has-children > .ast-menu-toggle {';
				dynamicStyle += 'padding-left: ' + padding['tablet']['left'] + padding['tablet-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['tablet']['right'] + padding['tablet-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
				dynamicStyle +=  '@media (max-width: 544px) {';
				dynamicStyle += '.ast-no-toggle-below-menu-enable .ast-above-header-navigation .ast-above-header-menu > .menu-item-has-children > .ast-menu-toggle, .ast-no-toggle-below-menu-enable .ast-above-header-menu-items .ast-above-header-menu > .menu-item-has-children > .ast-menu-toggle {';
				dynamicStyle += 'padding-left: ' + padding['mobile']['left'] + padding['mobile-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['mobile']['right'] + padding['mobile-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
				astra_add_dynamic_css( 'above-header-menu-spacing-toggle-button', dynamicStyle );
			}
		} );
	} );

	// Above Toggle Button Color
	wp.customize( 'astra-settings[mobile-above-header-toggle-btn-style-color]', function( setting ) {
		setting.bind( function( toggle_button_color ) {
			if ( toggle_button_color != '' ) {

				if( jQuery( '.menu-toggle' ).hasClass( 'ast-above-mobile-menu-buttons-fill' ) ) {
					var dynamicStyle = '.ast-header-break-point .ast-above-mobile-menu-buttons-fill.menu-toggle { border: 1px solid ' + toggle_button_color + '; background: ' + toggle_button_color + '}';
				}
				else if( jQuery( '.menu-toggle' ).hasClass( 'ast-above-mobile-menu-buttons-outline' ) ) {
					var dynamicStyle = '.ast-header-break-point .ast-above-mobile-menu-buttons-outline.menu-toggle { border: 1px solid ' + toggle_button_color + '; color: ' + toggle_button_color + '}';
				}
				else {
					var dynamicStyle = '.ast-header-break-point .ast-above-mobile-menu-buttons-minimal.menu-toggle { color: ' + toggle_button_color + '}';
				}
				astra_add_dynamic_css( 'above-toggle-button-color', dynamicStyle );
			}
			else{
				wp.customize.preview.send( 'refresh' );
			}
		});
	});

	// Below Toggle Button Color
	wp.customize( 'astra-settings[mobile-below-header-toggle-btn-style-color]', function( setting ) {
		setting.bind( function( toggle_button_color ) {
			if ( toggle_button_color != '' ) {
				if( jQuery( '.menu-toggle' ).hasClass( 'ast-below-mobile-menu-buttons-fill' ) ) {
					var dynamicStyle = '.ast-header-break-point .ast-below-mobile-menu-buttons-fill.menu-toggle { border: 1px solid ' + toggle_button_color + '; background: ' + toggle_button_color + '}';
				}
				else if( jQuery( '.menu-toggle' ).hasClass( 'ast-below-mobile-menu-buttons-outline' ) ) {
					var dynamicStyle = '.ast-header-break-point .ast-below-mobile-menu-buttons-outline.menu-toggle { border: 1px solid ' + toggle_button_color + '; color: ' + toggle_button_color + '}';
				}
				else {
					var dynamicStyle = '.ast-header-break-point .ast-below-mobile-menu-buttons-minimal.menu-toggle { color: ' + toggle_button_color + '}';
				}
				astra_add_dynamic_css( 'below-toggle-button-color', dynamicStyle );
			}
			else{
				wp.customize.preview.send( 'refresh' );
			}
		});
	});

} )( jQuery );
