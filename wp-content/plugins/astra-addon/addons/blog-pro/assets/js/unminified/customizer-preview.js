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

	const tablet_break_point    = AstraAddon.tablet_break_point || 768;
    const mobile_break_point    = AstraAddon.mobile_break_point || 544;
    const is_site_rtl = AstraAddon.rtl;
	const ltr_left    = is_site_rtl ? 'right' : 'left';
	const ltr_right   = is_site_rtl ? 'left' : 'right';
	const socPosition = AstraAddon.soc_position;
	const is_social_fixed = 'left-content' === socPosition || 'right-content' === socPosition;
	const marginRvsLeft = is_social_fixed ? 'top' : ltr_left;
	const marginRvsRight = is_social_fixed ? 'bottom' : ltr_right;


    // Space Between Posts.
    wp.customize( 'astra-settings[blog-space-bet-posts]', function( value ) {
        value.bind( function( value ) {
            if ( value ) {
                jQuery( '.ast-archive-post' ).addClass('ast-separate-posts');

				var dynamicStyle  = '.ast-separate-container .ast-grid-2 > .site-main > .ast-row, .ast-separate-container .ast-grid-3 > .site-main > .ast-row, .ast-separate-container .ast-grid-4 > .site-main > .ast-row {';
					dynamicStyle += '	margin-left: -1em;';
					dynamicStyle += '	margin-right: -1em;';
					dynamicStyle += '}';
				astra_add_dynamic_css( 'archive-title-spacing-layout', dynamicStyle );

            } else {
                jQuery( '.ast-archive-post' ).removeClass('ast-separate-posts');

				var dynamicStyle  = '.ast-separate-container .ast-grid-2 > .site-main > .ast-row, .ast-separate-container .ast-grid-3 > .site-main > .ast-row, .ast-separate-container .ast-grid-4 > .site-main > .ast-row {';
					dynamicStyle += '	margin-left: 0;';
					dynamicStyle += '	margin-right: 0;';
					dynamicStyle += '}';
				astra_add_dynamic_css( 'archive-title-spacing-layout', dynamicStyle );
            }
        } );
    } );

	
	const context = 'ss'; // Short for social sharing.
	const selector = '.ast-post-social-sharing';

	// Icon Color.
	astra_color_responsive_css(
		context + '-soc-color',
		'astra-settings[single-post-social-sharing-icon-color]',
		'fill',
		selector + ' .ast-social-color-type-custom .ast-social-icon-a svg'
	);

	astra_color_responsive_css(
		context + '-soc-svg-color-h',
		'astra-settings[single-post-social-sharing-icon-h-color]',
		'fill',
		selector + ' .ast-social-color-type-custom .ast-social-icon-a:hover svg'
	);

	// Icon Background Color.
	astra_color_responsive_css(
		context + '-soc-bg-color',
		'astra-settings[single-post-social-sharing-icon-background-color]',
		'background-color',
		selector + ' .ast-social-color-type-custom .ast-social-element'
	);

	astra_color_responsive_css(
		context + '-soc-bg-color-h',
		'astra-settings[single-post-social-sharing-icon-background-h-color]',
		'background-color',
		selector + ' .ast-social-color-type-custom .ast-social-icon-a:hover .ast-social-element'
	);

	// Icon Label Color.
	astra_color_responsive_css(
		context + '-soc-label-color',
		'astra-settings[single-post-social-sharing-icon-label-color]',
		'color',
		selector + ' .ast-social-icon-a span.social-item-label'
	);

	astra_color_responsive_css(
		context + '-soc-label-color-h',
		'astra-settings[single-post-social-sharing-icon-label-h-color]',
		'color',
		selector + ' .ast-social-icon-a:hover span.social-item-label'
	);

	// Heading Color.
	astra_color_responsive_css(
		context + '-soc-heading-color',
		'astra-settings[single-post-social-sharing-heading-color]',
		'color',
		selector + ' .ast-social-sharing-heading'
	);

	astra_color_responsive_css(
		context + '-soc-heading-color-h',
		'astra-settings[single-post-social-sharing-heading-h-color]',
		'color',
		selector + ' .ast-social-sharing-heading:hover'
	);

	astra_color_responsive_css(
		context + '-soc-background-color',
		'astra-settings[single-post-social-sharing-background-color]',
		'background-color',
		selector + ' .ast-social-inner-wrap'
	);

	// Social sharing alignment.
	wp.customize( 'astra-settings[single-post-social-sharing-alignment]', function( value ) {
		value.bind( function( alignment ) {
			const alignment_rtl = alignment === ltr_left ? 'flex-start' : 'flex-end';
			const social_alignment = alignment === 'center' ? 'center' : alignment_rtl
			let dynamicStyle = '';
			dynamicStyle += selector + '{';
			dynamicStyle += 'align-items: ' + social_alignment + ';';
			dynamicStyle += '} ';

			astra_add_dynamic_css( context + '-soc-alignment', dynamicStyle );
		});
	});

	// Icon Size.
	wp.customize( 'astra-settings[single-post-social-sharing-icon-size]', function( value ) {
		value.bind( function( size ) {


			if( size.desktop != '' || size.tablet != '' || size.mobile != '' ) {
				let dynamicStyle = '';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-element svg {';
				dynamicStyle += 'height: ' + size.desktop + 'px;';
				dynamicStyle += 'width: ' + size.desktop + 'px;';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-element svg {';
				dynamicStyle += 'height: ' + size.tablet + 'px;';
				dynamicStyle += 'width: ' + size.tablet + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-element svg {';
				dynamicStyle += 'height: ' + size.mobile + 'px;';
				dynamicStyle += 'width: ' + size.mobile + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				astra_add_dynamic_css( context + '-soc-icon-size', dynamicStyle );
			}
		} );
	} );	

	// Icon Space.
	wp.customize( 'astra-settings[single-post-social-sharing-icon-spacing]', function( value ) {
		value.bind( function( spacing ) {
			let space = '';
			let dynamicStyle = '';
			if ( spacing.desktop != '' ) {
				space = spacing.desktop/2;
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-icon-a {';
				dynamicStyle += 'margin-'+ marginRvsLeft + ': ' + space + 'px;';
				dynamicStyle += 'margin-'+ marginRvsRight + ': ' + space + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-icon-a:first-child {';
				dynamicStyle += 'margin-'+ marginRvsLeft + ': 0;';
				dynamicStyle += '} ';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-icon-a:last-child {';
				dynamicStyle += 'margin-'+ marginRvsRight + ': 0;';
				dynamicStyle += '} ';
			}

			if ( spacing.tablet != '' ) {
				space = spacing.tablet/2;
				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-icon-a {';
				dynamicStyle += 'margin-'+ marginRvsLeft + ': ' + space + 'px;';
				dynamicStyle += 'margin-'+ marginRvsRight + ': ' + space + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-icon-a:first-child {';
				dynamicStyle += 'margin-'+ marginRvsLeft + ': 0;';
				dynamicStyle += '} ';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-icon-a:last-child {';
				dynamicStyle += 'margin-'+ marginRvsRight + ': 0;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
			}

			if ( spacing.mobile != '' ) {
				space = spacing.mobile/2;
				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-icon-a {';
				dynamicStyle += 'margin-'+ marginRvsLeft + ': ' + space + 'px;';
				dynamicStyle += 'margin-'+ marginRvsRight + ': ' + space + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-icon-a:first-child {';
				dynamicStyle += 'margin-'+ marginRvsLeft + ': 0;';
				dynamicStyle += '} ';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-icon-a:last-child {';
				dynamicStyle += 'margin-'+ marginRvsRight + ': 0;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';
			}

			astra_add_dynamic_css( context + '-soc-icon-spacing', dynamicStyle );
		} );
	} );

	// Icon Border Radius.
	wp.customize( 'astra-settings[single-post-social-sharing-icon-radius]', function( value ) {
		value.bind( function( size ) {

			if( size.desktop != '' || size.tablet != '' || size.mobile != '' ) {
				let dynamicStyle = '';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-element {';
				dynamicStyle += 'border-radius: ' + size.desktop + 'px;';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-element {';
				dynamicStyle += 'border-radius: ' + size.tablet + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-element {';
				dynamicStyle += 'border-radius: ' + size.mobile + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				astra_add_dynamic_css( context + '-soc-icon-radius', dynamicStyle );
			}
		} );
	} );

	// Icon Background Spacing
	wp.customize( 'astra-settings[single-post-social-sharing-icon-background-spacing]', function( value ) {
		value.bind( function( size ) {

			if( size.desktop != '' || size.tablet != '' || size.mobile != '' ) {
				let dynamicStyle = '';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-element {';
				dynamicStyle += 'padding: ' + size.desktop + 'px;';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-element {';
				dynamicStyle += 'padding: ' + size.tablet + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap .ast-social-element {';
				dynamicStyle += 'padding: ' + size.mobile + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				astra_add_dynamic_css( context + '-soc-icon-bg-spacing', dynamicStyle );
			}
		} );
	} );

	// Padding.
	wp.customize( 'astra-settings[single-post-social-sharing-padding]', function( value ) {
		value.bind( function( padding ) {
			if(
				padding.desktop.bottom != '' || padding.desktop.top != '' || padding.desktop.left != '' || padding.desktop.right != '' ||
				padding.tablet.bottom != '' || padding.tablet.top != '' || padding.tablet.left != '' || padding.tablet.right != '' ||
				padding.mobile.bottom != '' || padding.mobile.top != '' || padding.mobile.left != '' || padding.mobile.right != ''
			) {
				let dynamicStyle = '';
				dynamicStyle += selector + ' .ast-social-inner-wrap {';
				dynamicStyle += 'padding-left: ' + padding['desktop']['left'] + padding['desktop-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['desktop']['right'] + padding['desktop-unit'] + ';';
				dynamicStyle += 'padding-top: ' + padding['desktop']['top'] + padding['desktop-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + padding['desktop']['bottom'] + padding['desktop-unit'] + ';';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap {';
				dynamicStyle += 'padding-left: ' + padding['tablet']['left'] + padding['tablet-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['tablet']['right'] + padding['tablet-unit'] + ';';
				dynamicStyle += 'padding-top: ' + padding['tablet']['top'] + padding['tablet-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + padding['tablet']['bottom'] + padding['tablet-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap {';
				dynamicStyle += 'padding-left: ' + padding['mobile']['left'] + padding['mobile-unit'] + ';';
				dynamicStyle += 'padding-right: ' + padding['mobile']['right'] + padding['mobile-unit'] + ';';
				dynamicStyle += 'padding-top: ' + padding['mobile']['top'] + padding['mobile-unit'] + ';';
				dynamicStyle += 'padding-bottom: ' + padding['mobile']['bottom'] + padding['mobile-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				astra_add_dynamic_css( context + '-soc-padding', dynamicStyle );
			}
		} );
	} );


	// Border Radius.
	wp.customize( 'astra-settings[single-post-social-sharing-border-radius]', function( value ) {
		value.bind( function( radius ) {
			if(
				radius.desktop.bottom != '' || radius.desktop.top != '' || radius.desktop.left != '' || radius.desktop.right != '' ||
				radius.tablet.bottom != '' || radius.tablet.top != '' || radius.tablet.left != '' || radius.tablet.right != '' ||
				radius.mobile.bottom != '' || radius.mobile.top != '' || radius.mobile.left != '' || radius.mobile.right != ''
			) {
				let dynamicStyle = '';
				dynamicStyle += selector + ' .ast-social-inner-wrap {';
				dynamicStyle += 'border-top-left-radius: ' + radius['desktop']['top_left'] + radius['desktop-unit'] + ';';
				dynamicStyle += 'border-top-right-radius: ' + radius['desktop']['top_right'] + radius['desktop-unit'] + ';';
				dynamicStyle += 'border-bottom-left-radius: ' + radius['desktop']['bottom_left'] + radius['desktop-unit'] + ';';
				dynamicStyle += 'border-bottom-right-radius: ' + radius['desktop']['bottom_right'] + radius['desktop-unit'] + ';';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap {';
				dynamicStyle += 'border-top-left-radius: ' + radius['tablet']['top_left'] + radius['tablet-unit'] + ';';
				dynamicStyle += 'border-top-right-radius: ' + radius['tablet']['top_right'] + radius['tablet-unit'] + ';';
				dynamicStyle += 'border-bottom-left-radius: ' + radius['tablet']['bottom_left'] + radius['tablet-unit'] + ';';
				dynamicStyle += 'border-bottom-right-radius: ' + radius['tablet']['bottom_right'] + radius['tablet-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap {';
				dynamicStyle += 'border-top-left-radius: ' + radius['mobile']['top_left'] + radius['mobile-unit'] + ';';
				dynamicStyle += 'border-top-right-radius: ' + radius['mobile']['top_right'] + radius['mobile-unit'] + ';';
				dynamicStyle += 'border-bottom-left-radius: ' + radius['mobile']['bottom_left'] + radius['mobile-unit'] + ';';
				dynamicStyle += 'border-bottom-right-radius: ' + radius['mobile']['bottom_right'] + radius['mobile-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				astra_add_dynamic_css( context + '-soc-border-radius', dynamicStyle );
			}
		} );
	} );

	// Margin.
	wp.customize( 'astra-settings[single-post-social-sharing-margin]', function( value ) {
		value.bind( function( margin ) {
			if(
				margin.desktop.bottom != '' || margin.desktop.top != '' || margin.desktop.left != '' || margin.desktop.right != '' ||
				margin.tablet.bottom != '' || margin.tablet.top != '' || margin.tablet.left != '' || margin.tablet.right != '' ||
				margin.mobile.bottom != '' || margin.mobile.top != '' || margin.mobile.left != '' || margin.mobile.right != ''
			) {
				let dynamicStyle = '';
				dynamicStyle += selector + ' .ast-social-inner-wrap {';
				dynamicStyle += 'margin-left: ' + margin['desktop']['left'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-right: ' + margin['desktop']['right'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-top: ' + margin['desktop']['top'] + margin['desktop-unit'] + ';';
				dynamicStyle += 'margin-bottom: ' + margin['desktop']['bottom'] + margin['desktop-unit'] + ';';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap {';
				dynamicStyle += 'margin-left: ' + margin['tablet']['left'] + margin['tablet-unit'] + ';';
				dynamicStyle += 'margin-right: ' + margin['tablet']['right'] + margin['tablet-unit'] + ';';
				dynamicStyle += 'margin-top: ' + margin['tablet']['top'] + margin['tablet-unit'] + ';';
				dynamicStyle += 'margin-bottom: ' + margin['tablet']['bottom'] + margin['tablet-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += selector + ' .ast-social-inner-wrap {';
				dynamicStyle += 'margin-left: ' + margin['mobile']['left'] + margin['mobile-unit'] + ';';
				dynamicStyle += 'margin-right: ' + margin['mobile']['right'] + margin['mobile-unit'] + ';';
				dynamicStyle += 'margin-top: ' + margin['mobile']['top'] + margin['mobile-unit'] + ';';
				dynamicStyle += 'margin-bottom: ' + margin['mobile']['bottom'] + margin['mobile-unit'] + ';';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				astra_add_dynamic_css( context + '-soc-margin', dynamicStyle );
			}
		} );
	} );

	wp.customize( 'astra-settings[single-post-social-sharing-heading-text]', function( setting ) {
		setting.bind( function( text ) {
			console.log('asdas');
			const SocialHeadingText = document.querySelector('.ast-social-sharing-heading');
			if( SocialHeadingText ) {
				SocialHeadingText.textContent = text;
			}
		} );
	} );

	// Typography CSS Generation.
	astra_generate_outside_font_family_css( 'astra-settings[single-post-social-sharing-icon-label-font-family]', selector + ' .social-item-label' );
	astra_generate_font_weight_css( 'astra-settings[single-post-social-sharing-icon-label-font-family]', 'astra-settings[single-post-social-sharing-icon-label-font-weight]', 'font-weight', selector + ' .social-item-label' );
	astra_responsive_font_size( 'astra-settings[single-post-social-sharing-icon-label-font-size]', selector + ' .social-item-label' );
	astra_font_extras_css( 'single-post-social-sharing-icon-label-font-extras', selector + ' .social-item-label' );

	// Social Sharing Heading. 
	astra_generate_outside_font_family_css( 'astra-settings[single-post-social-sharing-heading-font-family]', selector + ' .ast-social-sharing-heading' );
	astra_generate_font_weight_css( 'astra-settings[single-post-social-sharing-heading-font-family]', 'astra-settings[single-post-social-sharing-heading-font-weight]', 'font-weight', selector + ' .ast-social-sharing-heading' );
	astra_responsive_font_size( 'astra-settings[single-post-social-sharing-heading-font-size]', selector + ' .ast-social-sharing-heading' );
	astra_font_extras_css( 'single-post-social-sharing-heading-font-extras', selector + ' .ast-social-sharing-heading' );

} )( jQuery );
