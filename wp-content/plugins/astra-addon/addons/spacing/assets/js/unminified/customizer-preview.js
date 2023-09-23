/**
 * This file adds some LIVE to the Theme Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 */
( function( $ ) {

	/**
	 * Header Spacing
	 */
	astra_responsive_spacing( 'astra-settings[header-spacing]','.main-header-bar, .ast-header-break-point .main-header-bar, .ast-header-break-point .header-main-layout-2 .main-header-bar', 'padding', ['top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[header-spacing]','#masthead .ast-container, .main-header-bar .ast-container', 'padding', ['right', 'left' ] );

	// Remove padding bottom to header elements if padding bottom is given to header.
	wp.customize( 'astra-settings[header-spacing]', function( value ) {
		value.bind( function( padding ) {

			if( padding.desktop.bottom != '' || padding.tablet.bottom != '' || padding.mobile.bottom != '' ) {
				var dynamicStyle = '';
				dynamicStyle += '.ast-header-break-point .site-branding, .ast-header-break-point .ast-mobile-menu-buttons, .ast-header-break-point.ast-header-custom-item-outside .ast-masthead-custom-menu-items, .ast-header-break-point .header-main-layout-2 .ast-mobile-menu-buttons { padding-bottom: 0px;} ';
				dynamicStyle +=  '@media (max-width: 768px) { .ast-header-break-point .main-header-bar .main-header-bar-navigation { padding-top:' + padding['tablet']['bottom'] + padding['tablet-unit'] + ';} }';
				dynamicStyle +=  '@media (max-width: 544px) { .ast-header-break-point .main-header-bar .main-header-bar-navigation { padding-top:' + padding['mobile']['bottom'] + padding['mobile-unit'] + ';} }';
				astra_add_dynamic_css( 'remove-add-header-spacing', dynamicStyle );
			}

		} );
	} );

	// Account Menu Spacing.
	astra_responsive_spacing( 'astra-settings[header-account-menu-spacing]', '.ast-header-account-wrap .menu-item .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );

	wp.customize( 'astra-settings[header-account-menu-spacing]', function( value ) {
		value.bind( function( padding ) {

			var dynamicStyle = '';
			dynamicStyle += '.ast-header-account-wrap .main-header-menu.ast-account-nav-menu .menu-item .menu-link, .ast-advanced-headers .ast-header-account-wrap .main-header-menu.ast-account-nav-menu .menu-item .menu-link {';
			dynamicStyle += 'padding-left: ' + padding['desktop']['left'] + padding['desktop-unit'] + ';';
			dynamicStyle += 'padding-right: ' + padding['desktop']['right'] + padding['desktop-unit'] + ';';
			dynamicStyle += 'padding-top: ' + padding['desktop']['top'] + padding['desktop-unit'] + ';';
			dynamicStyle += 'padding-bottom: ' + padding['desktop']['bottom'] + padding['desktop-unit'] + ';';
			dynamicStyle += '} ';

			dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
			dynamicStyle += '.ast-header-break-point .ast-header-account-wrap .menu-item .menu-link {';
			dynamicStyle += 'padding-left: ' + padding['tablet']['left'] + padding['tablet-unit'] + ';';
			dynamicStyle += 'padding-right: ' + padding['tablet']['right'] + padding['tablet-unit'] + ';';
			dynamicStyle += 'padding-top: ' + padding['tablet']['top'] + padding['tablet-unit'] + ';';
			dynamicStyle += 'padding-bottom: ' + padding['tablet']['bottom'] + padding['tablet-unit'] + ';';
			dynamicStyle += '} ';
			dynamicStyle += '} ';

			dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
			dynamicStyle += '.ast-header-break-point .ast-header-account-wrap .menu-item .menu-link {';
			dynamicStyle += 'padding-left: ' + padding['mobile']['left'] + padding['mobile-unit'] + ';';
			dynamicStyle += 'padding-right: ' + padding['mobile']['right'] + padding['mobile-unit'] + ';';
			dynamicStyle += 'padding-top: ' + padding['mobile']['top'] + padding['mobile-unit'] + ';';
			dynamicStyle += 'padding-bottom: ' + padding['mobile']['bottom'] + padding['mobile-unit'] + ';';
			dynamicStyle += '} ';
			dynamicStyle += '} ';

			astra_add_dynamic_css( 'header-account-menu-spacing', dynamicStyle );
		} );
    } );

	/**
	 * Primary Menu Spacing
	 */
	astra_responsive_spacing( 'astra-settings[primary-menu-spacing]', '.main-navigation ul li a, .ast-header-break-point .main-navigation ul li a, .ast-header-break-point li.ast-masthead-custom-menu-items, li.ast-masthead-custom-menu-items', 'padding', ['top', 'right', 'bottom', 'left' ] );

	wp.customize( 'astra-settings[primary-menu-spacing]', function( value ) {
		value.bind( function( padding ) {
			var dynamicStyle = '';

			// Default Primary Menu Dropdown style.
			dynamicStyle += ' .ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle{ top:' + padding['desktop']['top'] + padding['desktop-unit'] + '; right:calc( ' + padding['desktop']['right'] + padding['desktop-unit'] + ' - 0.907em );} ';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle{ top:' + padding['tablet']['top'] + padding['tablet-unit'] + '; right:calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle{ top:' + padding['mobile']['top'] + padding['mobile-unit'] + '; right:calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );} }';


			// Default Primary Menu Flyout style.
			dynamicStyle += ' .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu > .menu-item-has-children > .ast-menu-toggle{ right:calc( ' + padding['desktop']['right'] + padding['desktop-unit'] + ' - 0.907em );} ';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu > .menu-item-has-children > .ast-menu-toggle{ right:calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .main-header-menu > .menu-item-has-children > .ast-menu-toggle{ right:calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );} }';

			dynamicStyle += ' .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle{ top:' + padding['desktop']['top'] + padding['desktop-unit'] + ';}';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle{ top:' + padding['tablet']['top'] + padding['tablet-unit'] + ';} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle{ top:' + padding['mobile']['top'] + padding['mobile-unit'] + ';} }';

			astra_add_dynamic_css( 'add-mobile-header-layout-menu-spacing', dynamicStyle );

		} );
	} );

	/**
	 * Primary Submenu Spacing
	 */
	astra_responsive_spacing( 'astra-settings[primary-submenu-spacing]', '.ast-desktop .main-navigation .ast-mm-template-content, .ast-desktop .main-navigation .ast-mm-custom-text-content, .main-navigation .sub-menu .menu-item .menu-link, .ast-header-break-point .main-navigation .sub-menu .menu-item .menu-link, .ast-default-menu-enable.ast-header-break-point .main-navigation .sub-menu .menu-item.menu-item-has-children > .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );

	wp.customize( 'astra-settings[primary-submenu-spacing]', function( value ) {
		value.bind( function( padding ) {
			var dynamicStyle = '';

			// Default Primary Menu Dropdown style.
			dynamicStyle += ' .ast-header-break-point .main-header-bar .main-header-bar-navigation .sub-menu .menu-item-has-children > .ast-menu-toggle{ top:' + padding['desktop']['top'] + padding['desktop-unit'] + '; right:calc( ' + padding['desktop']['right'] + padding['desktop-unit'] + ' - 0.907em );} ';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .main-header-bar .main-header-bar-navigation .sub-menu .menu-item-has-children > .ast-menu-toggle{ top:' + padding['tablet']['top'] + padding['tablet-unit'] + '; right:calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .main-header-bar .main-header-bar-navigation .sub-menu .menu-item-has-children > .ast-menu-toggle{ top:' + padding['mobile']['top'] + padding['mobile-unit'] + '; right:calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );} }';

			// Submenu level 2 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .main-navigation .sub-menu .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 10px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .main-navigation .sub-menu .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 10px );} }';

			// Submenu level 3 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .main-navigation .sub-menu .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 20px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .main-navigation .sub-menu .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 20px );} }';

			// Submenu level 4 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .main-navigation .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 30px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .main-navigation .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 30px );} }';

			// Submenu level 5 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .main-navigation .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 40px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .main-navigation .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 40px );} }';


			// Default Primary Menu Flyout style.
			dynamicStyle += ' .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .sub-menu .menu-item-has-children > .ast-menu-toggle{ right:calc( ' + padding['desktop']['right'] + padding['desktop-unit'] + ' - 0.907em );} ';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .sub-menu .menu-item-has-children > .ast-menu-toggle{ right:calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .sub-menu .menu-item-has-children > .ast-menu-toggle{ right:calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );} }';

			dynamicStyle += ' .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children .sub-menu .ast-menu-toggle{ top:' + padding['desktop']['top'] + padding['desktop-unit'] + ';}';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children .sub-menu .ast-menu-toggle{ top:' + padding['tablet']['top'] + padding['tablet-unit'] + ';} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-flyout-menu-enable.ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children .sub-menu .ast-menu-toggle{ top:' + padding['mobile']['top'] + padding['mobile-unit'] + ';} }';

			astra_add_dynamic_css( 'add-mobile-header-layout-submenu-spacing', dynamicStyle );

		} );
	} );

	/**
	 * Below Header Spacing
	 */
	astra_responsive_spacing( 'astra-settings[below-header-spacing]','.ast-below-header, .ast-header-break-point .ast-below-header', 'padding', ['top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[below-header-spacing]','.ast-below-header .ast-container, #masthead .ast-below-header .ast-container', 'padding', ['right', 'left' ] );
	/**
	 * Below Header Menu Spacing
	 */
	astra_responsive_spacing( 'astra-settings[below-header-menu-spacing]', '.ast-below-header-menu .menu-link, .below-header-nav-padding-support .below-header-section-1 .below-header-menu > .menu-item > .menu-link, .below-header-nav-padding-support .below-header-section-2 .below-header-menu > .menu-item > .menu-link, .ast-header-break-point .ast-below-header-actual-nav > .ast-below-header-menu > .menu-item > .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );

	wp.customize( 'astra-settings[below-header-menu-spacing]', function( value ) {
		value.bind( function( padding ) {
			var dynamicStyle = '';

			// Default Primary Menu Dropdown / Fluout style.
			dynamicStyle += ' .ast-default-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-default-below-menu-enable.ast-header-break-point .ast-below-header-menu-items .menu-item-has-children > .ast-menu-toggle, .ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-menu-items .menu-item-has-children > .ast-menu-toggle{ top:' + padding['desktop']['top'] + padding['desktop-unit'] + '; right:calc( ' + padding['desktop']['right'] + padding['desktop-unit'] + ' - 0.907em );} ';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-default-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-default-below-menu-enable.ast-header-break-point .ast-below-header-menu-items .menu-item-has-children > .ast-menu-toggle, .ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-menu-items .menu-item-has-children > .ast-menu-toggle{ top:' + padding['tablet']['top'] + padding['tablet-unit'] + '; right:calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-default-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-default-below-menu-enable.ast-header-break-point .ast-below-header-menu-items .menu-item-has-children > .ast-menu-toggle, .ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-flyout-below-menu-enable.ast-header-break-point .ast-below-header-menu-items .menu-item-has-children > .ast-menu-toggle{ top:' + padding['mobile']['top'] + padding['mobile-unit'] + '; right:calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );} }';

			astra_add_dynamic_css( 'add-below-mobile-header-layout-menu-spacing', dynamicStyle );

		} );
	} );

	/**
	 * Below Header Submenu Spacing
	 */
	astra_responsive_spacing( 'astra-settings[below-header-submenu-spacing]', '.ast-desktop .ast-below-header-menu .ast-mm-template-content, .ast-desktop .ast-below-header-menu .ast-mm-custom-text-content,.ast-below-header-menu .sub-menu .menu-link, .ast-header-break-point .ast-below-header-actual-nav .sub-menu .menu-item .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );

	wp.customize( 'astra-settings[below-header-submenu-spacing]', function( value ) {
		value.bind( function( padding ) {
			var dynamicStyle = '';

			// Default Primary Menu Dropdown / Fluout style.
			dynamicStyle += ' .ast-default-below-menu-enable .ast-below-header-enabled .ast-below-header-navigation .ast-below-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle, .ast-flyout-below-menu-enable .ast-below-header-enabled .ast-below-header-navigation .ast-below-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle{ top:' + padding['desktop']['top'] + padding['desktop-unit'] + '; right:calc( ' + padding['desktop']['right'] + padding['desktop-unit'] + ' - 0.907em );} ';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-default-below-menu-enable .ast-below-header-enabled .ast-below-header-navigation .ast-below-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle, .ast-flyout-below-menu-enable .ast-below-header-enabled .ast-below-header-navigation .ast-below-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle{ top:' + padding['tablet']['top'] + padding['tablet-unit'] + '; right:calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-default-below-menu-enable .ast-below-header-enabled .ast-below-header-navigation .ast-below-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle, .ast-flyout-below-menu-enable .ast-below-header-enabled .ast-below-header-navigation .ast-below-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle{ top:' + padding['mobile']['top'] + padding['mobile-unit'] + '; right:calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );} }';

			// Submenu level 2 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .ast-below-header-actual-nav .sub-menu .menu-item .menu-item .menu-item, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-item .menu-item{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 10px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .ast-below-header-actual-nav .sub-menu .menu-item .menu-item .menu-item, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-item .menu-item{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 10px );} }';

			// Submenu level 3 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .ast-below-header-actual-nav .sub-menu .menu-item .menu-item .menu-item .menu-item, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-item .menu-item .menu-item{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 20px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .ast-below-header-actual-nav .sub-menu .menu-item .menu-item .menu-item .menu-item, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-item .menu-item .menu-item{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 20px );} }';

			// Submenu level 4 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .ast-below-header-actual-nav .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 30px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .ast-below-header-actual-nav .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 30px );} }';

			// Submenu level 5 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .ast-below-header-actual-nav .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item .menu-item, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item .menu-item{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 40px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .ast-below-header-actual-nav .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item .menu-item, .ast-header-break-point .ast-below-header-menu-items .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-item .menu-item{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 40px );} }';

			astra_add_dynamic_css( 'add-below-mobile-header-layout-submenu-spacing', dynamicStyle );

		} );
	} );

	/**
	 * Above Header Spacing
	 */
	astra_responsive_spacing( 'astra-settings[above-header-spacing]','.ast-above-header', 'padding', ['top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[above-header-spacing]','.ast-above-header-wrap .ast-above-header .ast-container, #masthead .ast-above-header-wrap .ast-above-header .ast-container', 'padding', ['right', 'left' ] );

	/**
	 * Above Header Menu Spacing
	 */
	astra_responsive_spacing( 'astra-settings[above-header-menu-spacing]', '.ast-above-header-enabled .ast-above-header-navigation .ast-above-header-menu > .menu-item > .menu-link, .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu > .menu-item:first-child > .menu-link, .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu > .menu-item:last-child > .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );

	wp.customize( 'astra-settings[above-header-menu-spacing]', function( value ) {
		value.bind( function( padding ) {
			var dynamicStyle = '';
			// Default Primary Menu Dropdown / Fluout style.
			dynamicStyle += ' .ast-default-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-default-above-menu-enable.ast-header-break-point .ast-above-header-menu-items .menu-item-has-children > .ast-menu-toggle, .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-menu-items .menu-item-has-children > .ast-menu-toggle{ top:' + padding['desktop']['top'] + padding['desktop-unit'] + '; right:calc( ' + padding['desktop']['right'] + padding['desktop-unit'] + ' - 0.907em );} ';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-default-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-default-above-menu-enable.ast-header-break-point .ast-above-header-menu-items .menu-item-has-children > .ast-menu-toggle, .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-menu-items .menu-item-has-children > .ast-menu-toggle{ top:' + padding['tablet']['top'] + padding['tablet-unit'] + '; right:calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-default-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-default-above-menu-enable.ast-header-break-point .ast-above-header-menu-items .menu-item-has-children > .ast-menu-toggle, .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-navigation .menu-item-has-children > .ast-menu-toggle,  .ast-flyout-above-menu-enable.ast-header-break-point .ast-above-header-menu-items .menu-item-has-children > .ast-menu-toggle{ top:' + padding['mobile']['top'] + padding['mobile-unit'] + '; right:calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );} }';

			astra_add_dynamic_css( 'add-above-mobile-header-layout-menu-spacing', dynamicStyle );

		} );
	} );
	/**
	 * Above Header Subenu Spacing
	 */
	astra_responsive_spacing( 'astra-settings[above-header-submenu-spacing]', '.ast-desktop .ast-above-header-navigation .ast-mm-custom-text-content, .ast-desktop .ast-above-header-navigation .ast-mm-template-content, .ast-above-header-enabled .ast-above-header-navigation .ast-above-header-menu .menu-item .sub-menu .menu-link, .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu .menu-item .sub-menu .menu-link, .ast-above-header-enabled .ast-above-header-menu > .menu-item:first-child .sub-menu .menu-item .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );

	wp.customize( 'astra-settings[above-header-submenu-spacing]', function( value ) {
		value.bind( function( padding ) {
			var dynamicStyle = '';
			// Default Primary Menu Dropdown / Fluout style.
			dynamicStyle += ' .ast-default-above-menu-enable .ast-above-header-enabled .ast-above-header-navigation .ast-above-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle, .ast-flyout-above-menu-enable .ast-above-header-enabled .ast-above-header-navigation .ast-above-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle{ top:' + padding['desktop']['top'] + padding['desktop-unit'] + '; right:calc( ' + padding['desktop']['right'] + padding['desktop-unit'] + ' - 0.907em );} ';
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-default-above-menu-enable .ast-above-header-enabled .ast-above-header-navigation .ast-above-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle, .ast-flyout-above-menu-enable .ast-above-header-enabled .ast-above-header-navigation .ast-above-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle{ top:' + padding['tablet']['top'] + padding['tablet-unit'] + '; right:calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-default-above-menu-enable .ast-above-header-enabled .ast-above-header-navigation .ast-above-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle, .ast-flyout-above-menu-enable .ast-above-header-enabled .ast-above-header-navigation .ast-above-header-menu .menu-item.menu-item-has-children .sub-menu .ast-menu-toggle{ top:' + padding['mobile']['top'] + padding['mobile-unit'] + '; right:calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );} }';

			// Submenu level 2 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu .menu-item .sub-menu .menu-item .menu-link{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 10px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu .menu-item .sub-menu .menu-item .menu-link{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 10px );} }';

			// Submenu level 3 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu .menu-item .sub-menu .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 20px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu .menu-item .sub-menu .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 20px );} }';

			// Submenu level 4 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu .menu-item .sub-menu .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 30px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu .menu-item .sub-menu .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 30px );} }';

			// Submenu level 5 support.
			dynamicStyle +=  '@media (max-width: 768px) {  .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu .menu-item .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['tablet']['left'] + padding['tablet-unit'] + ' + 40px );} }';
			dynamicStyle +=  '@media (max-width: 544px) {  .ast-header-break-point .ast-above-header-enabled .ast-above-header-menu .menu-item .sub-menu .menu-item .menu-item .menu-item .menu-item .menu-link{padding-left:calc( ' + padding['mobile']['left'] + padding['mobile-unit'] + ' + 40px );} }';

		} );
	} );

	/**
	 * Container Outside Spacing
	 */
	astra_responsive_spacing( 'astra-settings[container-outside-spacing]','.ast-separate-container.ast-right-sidebar #primary, .ast-separate-container.ast-left-sidebar #primary, .ast-separate-container #primary, .ast-plain-container #primary, .ast-narrow-container #primary', 'margin',  ['top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[container-outside-spacing]','.ast-left-sidebar #primary, .ast-right-sidebar #primary, .ast-separate-container.ast-right-sidebar #primary, .ast-separate-container.ast-left-sidebar #primary, .ast-separate-container #primary, .ast-narrow-container #primary', 'padding',  ['left', 'right' ] );
	// Remove padding top to container if padding top is given to Container Outer Spacing.
	wp.customize( 'astra-settings[container-outside-spacing]', function( value ) {
		value.bind( function( padding ) {

			var dynamicStyle = '';
			if( padding.desktop.top != '' || padding.tablet.top != '' || padding.mobile.top != '' ) {
				dynamicStyle += '.ast-separate-container #primary, .ast-narrow-container #primary { padding-top: 0px;} ';
			}
			if( padding.desktop.bottom != '' || padding.tablet.bottom != '' || padding.mobile.bottom != '' ) {
				dynamicStyle += '.ast-separate-container #primary, .ast-narrow-container #primary { padding-bottom: 0px;} ';
			}
			astra_add_dynamic_css( 'remove-header-spacing', dynamicStyle );

		} );
	} );

	/**
	 * Boxed Content Spacing
	 */
	const narrow_inside_spacing_selectors = [
		'.ast-narrow-container .ast-article-post, .ast-narrow-container .ast-article-single, .ast-narrow-container .ast-comment-list li.depth-1, .ast-narrow-container .comment-respond, .single.ast-narrow-container .ast-author-details, .ast-narrow-container .ast-related-posts-wrap, .ast-narrow-container .ast-woocommerce-container, .ast-narrow-container .ast-single-related-posts-container',
		'.ast-narrow-container .ast-article-post, .ast-narrow-container .ast-article-single, .ast-narrow-container .comments-count-wrapper, .ast-narrow-container .ast-comment-list li.depth-1, .ast-narrow-container .comment-respond, .ast-narrow-container .related-posts-title-wrapper, .ast-narrow-container .related-posts-title-wrapper, .single.ast-narrow-container .ast-author-details, .single.ast-narrow-container .about-author-title-wrapper, .ast-narrow-container .ast-related-posts-wrap, .ast-narrow-container .ast-woocommerce-container, .ast-narrow-container .ast-single-related-posts-container'
	];
	astra_responsive_spacing( 'astra-settings[container-inside-spacing]','.ast-separate-container .ast-article-post, .ast-separate-container .ast-article-single, .ast-separate-container .ast-comment-list li.depth-1, .ast-separate-container .comment-respond, .single.ast-separate-container .ast-author-details, .ast-separate-container .ast-related-posts-wrap, .ast-separate-container .ast-woocommerce-container' + ',' + narrow_inside_spacing_selectors[0], 'padding', [ 'top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[container-inside-spacing]','.ast-separate-container .ast-article-post, .ast-separate-container .ast-article-single,.ast-separate-container .comments-count-wrapper, .ast-separate-container .ast-comment-list li.depth-1, .ast-separate-container .comment-respond,.ast-separate-container .related-posts-title-wrapper,.ast-separate-container .related-posts-title-wrapper, .single.ast-separate-container .ast-author-details, .single.ast-separate-container .about-author-title-wrapper, .ast-separate-container .ast-related-posts-wrap, .ast-separate-container .ast-woocommerce-container' + ',' + narrow_inside_spacing_selectors[1], 'padding', [ 'left', 'right' ] );

	// Remove Featured Image Padding for single posty
	wp.customize( 'astra-settings[container-inside-spacing]', function( setting ) {
		setting.bind( function( padding ) {

			if ( padding.desktop.top  || padding.desktop.left || padding.desktop.right || padding.tablet.top || padding.tablet.left || padding.tablet.right || padding.mobile.top || padding.mobile.left || padding.mobile.right ) {
				var dynamicStyle =  '.ast-separate-container .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child { margin-top: -' + padding['desktop']['top'] + padding['desktop-unit'] + ';} .ast-separate-container .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child, .ast-separate-container .ast-article-single.remove-featured-img-padding .single-layout-1 .post-thumb-img-content{ margin-left: -' + padding['desktop']['left'] + padding['desktop-unit'] + '; margin-right: -' + padding['desktop']['right'] + padding['desktop-unit'] + ';}';
				dynamicStyle +=  '@media (max-width: 768px) { .ast-separate-container .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child { margin-top: -' + padding['tablet']['top'] + padding['tablet-unit'] + ';} .ast-separate-container .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child, .ast-separate-container .ast-article-single.remove-featured-img-padding .single-layout-1 .post-thumb-img-content{ margin-left: -' + padding['tablet']['left'] + padding['tablet-unit'] + '; margin-right: -' + padding['tablet']['right'] + padding['tablet-unit'] + ';} }';
				dynamicStyle +=  '@media (max-width: 544px) { .ast-separate-container .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child { margin-top: -' + padding['mobile']['top'] + padding['mobile-unit'] + ';} .ast-separate-container .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child, .ast-separate-container .ast-article-single.remove-featured-img-padding .single-layout-1 .post-thumb-img-content{ margin-left: -' + padding['mobile']['left'] + padding['mobile-unit'] + '; margin-right: -' + padding['mobile']['right'] + padding['mobile-unit'] + ';} }';
				astra_add_dynamic_css( 'single-post-featured-image-spacing', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Boxed Content Spacing
	 */
	 const narrow_single_inside_spacing_selectors = [
		'.ast-narrow-container.ast-single-post .ast-article-post, .ast-narrow-container.ast-single-post .ast-article-single, .ast-narrow-container.ast-single-post .ast-comment-list li.depth-1, .ast-narrow-container.ast-single-post .comment-respond, .single.ast-narrow-container.ast-single-post .ast-author-details, .ast-narrow-container.ast-single-post .ast-related-posts-wrap, .ast-narrow-container.ast-single-post .ast-woocommerce-container, .ast-narrow-container .ast-single-related-posts-container',
		'.ast-narrow-container.ast-single-post .ast-article-post, .ast-narrow-container.ast-single-post .ast-article-single, .ast-narrow-container.ast-single-post .comments-count-wrapper, .ast-narrow-container.ast-single-post .ast-comment-list li.depth-1, .ast-narrow-container.ast-single-post .comment-respond,.ast-narrow-container.ast-single-post .related-posts-title-wrapper,.ast-narrow-container.ast-single-post .related-posts-title-wrapper, .single.ast-narrow-container.ast-single-post .ast-author-details, .single.ast-narrow-container.ast-single-post .about-author-title-wrapper, .ast-narrow-container.ast-single-post .ast-related-posts-wrap, .ast-narrow-container.ast-single-post .ast-woocommerce-container'
	];
	astra_responsive_spacing( 'astra-settings[single-post-inside-spacing]','.ast-separate-container.ast-single-post .ast-article-post, .ast-separate-container.ast-single-post .ast-article-single, .ast-separate-container.ast-single-post .ast-comment-list li.depth-1, .ast-separate-container.ast-single-post .comment-respond, .single.ast-separate-container.ast-single-post .ast-author-details, .ast-separate-container.ast-single-post .ast-related-posts-wrap, .ast-separate-container.ast-single-post .ast-woocommerce-container' + ',' + narrow_single_inside_spacing_selectors[0], 'padding', [ 'top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[single-post-inside-spacing]','.ast-separate-container.ast-single-post .ast-article-post, .ast-separate-container.ast-single-post .ast-article-single, .ast-separate-container.ast-single-post .comments-count-wrapper, .ast-separate-container.ast-single-post .ast-comment-list li.depth-1, .ast-separate-container.ast-single-post .comment-respond,.ast-separate-container.ast-single-post .related-posts-title-wrapper,.ast-separate-container.ast-single-post .related-posts-title-wrapper, .single.ast-separate-container.ast-single-post .ast-author-details, .single.ast-separate-container.ast-single-post .about-author-title-wrapper, .ast-separate-container.ast-single-post .ast-related-posts-wrap, .ast-separate-container.ast-single-post .ast-woocommerce-container' + ',' + narrow_single_inside_spacing_selectors[1], 'padding', [ 'left', 'right' ] );

	// Remove Featured Image Padding for single posty
	wp.customize( 'astra-settings[single-post-inside-spacing]', function( setting ) {
		setting.bind( function( padding ) {

			if ( padding.desktop.top  || padding.desktop.left || padding.desktop.right || padding.tablet.top || padding.tablet.left || padding.tablet.right || padding.mobile.top || padding.mobile.left || padding.mobile.right ) {
				var dynamicStyle =  '.ast-separate-container.ast-single-post .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child { margin-top: -' + padding['desktop']['top'] + padding['desktop-unit'] + ';} .ast-separate-container.ast-single-post .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child, .ast-separate-container.ast-single-post .ast-article-single.remove-featured-img-padding .single-layout-1 .post-thumb-img-content{ margin-left: -' + padding['desktop']['left'] + padding['desktop-unit'] + '; margin-right: -' + padding['desktop']['right'] + padding['desktop-unit'] + ';}';
				dynamicStyle +=  '@media (max-width: 768px) { .ast-separate-container.ast-single-post .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child { margin-top: -' + padding['tablet']['top'] + padding['tablet-unit'] + ';} .ast-separate-container.ast-single-post .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child, .ast-separate-container.ast-single-post .ast-article-single.remove-featured-img-padding .single-layout-1 .post-thumb-img-content{ margin-left: -' + padding['tablet']['left'] + padding['tablet-unit'] + '; margin-right: -' + padding['tablet']['right'] + padding['tablet-unit'] + ';} }';
				dynamicStyle +=  '@media (max-width: 544px) { .ast-separate-container.ast-single-post .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child { margin-top: -' + padding['mobile']['top'] + padding['mobile-unit'] + ';} .ast-separate-container.ast-single-post .ast-article-single.remove-featured-img-padding .single-layout-1 .entry-header .post-thumb-img-content:first-child, .ast-separate-container.ast-single-post .ast-article-single.remove-featured-img-padding .single-layout-1 .post-thumb-img-content{ margin-left: -' + padding['mobile']['left'] + padding['mobile-unit'] + '; margin-right: -' + padding['mobile']['right'] + padding['mobile-unit'] + ';} }';
				astra_add_dynamic_css( 'single-post-featured-image-spacing', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Sidebar Spacing Plain/One Boxed Content
	 */
	astra_responsive_spacing( 'astra-settings[sidebar-outside-spacing]','.ast-plain-container #secondary,.ast-separate-container #secondary, .ast-page-builder-template #secondary', 'margin', ['top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[sidebar-outside-spacing]','.ast-right-sidebar #secondary, .ast-left-sidebar #secondary, .ast-separate-container.ast-two-container.ast-left-sidebar #secondary, .ast-separate-container.ast-two-container.ast-right-sidebar #secondary, .ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary', 'padding', ['left', 'right' ] );
	// Container - Boxed layout is selected then remove individual Sidebar widget margin bottom.
	astra_responsive_spacing( 'astra-settings[sidebar-outside-spacing]','.ast-separate-container.ast-two-container #secondary .widget, .ast-separate-container #secondary .widget', 'margin', [ 'bottom' ] );

	/**
	 * Sidebar Spacing Plain/One Boxed Content
	 */
	astra_responsive_spacing( 'astra-settings[sidebar-inside-spacing]','.ast-two-container.ast-right-sidebar #secondary .widget, .ast-separate-container #secondary .widget, .ast-plain-container #secondary .widget', 'padding', ['top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[sidebar-inside-spacing]','.ast-two-container.ast-right-sidebar #secondary .widget, .ast-two-container.ast-left-sidebar #secondary .widget, .ast-separate-container #secondary .widget, .ast-plain-container #secondary .widget', 'padding', ['left', 'right' ] );

	/**
	 * Footer Spacing
	 */
	astra_responsive_spacing( 'astra-settings[footer-sml-spacing]','.ast-footer-overlay', 'padding', ['top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[footer-sml-spacing]','.ast-small-footer .ast-container', 'padding', ['left', 'right' ] );

	/**
	 * Footer Menu Spacing
	 */
	 astra_responsive_spacing( 'astra-settings[footer-menu-spacing]', '.ast-small-footer .nav-menu a, .footer-sml-layout-2 .ast-small-footer-section-1 .menu-item .menu-link, .footer-sml-layout-2 .ast-small-footer-section-2 .menu-item .menu-link', 'padding', ['top', 'right', 'bottom', 'left' ] );

	/**
	 * Blog Grid Spacing
	 */
	 // Apply margin only if grid is selected 1 column or Blog Layout is selected as 2 or 3.
	if ( ! ast_preview.blog_pro_enabled || jQuery( 'body' ).hasClass( 'ast-blog-grid-1' ) || jQuery( 'body' ).hasClass( 'ast-blog-layout-2' ) || jQuery( 'body' ).hasClass( 'ast-blog-layout-3' ) ) {
		astra_responsive_spacing( 'astra-settings[blog-post-outside-spacing]', '.ast-separate-container .ast-article-post, .ast-separate-container .ast-separate-posts.ast-article-post, .ast-narrow-container .ast-article-post, .ast-narrow-container .ast-separate-posts.ast-article-post', 'margin', ['top', 'right', 'bottom', 'left' ] );
		astra_responsive_spacing( 'astra-settings[blog-post-inside-spacing]', '.ast-separate-container .ast-article-post, .ast-separate-container .ast-article-post, .ast-narrow-container .ast-article-post, .ast-narrow-container .ast-article-post', 'padding', ['top', 'right', 'bottom', 'left' ] );
	} else{
		// Blog Grid Outside Spacing.
		const narrow_blog_grid_outside_spacing_selector = '.ast-narrow-container .ast-grid-2 .ast-article-post.ast-separate-posts:nth-child(2n+0), .ast-narrow-container .ast-grid-2 .ast-article-post.ast-separate-posts:nth-child(2n+1), .ast-narrow-container .ast-grid-3 .ast-article-post.ast-separate-posts:nth-child(2n+0), .ast-narrow-container .ast-grid-3 .ast-article-post.ast-separate-posts:nth-child(2n+1), .ast-narrow-container .ast-grid-4 .ast-article-post.ast-separate-posts:nth-child(2n+0), .ast-narrow-container .ast-grid-4 .ast-article-post.ast-separate-posts:nth-child(2n+1)';
		astra_responsive_spacing( 'astra-settings[blog-post-outside-spacing]', '.ast-separate-container .ast-grid-2 .ast-article-post.ast-separate-posts:nth-child(2n+0), .ast-separate-container .ast-grid-2 .ast-article-post.ast-separate-posts:nth-child(2n+1), .ast-separate-container .ast-grid-3 .ast-article-post.ast-separate-posts:nth-child(2n+0), .ast-separate-container .ast-grid-3 .ast-article-post.ast-separate-posts:nth-child(2n+1), .ast-separate-container .ast-grid-4 .ast-article-post.ast-separate-posts:nth-child(2n+0), .ast-separate-container .ast-grid-4 .ast-article-post.ast-separate-posts:nth-child(2n+1)' + ',' + narrow_blog_grid_outside_spacing_selector, 'padding', ['top', 'right', 'bottom', 'left' ] );

		// Reset Masonary.
		wp.customize( 'astra-settings[blog-post-outside-spacing]', function( setting ) {
			setting.bind( function( margin ) {
				var dynamicStyle = '';
				if( margin.desktop.bottom != '' || margin.tablet.bottom != '' || margin.mobile.bottom != '' ) {
					dynamicStyle += '.ast-separate-container .ast-separate-posts.ast-article-post{ margin-bottom: 0px;} ';
					dynamicStyle += '.ast-narrow-container .ast-separate-posts.ast-article-post{ margin-bottom: 0px;} ';
				}
				astra_add_dynamic_css( 'remove-blog-outside-spacing', dynamicStyle );

				var gird_layout     = (typeof ( wp.customize._value['astra-settings[blog-grid]'] ) != 'undefined') ? wp.customize._value['astra-settings[blog-grid]']._value : '';
				if ( 1 != gird_layout ) {
					masonaryLaoyoutReset();
				}
			} );
		} );

		// Blog Grid Inside Spacing.
		const narrow_blog_grid_inside_spacing_selector = '.ast-narrow-container .ast-grid-2 .blog-layout-1, .ast-narrow-container .ast-grid-2 .blog-layout-2, .ast-narrow-container .ast-grid-2 .blog-layout-3, .ast-narrow-container .ast-grid-3 .blog-layout-1, .ast-narrow-container .ast-grid-3 .blog-layout-2, .ast-narrow-container .ast-grid-3 .blog-layout-3, .ast-narrow-container .ast-grid-4 .blog-layout-1, .ast-narrow-container .ast-grid-4 .blog-layout-2, .ast-narrow-container .ast-grid-4 .blog-layout-3';
		astra_responsive_spacing( 'astra-settings[blog-post-inside-spacing]', '.ast-separate-container .ast-grid-2 .blog-layout-1, .ast-separate-container .ast-grid-2 .blog-layout-2, .ast-separate-container .ast-grid-2 .blog-layout-3, .ast-separate-container .ast-grid-3 .blog-layout-1, .ast-separate-container .ast-grid-3 .blog-layout-2, .ast-separate-container .ast-grid-3 .blog-layout-3, .ast-separate-container .ast-grid-4 .blog-layout-1, .ast-separate-container .ast-grid-4 .blog-layout-2, .ast-separate-container .ast-grid-4 .blog-layout-3' + ',' + narrow_blog_grid_inside_spacing_selector, 'padding', ['top', 'right', 'bottom', 'left' ] );

		// Reset Masonary.
		wp.customize( 'astra-settings[blog-post-inside-spacing]', function( setting ) {
			setting.bind( function( padding ) {
				var gird_layout     = (typeof ( wp.customize._value['astra-settings[blog-grid]'] ) != 'undefined') ? wp.customize._value['astra-settings[blog-grid]']._value : '';
				if ( 1 != gird_layout ) {
					masonaryLaoyoutReset();
				}
			} );
		} );
	}

	// Remove Margin / Padding around featured iamge, date box Masonary.
	// Remove Featured Image Padding.
	wp.customize( 'astra-settings[blog-post-inside-spacing]', function( setting ) {
		setting.bind( function( padding ) {

			if ( padding.desktop.top  || padding.desktop.left || padding.desktop.right || padding.tablet.top || padding.tablet.left || padding.tablet.right || padding.mobile.top || padding.mobile.left || padding.mobile.right ) {
				var dynamicStyle =  '.ast-separate-container .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-2 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section:first-child .square .posted-on, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section:first-child .square .posted-on { margin-top: -' + padding['desktop']['top'] + padding['desktop-unit'] + ';} .ast-separate-container .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-2 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-2 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section .square .posted-on, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section .square .posted-on, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section .square .posted-on{ margin-left: -' + padding['desktop']['left'] + padding['desktop-unit'] + '; margin-right: -' + padding['desktop']['right'] + padding['desktop-unit'] + ';}';
				dynamicStyle +=  '@media (max-width: 768px) { .ast-separate-container .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-2 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section:first-child .square .posted-on, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section:first-child .square .posted-on{ margin-top: -' + padding['tablet']['top'] + padding['tablet-unit'] + ';} .ast-separate-container .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-2 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-2 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section .square .posted-on, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section .square .posted-on, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section .square .posted-on{ margin-left: -' + padding['tablet']['left'] + padding['tablet-unit'] + '; margin-right: -' + padding['tablet']['right'] + padding['tablet-unit'] + ';} }';
				dynamicStyle +=  '@media (max-width: 544px) { .ast-separate-container .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-2 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-content .ast-blog-featured-section:first-child .post-thumb-img-content, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section:first-child .square .posted-on, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section:first-child .square .posted-on{ margin-top: -' + padding['mobile']['top'] + padding['mobile-unit'] + ';} .ast-separate-container .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-2 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding .blog-layout-1 .post-thumb-img-content, .ast-separate-container.ast-blog-grid-2 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section .square .posted-on, .ast-separate-container.ast-blog-grid-3 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section .square .posted-on, .ast-separate-container.ast-blog-grid-4 .ast-article-post.remove-featured-img-padding.has-post-thumbnail .blog-layout-1 .post-content .ast-blog-featured-section .square .posted-on{ margin-left: -' + padding['mobile']['left'] + padding['mobile-unit'] + '; margin-right: -' + padding['mobile']['right'] + padding['mobile-unit'] + ';} }';
				astra_add_dynamic_css( 'blog-post-inside-spacing', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Blog Post pagination Spacing
	 */
	 astra_responsive_spacing( 'astra-settings[blog-post-pagination-spacing]', '.ast-pagination', 'padding', [ 'top', 'right', 'bottom', 'left' ] );
	/**
	 * Reset Masonary for custommizer preview scree
	 */
	function masonaryLaoyoutReset(){

		// Internet Explorer 6-11
		isIE = /*@cc_on!@*/false || !!document.documentMode;

		// Edge 20+
		isEdge = !isIE && !!window.StyleMedia;

		var masonryEnabled  = astra.masonryEnabled || false;
		var blogMasonryBreakPoint = astra.blogMasonryBreakPoint;

		var blogMasonryBp = window.getComputedStyle( jQuery('#content')[0], '::before' ).getPropertyValue('content');

		// Edge/Explorer header break point.
		if( isEdge || isIE || blogMasonryBp === 'normal' ) {
			if( window.innerWidth >= blogMasonryBreakPoint ) {
				blogMasonryBp = blogMasonryBreakPoint;
			}
		} else {
			blogMasonryBp = blogMasonryBp.replace( /[^0-9]/g, '' );
			blogMasonryBp = parseInt( blogMasonryBp );
		}

		var container = jQuery( '.search.blog-masonry #main > div, .blog.blog-masonry #main > div, .archive.blog-masonry #main > div' );

		if ( blogMasonryBp == blogMasonryBreakPoint ) {
			if (masonryEnabled) {

				if ( typeof container != 'undefined' &&  container.length > 0 ) {

					var hasMasonry = container.data('masonry') ? true : false

					if ( hasMasonry ) {
						container.masonry('reload');
					}else{
						container.imagesLoaded(container, function () {
							container.masonry({
								itemSelector: '#primary article',
							});
						});
					}
				}
			}
		} else{
			if (  masonryEnabled ) {
				if ( typeof container != 'undefined' &&  container.length > 0 ) {
					container.masonry().masonry( 'destroy' );
				}
			}
		}
	}

	/**
	 * Header - Menu - Spacing.
	 */

	var tablet_break_point    = ast_preview.tablet_break_point || 768,
		mobile_break_point    = ast_preview.mobile_break_point || 544;

	var body_selector = '.ast-hfb-header';

	if ( ast_preview.astra_not_updated ) {

		body_selector = '.astra-hfb-header';
	}

	for ( var index = 1; index <= ast_preview.component_limit; index++ ) {

		(function (index) {

			// Sub Menu Spacing - Menu 1.
			wp.customize( 'astra-settings[header-menu'+ index +'-submenu-spacing]', function( value ) {
				value.bind( function( padding ) {
					if(
						padding.desktop.bottom != '' || padding.desktop.top != '' || padding.desktop.left != '' || padding.desktop.right != '' ||
						padding.tablet.bottom != '' || padding.tablet.top != '' || padding.tablet.left != '' || padding.tablet.right != '' ||
						padding.mobile.bottom != '' || padding.mobile.top != '' || padding.mobile.left != '' || padding.mobile.right != ''
					) {
						var dynamicStyle = '';
						dynamicStyle += '.ast-builder-menu-'+ index +' .main-header-menu.ast-nav-menu .sub-menu .menu-item .menu-link {';
						dynamicStyle += 'padding-left: ' + padding['desktop']['left'] + padding['desktop-unit'] + ';';
						dynamicStyle += 'padding-right: ' + padding['desktop']['right'] + padding['desktop-unit'] + ';';
						dynamicStyle += 'padding-top: ' + padding['desktop']['top'] + padding['desktop-unit'] + ';';
						dynamicStyle += 'padding-bottom: ' + padding['desktop']['bottom'] + padding['desktop-unit'] + ';';
						dynamicStyle += '} ';

						dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
						dynamicStyle += '.ast-builder-menu-'+ index +' .main-header-menu.ast-nav-menu .sub-menu .menu-item .menu-link {';
						dynamicStyle += 'padding-left: ' + padding['tablet']['left'] + padding['tablet-unit'] + ';';
						dynamicStyle += 'padding-right: ' + padding['tablet']['right'] + padding['tablet-unit'] + ';';
						dynamicStyle += 'padding-top: ' + padding['tablet']['top'] + padding['desktop-unit'] + ';';
						dynamicStyle += 'padding-bottom: ' + padding['tablet']['bottom'] + padding['desktop-unit'] + ';';
						dynamicStyle += '} ';
						// Toggle top.
						dynamicStyle += body_selector + ' .ast-builder-menu-'+ index +' .main-navigation ul .sub-menu .menu-item.menu-item-has-children > .ast-menu-toggle {';
						dynamicStyle += 'top: ' + padding['tablet']['top'] + padding['tablet-unit'] + ';';
						dynamicStyle += 'right: calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );'
						dynamicStyle += '} ';

						dynamicStyle += '} ';

						dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
						dynamicStyle += '.ast-builder-menu-'+ index +' .main-header-menu.ast-nav-menu .sub-menu .menu-item .menu-link {';
						dynamicStyle += 'padding-left: ' + padding['mobile']['left'] + padding['mobile-unit'] + ';';
						dynamicStyle += 'padding-right: ' + padding['mobile']['right'] + padding['mobile-unit'] + ';';
						dynamicStyle += 'padding-top: ' + padding['mobile']['top'] + padding['desktop-unit'] + ';';
						dynamicStyle += 'padding-bottom: ' + padding['mobile']['bottom'] + padding['desktop-unit'] + ';';
						dynamicStyle += '} ';
						// Toggle top.
						dynamicStyle += body_selector + ' .ast-builder-menu-'+ index +' .main-navigation ul .sub-menu .menu-item.menu-item-has-children > .ast-menu-toggle {';
						dynamicStyle += 'top: ' + padding['mobile']['top'] + padding['mobile-unit'] + ';';
						dynamicStyle += 'right: calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );'
						dynamicStyle += '} ';
						dynamicStyle += '} ';
						astra_add_dynamic_css( 'header-menu'+ index +'-submenu-spacing-toggle-button', dynamicStyle );
					}
				} );
			} );

			if ( 3 > index ) {

				// Mega Menu Spacing - Menu 1.
				wp.customize( 'astra-settings[header-menu'+ index +'-megamenu-heading-space]', function( value ) {
					value.bind( function( padding ) {
						if(
							padding.desktop.bottom != '' || padding.desktop.top != '' || padding.desktop.left != '' || padding.desktop.right != '' ||
							padding.tablet.bottom != '' || padding.tablet.top != '' || padding.tablet.left != '' || padding.tablet.right != '' ||
							padding.mobile.bottom != '' || padding.mobile.top != '' || padding.mobile.left != '' || padding.mobile.right != ''
						) {
							var dynamicStyle = '';
							dynamicStyle += body_selector + ' .ast-builder-menu-menu'+ index +'.ast-builder-menu .main-header-menu .menu-item.menu-item-heading > .menu-link {';
							dynamicStyle += 'padding-left: ' + padding['desktop']['left'] + padding['desktop-unit'] + ';';
							dynamicStyle += 'padding-right: ' + padding['desktop']['right'] + padding['desktop-unit'] + ';';
							dynamicStyle += 'padding-top: ' + padding['desktop']['top'] + padding['desktop-unit'] + ';';
							dynamicStyle += 'padding-bottom: ' + padding['desktop']['bottom'] + padding['desktop-unit'] + ';';
							dynamicStyle += '} ';

							dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
							dynamicStyle += body_selector + ' .ast-builder-menu-menu'+ index +'.ast-builder-menu .main-header-menu .menu-item.menu-item-heading > .menu-link {';
							dynamicStyle += 'padding-left: ' + padding['tablet']['left'] + padding['tablet-unit'] + ';';
							dynamicStyle += 'padding-right: ' + padding['tablet']['right'] + padding['tablet-unit'] + ';';
							dynamicStyle += 'padding-top: ' + padding['tablet']['top'] + padding['desktop-unit'] + ';';
							dynamicStyle += 'padding-bottom: ' + padding['tablet']['bottom'] + padding['desktop-unit'] + ';';
							dynamicStyle += '} ';
							dynamicStyle += '} ';

							dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
							dynamicStyle += body_selector + ' .ast-builder-menu-menu'+ index +'.ast-builder-menu .main-header-menu .menu-item.menu-item-heading > .menu-link {';
							dynamicStyle += 'padding-left: ' + padding['mobile']['left'] + padding['mobile-unit'] + ';';
							dynamicStyle += 'padding-right: ' + padding['mobile']['right'] + padding['mobile-unit'] + ';';
							dynamicStyle += 'padding-top: ' + padding['mobile']['top'] + padding['desktop-unit'] + ';';
							dynamicStyle += 'padding-bottom: ' + padding['mobile']['bottom'] + padding['desktop-unit'] + ';';
							dynamicStyle += '} ';
							dynamicStyle += '} ';
							astra_add_dynamic_css( 'header-menu'+ index +'-megamenu-heading-space-toggle-button', dynamicStyle );
						}
					} );
				} );

			}
		})(index);

	}

	/**
	 * Mobile menu - Spacing
	 */

	 // Sub Menu Spacing - Menu 1.
	wp.customize( 'astra-settings[header-mobile-menu-submenu-spacing]', function( value ) {
		value.bind( function( padding ) {
			if(
				padding.desktop.bottom != '' || padding.desktop.top != '' || padding.desktop.left != '' || padding.desktop.right != '' ||
				padding.tablet.bottom != '' || padding.tablet.top != '' || padding.tablet.left != '' || padding.tablet.right != '' ||
				padding.mobile.bottom != '' || padding.mobile.top != '' || padding.mobile.left != '' || padding.mobile.right != ''
			) {
				var dynamicStyle = '';

				dynamicStyle += '.ast-hfb-header .ast-builder-menu-mobile .main-header-menu.ast-nav-menu .sub-menu .menu-item .menu-link {';
				dynamicStyle += 'padding-left: ' + padding['desktop']['left'] + padding['desktop-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['desktop']['right'] + padding['desktop-unit'] + ';';
				dynamicStyle += 'padding-top: ' + padding['desktop']['top'] + padding['desktop-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + padding['desktop']['bottom'] + padding['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '.ast-hfb-header .ast-builder-menu-mobile .main-header-menu.ast-nav-menu .sub-menu .menu-item.menu-item-has-children > .ast-menu-toggle { top:' + padding['desktop']['top'] + padding['desktop-unit'] + '; right:calc( ' + padding['desktop']['right'] + padding['desktop-unit'] + ' - 0.907em );} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += '.ast-hfb-header .ast-builder-menu-mobile .main-header-menu.ast-nav-menu .sub-menu .menu-item .menu-link {';
				dynamicStyle += 'padding-left: ' + padding['tablet']['left'] + padding['tablet-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['tablet']['right'] + padding['tablet-unit'] + ';';
				dynamicStyle += 'padding-top: ' + padding['tablet']['top'] + padding['tablet-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + padding['tablet']['bottom'] + padding['tablet-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '.ast-hfb-header .ast-builder-menu-mobile .main-header-menu.ast-nav-menu .sub-menu .menu-item.menu-item-has-children > .ast-menu-toggle { top:' + padding['tablet']['top'] + padding['tablet-unit'] + '; right:calc( ' + padding['tablet']['right'] + padding['tablet-unit'] + ' - 0.907em );} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += '.ast-hfb-header .ast-builder-menu-mobile .main-header-menu.ast-nav-menu .sub-menu .menu-item .menu-link {';
				dynamicStyle += 'padding-left: ' + padding['mobile']['left'] + padding['mobile-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['mobile']['right'] + padding['mobile-unit'] + ';';
				dynamicStyle += 'padding-top: ' + padding['mobile']['top'] + padding['mobile-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + padding['mobile']['bottom'] + padding['mobile-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '.ast-hfb-header .ast-builder-menu-mobile .main-header-menu.ast-nav-menu .sub-menu .menu-item.menu-item-has-children > .ast-menu-toggle { top:' + padding['mobile']['top'] + padding['mobile-unit'] + '; right:calc( ' + padding['mobile']['right'] + padding['mobile-unit'] + ' - 0.907em );} ';
				dynamicStyle += '} ';
				astra_add_dynamic_css( 'header-mobile-menu-submenu-spacing-toggle-button', dynamicStyle );
			}
		} );
	} );


	// Item Spacing.
	wp.customize( 'astra-settings[section-hb-language-switcher-item-spacing]', function( value ) {
		value.bind( function( spacing ) {
			var dynamicStyle = '';
			if(
				spacing.desktop.bottom != '' || spacing.desktop.top != '' || spacing.desktop.left != '' || spacing.desktop.right != '' ||
				spacing.tablet.bottom != '' || spacing.tablet.top != '' || spacing.tablet.left != '' || spacing.tablet.right != '' ||
				spacing.mobile.bottom != '' || spacing.mobile.top != '' || spacing.mobile.left != '' || spacing.mobile.right != ''
			) {
				dynamicStyle += '.ast-builder-language-switcher-menu-item-header {';
				dynamicStyle += 'padding-left: ' + spacing['desktop']['left'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-right: ' + spacing['desktop']['right'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-top: ' + spacing['desktop']['top'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + spacing['desktop']['bottom'] + spacing['desktop-unit'] + ';';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += '.ast-builder-language-switcher-menu-item-header {';
				dynamicStyle += 'padding-left: ' + spacing['tablet']['left'] + spacing['tablet-unit'] + ';';
				dynamicStyle += 'padding-right: ' + spacing['tablet']['right'] + spacing['tablet-unit'] + ';';
				dynamicStyle += 'padding-top: ' + spacing['tablet']['top'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + spacing['tablet']['bottom'] + spacing['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += '.ast-builder-language-switcher-menu-item-header {';
				dynamicStyle += 'padding-left: ' + spacing['mobile']['left'] + spacing['mobile-unit'] + ';';
				dynamicStyle += 'padding-right: ' + spacing['mobile']['right'] + spacing['mobile-unit'] + ';';
				dynamicStyle += 'padding-top: ' + spacing['mobile']['top'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + spacing['mobile']['bottom'] + spacing['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
			}
			astra_add_dynamic_css( 'section-hb-language-switcher-item-spacing', dynamicStyle );
		} );
	} );

	// Margin.
	wp.customize( 'astra-settings[section-hb-language-switcher-margin]', function( value ) {
		value.bind( function( margin ) {
			var dynamicStyle = '';
			if(
				margin.desktop.bottom != '' || margin.desktop.top != '' || margin.desktop.left != '' || margin.desktop.right != '' ||
				margin.tablet.bottom != '' || margin.tablet.top != '' || margin.tablet.left != '' || margin.tablet.right != '' ||
				margin.mobile.bottom != '' || margin.mobile.top != '' || margin.mobile.left != '' || margin.mobile.right != ''
			) {
				dynamicStyle += '.ast-header-language-switcher {';
				dynamicStyle += 'margin-left: ' + margin['desktop']['left'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-right: ' + margin['desktop']['right'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-top: ' + margin['desktop']['top'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-bottom: ' + margin['desktop']['bottom'] + margin['desktop-unit'] + ';';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += '.ast-header-language-switcher {';
				dynamicStyle += 'margin-left: ' + margin['tablet']['left'] + margin['tablet-unit'] + ';';
				dynamicStyle += 'margin-right: ' + margin['tablet']['right'] + margin['tablet-unit'] + ';';
				dynamicStyle += 'margin-top: ' + margin['tablet']['top'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-bottom: ' + margin['tablet']['bottom'] + margin['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += '.ast-header-language-switcher {';
				dynamicStyle += 'margin-left: ' + margin['mobile']['left'] + margin['mobile-unit'] + ';';
				dynamicStyle += 'margin-right: ' + margin['mobile']['right'] + margin['mobile-unit'] + ';';
				dynamicStyle += 'margin-top: ' + margin['mobile']['top'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-bottom: ' + margin['mobile']['bottom'] + margin['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
			}
			astra_add_dynamic_css( 'section-hb-language-switcher-margin', dynamicStyle );
		} );
	} );

	// footer Item Spacing.
	wp.customize( 'astra-settings[section-fb-language-switcher-item-spacing]', function( value ) {
		value.bind( function( spacing ) {
			var dynamicStyle = '';
			if(
				spacing.desktop.bottom != '' || spacing.desktop.top != '' || spacing.desktop.left != '' || spacing.desktop.right != '' ||
				spacing.tablet.bottom != '' || spacing.tablet.top != '' || spacing.tablet.left != '' || spacing.tablet.right != '' ||
				spacing.mobile.bottom != '' || spacing.mobile.top != '' || spacing.mobile.left != '' || spacing.mobile.right != ''
			) {
				dynamicStyle += '.ast-builder-language-switcher-menu-item-footer {';
				dynamicStyle += 'padding-left: ' + spacing['desktop']['left'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-right: ' + spacing['desktop']['right'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-top: ' + spacing['desktop']['top'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + spacing['desktop']['bottom'] + spacing['desktop-unit'] + ';';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += '.ast-builder-language-switcher-menu-item-footer {';
				dynamicStyle += 'padding-left: ' + spacing['tablet']['left'] + spacing['tablet-unit'] + ';';
				dynamicStyle += 'padding-right: ' + spacing['tablet']['right'] + spacing['tablet-unit'] + ';';
				dynamicStyle += 'padding-top: ' + spacing['tablet']['top'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + spacing['tablet']['bottom'] + spacing['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += '.ast-builder-language-switcher-menu-item-footer {';
				dynamicStyle += 'padding-left: ' + spacing['mobile']['left'] + spacing['mobile-unit'] + ';';
				dynamicStyle += 'padding-right: ' + spacing['mobile']['right'] + spacing['mobile-unit'] + ';';
				dynamicStyle += 'padding-top: ' + spacing['mobile']['top'] + spacing['desktop-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + spacing['mobile']['bottom'] + spacing['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
			}
			astra_add_dynamic_css( 'section-fb-language-switcher-item-spacing', dynamicStyle );

		} );
	} );

	// Margin.
	wp.customize( 'astra-settings[section-fb-language-switcher-margin]', function( value ) {
		value.bind( function( margin ) {
			var dynamicStyle = '';
			if(
				margin.desktop.bottom != '' || margin.desktop.top != '' || margin.desktop.left != '' || margin.desktop.right != '' ||
				margin.tablet.bottom != '' || margin.tablet.top != '' || margin.tablet.left != '' || margin.tablet.right != '' ||
				margin.mobile.bottom != '' || margin.mobile.top != '' || margin.mobile.left != '' || margin.mobile.right != ''
			) {
				dynamicStyle += '.ast-footer-language-switcher {';
				dynamicStyle += 'margin-left: ' + margin['desktop']['left'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-right: ' + margin['desktop']['right'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-top: ' + margin['desktop']['top'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-bottom: ' + margin['desktop']['bottom'] + margin['desktop-unit'] + ';';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += '.ast-footer-language-switcher {';
				dynamicStyle += 'margin-left: ' + margin['tablet']['left'] + margin['tablet-unit'] + ';';
				dynamicStyle += 'margin-right: ' + margin['tablet']['right'] + margin['tablet-unit'] + ';';
				dynamicStyle += 'margin-top: ' + margin['tablet']['top'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-bottom: ' + margin['tablet']['bottom'] + margin['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += '.ast-footer-language-switcher {';
				dynamicStyle += 'margin-left: ' + margin['mobile']['left'] + margin['mobile-unit'] + ';';
				dynamicStyle += 'margin-right: ' + margin['mobile']['right'] + margin['mobile-unit'] + ';';
				dynamicStyle += 'margin-top: ' + margin['mobile']['top'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-bottom: ' + margin['mobile']['bottom'] + margin['desktop-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
			}
			astra_add_dynamic_css( 'section-fb-language-switcher-margin', dynamicStyle );
		} );
	} );

} )( jQuery );
