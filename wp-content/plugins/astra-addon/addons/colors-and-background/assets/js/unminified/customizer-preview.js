/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * Use function astra_css() to generate dynamic CSS
 *
 * E.g. astra_css( CONTROL, CSS_PROPERTY, SELECTOR, UNIT )
 *
 * @package Astra Addon
 * @since  1.0.0
 */

( function( $ ) {

	/**
	 * Primary Header Responsive Background Image
	 */
	astra_apply_responsive_background_css( 'astra-settings[header-bg-obj-responsive]', '.main-header-bar, .ast-header-break-point .main-header-bar', 'desktop' );

	astra_apply_responsive_background_css( 'astra-settings[header-bg-obj-responsive]', '.main-header-bar, .ast-header-break-point .main-header-bar', 'tablet' );

	astra_apply_responsive_background_css( 'astra-settings[header-bg-obj-responsive]', '.main-header-bar, .ast-header-break-point .main-header-bar', 'mobile' );

	/**
	 * Primary Menu + Custom Menu Items
	 */
	wp.customize( 'astra-settings[primary-menu-color-responsive]', function( value ) {
		value.bind( function( color ) {

			var DeskVal = '',
					TabletFontVal = '',
					MobileVal = '',
					mobile_style = '',
					tablet_style = '';

			if ( '' != color.desktop ) {
				DeskVal = color.desktop;
			}
			if ( '' != color.tablet ) {
				TabletFontVal = color.tablet;
			}
			if ( '' != color.mobile ) {
				MobileVal = color.mobile;
			}

			if( '' != color ) {
				var dynamicStyle = '.main-header-menu, .main-header-menu .menu-link, .ast-masthead-custom-menu-items, .ast-masthead-custom-menu-items a, .ast-header-break-point .ast-header-sections-navigation a, .ast-header-sections-navigation, .ast-header-sections-navigation a{ color: ' + DeskVal + ';}';

				// Sticky Header colors for Custom Menu.
				dynamicStyle   += '#ast-fixed-header .main-header-menu, #ast-fixed-header .main-header-menu > .menu-item > .menu-link, #ast-fixed-header .ast-masthead-custom-menu-items, #ast-fixed-header .ast-masthead-custom-menu-items a, .main-header-bar.ast-sticky-active, .main-header-bar.ast-sticky-active .main-header-menu > .menu-item > .menu-link, .main-header-bar.ast-sticky-active .ast-masthead-custom-menu-items, .main-header-bar.ast-sticky-active .ast-masthead-custom-menu-items a{ color: ' + DeskVal + ';}';


				if( '' != TabletFontVal ) {
					tablet_style  += '@media (max-width: 768px) { .main-header-menu, .main-header-menu .menu-link,.ast-header-break-point .main-header-menu .menu-link,.ast-masthead-custom-menu-items, .ast-masthead-custom-menu-items a, .ast-header-break-point .ast-header-sections-navigation a, .ast-header-sections-navigation, .ast-header-sections-navigation a{ color: ' + TabletFontVal + ';}';
					// Sticky Header colors for Custom Menu.
					tablet_style   += '#ast-fixed-header .main-header-menu, #ast-fixed-header .main-header-menu > .menu-item > .menu-link, #ast-fixed-header .ast-masthead-custom-menu-items, #ast-fixed-header .ast-masthead-custom-menu-items a, .main-header-bar.ast-sticky-active, .main-header-bar.ast-sticky-active .main-header-menu > .menu-item > .menu-link, .main-header-bar.ast-sticky-active .ast-masthead-custom-menu-items, .main-header-bar.ast-sticky-active .ast-masthead-custom-menu-items a{ color: ' + TabletFontVal + ';}';

				}

				if( '' != MobileVal ) {
					mobile_style  += '@media (max-width: 544px ) { .main-header-menu, .main-header-menu .menu-link,.ast-header-break-point .main-header-menu .menu-link,.ast-masthead-custom-menu-items, .ast-masthead-custom-menu-items a, .ast-header-break-point .ast-header-sections-navigation a, .ast-header-sections-navigation, .ast-header-sections-navigation a{ color: ' + MobileVal + ';}';
					// Sticky Header colors for Custom Menu.
					mobile_style   += '#ast-fixed-header .main-header-menu, #ast-fixed-header .main-header-menu > .menu-item > .menu-link, #ast-fixed-header .ast-masthead-custom-menu-items, #ast-fixed-header .ast-masthead-custom-menu-items a, .main-header-bar.ast-sticky-active, .main-header-bar.ast-sticky-active .main-header-menu > .menu-item > .menu-link, .main-header-bar.ast-sticky-active .ast-masthead-custom-menu-items, .main-header-bar.ast-sticky-active .ast-masthead-custom-menu-items a{ color: ' + MobileVal + ';}';

				}

				dynamicStyle += tablet_style + mobile_style;

				astra_add_dynamic_css( 'primary-menu-color-responsive', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-menu-h-color-responsive]', 		'color', 				'.main-header-menu .menu-link:hover, .main-header-menu .menu-item:hover > .menu-link, .main-header-menu .menu-item.focus > .menu-link,  .main-header-menu .menu-item:hover > .ast-menu-toggle, .main-header-menu .menu-item.focus > .ast-menu-toggle, .main-header-menu .ast-masthead-custom-menu-items a:hover, .ast-header-sections-navigation .menu-item.current-menu-item > .menu-link' );

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-menu-h-bg-color-responsive]', 	'background-color', 	'.main-header-menu .menu-link:hover, .main-header-menu .menu-item:hover > .menu-link, .main-header-menu .menu-item.focus > .menu-link, .ast-header-sections-navigation li.hover > a, .ast-header-sections-navigation .menu-item.focus > .menu-link' );

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-menu-a-color-responsive]', 		'color',				'.main-header-menu .current-menu-item > .menu-link, .main-header-menu .current-menu-ancestor > .menu-link,.ast-header-sections-navigation .menu-item.current-menu-item > .menu-link, .ast-above-header-menu-items .menu-item.current-menu-item > .menu-link,.ast-header-sections-navigation .menu-item.current-menu-ancestor > .menu-link, .ast-above-header-menu-items .menu-item.current-menu-ancestor > .menu-link' );

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-menu-a-bg-color-responsive]', 	'background-color', 	'.main-header-menu .current-menu-item > .menu-link, .main-header-menu .current-menu-ancestor > .menu-link,.ast-header-sections-navigation .menu-item.current-menu-item > .menu-link, .ast-above-header-menu-items .menu-item.current-menu-item > .menu-link,.ast-header-sections-navigation .menu-item.current-menu-ancestor > .menu-link, .ast-above-header-menu-items .menu-item.current-menu-ancestor > .menu-link, .ast-fullscreen-menu-overlay .main-header-menu .menu-item.current-menu-item > .menu-link, .ast-fullscreen-menu-overlay .main-header-menu .menu-item.current-menu-ancestor > .menu-link' );

	/**
	 * Primary Submenu
	 */

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-submenu-bg-color-responsive]', 	 'background-color', 	'.main-navigation .sub-menu, .ast-header-break-point .main-header-menu .sub-menu' );

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-submenu-color-responsive]', 	 'color', 				'.main-header-menu .sub-menu, .main-header-menu .sub-menu .menu-link, .ast-header-sections-navigation .sub-menu .menu-link' );

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-submenu-h-color-responsive]', 	 'color', 				'.main-header-menu .sub-menu .menu-link:hover, .main-header-menu .sub-menu .menu-item:hover > .menu-link,.main-header-menu .sub-menu .menu-item.focus > .menu-link, .main-header-menu .sub-menu .menu-item:hover > .ast-menu-toggle, .main-header-menu .sub-menu .menu-item.focus > .ast-menu-toggle, .ast-header-sections-navigation .sub-menu .menu-link:hover, .ast-desktop .main-header-menu .astra-megamenu-li .sub-menu .menu-item .menu-link:hover, .ast-desktop .main-header-menu .astra-megamenu-li .sub-menu .menu-item .menu-link:focus' );

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-submenu-h-bg-color-responsive]', 'background-color', 	'.main-header-menu .sub-menu .menu-link:hover, .main-header-menu .sub-menu .menu-item:hover > .menu-link, .main-header-menu .sub-menu .menu-item.focus > .menu-link, .ast-header-sections-navigation .sub-menu .menu-link:hover, .ast-desktop .ast-mega-menu-enabled.main-header-menu .sub-menu .menu-item .menu-link:hover, .ast-desktop .ast-mega-menu-enabled.main-header-menu .sub-menu .menu-item .menu-link:focus' );

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-submenu-a-color-responsive]', 	 'color', 				'.ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item > .ast-menu-toggle:hover, .ast-header-break-point.ast-no-toggle-menu-enable .main-header-menu .menu-item.current-menu-item > .ast-menu-toggle, .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .main-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, .ast-header-sections-navigation .sub-menu .menu-item.current-menu-item > .menu-link, .ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link' );

	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-submenu-a-bg-color-responsive]', 'background-color', 	'.main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link, .main-header-menu .sub-menu .menu-item.current-menu-ancestor > .menu-link, .ast-header-sections-navigation .sub-menu .menu-item.current-menu-item > .menu-link, .ast-header-break-point .main-header-menu .sub-menu .menu-item.current-menu-item > .menu-link' );

	/**
	 * Content background color
	 */
	wp.customize( 'astra-settings[content-bg-obj]', function( value ) {
		value.bind( function( bg_obj ) {
			if( '' != bg_obj ) {
				var blog_grid = (typeof ( wp.customize._value['astra-settings[blog-grid]'] ) != 'undefined') ? wp.customize._value['astra-settings[blog-grid]']._value : 1;
				var blog_layout = (typeof ( wp.customize._value['astra-settings[blog-layout]'] ) != 'undefined') ? wp.customize._value['astra-settings[blog-layout]']._value : 'blog-layout-1';

				if( 'blog-layout-1' !== blog_layout && 1 == blog_grid ) {
					var dynamicStyle  = '.ast-separate-container .blog-layout-1, .ast-separate-container .blog-layout-2, .ast-separate-container .blog-layout-3 {';
						dynamicStyle += '	background-color: transparent;';
						dynamicStyle += '	background-image: none;';
						dynamicStyle += '}';
					astra_add_dynamic_css( 'content-bg-obj-blog-layouts', dynamicStyle );
				}
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	});

	/**
	 * Content <h1> to <h6> headings
	 */
	astra_css( 'astra-settings[h1-color]', 'color', 'h1, .entry-content h1' );
	astra_css( 'astra-settings[h2-color]', 'color', 'h2, .entry-content h2' );
	astra_css( 'astra-settings[h3-color]', 'color', 'h3, .entry-content h3' );
	astra_css( 'astra-settings[h4-color]', 'color', 'h4, .entry-content h4' );
	astra_css( 'astra-settings[h5-color]', 'color', 'h5, .entry-content h5' );
	astra_css( 'astra-settings[h6-color]', 'color', 'h6, .entry-content h6' );

	/**
	 * Header
	 */
	astra_css( 'astra-settings[header-color-site-title]', 'color', '.site-title *, .site-title a, .site-title a:focus, .site-title a:hover, .site-title a:visited' );
	astra_css( 'astra-settings[header-color-h-site-title]', 'color', '.site-header .site-title a:hover' );
	astra_css( 'astra-settings[header-color-site-tagline]',	'color', '.site-header .site-description' );

	/**
	 * Primary Menu
	 */
	/**
	 * Primary Menu Bg colors & image
	 */

	var headersectionSelector = '';

	var primaryMenuBgStyle = '.main-header-menu, .ast-header-break-point .main-header-menu, .ast-header-break-point .ast-header-custom-item, .ast-header-break-point .ast-header-sections-navigation';

	if ( jQuery('body').hasClass('ast-primary-menu-disabled') ) {
		headersectionSelector = ', .ast-above-header-menu-items, .ast-below-header-menu-items';
		primaryMenuBgStyle += headersectionSelector;
	}

	astra_apply_responsive_background_css( 'astra-settings[primary-menu-bg-obj-responsive]', primaryMenuBgStyle, 'desktop' );
	astra_apply_responsive_background_css( 'astra-settings[primary-menu-bg-obj-responsive]', primaryMenuBgStyle, 'tablet' );
	astra_apply_responsive_background_css( 'astra-settings[primary-menu-bg-obj-responsive]', primaryMenuBgStyle, 'mobile' );
	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-menu-h-bg-color-responsive]', 	'background-color', 	'.main-header-menu .menu-link:hover, .main-header-menu .menu-item:hover > .menu-link, .main-header-menu .menu-item.focus > .menu-link, .ast-header-sections-navigation li.hover > a,.ast-header-sections-navigation .menu-item.focus > .menu-link' );
	astra_color_responsive_css( 'colors-background', 'astra-settings[primary-menu-h-color-responsive]', 		'color', 				'.main-header-menu .menu-link:hover, .main-header-menu .menu-item:hover > .menu-link, .main-header-menu .menu-item.focus > .menu-link,  .main-header-menu .menu-item:hover > .ast-menu-toggle, .main-header-menu .menu-item.focus > .ast-menu-toggle, .main-header-menu .ast-masthead-custom-menu-items a:hover, .ast-header-sections-navigation .menu-item.current-menu-item > .menu-link' );

	/**
	 * Blog / Archive Title
	 */
	astra_css( 'astra-settings[page-title-color]', 'color', '.entry-title a');

	/**
	 * Blog / Archive Meta
	 */
	astra_css( 'astra-settings[post-meta-color]', 'color', '.entry-meta, .entry-meta *');
	astra_css( 'astra-settings[post-meta-link-color]', 'color', '.entry-meta a, .entry-meta a *, .read-more a');
	astra_css( 'astra-settings[post-meta-link-h-color]', 'color', '.read-more a:hover, .entry-meta a:hover, .entry-meta a:hover *');

	/**
	 * Sidebar
	 */
	astra_css( 'astra-settings[sidebar-widget-title-color]', 'color', '.secondary .widget-title, .secondary .widget-title *');
	astra_css( 'astra-settings[sidebar-text-color]', 'color', '.secondary .widget');
	astra_css( 'astra-settings[sidebar-link-color]', 'color', '.secondary a');
	astra_css( 'astra-settings[sidebar-link-h-color]', 'color', '.secondary a:hover');
	wp.customize( 'astra-settings[sidebar-bg-obj]', function( value ) {
		value.bind( function( bg_obj ) {
			astra_background_obj_css( wp.customize, bg_obj, 'sidebar-bg-obj', ' .sidebar-main { {{css}} } ' );
		} );
	} );

	/**
	 * Footer
	 */
	astra_css( 'astra-settings[footer-color]', 'color', '.ast-small-footer' );
	astra_css( 'astra-settings[footer-link-color]', 'color', '.ast-small-footer a' );
	astra_css( 'astra-settings[footer-link-h-color]', 'color', '.ast-small-footer a:hover' );

	/**
	 * Footer - Copyright
	 */

	// Link color.
	 astra_css(
        'astra-settings[footer-copyright-link-color]',
        'color',
        '.ast-footer-copyright a'
	);

	// Link Hover color.
	astra_css(
        'astra-settings[footer-copyright-link-h-color]',
        'color',
        '.ast-footer-copyright a:hover'
	);

	/**
	 * Header - Account - Colors.
	 */

	var account_selector = '.ast-header-account-wrap';
	var adv_account_selector = '.ast-advanced-headers .ast-header-account-wrap';

	// Menu - Normal Color
	astra_css(
		'astra-settings[header-account-menu-color]',
		'color',
		account_selector + ' .ast-account-nav-menu .menu-item > .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item > .menu-link'
	);

	// Menu - Hover Color
	astra_css(
		'astra-settings[header-account-menu-h-color]',
		'color',
		account_selector + ' .ast-account-nav-menu .menu-item:hover > .menu-link, ' + account_selector + ' .ast-account-nav-menu .menu-item > .menu-link:hover, ' + account_selector + ' .ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active:hover > .menu-link, ' + account_selector + ' .ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active > .menu-link:hover, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item:hover > .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item > .menu-link:hover, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active:hover > .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active > .menu-link:hover'
	);

	// Menu - Active Color
	astra_css(
		'astra-settings[header-account-menu-a-color]',
		'color',
		account_selector + ' .ast-account-nav-menu .menu-item.current-menu-item > .menu-link, ' + account_selector + ' .ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active > .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item.current-menu-item > .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active > .menu-link'
	);

	// Menu - Background
	astra_css(
		'astra-settings[header-account-menu-bg-obj]',
		'background',
		account_selector + ' .account-main-navigation ul, ' + account_selector + ' .account-woo-navigation ul,' + account_selector + ' .ast-account-nav-menu .menu-item > .menu-link, ' + account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link .menu-link, ' + adv_account_selector + ' .account-main-navigation ul, ' + adv_account_selector + ' .account-woo-navigation ul,' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item > .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link .menu-link'
	);

	// Menu - Hover Background
	astra_css(
		'astra-settings[header-account-menu-h-bg-color]',
		'background',
		account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item:hover > .menu-link, ' + account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link:hover .menu-link, ' + account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active:hover > .menu-link, ' + account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active > .menu-link:hover, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item:hover > .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link:hover .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active:hover > .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active > .menu-link:hover'
	);

	// Menu - Active Background
	astra_css(
		'astra-settings[header-account-menu-a-bg-color]',
		'background',
		account_selector + ' .ast-account-nav-menu .menu-item.current-menu-item > .menu-link, ' + account_selector + ' .ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active .menu-link, ' + account_selector + ' .ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .menu-item.current-menu-item > .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active .menu-link, ' + adv_account_selector + ' .main-header-menu.ast-account-nav-menu .woocommerce-MyAccount-navigation-link.is-active .menu-link'
	);

	astra_css(
		'astra-settings[header-account-popup-label-color]',
		'color',
		'.ast-header-account-wrap .ast-hb-account-login-form label,.ast-header-account-wrap .ast-hb-account-login-form-footer .ast-header-account-footer-link'
	);

	astra_css(
		'astra-settings[header-account-popup-input-text-color]',
		'color',
		'.ast-header-account-wrap .ast-hb-account-login-form input[type=text], .ast-header-account-wrap .ast-hb-account-login-form input[type=password]'
	);

	astra_css(
		'astra-settings[header-account-popup-input-border-color]',
		'border-color',
		'.ast-header-account-wrap .ast-hb-account-login-form #loginform input[type=text], .ast-header-account-wrap .ast-hb-account-login-form #loginform input[type=password]'
	);

	astra_css(
		'astra-settings[header-account-popup-button-bg-color]',
		'background-color',
		'.ast-header-account-wrap .ast-hb-account-login-form input[type="submit"]'
	);

	astra_css(
		'astra-settings[header-account-popup-button-text-color]',
		'color',
		'.ast-header-account-wrap .ast-hb-account-login-form input[type="submit"]'
	);

	astra_css(
		'astra-settings[header-account-popup-bg-color]',
		'background',
		'.ast-header-account-wrap .ast-hb-account-login'
	);

	/**
	 * Header - Menu - Colors.
	 */

	for ( var index = 1; index <= astColors.component_limit; index++ ) {

		var prefix = 'menu' + index;

		var selector = '.ast-hfb-header .ast-builder-menu-' + index + '.ast-builder-menu .main-header-menu';

		if ( astColors.astra_not_updated ) {

			selector = '.astra-hfb-header .ast-builder-menu-' + index + '.ast-builder-menu .main-header-menu';
		}

		/**
		 * Sub-Menu - Colors
		 */

		// Sub-Menu - Normal Color
		astra_color_responsive_css(
			'astra-builder',
			'astra-settings[header-' + prefix + '-submenu-color-responsive]',
			'color',
			selector + ' .sub-menu .menu-item .menu-link'
		);

		// Sub-Menu - Hover Color
		astra_color_responsive_css(
			'astra-builder',
			'astra-settings[header-' + prefix + '-submenu-h-color-responsive]',
			'color',
			selector + ' .sub-menu .menu-item .menu-link:hover'
		);

		// Sub-Menu - Active Color
		astra_color_responsive_css(
			'astra-builder',
			'astra-settings[header-' + prefix + '-submenu-a-color-responsive]',
			'color',
			selector + ' .sub-menu li.menu-item.current-menu-item > .menu-link'
		);

		// Sub-Menu - Normal Background
		astra_color_responsive_css(
			'astra-builder',
			'astra-settings[header-' + prefix + '-submenu-bg-color-responsive]',
			'background',
			selector + ' .sub-menu'
		);

		// Sub-Menu - Hover Background
		astra_color_responsive_css(
			'astra-builder',
			'astra-settings[header-' + prefix + '-submenu-h-bg-color-responsive]',
			'background',
			selector + ' .sub-menu .menu-item .menu-link:hover'
		);

		// Sub-Menu - Active Background
		astra_color_responsive_css(
			'astra-builder',
			'astra-settings[header-' + prefix + '-submenu-a-bg-color-responsive]',
			'background',
			selector + ' .sub-menu li.menu-item.current-menu-item > .menu-link'
		);

		if ( 3 > index ) {
			/**
			 * Mega Menu - Colors
			 */
			var ast_class = ( astColors.astra_not_updated ) ? '.astra-hfb-header' : '.ast-hfb-header';

			// Mega-Menu - Normal Color
			astra_css(
				'astra-settings[header-' + prefix + '-header-megamenu-heading-color]',
				'color',
				ast_class + '.ast-desktop .ast-builder-menu-' + index + ' .main-header-menu .menu-item.menu-item-heading > .menu-link'
			);

			// Mega-Menu - Hover Color
			astra_css(
				'astra-settings[header-' + prefix + '-header-megamenu-heading-h-color]',
				'color',
				ast_class + '.ast-desktop .ast-builder-menu-' + index + ' .main-header-menu .astra-megamenu-li .menu-item.menu-item-heading > .menu-link:hover, ' + ast_class + '.ast-desktop .ast-builder-menu-' + index + ' .main-header-menu .astra-megamenu-li .menu-item.menu-item-heading:hover > .menu-link'
			);
		}

	}
	/**
	 * Mobile menu CSS
	 */

	var selector = '.ast-hfb-header .ast-builder-menu-mobile .main-header-menu';

	if ( astColors.astra_not_updated ) {

		selector = '.astra-hfb-header .ast-builder-menu-mobile .main-header-menu';
	}
	/**
	 * Sub-Menu - Colors
	 */

	// Sub-Menu - Normal Color
	astra_color_responsive_css(
		'astra-builder',
		'astra-settings[header-mobile-menu-submenu-color-responsive]',
		'color',
		selector + '.ast-nav-menu .sub-menu .menu-item .menu-link, ' + selector + ' .sub-menu .menu-item > .ast-menu-toggle'
	);

	// Sub-Menu - Hover Color
	astra_color_responsive_css(
		'astra-builder',
		'astra-settings[header-mobile-menu-submenu-h-color-responsive]',
		'color',
		selector + '.ast-nav-menu .sub-menu .menu-item .menu-link:hover, ' + selector + ' .sub-menu .menu-item:hover > .ast-menu-toggle'
	);

	// Sub-Menu - Active Color
	astra_color_responsive_css(
		'astra-builder',
		'astra-settings[header-mobile-menu-submenu-a-color-responsive]',
		'color',
		selector + '.ast-nav-menu .sub-menu li.menu-item.current-menu-item > .menu-link, ' + selector + ' .sub-menu .menu-item.current-menu-item > .ast-menu-toggle'
	);

	// Sub-Menu - Normal Background
	astra_color_responsive_css(
		'astra-builder',
		'astra-settings[header-mobile-menu-submenu-bg-color-responsive]',
		'background',
		selector + '.ast-nav-menu .sub-menu .menu-item .menu-link'
	);

	// Sub-Menu - Hover Background
	astra_color_responsive_css(
		'astra-builder',
		'astra-settings[header-mobile-menu-submenu-h-bg-color-responsive]',
		'background',
		selector + '.ast-nav-menu .sub-menu .menu-item .menu-link:hover'
	);

	// Sub-Menu - Active Background
	astra_color_responsive_css(
		'astra-builder',
		'astra-settings[header-mobile-menu-submenu-a-bg-color-responsive]',
		'background',
		selector + '.ast-nav-menu .sub-menu li.menu-item.current-menu-item > .menu-link'
	);

	/**
	 * Search Dynamic CSS
	 */

	var search_selector = '.ast-header-search .ast-search-menu-icon';

	 // Search Box icon hover color.
	 astra_color_responsive_css(
		'astra-builder',
        'astra-settings[header-search-icon-h-color]',
        'color',
        '.ast-header-search .astra-search-icon:hover'
	);

	 // Search Box icon hover color.
	 astra_color_responsive_css(
		'astra-builder',
        'astra-settings[header-search-text-placeholder-color]',
        'color',
        '.ast-header-search .ast-search-menu-icon .search-field, .ast-header-search .ast-search-menu-icon .search-field::placeholder'
	);

	 // Search Box Background color.
	 astra_css(
        'astra-settings[header-search-box-background-color]',
        'background-color',
        '.ast-header-search .ast-search-menu-icon .search-field, .ast-header-search .ast-search-menu-icon .search-form, .ast-header-search .ast-search-menu-icon .search-submit, .ast-header-break-point .ast-header-search .ast-search-menu-icon.slide-search:hover .search-field, .ast-header-break-point .ast-header-search .ast-search-menu-icon.slide-search:hover .search-form, .ast-header-break-point .ast-header-search .ast-search-menu-icon.slide-search:hover .search-submit, .ast-header-break-point .ast-header-search .ast-search-menu-icon.slide-search:focus .search-field, .ast-header-break-point .ast-header-search .ast-search-menu-icon.slide-search:focus .search-form, .ast-header-break-point .ast-header-search .ast-search-menu-icon.slide-search:focus .search-submit'
	);

	 // Search Box Background hover color.
	 astra_css(
        'astra-settings[header-search-box-background-h-color]',
        'background-color',
        '.ast-header-search .ast-search-menu-icon:hover .search-field, .ast-header-search .ast-search-menu-icon:hover .search-form, .ast-header-search .ast-search-menu-icon:hover .search-submit, .ast-header-search .ast-search-menu-icon:focus .search-field, .ast-header-search .ast-search-menu-icon:focus .search-form, .ast-header-search .ast-search-menu-icon:focus .search-submit'
	);

	/**
	 * search height
	 */
	wp.customize( 'astra-settings[header-search-height]', function( setting ) {
		setting.bind( function( height ) {
		if ( height['desktop'] != '' || height['tablet'] != '' || height['mobile'] != '' ) {
				var dynamicStyle = '.ast-header-search .ast-search-menu-icon form.search-form .search-field {';
					dynamicStyle += 'height:'  + height['desktop'] + 'px;';
					dynamicStyle += '} ';
					dynamicStyle += '@media( max-width: 768px ) {';
					dynamicStyle += '.ast-header-search .ast-search-menu-icon form.search-form .search-field {';
					dynamicStyle += 'height:'  + height['tablet'] + 'px;';
					dynamicStyle += '} }';
					dynamicStyle += '@media( max-width: 544px ) {';
					dynamicStyle += '.ast-header-search .ast-search-menu-icon form.search-form .search-field {';
					dynamicStyle += 'height:'  + height['mobile'] + 'px;';
					dynamicStyle += '} }';
				astra_add_dynamic_css( 'astra-settings[header-search-height]', dynamicStyle );
			}
		});
	});

	// Search Box Border Size.
	wp.customize( 'astra-settings[header-search-border-size]', function( setting ) {
		setting.bind( function( border ) {
			var dynamicStyle = '.ast-header-search .ast-search-menu-icon .search-form {';
				dynamicStyle += 'border-top-width:'  + border.top + 'px;';
				dynamicStyle += 'border-right-width:'  + border.right + 'px;';
				dynamicStyle += 'border-left-width:'   + border.left + 'px;';
				dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
				dynamicStyle += '} ';
			astra_add_dynamic_css( 'astra-settings[header-search-border-size]', dynamicStyle );
		} );
	} );

	// Search Box Border Radius.
	astra_css(
		'astra-settings[header-search-border-radius]',
		'border-radius',
		'.ast-header-search .ast-search-menu-icon .search-field, .ast-header-search .ast-search-menu-icon .search-form, .ast-header-search .ast-search-menu-icon .search-submit',
		'px'
	);

	// Search Box Border Color.
	astra_css(
		'astra-settings[header-search-border-color]',
		'border-color',
		'.ast-header-search .ast-search-menu-icon .search-form'
	);

	// Search Box Border Hover Color.
	astra_css(
		'astra-settings[header-search-border-h-color]',
		'border-color',
		'.ast-header-search .ast-search-menu-icon .search-form:hover, .ast-search-icon:hover + .search-form'
	);

	// Seach Full Screen / Header Cover Overlay BG Color.
	astra_css(
		'astra-settings[header-search-overlay-color]',
		'background',
		'.ast-search-box.full-screen, .ast-search-box.header-cover'
	);

	// Seach Full Screen / Header Cover Overlay Text Color.
	wp.customize( 'astra-settings[header-search-overlay-text-color]', function( setting ) {
		setting.bind( function( color ) {

			var dynamicStyle = '.ast-search-box.header-cover #close, .ast-search-box.full-screen #close, .ast-search-box.full-screen .ast-search-wrapper .large-search-text, .ast-search-box.header-cover .search-submit, .ast-search-box.full-screen .search-submit, .ast-search-box.header-cover .search-field, .ast-search-box.full-screen .search-field, .ast-search-box.header-cover .search-field::-webkit-input-placeholder, .ast-search-box.full-screen .search-field::-webkit-input-placeholder {';
				dynamicStyle += 'color:'  + color;
				dynamicStyle += '} ';
				dynamicStyle += '.ast-search-box.full-screen .ast-search-wrapper fieldset {';
				dynamicStyle += 'border-color:'  + color;
				dynamicStyle += '} ';

			astra_add_dynamic_css( 'astra-settings[header-search-overlay-text-color]', dynamicStyle );
		} );
	} );

	/**
	 * Header - language switcher - Colors.
	 */
	var lswitcher_section = 'section-hb-language-switcher';
	wp.customize( 'astra-settings[' + lswitcher_section + '-color]', function( value ) {
		value.bind( function( color ) {

			if( ! color ) {
				color = 'inherit';
			}

			var dynamicStyle =  '.ast-lswitcher-item-header {';
			dynamicStyle += 'color: ' + color + ';';
			dynamicStyle += '} ';
			astra_add_dynamic_css( lswitcher_section + '-color', dynamicStyle );
		} );
	} );

	/**
	 * footer - language switcher - Colors.
	 */
	var lswitcher_fb_section = 'section-fb-language-switcher';
	wp.customize( 'astra-settings[' + lswitcher_fb_section + '-color]', function( value ) {
		value.bind( function( color ) {

			if( ! color ) {
				color = 'inherit';
			}

			var dynamicStyle = '.ast-lswitcher-item-footer {';
			dynamicStyle += 'color: ' + color + ';';
			dynamicStyle += '} ';
			astra_add_dynamic_css( lswitcher_fb_section + '-color', dynamicStyle );
		} );
	} );

} )( jQuery );
