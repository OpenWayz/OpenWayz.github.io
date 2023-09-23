/**
 * Above Header Header Styling
 *
 * @package Astra Addon
 * @since 1.0.0
 */

( function() {
	var initial_window_width = screen.width;
	var toggle_menu_style = document.querySelectorAll( '.ast-no-toggle-menu-enable' ) || 0;

	if( ! toggle_menu_style.length ) {
		return;
	}

	var __main_header_all = document.querySelectorAll( '.main-header-bar-navigation' );
	var menu_toggle_all   = document.querySelectorAll( '.main-header-bar-navigation' );

	for (var i = 0; i < menu_toggle_all.length; i++) {

		var parentList = __main_header_all[i].querySelectorAll( '.main-header-menu .menu-item' );

	 	var astra_menu_toggle = __main_header_all[i].querySelectorAll( '.main-header-menu .ast-menu-toggle' );

		// Add Eevetlisteners for Submenu.
		if (astra_menu_toggle.length > 0) {
			for (var k = 0; k < astra_menu_toggle.length; k++) {
				astra_menu_toggle[k].addEventListener('click', AstraToggleSubMenu, false);
			};
		}

		var astra_menu_toggle = __main_header_all[i].querySelectorAll( '.main-header-menu > .menu-item > .ast-menu-toggle' );
		MenuNoToggle( astra_menu_toggle );
	}
	
	function MenuNoToggle( astra_menu_toggle ) {
		if( parseInt( window.innerWidth ) <= 480 ) {
			for (var i = 0; i < astra_menu_toggle.length; i++) {

				astra_menu_toggle[i].addEventListener( 'click', function ( event ) {
					event.preventDefault();
					var position = this.nextElementSibling.getBoundingClientRect();
					var is_set = this.nextElementSibling.getAttribute('data-set');
					if( null === is_set ) {

						// Left
						this.nextElementSibling.style.left  = '-' + parseFloat( position.left ) + 'px';
							
						var li_width = document.documentElement.clientWidth;

						// set width of submenu to full screen.
						this.nextElementSibling.style.width = li_width + 'px';

						// Set flag.
						this.nextElementSibling.setAttribute('data-set', true);
					}
				});
			}
		}
	}

	window.addEventListener("resize", function() {


		if (initial_window_width != screen.width) {
			
				// Update the window width for next time
				initial_window_width = screen.width

			if( 'BODY' !== document.activeElement.tagName ) {
				return;
			}

			var all_sub_menu = document.querySelectorAll( '.main-header-bar .sub-menu' );
			for (var k = 0; k < all_sub_menu.length; k++) {		
				all_sub_menu[k].removeAttribute("style");
			};
			var all_sub_menu = document.querySelectorAll( '.main-header-bar li' );
			for (var k = 0; k < all_sub_menu.length; k++) {
				all_sub_menu[k].classList.remove( 'ast-submenu-expanded' );
			};

			var __main_header_all = document.querySelectorAll( '.main-header-bar-navigation' );
			var menu_toggle_all   = document.querySelectorAll( '.main-header-bar-navigation' );

		for (var i = 0; i < menu_toggle_all.length; i++) {
			var astra_menu_toggle = __main_header_all[i].querySelectorAll( '.main-header-menu > .menu-item > .ast-menu-toggle' );

				if (astra_menu_toggle.length !== 0) {
					for ( var i = 0; i < astra_menu_toggle.length; i++ ) {
						astra_menu_toggle[i].nextElementSibling.removeAttribute( 'data-set' );
					}
						
					MenuNoToggle( astra_menu_toggle );
				}
			}
		}
		
	});

})();