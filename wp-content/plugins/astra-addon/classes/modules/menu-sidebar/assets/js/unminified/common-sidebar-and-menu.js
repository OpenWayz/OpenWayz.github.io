(function($){

	// Detecting if an element is in the Viewport.
	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	AstraMenu = {

		/**
		 * Init
		 */
		init: function()
		{
			this._bind();

			var body = document.querySelector('body');

			body.addEventListener( 'astraMenuHashLinkClicked', function ( event ) {
				AstraMenu._close_fullscreen(event);
				AstraMenu._close_offcanvas(event);
			});
		},

		/**
		 * Binds events
		 */
		_bind: function()
		{
			var canvasEnable = astraAddon.off_canvas_enable || '';
			if ( canvasEnable ) {
				$(document).on( 'click', '.' + astraAddon.off_canvas_trigger_class, {class: "ast-off-canvas-overlay"}, AstraMenu._enable_offcanvas_overlay );
				$(document).on( 'click touchstart', '.astra-off-canvas-sidebar-wrapper, .astra-off-canvas-sidebar-wrapper .ast-shop-filter-close',{class: "ast-off-canvas-overlay"}, AstraMenu._close_offcanvas );
			} else {
				if( astraAddon.off_canvas_trigger_class ) {
					$(document).on( 'click', '.' + astraAddon.off_canvas_trigger_class, AstraMenu._enable_collapsible_slider  );
				}
			}

			// Flyout above header menu.
			$(document).on( 'click', '.ast-flyout-above-menu-enable .ast-above-header .menu-toggle', AstraMenu._open_above_offcanvas );
			$(document).on( 'click touchstart', '.ast-flyout-above-menu-overlay .ast-above-header-navigation-wrap, .ast-flyout-above-menu-overlay .ast-above-header .ast-nav-close', AstraMenu._close_above_offcanvas );

			// Flyout above header menu.
			$(document).on( 'click', '.ast-flyout-below-menu-enable .ast-below-header .menu-toggle', AstraMenu._open_below_offcanvas );
			$(document).on( 'click touchstart', '.ast-flyout-below-menu-overlay .ast-below-header-navigation-wrap, .ast-flyout-below-menu-overlay .ast-below-header .ast-nav-close', AstraMenu._close_below_offcanvas );

			// Full Screen Below Header menu.
			$(document).on( 'click', '.ast-fullscreen-below-menu-enable .ast-below-header .menu-toggle', AstraMenu._open_below_fullscreen  );
			$(document).on( 'click', '.ast-fullscreen-below-menu-overlay .ast-below-header .close',      AstraMenu._close_below_fullscreen );

			// Full Screen menu.
			$(document).on( 'click', '.ast-fullscreen-above-menu-enable .ast-above-header .menu-toggle', AstraMenu._open_above_fullscreen  );
			$(document).on( 'click', '.ast-fullscreen-above-menu-overlay .ast-above-header .close',      AstraMenu._close_above_fullscreen );

			// Flyout menu.
			$(document).on( 'click', '.ast-flyout-menu-enable .main-header-bar .menu-toggle', { class: 'ast-flyout-menu-overlay'}, AstraMenu._enable_primary_menu_overlay );
			$(document).on( 'click', '.ast-flyout-menu-overlay .main-header-bar-navigation, .ast-flyout-menu-overlay .main-header-bar .ast-nav-close', { class: 'ast-flyout-menu-overlay' }, AstraMenu._close_offcanvas );
			$(document).on( 'click', '.ast-flyout-menu-overlay .main-header-bar-navigation', { class: "toggled" }, AstraMenu._toggle_menu );

			// Full Screen menu.
			$(document).on( 'click', '.ast-fullscreen-menu-enable .main-header-bar .menu-toggle', AstraMenu._open_fullscreen  );
			$(document).on( 'click', '.ast-fullscreen-menu-overlay .main-header-bar .close',      AstraMenu._close_fullscreen );
			$(document).on( 'click', '.ast-fullscreen-menu-overlay .main-header-bar .close', { class: "toggled" }, AstraMenu._toggle_menu );

			$(document).on( 'ready', AstraMenu._wp_admin_bar_visible );
			$(window).on( 'scroll', AstraMenu._wp_admin_bar_visible );

		},

		_open_above_fullscreen: function(e) {
			e.preventDefault();

			var innerWidth = $('html').innerWidth();
			$('html').css( 'overflow', 'hidden' );
			var hiddenInnerWidth = $('html').innerWidth();
			$('html').css( 'margin-right', hiddenInnerWidth - innerWidth );

			$('html').addClass( 'ast-fullscreen-above-menu-overlay' );

			if( ! $('.ast-above-header-navigation-wrap .close').length ) {
				$('.ast-above-header-navigation-wrap').prepend('<span class="close">' + astraAddon.svgIconClose + '</span>');
				$('.ast-above-header-navigation-wrap .close').css( 'right', hiddenInnerWidth - innerWidth );
			}
		},

		_open_below_fullscreen: function(e) {
			e.preventDefault();

			var innerWidth = $('html').innerWidth();
			$('html').css( 'overflow', 'hidden' );
			var hiddenInnerWidth = $('html').innerWidth();
			$('html').css( 'margin-right', hiddenInnerWidth - innerWidth );

			$('html').addClass( 'ast-fullscreen-below-menu-overlay' );

			if( ! $('.ast-below-header-navigation-wrap .close').length ) {
				$('.ast-below-header-navigation-wrap').prepend('<span class="close">' + astraAddon.svgIconClose + '</span>');
				$('.ast-below-header-navigation-wrap .close').css( 'right', hiddenInnerWidth - innerWidth );
			}
		},

		_open_fullscreen: function(e) {
			e.preventDefault();

			var innerWidth = $('html').innerWidth();
			$('html').css( 'overflow', 'hidden' );
			var hiddenInnerWidth = $('html').innerWidth();
			$('html').css( 'margin-right', hiddenInnerWidth - innerWidth );

			$('html').addClass( 'ast-fullscreen-menu-overlay' );

			$('html').addClass( 'ast-fullscreen-active' );

			if( ! $('.main-header-bar nav .close').length ) {
				$('.main-header-bar nav').prepend('<span class="close">' + astraAddon.svgIconClose + '</span>');
				$('.main-header-bar nav .close').css( 'right', hiddenInnerWidth - innerWidth );
			}
			if( ! $( '.ast-primary-menu-disabled .ast-header-custom-item .close').length ) {
				$( ".ast-primary-menu-disabled .ast-header-custom-item .ast-merge-header-navigation-wrap" ).prepend( '<span class="close">' + astraAddon.svgIconClose + '</span>' );
			}

		},

		_enable_offcanvas_overlay: function(e) {
			e.preventDefault();

			$(this).addClass( 'active' );

			var innerWidth = $('html').innerWidth();
			$('html').css( 'overflow', 'hidden' );
			var hiddenInnerWidth = $('html').innerWidth();
			$('html').css( 'margin-right', hiddenInnerWidth - innerWidth );

			$('html').addClass( e.data.class );

			// Added for accessibility issue.
			setTimeout(function(){
				$('#cart-accessibility').focus()
			}, 100);

			const isAccordionActive = $( '.ast-filter-wrap' );

			if( isAccordionActive.hasClass( 'ast-accordion-layout' ) ) {
				AstraMenu._accordion_initial_height();
			}
		},

		_enable_collapsible_slider: function(e) {
			e.preventDefault();
			$(this).toggleClass( 'active' );
			if( $('body').hasClass( 'ast-header-break-point' ) && ! astraAddon.off_canvas_enable && $(this).hasClass('active') ) {
				$('html, body').animate({
					scrollTop: $(".ast-woocommerce-container").offset().top
				}, 500);
			}
			$('.ast-collapse-filter').slideToggle();

			const isAccordionActive = $( '.ast-filter-wrap' );

			if( isAccordionActive.hasClass( 'ast-accordion-layout' ) ) {
				AstraMenu._accordion_initial_height();
			}
		},

		_enable_primary_menu_overlay: function(e) {
			e.preventDefault();

			if( ! $( '.main-header-bar-navigation .close' ).length ) {
				$( ".main-navigation" ).before( '<span class="ast-nav-close close">' + astraAddon.svgIconClose + '</span>' );
			}

			if( ! $( '.ast-merge-header-navigation-wrap .close' ).length ) {
				$( ".ast-merge-header-navigation-wrap" ).append( '<span class="ast-nav-close close">' + astraAddon.svgIconClose + '</span>' );
			}

			if( ! $( 'div.ast-masthead-custom-menu-items .close' ).length ) {
				$( "div.ast-masthead-custom-menu-items" ).append( '<span class="ast-nav-close close">' + astraAddon.svgIconClose + '</span>' );
			}

			if( astraAddon.sticky_active ) {
				$( 'html' ).css( 'overflow', 'hidden' );
			}

			$('html').addClass( e.data.class );
			$('html').addClass( 'ast-offcanvas-active' );
		},

		_open_above_offcanvas: function(e) {
			e.preventDefault();

			if( ! $( '.ast-above-header-section .close' ).length ) {
				$( ".ast-above-header-navigation" ).prepend( '<span class="ast-nav-close close">' + astraAddon.svgIconClose + '</span>' );
			}

			if( astraAddon.sticky_active ) {
				$( 'html' ).css( 'overflow', 'hidden' );
			}

			$('html').addClass( 'ast-flyout-above-menu-overlay' );
		},

		_close_above_offcanvas: function(e) {
			if ( e.target.parentNode.parentNode === this ) {
				$('html').removeClass( 'ast-flyout-above-menu-overlay' );
				$( '.ast-above-header .menu-toggle' ).removeClass( 'toggled' );
				$( '.ast-above-header' ).removeClass( 'toggle-on' );

				if( astraAddon.sticky_active ) {
					$( 'html' ).css( 'overflow', '' );
				}
			}

		},

		_open_below_offcanvas: function(e) {
			e.preventDefault();

			if( ! $( '.ast-below-header-actual-nav .close' ).length ) {
				$( ".ast-below-header-actual-nav" ).prepend( '<span class="ast-nav-close close">' + astraAddon.svgIconClose + '</span>' );
			}

			if( astraAddon.sticky_active ) {
				$( 'html' ).css( 'overflow', 'hidden' );
			}

			$('html').addClass( 'ast-flyout-below-menu-overlay' );
		},

		_close_below_offcanvas: function(e) {
			if ( e.target.parentNode.parentNode === this ) {

				$('html').removeClass( 'ast-flyout-below-menu-overlay' );
				$( '.ast-below-header .menu-toggle' ).removeClass( 'toggled' );
				$( '.ast-below-header' ).removeClass( 'toggle-on' );

				if( astraAddon.sticky_active ) {
					$( 'html' ).css( 'overflow', '' );
				}
			}

		},

		_close_offcanvas: function(e) {

			const offCanvasWrap = $( ".astra-off-canvas-sidebar" );

			const commonCondition = e.target.parentNode.parentNode === this || e.type === 'astraMenuHashLinkClicked';

			const condition = offCanvasWrap.length ? commonCondition || ( ! offCanvasWrap.is(e.target) && offCanvasWrap.has(e.target).length === 0 ) : commonCondition; 

			if ( condition ) {

				e.data = e.data || {};
				e.data.class = e.data.class || "ast-flyout-menu-overlay ast-offcanvas-active";

				$("html").css({
				  overflow: "",
				  "margin-left": "",
				  "margin-right": ""
				});

				$("html").removeClass(e.data.class);

				const filterButton = $(".astra-shop-filter-button");

				if( filterButton.hasClass( 'active' ) ) {
					filterButton.removeClass( 'active' );
				}

				setTimeout(function() {
				  $("html").removeClass("ast-offcanvas-active");
				}, 300);
			  }
		},

		_close_above_fullscreen: function(e)
		{
			$('html').css({
				'overflow': '',
				'margin-right': ''
			});

			$('html').removeClass( 'ast-fullscreen-above-menu-overlay' );

			$('.ast-above-header-navigation').removeClass('toggle-on').hide();

			if ( $( '.ast-above-header .menu-toggle' ).hasClass( 'toggled' ) ) {
				$( '.ast-above-header .menu-toggle' ).removeClass( 'toggled' );
			}
		},

		_close_below_fullscreen: function(e)
		{
			$('html').css({
				'overflow': '',
				'margin-right': ''
			});


			$('html').removeClass( 'ast-fullscreen-below-menu-overlay' );

			if ( $( '.ast-below-header .menu-toggle' ).hasClass( 'toggled' ) ) {
				$( '.ast-below-header .menu-toggle' ).removeClass( 'toggled' );
			}
		},

		_close_fullscreen: function(e)
		{
			$('html').css({
				'overflow': '',
				'margin-right': ''
			});

			$('html').removeClass( 'ast-fullscreen-menu-overlay' );

			setTimeout(function(){
				$('html').removeClass( 'ast-fullscreen-active' );
			}, 500);

			$('.main-header-bar-navigation').removeClass('toggle-on').hide();
		},

		_toggle_menu: function(e)
		{
			if ( $( '.main-header-bar .menu-toggle' ).hasClass( e.data.class ) ) {
				$( '.main-header-bar .menu-toggle' ).removeClass( e.data.class );
			}

			if ( $( 'html' ).hasClass( 'ast-fullscreen-active' ) ) {
				setTimeout(function(){
					$('html').removeClass( 'ast-fullscreen-active' );
				}, 500);
			}

		},

		_toggle_above_menu: function(e)
		{
			if ( $( '.ast-above-header .menu-toggle' ).hasClass( e.data.class ) ) {
				$( '.ast-above-header .menu-toggle' ).removeClass( e.data.class );
			}
		},

		_wp_admin_bar_visible: function(e)
		{
			var adminBar = $("#wpadminbar");
			if ( adminBar.length ) {
				if ( adminBar.isInViewport() ) {
					if ( ! $('body').hasClass('ast-admin-bar-visible') ) {
						$('body').addClass('ast-admin-bar-visible');
					}
				} else{
					if ( $('body').hasClass('ast-admin-bar-visible') ) {
						$('body').removeClass('ast-admin-bar-visible');
					}
				}
			}
		},

		_accordion_initial_height: function(e)
		{
			// Adds dynamic heights so that slide transitions become smooth.
			$( '.ast-filter-content' ).each( function( i, obj ) {
				const currentHeight = $( this ).innerHeight();
				$( obj ).css( 'max-height', currentHeight + 'px' );
			} );
		}
	};


	/**
	 * Initialization
	 */
	$(function(){
		AstraMenu.init();
	});

})(jQuery);
