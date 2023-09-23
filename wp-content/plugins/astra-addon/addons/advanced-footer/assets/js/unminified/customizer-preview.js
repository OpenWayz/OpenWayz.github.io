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
	 * Footer Widgets Padding
	 */
	astra_responsive_spacing( 'astra-settings[footer-adv-area-padding]','.footer-adv-overlay', 'padding', ['top', 'bottom' ] );
	astra_responsive_spacing( 'astra-settings[footer-adv-area-padding]','.footer-adv .ast-container', 'padding', ['right', 'left' ] );

	// Footer Widget title typo
	astra_generate_outside_font_family_css( 'astra-settings[footer-adv-wgt-title-font-family]', '.footer-adv .widget-title, .footer-adv .widget-title a.rsswidget, .ast-no-widget-row .widget-title' );

	astra_css( 'astra-settings[footer-adv-wgt-title-font-weight]', 'font-weight', '.footer-adv .widget-title, .footer-adv .widget-title a.rsswidget, .ast-no-widget-row .widget-title' );
	
	astra_css( 'astra-settings[footer-adv-wgt-title-text-transform]', 'text-transform', '.footer-adv .widget-title, .footer-adv .widget-title a.rsswidget, .ast-no-widget-row .widget-title, .footer-adv .ast-no-widget-row .widget-title' );

	astra_responsive_font_size( 'astra-settings[footer-adv-wgt-title-font-size]', '.footer-adv .widget-title, .footer-adv .widget-title a.rsswidget, .ast-no-widget-row .widget-title' );

	astra_css( 'astra-settings[footer-adv-wgt-title-line-height]', 'line-height', '.footer-adv .widget-title, .footer-adv .widget-title a.rsswidget, .ast-no-widget-row .widget-title' );

	// Footer Widget content typo
	astra_generate_outside_font_family_css( 'astra-settings[footer-adv-wgt-content-font-family]', '.footer-adv .widget > *:not(.widget-title)' );

	astra_css( 'astra-settings[footer-adv-wgt-content-font-weight]', 'font-weight', '.footer-adv .widget > *:not(.widget-title)' );
	
	astra_css( 'astra-settings[footer-adv-wgt-content-text-transform]', 'text-transform', '.footer-adv .widget > *:not(.widget-title)' );

	astra_responsive_font_size( 'astra-settings[footer-adv-wgt-content-font-size]', '.footer-adv .widget > *:not(.widget-title)' );

	astra_css( 'astra-settings[footer-adv-wgt-content-line-height]', 'line-height', '.footer-adv .widget > *:not(.widget-title)' );

} )( jQuery );
