/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra Builder
 * @since x.x.x
 */

( function( $ ) {

    var tablet_break_point    = AstraBuilderFooterButtonData.tablet_break_point || 768,
		mobile_break_point    = AstraBuilderFooterButtonData.mobile_break_point || 544;

    astra_builder_language_switcher_css( 'footer' );

    wp.customize( 'astra-settings[footer-language-switcher-alignment]', function( value ) {
        value.bind( function( alignment ) {
            var dynamicStyle = '';
            if( alignment.desktop != '' || alignment.tablet != '' || alignment.mobile != '' ) {
                dynamicStyle += '.ast-footer-language-switcher[data-section="section-fb-language-switcher"], .ast-footer-language-switcher .ast-builder-language-switcher-layout-horizontal .ast-builder-language-switcher-menu {';
                dynamicStyle += 'justify-content: ' + alignment['desktop'] + ';';
                dynamicStyle += '} ';

                dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
                dynamicStyle += '.ast-footer-language-switcher[data-section="section-fb-language-switcher"], .ast-footer-language-switcher .ast-builder-language-switcher-layout-horizontal .ast-builder-language-switcher-menu {';
                dynamicStyle += 'justify-content: ' + alignment['tablet'] + ';';
                dynamicStyle += '} ';
                dynamicStyle += '} ';

                dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
                dynamicStyle += '.ast-footer-language-switcher[data-section="section-fb-language-switcher"], .ast-footer-language-switcher .ast-builder-language-switcher-layout-horizontal .ast-builder-language-switcher-menu {';
                dynamicStyle += 'justify-content: ' + alignment['mobile'] + ';';
                dynamicStyle += '} ';
                dynamicStyle += '} ';

            }
            astra_add_dynamic_css( 'footer-language-switcher-alignment', dynamicStyle );
        } );
    } );

} )( jQuery );
		