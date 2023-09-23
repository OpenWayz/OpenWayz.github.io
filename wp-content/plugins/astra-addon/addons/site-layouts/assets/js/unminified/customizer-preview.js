var isIE = false;
var isEdge = false;

( function( $ ) {


	/**
	 * Full Width Layout width
	 */
	wp.customize( 'astra-settings[site-content-width]', function( value ) {
		value.bind( function( width ) {

			var gird_layout     = (typeof ( wp.customize._value['astra-settings[blog-grid]'] ) != 'undefined') ? wp.customize._value['astra-settings[blog-grid]']._value : '';
			if ( 1 != gird_layout ) {
				masonaryLaoyoutReset();
			}
		} );
	} );

	/*
	 * Layout Body Background Color
	 */
	wp.customize( 'astra-settings[site-layout-outside-bg-color]', function( setting ) {
		setting.bind( function( bg_color ) {

			if (  jQuery( 'body' ).hasClass( 'ast-box-layout' ) ) {

				var dynamicStyle = 'body {background-color: ' + bg_color + '}';
			    dynamicStyle += 'body:before {content: "";position: fixed;left: 0;right: 0;top: 0;bottom: 0;background: ' + bg_color + '}';

				astra_add_dynamic_css( 'site-layout-outside-bg-color', dynamicStyle );

			} else {

				var dynamicStyle = 'body {background-color: ' +  bg_color + '}';

				astra_add_dynamic_css( 'site-layout-outside-bg-color', dynamicStyle );
			}

		} );
	} );

	/*
	 * Fluid layout padding
	 */
	wp.customize( 'astra-settings[site-layout-fluid-lr-padding]', function( setting ) {
		setting.bind( function( width ) {

			if (  jQuery( 'body' ).hasClass( 'ast-fluid-width-layout' ) ) {

				var dynamicStyle = '@media (min-width: 769px) {';
				dynamicStyle += '.ast-container,.fl-builder #content .entry-header, .fl-row-fixed-width { padding-left: ' + ( parseInt( width ) ) + 'px;  padding-right: ' + ( parseInt( width ) ) + 'px } ';
				dynamicStyle += 'article, .main-header-bar, .ast-above-header, .ast-below-header { transition: max-width 0s !important } ';
				dynamicStyle += '}';

				astra_add_dynamic_css( 'site-layout-fluid-lr-padding', dynamicStyle );
			}
			var gird_layout     = (typeof ( wp.customize._value['astra-settings[blog-grid]'] ) != 'undefined') ? wp.customize._value['astra-settings[blog-grid]']._value : '';
			if ( 1 != gird_layout ) {
				masonaryLaoyoutReset();
			}
		} );
	} );

	/**
	 * Box Layout
	 */
	wp.customize( 'astra-settings[site-layout-box-width]', function( setting ) {
		setting.bind( function( width ) {
			if (  jQuery( 'body' ).hasClass( 'ast-box-layout' ) ) {

				var  dynamicStyle = '#page, .ast-container, .ast-above-header, .main-header-bar, .ast-below-header, .ast-custom-header, .ast-custom-footer { max-width: ' + ( parseInt( width ) ) + 'px; } ';
				     dynamicStyle += 'article, .main-header-bar, .ast-above-header, .ast-below-header { transition: max-width 0s !important } ';

				astra_add_dynamic_css( 'site-layout-box-width-main', dynamicStyle );
			}
			var gird_layout     = (typeof ( wp.customize._value['astra-settings[blog-grid]'] ) != 'undefined') ? wp.customize._value['astra-settings[blog-grid]']._value : '';
			if ( 1 != gird_layout ) {
				masonaryLaoyoutReset();
			}

		} );
	} );

	/**
	 * Margin for box layout
	 */
	wp.customize( 'astra-settings[site-layout-box-tb-margin]', function( setting ) {
		setting.bind( function( width ) {

			if (  jQuery( 'body' ).hasClass( 'ast-box-layout' ) ) {

				var  dynamicStyle = '@media (min-width: 769px ) {#page { margin-top: ' + ( parseInt( width ) ) + 'px; margin-bottom: ' + ( parseInt( width ) ) + 'px; } } ';

				astra_add_dynamic_css( 'site-layout-box-tb-margin', dynamicStyle );
			}

		} );
	} );


	/**
	 * Padded Layout Outside Spacing
	 */
	astra_responsive_spacing( 'astra-settings[site-layout-padded-pad]','body', 'padding', ['top', 'right', 'bottom', 'left' ] );
	wp.customize( 'astra-settings[site-layout-padded-pad]', function( value ) {
		value.bind( function( padding ) {

			if ( padding.desktop.top  || padding.desktop.bottom || padding.tablet.top || padding.tablet.bottom || padding.mobile.top || padding.mobile.bottom ) {
				var dynamicStyle = 'article, .main-header-bar, .ast-above-header, .ast-below-header { transition: max-width 0s !important } ';
				dynamicStyle +=  ' body.ast-padded-layout::before { height:' + padding['desktop']['top'] + padding['desktop-unit'] + ';} body.ast-padded-layout::after	{ height:' + padding['desktop']['bottom'] + padding['desktop-unit'] +';}';
				dynamicStyle +=  '@media (max-width: 768px) { body.ast-padded-layout::before { height:' + padding['tablet']['top'] + padding['tablet-unit'] + ';} body.ast-padded-layout::after	{ height:' + padding['tablet']['bottom'] + padding['tablet-unit'] +'; } }';
				dynamicStyle +=  '@media (max-width: 544px) { body.ast-padded-layout::before { height:' + padding['mobile']['top'] + padding['mobile-unit'] + ';} body.ast-padded-layout::after	{ height:' + padding['mobile']['bottom'] + padding['mobile-unit'] +'; } }';
				astra_add_dynamic_css( 'site-layout-padded-padding', dynamicStyle );
				var gird_layout     = (typeof ( wp.customize._value['astra-settings[blog-grid]'] ) != 'undefined') ? wp.customize._value['astra-settings[blog-grid]']._value : '';
				if ( 1 != gird_layout ) {
					masonaryLaoyoutReset();
				}
			} else {
				wp.customize.preview.send( 'refresh' );
			}

		} );
	} );

	/**
	 * Content width for padded layout
	 */
	wp.customize( 'astra-settings[site-layout-padded-width]', function( setting ) {
		setting.bind( function( width ) {
			if ( '' != width) {
				if (  jQuery( 'body' ).hasClass( 'ast-padded-layout' ) ) {

					var dynamicStyle = '@media (min-width: 769px) {';

					dynamicStyle += '.ast-container, .site-content > .ast-container, .fl-builder #content .entry-header { max-width: ' + ( 80 + parseInt( width ) ) + 'px } ';
					dynamicStyle += 'article, .main-header-bar, .ast-above-header, .ast-below-header { transition: max-width 0s !important } ';
					dynamicStyle += '}';

					astra_add_dynamic_css( 'site-layout-padded-width', dynamicStyle );
				}
				var gird_layout     = (typeof ( wp.customize._value['astra-settings[blog-grid]'] ) != 'undefined') ? wp.customize._value['astra-settings[blog-grid]']._value : '';
				if ( 1 != gird_layout ) {
					masonaryLaoyoutReset();
				}
			} else{
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	/**
	 * Reset Masonary for custommizer preview scree
	 */
	function masonaryLaoyoutReset( ){

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

} )( jQuery );
