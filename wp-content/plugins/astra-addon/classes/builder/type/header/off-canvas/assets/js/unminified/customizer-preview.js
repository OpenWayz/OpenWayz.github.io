/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra Addon
 * @since x.x.x
 */

( function( $ ) {

    wp.customize( 'astra-settings[off-canvas-width]', function ( value ) {
        value.bind( function ( newval ) {

            var tablet_break_point    = astraBuilderPreview.tablet_break_point || 768,
		        mobile_break_point    = astraBuilderPreview.mobile_break_point || 544,
                dynamicStyle = '';

            if ( '' !== newval.desktop ) {
                dynamicStyle += '.ast-desktop .ast-mobile-popup-drawer.active .ast-mobile-popup-inner {';
                dynamicStyle += 'max-width: ' + newval.desktop + '%;';
                dynamicStyle += '} ';
            }
            if ( '' !== newval.tablet ) {
                dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
                dynamicStyle += '.ast-mobile-popup-drawer.active .ast-mobile-popup-inner {';
                dynamicStyle += 'max-width: ' + newval.tablet + '%;';
                dynamicStyle += '} ';
                dynamicStyle += '} ';
            }
            if ( '' !== newval.mobile ) {
                dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
                dynamicStyle += '.ast-mobile-popup-drawer.active .ast-mobile-popup-inner {';
                dynamicStyle += 'max-width: ' + newval.mobile + '%;';
                dynamicStyle += '} ';
                dynamicStyle += '} ';
            }
            astra_add_dynamic_css( 'off-canvas-width', dynamicStyle );
        } );
    } );
    
} )( jQuery );
