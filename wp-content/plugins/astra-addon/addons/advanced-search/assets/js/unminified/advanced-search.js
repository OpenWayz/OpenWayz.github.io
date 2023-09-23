/**
 * Advanced Search Styling
 *
 * @package Astra Addon
 * @since 1.4.8
 */

( function() {

	function body_iphone_classes() {
		var iphone = ( navigator.userAgent.match(/iPhone/i) == 'iPhone' ) ? 'iphone' : '';
		var ipod   = ( navigator.userAgent.match(/iPod/i) == 'iPod' ) ? 'ipod' : '';

		document.body.className += ' ' + iphone;
		document.body.className += ' ' + ipod;
	}
	body_iphone_classes();

	function remove_style_class( style ) {
		var allClasses = document.body.className;
		allClasses = allClasses.replace( style, '' );
    	document.body.className = allClasses;
	}

	function add_style_class( style ) {
		document.body.className += ' ' + style;
	}

	// Helper Function.
	function fade_in( element ) {

		element.style.display = 'block';
		setTimeout(function() {
			element.style.opacity = 1;
		}, 1);
	}

	function fade_out( element ) {

		element.style.opacity = '';
		setTimeout(function() {
			element.style.display = '';
		}, 200);
	}
	
	function header_cover_form_height( current_header_cover_form ) {

		// Primary header cover search.
		if ( document.body.classList.contains('ast-header-break-point') ) {
			
			var site_navigation = document.querySelector( '.main-navigation' );
			var main_header_bar = document.querySelector( '.main-header-bar' );

			if( null !== main_header_bar && null !== site_navigation ) {

				var site_navigation_outer_height = site_navigation.offsetHeight;
				var main_header_outer_height     = main_header_bar.offsetHeight;

				// Have a navigation outer height.
				// And primary header NOT have the `No Toggle` style.
				if( site_navigation_outer_height && ( ! document.body.classList.contains('ast-no-toggle-menu-enable') ) ) {
					var search_height = parseFloat(site_navigation_outer_height) - parseFloat(main_header_outer_height);
				} else {
					var search_height = parseFloat(main_header_outer_height);
				}
				current_header_cover_form.style.maxHeight = Math.abs( search_height ) + "px";
			}
		}
	}

	function header_builder_cover_form_height( current_header_cover_form ) {

		// Primary header cover search.
		if ( document.body.classList.contains('ast-header-break-point') ) {

			var site_navigation = document.querySelector( '.main-navigation' );
			var main_header_bar = document.querySelector( '.main-header-bar' );
			var mobile_header_bar = document.querySelector( '.ast-mobile-header-wrap' );

			if( null !== main_header_bar && null !== site_navigation ) {

				var site_navigation_outer_height = site_navigation.offsetHeight;
				var main_header_outer_height     = main_header_bar.offsetHeight;
				var mobile_header_outer_height     = mobile_header_bar.offsetHeight;

				// Have a navigation outer height.
				// And primary header NOT have the `No Toggle` style.
				if( site_navigation_outer_height && ( ! document.body.classList.contains('ast-no-toggle-menu-enable') ) ) {
					var search_height = parseFloat(site_navigation_outer_height) - parseFloat(main_header_outer_height);
				} else {
					var search_height = parseFloat(main_header_outer_height);
				}
				if ( current_header_cover_form.parentNode.classList.contains( 'ast-mobile-header-wrap' ) ) {
					var search_height = parseFloat(mobile_header_outer_height);
				}

				current_header_cover_form.style.maxHeight = Math.abs( search_height ) + "px";
			}
		}
	}

	var searchIcons = document.querySelectorAll( 'a.astra-search-icon:not(.slide-search)' );

	for ( var i = 0; searchIcons.length > i; i++ ) {

			searchIcons[i].onclick = function ( evt ) {

				evt.preventDefault();

				if ( ! evt ) {
					evt = window.event;
				}

				if ( this.classList.contains( 'header-cover' ) ) {
					var header_cover = document.querySelectorAll( '.ast-search-box.header-cover' ),
						header_builder_active 	 = astraAddon.is_header_builder_active || false;

					for (var j = 0; j < header_cover.length; j++) {

						var header_cover_icon = header_cover[j].parentNode.querySelectorAll( 'a.astra-search-icon' );

						for (var k = 0; k < header_cover_icon.length; k++) {
							if ( header_cover_icon[k] == this ) {
								fade_in( header_cover[j] );
								header_cover[j].querySelector( 'input.search-field' ).focus();

								// Set header cover form height.
								if ( header_builder_active ) {
									header_builder_cover_form_height( header_cover[j] );
								} else {
									header_cover_form_height( header_cover[j] );
								}
							}
						};
					};

				} else if ( this.classList.contains( 'full-screen' ) ) {

					var fullScreen = document.getElementById( 'ast-seach-full-screen-form' );
					if ( fullScreen.classList.contains( 'full-screen' ) ) {
						fade_in( fullScreen );
						add_style_class( 'full-screen' );
						fullScreen.querySelector( 'input.search-field' ).focus();
					}
				}
			};
	};

	/* Search Header Cover & Full Screen Close */
	var closes = document.querySelectorAll( '.ast-search-box .close' );
	for (var i = 0, len = closes.length; i < len; ++i) {
		closes[i].onclick = function(evt){

			if ( ! evt) { evt = window.event;
			}
			var self = this;
			while ( 1 ) {
				if ( self.parentNode.classList.contains( 'ast-search-box' ) ) {
					fade_out( self.parentNode );
					remove_style_class( 'full-screen' );
					break;
				} else if ( self.parentNode.classList.contains( 'site-header' ) ) {
					break;
				}
				self = self.parentNode;
			}
		};
	}

	document.onkeydown = function ( evt ) {
		if ( evt.keyCode == 27 ) {
			var fullScreenForm = document.getElementById( 'ast-seach-full-screen-form' );

			if ( null != fullScreenForm ) {
				fade_out( fullScreenForm );
				remove_style_class( 'full-screen' );
			}

			var header_cover = document.querySelectorAll( '.ast-search-box.header-cover' );
			for (var j = 0; j < header_cover.length; j++) {
				fade_out( header_cover[j] );
			}
		}
	}

	window.addEventListener("resize", function() {

		if( 'BODY' !== document.activeElement.tagName ) {
			return;
		}

		// Skip resize event when keyboard display event triggers on devices. 
		if( 'INPUT' != document.activeElement.tagName ) {
			var header_cover = document.querySelectorAll( '.ast-search-box.header-cover' );
			if ( ! document.body.classList.contains( 'ast-header-break-point' ) ) {
				for (var j = 0; j < header_cover.length; j++) {
					header_cover[j].style.maxHeight = '';
					header_cover[j].style.opacity = '';
					header_cover[j].style.display = '';
				}
			}
		}
	});

} )();
