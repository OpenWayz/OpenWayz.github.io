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

    var tablet_break_point    = AstraBuilderDividerData.tablet_break_point || 768,
		mobile_break_point    = AstraBuilderDividerData.mobile_break_point || 544;

	astra_builder_divider_css( 'footer', AstraBuilderDividerData.component_limit );

	for( var index = 1; index <= AstraBuilderDividerData.component_limit ; index++ ) {
		(function( index ) {
            wp.customize( 'astra-settings[footer-divider-'+ index +'-alignment]', function( value ) {
                value.bind( function( alignment ) {
                    var dynamicStyle = '';
                    if( alignment.desktop != '' || alignment.tablet != '' || alignment.mobile != '' ) {
                        
                        dynamicStyle += '.footer-widget-area[data-section="section-fb-divider-'+ index +'"] {';
                        dynamicStyle += 'justify-content: ' + alignment['desktop'] + ';';
                        dynamicStyle += '} ';

                        dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
                        dynamicStyle += '.footer-widget-area[data-section="section-fb-divider-'+ index +'"] {';
                        dynamicStyle += 'justify-content: ' + alignment['tablet'] + ';';
                        dynamicStyle += '} ';
                        dynamicStyle += '} ';

                        dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
                        dynamicStyle += '.footer-widget-area[data-section="section-fb-divider-'+ index +'"] {';
                        dynamicStyle += 'justify-content: ' + alignment['mobile'] + ';';
                        dynamicStyle += '} ';
                        dynamicStyle += '} ';

                    }
                    astra_add_dynamic_css( 'footer-divider-'+ index +'-alignment', dynamicStyle );
                } );
            } );
		})( index );
	}
} )( jQuery );
