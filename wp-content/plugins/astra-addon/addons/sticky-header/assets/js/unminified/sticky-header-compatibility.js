( function() {

	var __fixed_header = document.getElementById('ast-fixed-header');
	var __main_header  = __fixed_header.querySelector( '.main-header-bar-navigation' );
	var menu_toggle    = __fixed_header.querySelector( '.main-header-menu-toggle' );


	/* Main Menu toggle click */
	if ( null != menu_toggle ) {

		menu_toggle.addEventListener( 'click', function( event ) {
	    	event.preventDefault();

	    	var menuHasChildren = __fixed_header.querySelectorAll( '.menu-item-has-children' );
			for ( var i = 0; i < menuHasChildren.length; i++ ) {
				menuHasChildren[i].classList.remove( 'ast-submenu-expanded' );
				var menuHasChildrenSubMenu = menuHasChildren[i].querySelectorAll( '.sub-menu' );
				for (var j = 0; j < menuHasChildrenSubMenu.length; j++) {
					menuHasChildrenSubMenu[j].style.display = 'none';
				};
			}

			var menu_class = this.getAttribute('class') || '';

			if ( menu_class.indexOf('main-header-menu-toggle') !== -1 ) {
				if (typeof astraToggleClass === "function") {
					astraToggleClass(__main_header_all[event_index], 'toggle-on');
					astraToggleClass(menu_toggle_all[event_index], 'toggled');
				} else {
					toggleClass(__main_header_all[event_index], 'toggle-on');
					toggleClass(menu_toggle_all[event_index], 'toggled');
				}
				if (__main_header_all[event_index].classList.contains('toggle-on')) {
					__main_header_all[event_index].style.display = 'block';
					document.body.classList.add("ast-main-header-nav-open");
				} else {
					__main_header_all[event_index].style.display = '';
					document.body.classList.remove("ast-main-header-nav-open");
				}
			}
	    }, false);
	}

	CAstraNavigationMenu = function( selector ) {

		var parentList = __fixed_header.querySelectorAll( selector );

		//console.log( parentList );
		for (var i = 0; i < parentList.length; i++) {

			if ( null != parentList[i].querySelector( '.sub-menu' ) ) {

				// Insert Toggle Button.
				var  toggleButton = document.createElement("BUTTON");        // Create a <button> element
					toggleButton.setAttribute("role", "button");
					toggleButton.setAttribute("class", "ast-menu-toggle");
					toggleButton.setAttribute("aria-expanded", "false");
					toggleButton.innerHTML="<span class='screen-reader-text'>Menu Toggle</span>";
				parentList[i].insertBefore( toggleButton, parentList[i].childNodes[1] );

				var menuLeft         = parentList[i].getBoundingClientRect().left,
					windowWidth      = window.innerWidth,
					menuFromLeft     = (parseInt( windowWidth ) - parseInt( menuLeft ) ),
					menuGoingOutside = false;

				if( menuFromLeft < 500 ) {
					menuGoingOutside = true;
				}

				// Submenu items goes outside?
				if( menuGoingOutside ) {
					parentList[i].classList.add( 'ast-left-align-sub-menu' );

					var all_submenu_parents = parentList[i].querySelectorAll( '.menu-item-has-children' );
					for (var k = 0; k < all_submenu_parents.length; k++) {
						all_submenu_parents[k].classList.add( 'ast-left-align-sub-menu' );
					}
				}

				// Submenu Container goes to outside?
				if( menuFromLeft < 240 ) {
					parentList[i].classList.add( 'ast-sub-menu-goes-outside' );
				}

			};
		};
	};

	//CAstraNavigationMenu( '.main-header-menu .menu-item' );

	CAstraToggleMenu = function( selector ) {
		var astra_menu_toggle = __fixed_header.querySelectorAll( selector );
		console.log( astra_menu_toggle );
		/* Submenu button click */
		for (var i = 0; i < astra_menu_toggle.length; i++) {

			astra_menu_toggle[i].addEventListener( 'click', function ( event ) {
				event.preventDefault();

				var parent_li = this.parentNode;

				var parent_li_child = parent_li.querySelectorAll( '.menu-item-has-children' );
				for (var j = 0; j < parent_li_child.length; j++) {

					parent_li_child[j].classList.remove( 'ast-submenu-expanded' );
					var parent_li_child_sub_menu = parent_li_child[j].querySelector( '.sub-menu' );
					parent_li_child_sub_menu.style.display = 'none';
				};

				var parent_li_sibling = parent_li.parentNode.querySelectorAll( '.menu-item-has-children' );
				for (var j = 0; j < parent_li_sibling.length; j++) {

					if ( parent_li_sibling[j] != parent_li ) {

						parent_li_sibling[j].classList.remove( 'ast-submenu-expanded' );
						var all_sub_menu = parent_li_sibling[j].querySelectorAll( '.sub-menu' );
						for (var k = 0; k < all_sub_menu.length; k++) {
							all_sub_menu[k].style.display = 'none';
						};
					}
				};

				if ( parent_li.classList.contains( 'menu-item-has-children' ) ) {
					if (typeof astraToggleClass === "function") {
						astraToggleClass( parent_li, 'ast-submenu-expanded' );
					} else {
						toggleClass( parent_li, 'ast-submenu-expanded' );
					}
					if ( parent_li.classList.contains( 'ast-submenu-expanded' ) ) {
						parent_li.querySelector( '.sub-menu' ).style.display = 'block';
					} else {
						parent_li.querySelector( '.sub-menu' ).style.display = 'none';
					}
				}
			}, false);
		};
	};

	//CAstraToggleMenu('.main-header-menu .ast-menu-toggle');

	document.body.addEventListener("Castra-header-responsive-enabled", function() {

		if( null != __main_header ) {
			__main_header.classList.remove( 'toggle-on' );
			__main_header.style.display = '';
		}

		var sub_menu = __fixed_header.getElementsByClassName( 'sub-menu' );
		for ( var i = 0; i < sub_menu.length; i++ ) {
			if( ! sub_menu[i].classList.contains( 'astra-megamenu' ) ) {
				sub_menu[i].style.display = '';
			}
		}

		var searchIcons = __fixed_header.getElementsByClassName( 'ast-search-menu-icon' );
		for ( var i = 0; i < searchIcons.length; i++ ) {
			searchIcons[i].classList.remove( 'ast-dropdown-active' );
			searchIcons[i].style.display = '';
		}
	}, false);

	/* Add break point Class and related trigger */
	var CupdateHeaderBreakPoint = function () {

		if( null != document.getElementById( 'ast-fixed-header' ) ) {

			var break_point = astra.break_point,
				headerWrap = document.getElementById( 'ast-fixed-header' ).childNodes;

			for ( var i = 0; i < headerWrap.length; i++ ) {

				if ( headerWrap[i].tagName == 'DIV' && headerWrap[i].classList.contains( 'main-header-bar-wrap' ) ) {

					var header_content_bp = window.getComputedStyle( headerWrap[i] ).content;

					header_content_bp = header_content_bp.replace( /[^0-9]/g, '' );
					header_content_bp = parseInt( header_content_bp );

					// `ast-header-break-point` class will use for Responsive Style of Header.
					if ( header_content_bp != break_point ) {
						//remove menu toggled class.
						if ( null != menu_toggle ) {
							menu_toggle.classList.remove( 'toggled' );
						}
						document.body.classList.remove( "ast-header-break-point" );
						var responsive_enabled = new CustomEvent( "Castra-header-responsive-enabled" );
						document.body.dispatchEvent( responsive_enabled );

					} else {

						document.body.classList.add( "ast-header-break-point" );
						var responsive_disabled = new CustomEvent( "Castra-header-responsive-disabled" );
						document.body.dispatchEvent( responsive_disabled );
					}
				}
			}
		}
	}

	window.addEventListener("resize", function() {

		if( 'BODY' !== document.activeElement.tagName ) {
			return;
		}

		CupdateHeaderBreakPoint();
	});

	CupdateHeaderBreakPoint();

	/**
	 * Navigation Keyboard Navigation.
	 */
	var container, button, menu, links, subMenus, i, len;

	container = document.querySelector('#ast-fixed-header .site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );
	subMenus = menu.getElementsByTagName( 'ul' );


	// Set menu items with submenus to aria-haspopup="true".
	for ( i = 0, len = subMenus.length; i < len; i++ ) {
		subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
	}

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', CtoggleFocus, true );
		links[i].addEventListener( 'blur', CtoggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function CtoggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}
} )();
