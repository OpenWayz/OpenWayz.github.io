/**
 * Divider Component CSS.
 *
 * @param string builder_type Builder Type.
 * @param string divider_count HTML Count.
 * @since x.x.x
 *
 */
function astra_builder_divider_css( builder_type = 'header', divider_count ) {

	var tablet_break_point    = astraBuilderPreview.tablet_break_point || 768,
        mobile_break_point    = astraBuilderPreview.mobile_break_point || 544;

    for ( var index = 1; index <= divider_count; index++ ) {

		let selector = ( 'header' === builder_type ) ? '.ast-header-divider-' + index : '.ast-builder-grid-row-container-inner .footer-widget-area[data-section="section-fb-divider-' + index + '"]';

		let section = ( 'header' === builder_type ) ? 'section-hb-divider-' + index : 'section-fb-divider-' + index;

		// Advanced Visibility CSS Generation.
		astra_builder_visibility_css( section, selector );

		( function ( index ) {
			astra_css(
				'astra-settings[' + builder_type + '-divider-' + index + '-style]',
				'border-style',
				selector + ' .ast-divider-wrapper'
			);

			wp.customize( 'astra-settings[' + builder_type + '-divider-' + index + '-color]', function( setting ) {
				setting.bind( function( color ) {

					var dynamicStyle = '',
						borderStyle = (typeof ( wp.customize._value['astra-settings[' + builder_type + '-divider-' + index + '-style]'] ) != 'undefined') ? wp.customize._value['astra-settings[' + builder_type + '-divider-' + index + '-style]']._value : '';
					dynamicStyle += selector + ' .ast-divider-wrapper, .ast-mobile-popup-content ' + selector + ' .ast-divider-wrapper {';
					dynamicStyle += 'border-style: ' + borderStyle + ';';
					dynamicStyle += 'border-color: ' + color + ';';
					dynamicStyle += '} ';

					astra_add_dynamic_css( builder_type + '-divider-' + index + '-color', dynamicStyle );
				} );
			} );

			wp.customize( 'astra-settings[' + builder_type + '-divider-' + index + '-layout]', function ( value ) {
				value.bind( function ( newval ) {

					var context = ( 'header' === builder_type ) ? 'hb' : 'fb';
					var side_class = 'ast-' + context + '-divider-layout-' + newval;

					jQuery( '.ast-' + builder_type + '-divider-' + index ).removeClass( 'ast-' + context + '-divider-layout-horizontal' );
					jQuery( '.ast-' + builder_type + '-divider-' + index ).removeClass( 'ast-' + context + '-divider-layout-vertical' );
					jQuery( '.ast-' + builder_type + '-divider-' + index ).addClass( side_class );
				} );
			} );

			// Divider Thickness.
			wp.customize( 'astra-settings[' + builder_type + '-divider-' + index + '-thickness]', function( value ) {
				value.bind( function( size ) {
					if( size.desktop != '' || size.tablet != '' || size.mobile != '' ) {

						let layout = wp.customize( 'astra-settings[' + builder_type + '-divider-' + index + '-layout]' ).get();
						var dynamicStyle = '';
						if ( 'horizontal' === layout ) {
							dynamicStyle += selector + ' .ast-divider-layout-horizontal {';
							dynamicStyle += 'border-top-width: ' + size.desktop + 'px' + ';';
							dynamicStyle += '} ';

							dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';

							dynamicStyle += selector + ' .ast-divider-layout-horizontal {';
							dynamicStyle += 'border-top-width: ' + size.tablet + 'px' + ';';
							dynamicStyle += '} ';

							dynamicStyle += '} ';

							dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';

							dynamicStyle += selector + ' .ast-divider-layout-horizontal {';
							dynamicStyle += 'border-top-width: ' + size.mobile + 'px' + ';';
							dynamicStyle += '} ';

							dynamicStyle += '} ';
						} else {
							dynamicStyle += selector + ' .ast-divider-layout-vertical {';
							dynamicStyle += 'border-right-width: ' + size.desktop + 'px' + ';';
							dynamicStyle += '} ';

							dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';

							dynamicStyle += selector + ' .ast-divider-layout-vertical {';
							dynamicStyle += 'border-right-width: ' + size.tablet + 'px' + ';';
							dynamicStyle += '} ';

							dynamicStyle += '} ';

							dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';

							dynamicStyle += selector + ' .ast-divider-layout-vertical {';
							dynamicStyle += 'border-right-width: ' + size.mobile + 'px' + ';';
							dynamicStyle += '} ';

							dynamicStyle += '} ';
						}

						astra_add_dynamic_css( builder_type + '-divider-' + index + '-thickness', dynamicStyle );
					}
				} );
			} );

			// Divider Size.
			wp.customize( 'astra-settings[' + builder_type + '-divider-' + index + '-size]', function( value ) {
				value.bind( function( size ) {
					if(
						size.desktop != '' || size.tablet != '' || size.mobile != ''
					) {
						var dynamicStyle = '';
						if ( 'footer' === builder_type ) {
							dynamicStyle += selector + '.ast-fb-divider-layout-horizontal .ast-divider-layout-horizontal {';
							dynamicStyle += 'width: ' + size.desktop + '%' + ';';
							dynamicStyle += '} ';
							dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
							dynamicStyle += selector + '.ast-fb-divider-layout-horizontal .ast-divider-layout-horizontal {';
							dynamicStyle += 'width: ' + size.tablet + '%' + ';';
							dynamicStyle += '} ';
							dynamicStyle += '} ';

							dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
							dynamicStyle += selector + '.ast-fb-divider-layout-horizontal .ast-divider-layout-horizontal {';
							dynamicStyle += 'width: ' + size.mobile + '%' + ';';
							dynamicStyle += '} ';
							dynamicStyle += '} ';
						} else {
							dynamicStyle += selector + '.ast-hb-divider-layout-vertical .ast-divider-layout-vertical {';
							dynamicStyle += 'height: ' + size.desktop + '%' + ';';
							dynamicStyle += '} ';

							dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
							dynamicStyle += selector + '.ast-hb-divider-layout-vertical .ast-divider-layout-vertical {';
							dynamicStyle += 'height: ' + size.tablet + '%' + ';';
							dynamicStyle += '} ';
							dynamicStyle += '} ';

							dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
							dynamicStyle += selector + '.ast-hb-divider-layout-vertical .ast-divider-layout-vertical {';
							dynamicStyle += 'height: ' + size.mobile + '%' + ';';
							dynamicStyle += '} ';
							dynamicStyle += '} ';
						}

						astra_add_dynamic_css( builder_type + '-divider-' + index + '-size', dynamicStyle );
					}
				} );
			} );

			// Footer Vertical Divider Size.
			wp.customize( 'astra-settings[footer-vertical-divider-' + index + '-size]', function( value ) {
				value.bind( function( size ) {
					var dynamicStyle = '';
					if(
						size.desktop != '' || size.tablet != '' || size.mobile != ''
					) {
						dynamicStyle += selector + '.ast-fb-divider-layout-vertical .ast-divider-layout-vertical {';
						dynamicStyle += 'height: ' + size.desktop + 'px' + ';';
						dynamicStyle += '} ';

						dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
						dynamicStyle += selector + '.ast-fb-divider-layout-vertical .ast-divider-layout-vertical {';
						dynamicStyle += 'height: ' + size.tablet + 'px' + ';';
						dynamicStyle += '} ';
						dynamicStyle += '} ';

						dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
						dynamicStyle += selector + '.ast-fb-divider-layout-vertical .ast-divider-layout-vertical {';
						dynamicStyle += 'height: ' + size.mobile + 'px' + ';';
						dynamicStyle += '} ';
						dynamicStyle += '} ';
					}
					astra_add_dynamic_css( builder_type + '-vertical-divider-' + index + '-size', dynamicStyle );
				} );
			} );

			// Header Horizontal Divider Size.
			wp.customize( 'astra-settings[header-horizontal-divider-' + index + '-size]', function( value ) {
				value.bind( function( size ) {
					var dynamicStyle = '';
					if(
						size.desktop != '' || size.tablet != '' || size.mobile != ''
					) {
						dynamicStyle += selector + '.ast-hb-divider-layout-horizontal .ast-divider-layout-horizontal {';
						dynamicStyle += 'width: ' + size.desktop + 'px' + ';';
						dynamicStyle += '} ';

						dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
						dynamicStyle += selector + '.ast-hb-divider-layout-horizontal .ast-divider-layout-horizontal {';
						dynamicStyle += 'width: ' + size.tablet + 'px' + ';';
						dynamicStyle += '} ';
						dynamicStyle += '} ';

						dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
						dynamicStyle += selector + '.ast-hb-divider-layout-horizontal .ast-divider-layout-horizontal {';
						dynamicStyle += 'width: ' + size.mobile + 'px' + ';';
						dynamicStyle += '} ';
						dynamicStyle += '} ';
					}
					astra_add_dynamic_css( builder_type + '-horizontal-divider-' + index + '-size', dynamicStyle );
				} );
			} );

			// Margin.
			wp.customize( 'astra-settings[' + section + '-margin]', function( value ) {
				value.bind( function( margin ) {
					if(
						margin.desktop.bottom != '' || margin.desktop.top != '' || margin.desktop.left != '' || margin.desktop.right != '' ||
						margin.tablet.bottom != '' || margin.tablet.top != '' || margin.tablet.left != '' || margin.tablet.right != '' ||
						margin.mobile.bottom != '' || margin.mobile.top != '' || margin.mobile.left != '' || margin.mobile.right != ''
					) {
						var dynamicStyle = '';
						dynamicStyle += selector + ' {';
						dynamicStyle += 'margin-left: ' + margin['desktop']['left'] + margin['desktop-unit'] + ';';
						dynamicStyle += 'margin-right: ' + margin['desktop']['right'] + margin['desktop-unit'] + ';';
						dynamicStyle += 'margin-top: ' + margin['desktop']['top'] + margin['desktop-unit'] + ';';
						dynamicStyle += 'margin-bottom: ' + margin['desktop']['bottom'] + margin['desktop-unit'] + ';';
						dynamicStyle += '} ';

						dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
						dynamicStyle += selector + ' {';
						dynamicStyle += 'margin-left: ' + margin['tablet']['left'] + margin['tablet-unit'] + ';';
						dynamicStyle += 'margin-right: ' + margin['tablet']['right'] + margin['tablet-unit'] + ';';
						dynamicStyle += 'margin-top: ' + margin['tablet']['top'] + margin['desktop-unit'] + ';';
						dynamicStyle += 'margin-bottom: ' + margin['tablet']['bottom'] + margin['desktop-unit'] + ';';
						dynamicStyle += '} ';
						dynamicStyle += '} ';

						dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
						dynamicStyle += selector + ' {';
						dynamicStyle += 'margin-left: ' + margin['mobile']['left'] + margin['mobile-unit'] + ';';
						dynamicStyle += 'margin-right: ' + margin['mobile']['right'] + margin['mobile-unit'] + ';';
						dynamicStyle += 'margin-top: ' + margin['mobile']['top'] + margin['desktop-unit'] + ';';
						dynamicStyle += 'margin-bottom: ' + margin['mobile']['bottom'] + margin['desktop-unit'] + ';';
						dynamicStyle += '} ';
						dynamicStyle += '} ';
						astra_add_dynamic_css(  section + '-margin', dynamicStyle );
					}
				} );
			} );

		})(index);

    }
}

/**
 * Generate spacing preview CSS based on stack-on device option.
 */
 function astra_generate_spacing_preview_social_css( index, builder_type, stack_on, spacing ) {

	let selector = '.ast-' + builder_type + '-social-' + index + '-wrap';

	var tablet_break_point    = astraBuilderPreview.tablet_break_point || 768,
		mobile_break_point    = astraBuilderPreview.mobile_break_point || 544;

	var space = '';
	var dynamicStyle = '';

	if ( 'desktop' === stack_on ) {
		space = spacing.desktop/2;
		dynamicStyle += selector + ' .ast-social-stack-desktop .ast-builder-social-element {';
		dynamicStyle += 'display: flex;';
		dynamicStyle += 'margin-top: ' + space + 'px;';
		dynamicStyle += 'margin-bottom: ' + space + 'px;';
		dynamicStyle += 'margin-left: unset;';
		dynamicStyle += 'margin-right: unset;';
		dynamicStyle += '} ';

		space = spacing.tablet/2;
		dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
		dynamicStyle += selector + ' .ast-social-stack-desktop .ast-builder-social-element {';
		dynamicStyle += 'display: flex;';
		dynamicStyle += 'margin-top: ' + space + 'px;';
		dynamicStyle += 'margin-bottom: ' + space + 'px;';
		dynamicStyle += 'margin-left: unset;';
		dynamicStyle += 'margin-right: unset;';
		dynamicStyle += '} ';
		dynamicStyle += '} ';

		space = spacing.mobile/2;
		dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
		dynamicStyle += selector + ' .ast-social-stack-desktop .ast-builder-social-element {';
		dynamicStyle += 'display: flex;';
		dynamicStyle += 'margin-top: ' + space + 'px;';
		dynamicStyle += 'margin-bottom: ' + space + 'px;';
		dynamicStyle += 'margin-left: unset;';
		dynamicStyle += 'margin-right: unset;';
		dynamicStyle += '} ';
		dynamicStyle += '} ';
	}

	if ( 'tablet' === stack_on ) {
		space = spacing.tablet/2;
		dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
		dynamicStyle += selector + ' .ast-social-stack-tablet .ast-builder-social-element {';
		dynamicStyle += 'display: flex;';
		dynamicStyle += 'margin-top: ' + space + 'px;';
		dynamicStyle += 'margin-bottom: ' + space + 'px;';
		dynamicStyle += 'margin-left: unset;';
		dynamicStyle += 'margin-right: unset;';
		dynamicStyle += '} ';
		dynamicStyle += '} ';

		space = spacing.mobile/2;
		dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
		dynamicStyle += selector + ' .ast-social-stack-tablet .ast-builder-social-element {';
		dynamicStyle += 'display: flex;';
		dynamicStyle += 'margin-top: ' + space + 'px;';
		dynamicStyle += 'margin-bottom: ' + space + 'px;';
		dynamicStyle += 'margin-left: unset;';
		dynamicStyle += 'margin-right: unset;';
		dynamicStyle += '} ';
		dynamicStyle += '} ';
	}

	if ( 'mobile' === stack_on ) {
		space = spacing.mobile/2;
		dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
		dynamicStyle += selector + ' .ast-social-stack-mobile .ast-builder-social-element {';
		dynamicStyle += 'display: flex;';
		dynamicStyle += 'margin-top: ' + space + 'px;';
		dynamicStyle += 'margin-bottom: ' + space + 'px;';
		dynamicStyle += 'margin-left: unset;';
		dynamicStyle += 'margin-right: unset;';
		dynamicStyle += '} ';
		dynamicStyle += '} ';
	}

	astra_add_dynamic_css( builder_type + '-social-icons-' + index + '-icon-space', dynamicStyle );
}

/**
 * Social Component CSS.
 *
 * @param string builder_type Builder Type.
 * @param string social_count HTML Count.
 * @since x.x.x
 */
function astra_builder_addon_social_css( builder_type = 'header', social_count ) {

	for ( var index = 1; index <= social_count; index++ ) {

		( function ( index ) {

			// Margin.
			wp.customize( 'astra-settings[' + builder_type + '-social-' + index + '-stack]', function( value ) {
				value.bind( function( value ) {

					jQuery('.ast-' + builder_type + '-social-' + index + '-wrap .' + builder_type + '-social-inner-wrap').removeClass( 'ast-social-stack-tablet' );
					jQuery('.ast-' + builder_type + '-social-' + index + '-wrap .' + builder_type + '-social-inner-wrap').removeClass( 'ast-social-stack-mobile' );
					jQuery('.ast-' + builder_type + '-social-' + index + '-wrap .' + builder_type + '-social-inner-wrap').removeClass( 'ast-social-stack-desktop' );
					jQuery('.ast-' + builder_type + '-social-' + index + '-wrap .' + builder_type + '-social-inner-wrap').removeClass( 'ast-social-stack-none' );

					jQuery('.ast-' + builder_type + '-social-' + index + '-wrap .' + builder_type + '-social-inner-wrap').addClass( 'ast-social-stack-' + value );

					let spacing = wp.customize( 'astra-settings[' + builder_type + '-social-' + index + '-space]' ).get();
					astra_generate_spacing_preview_social_css( index, builder_type, value, spacing );
				} );
			} );

			// Icon Space.
			wp.customize( 'astra-settings[' + builder_type + '-social-' + index + '-space]', function( value ) {
				value.bind( function( spacing ) {
					let stack_on = wp.customize( 'astra-settings[' + builder_type + '-social-' + index + '-stack]' ).get();
					astra_generate_spacing_preview_social_css( index, builder_type, stack_on, spacing );
				} );
			} );

		})( index );
	}
}

/**
 * language Switcher Component CSS.
 *
 * @param string builder_type Builder Type.
 * @param string lswitcher_count HTML Count.
 * @since x.x.x
 *
 */
function astra_builder_language_switcher_css( builder_type = 'header' ) {

	var tablet_break_point    = astraBuilderPreview.tablet_break_point || 768,
        mobile_break_point    = astraBuilderPreview.mobile_break_point || 544;

	let selector = ( 'header' === builder_type ) ? '.ast-header-language-switcher' : '.ast-footer-language-switcher-element[data-section="section-fb-language-switcher"]';

	let section = ( 'header' === builder_type ) ? 'section-hb-language-switcher' : 'section-fb-language-switcher';

	// Advanced Visibility CSS Generation.
	astra_builder_visibility_css( section, selector );

	// Flag spacing.
	wp.customize( 'astra-settings[' + section + '-flag-spacing]', function( value ) {
		value.bind( function( size ) {
			var dynamicStyle = '';
			if(
				size.desktop != '' || size.desktop != '' || size.desktop != '' || size.desktop != '' ||
				size.tablet != '' || size.tablet != '' || size.tablet != '' || size.tablet != '' ||
				size.mobile != '' || size.mobile != '' || size.mobile != '' || size.mobile != ''
			) {
				dynamicStyle += 'span.ast-lswitcher-item-' + builder_type + ' {';
				dynamicStyle += 'margin-right: ' + size.desktop + 'px' + ';';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';

				dynamicStyle += 'span.ast-lswitcher-item-' + builder_type + ' {';
				dynamicStyle += 'margin-right: ' + size.tablet + 'px' + ';';
				dynamicStyle += '} ';

				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';

				dynamicStyle += 'span.ast-lswitcher-item-' + builder_type + ' {';
				dynamicStyle += 'margin-right: ' + size.mobile + 'px' + ';';
				dynamicStyle += '} ';

				dynamicStyle += '} ';
			}
			astra_add_dynamic_css( section + '-flag-spacing', dynamicStyle );
		} );
	} );

	// Flag Thickness.
	wp.customize( 'astra-settings[' + section + '-flag-size]', function( value ) {
		value.bind( function( size ) {
			var dynamicStyle = '';
			if( size.desktop !== '' || size.tablet !== '' || size.mobile !== '' ) {
				dynamicStyle += '.ast-lswitcher-item-' + builder_type + ' img {';
				dynamicStyle += 'width: ' + size.desktop + 'px' + ';';
				dynamicStyle += '} ';
				dynamicStyle += '.ast-lswitcher-item-' + builder_type + ' svg {';
				dynamicStyle += 'height: ' + size.desktop + 'px' + ';';
				dynamicStyle += 'width: ' + size.desktop + 'px' + ';';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';

				dynamicStyle += '.ast-lswitcher-item-' + builder_type + ' img {';
				dynamicStyle += 'width: ' + size.tablet + 'px' + ';';
				dynamicStyle += '} ';
				dynamicStyle += '.ast-lswitcher-item-' + builder_type + ' svg {';
				dynamicStyle += 'height: ' + size.tablet + 'px' + ';';
				dynamicStyle += 'width: ' + size.tablet + 'px' + ';';
				dynamicStyle += '} ';

				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';

				dynamicStyle += '.ast-lswitcher-item-' + builder_type + ' img {';
				dynamicStyle += 'width: ' + size.mobile + 'px' + ';';
				dynamicStyle += '} ';
				dynamicStyle += '.ast-lswitcher-item-' + builder_type + ' svg {';
				dynamicStyle += 'height: ' + size.mobile + 'px' + ';';
				dynamicStyle += 'width: ' + size.mobile + 'px' + ';';
				dynamicStyle += '} ';

				dynamicStyle += '} ';

			}
			astra_add_dynamic_css( section + '-flag-size', dynamicStyle );
		} );
	} );
}

/**
 * Box Shadow CSS.
 *
 * @param string prefix Controls prefix.
 * @param string selector Builder selector.
 *
 */
function astra_addon_box_shadow_css( prefix, selector ) {

	wp.customize( 'astra-settings[' + prefix + '-box-shadow-control]', function( value ) {
		value.bind( function( shadow ) {
			var dynamicStyle = '';

			if( shadow.x != '' && shadow.y != '' && shadow.blur != '' && shadow.spread != '' ) {
				var position = wp.customize( 'astra-settings[' + prefix + '-box-shadow-position]' ).get();
				var color = wp.customize( 'astra-settings[' + prefix + '-box-shadow-color]' ).get();

				dynamicStyle = astra_addon_get_box_shadow_css( selector, shadow, position, color );
			}
			astra_add_dynamic_css( prefix + '-box-shadow-control', dynamicStyle );

		} );
	} );

	/**
	 * Box Shadow Color.
	 */
	wp.customize( 'astra-settings[' + prefix + '-box-shadow-color]', function( value ) {
		value.bind( function( color ) {
			var dynamicStyle = '';

			if( '' != color ) {
				var shadow = wp.customize( 'astra-settings[' + prefix + '-box-shadow-control]' ).get();
				var position = wp.customize( 'astra-settings[' + prefix + '-box-shadow-position]' ).get();

				dynamicStyle = astra_addon_get_box_shadow_css( selector, shadow, position, color );
			}
			astra_add_dynamic_css( prefix + '-box-shadow-control', dynamicStyle );
		} );
	} );

	/**
	 * Box Shadow Position.
	 */
	wp.customize( 'astra-settings[' + prefix + '-box-shadow-position]', function( value ) {
		value.bind( function( position ) {
			var dynamicStyle = '';

			if( '' != position ) {
				var shadow = wp.customize( 'astra-settings[' + prefix + '-box-shadow-control]' ).get();
				var color = wp.customize( 'astra-settings[' + prefix + '-box-shadow-color]' ).get();

				dynamicStyle = astra_addon_get_box_shadow_css( selector, shadow, position, color );
			}
			astra_add_dynamic_css( prefix + '-box-shadow-control', dynamicStyle );
		} );
	} );
}

/**
 * Button Component CSS.
 *
 * @param string builder_type Builder Type.
 * @param string button_count Button Count.
 *
 */
function astra_addon_button_css( builder_type = 'header', button_count ) {

	for ( var index = 1; index <= button_count; index++ ) {
		(function (index) {
			var selector = '.ast-' + builder_type + '-button-' + index + ' .ast-builder-button-wrap .ast-custom-button';

			// Box Shadow CSS Generation.
			astra_addon_box_shadow_css( builder_type + '-button' + index, selector );
			astra_font_extras_css( builder_type + '-button' + index + '-font-extras', selector );
		})(index);
	}
}

/**
 * Button Component CSS.
 *
 * @param string builder_type Builder Type.
 * @param string button_count Button Count.
 *
 */
function astra_addon_get_box_shadow_css( selector, shadow, position, color ) {

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
