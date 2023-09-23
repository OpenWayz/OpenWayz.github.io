/**
 * Stick elements
 *
 * => How to use?
 *
 * jQuery( {SELECTOR} ).astHookExtSticky( {
 *		dependent: [{selectors}], 	// Not required. Default: []. Stick element dependent selectors.
 *		stick_upto_scroll: {value}, 	// Not required. Default: 0. Stick element after scroll upto the {value} in px.
 *		gutter: {value}, 			// Not required. Default: 0. Stick element from top of the window in px\.
 * });
 *
 * @package Astra Addon
 * @since  1.0.0
 */

;(function ( $, window, undefined ) {

	var pluginName    = 'astHookExtSticky',
		document      = window.document,
		windowWidth   = jQuery( window ).outerWidth(),
		viewPortWidth = jQuery( window ).width(),
		defaults      = {
			dependent            : [],
			max_width            : '',
			site_layout          : '',
			break_point          : 920,
			admin_bar_height_lg  : 32,
			admin_bar_height_sm  : 46,
			admin_bar_height_xs  : 0,
			stick_upto_scroll    : 0,
			gutter               : 0,
			wrap                 : '<div></div>',

			// Padding support of <body> tag.
			body_padding_support : true,

			// Padding support of <html> tag.
			html_padding_support : true,

			active_shrink : false,
			// Added shrink option.
			shrink               : {
									padding_top    : '',
									padding_bottom : '',
						    	},

			// Enable sticky on mobile
			sticky_on_device 	 : 'desktop',

			header_style 		 : 'none',

			hide_on_scroll 		 : 'no',
		},
		/* Manage hide on scroll down */
		lastScrollTop 		= 0,
		delta 				= 5,
		navbarHeight 		= 0,
		should_stick		= true,
		hideScrollInterval;

	/**
	 * Init
	 *
	 * @since  1.0.0
	 */
	function astHookExtSticky( element, options ) {
		this.element   = element;
		this.options   = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name     = pluginName;

		/* Manage hide on scroll down */
		if ( '1' == this.options.hide_on_scroll ) {
			this.navbarHeight = $(element).outerHeight();
		}

		this.lastScrollTop 		= 0;
		this.delta 				= 5;
		this.should_stick		= true;
		this.hideScrollInterval = '';

		this.init();
	}

	/**
	 * Stick element
	 *
	 * @since  1.0.0
	 */
	astHookExtSticky.prototype.stick_me = function( self, type ) {

		var selector      	  = jQuery( self.element ),
			windowWidth       = jQuery( window ).outerWidth(),
			stick_upto_scroll = parseInt( self.options.stick_upto_scroll ),
			max_width         = parseInt( selector.parent().attr( 'data-stick-maxwidth' ) ), // parseInt( self.options.max_width ),
			gutter            = parseInt( selector.parent().attr( 'data-stick-gutter' ) ); // parseInt( self.options.gutter ).
		/**
		 * Check window width
		 */
		 var hook_sticky_header = astraAddon.hook_sticky_header || '';
		 // Any stick header is enabled?
		if ( 'enabled' == hook_sticky_header ) {
			if ( 'desktop' == self.options.sticky_on_device && ( astraAddon.hook_custom_header_break_point > windowWidth ) ) {
				self.stickRelease( self );
			} else if ( 'mobile' == self.options.sticky_on_device && ( astraAddon.hook_custom_header_break_point <= windowWidth ) ) {
				self.stickRelease( self );
			} else {
				if ( jQuery( window ).scrollTop() > stick_upto_scroll ) {
					
					if ( 'none' == self.options.header_style ) {
						if ( 'enabled' == self.options.active_shrink ) {
							self.hasShrink( self, 'stick' );
						}
						if( selector.hasClass( 'ast-custom-header' ) ){
							selector.parent().css( 'min-height', selector.outerHeight() );
							selector.addClass( 'ast-header-sticky-active' ).stop().css({
								'max-width'      : max_width,
								'top'            : gutter,
								'padding-top'    : self.options.shrink.padding_top,
								'padding-bottom' : self.options.shrink.padding_bottom,
							});
							selector.addClass( 'ast-sticky-shrunk' ).stop();
						}
					}
				} else {
					self.stickRelease( self );
				}
			}
		}

		var hook_sticky_footer = astraAddon.hook_sticky_footer || '';
		// Any stick header is enabled?
		if ( 'enabled' == hook_sticky_footer ) {

			if ( 'desktop' == self.options.sticky_on_device && ( astraAddon.hook_custom_footer_break_point > windowWidth ) ) {
				self.stickRelease( self );
			} else if ( 'mobile' == self.options.sticky_on_device && ( astraAddon.hook_custom_footer_break_point <= windowWidth ) ) {
				self.stickRelease( self );
			}
			else{
				jQuery( 'body' ).addClass( 'ast-footer-sticky-active' );
				selector.parent().css( 'min-height', selector.outerHeight() );
				selector.stop().css({
					'max-width'      : max_width,
				});
			}
		}
	}

	astHookExtSticky.prototype.update_attrs = function () {

		var self  	          = this,
			selector          = jQuery( self.element ),
			gutter            = parseInt( self.options.gutter ),
			max_width         = self.options.max_width;

		if ( 'none' == self.options.header_style ) {
			var stick_upto_scroll = selector.offset().top || 0;
		}

		/**
		 * Update Max-Width
		 */
		if ( 'ast-box-layout' != self.options.site_layout ) {
			max_width = jQuery( 'body' ).width();
		}

		/**
		 * Check dependent element
		 * - Is exist?
		 * - Has attr 'data-stick-support' with status 'on'
		 */
		if ( self.options.dependent ) {
			jQuery.each( self.options.dependent, function(index, val) {
				if (
					( jQuery( val ).length ) &&
					( jQuery( val ).parent().attr( 'data-stick-support' ) == 'on' )
				) {
					dependent_height   = jQuery( val ).outerHeight();
					gutter            += parseInt( dependent_height );
					stick_upto_scroll -= parseInt( dependent_height );
				}
			});
		}

		/**
		 * Add support for Admin bar height
		 */
		if ( self.options.admin_bar_height_lg && jQuery( '#wpadminbar' ).length && viewPortWidth > 782 ) {
			gutter            += parseInt( self.options.admin_bar_height_lg );
			stick_upto_scroll -= parseInt( self.options.admin_bar_height_lg );
		}

		if ( self.options.admin_bar_height_sm && jQuery( '#wpadminbar' ).length && ( viewPortWidth >= 600 && viewPortWidth <= 782 ) ) {
			gutter            += parseInt( self.options.admin_bar_height_sm );
			stick_upto_scroll -= parseInt( self.options.admin_bar_height_sm );
		}

		if( self.options.admin_bar_height_xs && jQuery( '#wpadminbar' ).length ){
			gutter            += parseInt( self.options.admin_bar_height_xs );
			stick_upto_scroll -= parseInt( self.options.admin_bar_height_xs );
		}

		/**
		 * Add support for <body> tag
		 */
		if ( self.options.body_padding_support ) {
			gutter            += parseInt( jQuery( 'body' ).css( 'padding-top' ), 10 );
			stick_upto_scroll -= parseInt( jQuery( 'body' ).css( 'padding-top' ), 10 );
		}

		/**
		 * Add support for <html> tag
		 */
		if ( self.options.html_padding_support ) {
			gutter            += parseInt( jQuery( 'html' ).css( 'padding-top' ), 10 );
			stick_upto_scroll -= parseInt( jQuery( 'html' ).css( 'padding-top' ), 10 );
		}

		/**
		 * Updated vars
		 */
		self.options.stick_upto_scroll = stick_upto_scroll;

		/**
		 * Update Attributes
		 */
		if ( 'none' == self.options.header_style ) {
			selector.parent()
				.css( 'min-height', selector.outerHeight() )
				.attr( 'data-stick-gutter', parseInt( gutter ) )
				.attr( 'data-stick-maxwidth', parseInt( max_width ) );
		}
	}

	astHookExtSticky.prototype.hasShrink = function( self, method ) {
		
		var st = $( window ).scrollTop();

	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
		var fixed_header = jQuery(self.element);
	    if ( st > fixed_header.outerHeight() ){
	        // Active Shrink
	        jQuery('body').addClass('ast-shrink-custom-header');
	    } else {
	        // Remove Shrink effect
	        jQuery('body').removeClass('ast-shrink-custom-header');
	    }
	}

	astHookExtSticky.prototype.stickRelease = function( self ) {
		var selector = jQuery( self.element );
		
		var hook_sticky_header = astraAddon.hook_sticky_header || '';
		 // Any stick header is enabled?
		if ( 'enabled' == hook_sticky_header ) {
			if ( 'none' == self.options.header_style ) {
				selector.removeClass( 'ast-header-sticky-active' ).stop().css({
					'max-width' : '',
					'top'		: '',
					'padding'	: '',
				});
				selector.parent().css( 'min-height', '' );
				selector.removeClass( 'ast-sticky-shrunk' ).stop();
			}
		}

		var hook_sticky_footer = astraAddon.hook_sticky_footer || '';
		 // Any stick footer is enabled?
		if ( 'enabled' == hook_sticky_footer ) {
			jQuery( 'body' ).removeClass( 'ast-footer-sticky-active' );
		}
	}
	/**
	 * Init Prototype
	 *
	 * @since  1.0.0
	 */
	astHookExtSticky.prototype.init = function () {

		/**
		 * If custom stick options are set
		 */
		if ( jQuery( this.element ) ) {

			var self                       	   = this,
				selector                       = jQuery( self.element ),
				gutter                         = parseInt( self.options.gutter ),
				stick_upto_scroll              = selector.position().top || 0,
				dependent_height               = 0;

			/**
			 *	Add parent <div> wrapper with height element for smooth scroll
			 *
			 *	Added 'data-stick-support' to all sticky elements
			 *	To know the {dependent} element has support of 'stick'
			 */
			 if ( 'none' == self.options.header_style ) {
				selector.wrap( self.options.wrap )
					.parent().css( 'min-height', selector.outerHeight() )
					.attr( 'data-stick-support', 'on' )
					.attr( 'data-stick-maxwidth', parseInt( self.options.max_width ) );
			}

			self.update_attrs();

			// Stick me!.
			jQuery( window ).on('resize', function() {

				self.stickRelease( self );
				self.update_attrs();
				self.stick_me( self );
			} );

			jQuery( window ).on('scroll', function() {
				// update the stick_upto_scroll if normal main header navigation is opend.
				self.stick_me( self, 'scroll' );
			} );

			jQuery( document ).ready(function($) {
				self.stick_me( self );
			} );

		}

	};

	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if ( ! $.data( this, 'plugin_' + pluginName )) {
				$.data( this, 'plugin_' + pluginName, new astHookExtSticky( this, options ) );
			}
		});
	}



	var $body = jQuery( 'body' ),
		layout_width             = $body.width(),
		site_layout              = astraAddon.site_layout || '',
		hook_sticky_header = astraAddon.hook_sticky_header || '',
		hook_shrink_header = astraAddon.hook_shrink_header || '';
		sticky_header_on_devices = astraAddon.hook_sticky_header_on_devices || 'desktop',
		site_layout_box_width    = astraAddon.site_layout_box_width || 1200,
		hook_sticky_footer = astraAddon.hook_sticky_footer || '',
		sticky_footer_on_devices = astraAddon.hook_sticky_footer_on_devices || 'desktop';



		switch ( site_layout ) {
			case 'ast-box-layout':
				layout_width = parseInt( site_layout_box_width );
			break;
		}

		jQuery( document ).ready(function($) {
			// Any stick header is enabled?
			if ( 'enabled' == hook_sticky_header ) {

				jQuery( '.ast-custom-header' ).astHookExtSticky({
					sticky_on_device: sticky_header_on_devices,
					header_style: 'none',
					site_layout: site_layout,
					max_width: layout_width,
					active_shrink: hook_shrink_header,
				});

			}

			// Any stick footer is enabled?
			if ( 'enabled' == hook_sticky_footer ) {

				jQuery( '.ast-custom-footer' ).astHookExtSticky({
					sticky_on_device: sticky_footer_on_devices,
					max_width: layout_width,
					site_layout: site_layout,
					header_style: 'none',
				});

			}
	    });

}(jQuery, window));
