/**
 * Blog Pro Styling
 *
 * @package Astra Addon
 * @since 1.0.0
 */

var isIE = false;
var isEdge = false;

(function ($) {
	"use strict";
	// Internet Explorer 6-11
	isIE = /*@cc_on!@*/false || !!document.documentMode;

	// Edge 20+
	isEdge = !isIE && !!window.StyleMedia;


	var masonryEnabled  = astra.masonryEnabled || false;
	var blogMasonryBreakPoint = astra.blogMasonryBreakPoint;
	window.addEventListener("resize", function() {
		masonaryLaoyout( true );
	});

	masonaryLaoyout();

	function masonaryLaoyout( is_resize ){

		if ( blogMasonryBreakPoint >= window.innerWidth ) {
			return;
		}

		var blogMasonryBp = window.getComputedStyle( jQuery('#content')[0], '::before' ).getPropertyValue('content');

		// Edge/Explorer header break point.
		if( isEdge || isIE || blogMasonryBp === 'normal' ) {
			if( window.innerWidth >= blogMasonryBreakPoint ) {
				blogMasonryBp = blogMasonryBreakPoint;
			}
		} else{
			blogMasonryBp = blogMasonryBp.replace( /[^0-9]/g, '' );
			blogMasonryBp = parseInt( blogMasonryBp );
		}

		var container = jQuery( '.search.blog-masonry #main > div, .blog.blog-masonry #main > div, .archive.blog-masonry #main > div' );

		if ( blogMasonryBp == blogMasonryBreakPoint ) {
			if (masonryEnabled) {

				if ( typeof container != 'undefined' && container.length > 0 ) {

					var hasMasonry = container.data('masonry') ? true : false;

					if ( is_resize && hasMasonry ) {
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
		}else{
			if (  masonryEnabled ) {
				if ( typeof container != 'undefined' &&  container.length > 0 ) {
					container.masonry().masonry( 'destroy' );
				}
			}
		}
	}
})(jQuery);