(function(){

	if( typeof astra === 'undefined' ) {
        return;
    }

	AstraProQuickView = {

		stick_add_to_cart          : astra.shop_quick_view_stick_cart,
		auto_popup_height_by_image : astra.shop_quick_view_auto_height,

		/**
		 * Init
		 */
		init: function()
		{
			this._init_popup();
			this._bind();
		},

		_init_popup: function() {

			/**
			 * Set Max Height Width For Wrappers.
			 */
			 const maxWidthWrappers = parseFloat(window.innerWidth) - 120,
			    maxHeightWrappers   = parseFloat(window.innerHeight) - 120,
			    quickViewContent = document.getElementById('ast-quick-view-content');

			 if( quickViewContent ) {
				quickViewContent.style.maxWidth = maxWidthWrappers + 'px';
				quickViewContent.style.maxHeight = maxHeightWrappers + 'px';
			 }

			/**
			 * Remove HREF from the links.
			 */
			let on_img_click_els = document.querySelectorAll('.ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link');

			if ( on_img_click_els.length > 0 ) {
				on_img_click_els.forEach(element => {
					element.setAttribute('href', 'javascript:void(0)');
				});
			}
		},

		/**
		 * Binds events
		 */
		_bind: function()
		{
			// Open Quick View.

			let on_img_click_els = document.querySelectorAll('.ast-quick-view-button, .ast-quick-view-text, .ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link, .ast-quick-view-trigger');

			if ( on_img_click_els.length > 0 ) {
				on_img_click_els.forEach(element => {
					element.removeEventListener('click', AstraProQuickView._open_quick_view );
					element.addEventListener('click', AstraProQuickView._open_quick_view );
				});
			}

			// Close Quick View.
			let astQuickViewClose          = document.querySelector('#ast-quick-view-close');
			let astQuickViewCloseOnOverlay = document.querySelector('.ast-content-main-wrapper');

			if (astQuickViewClose) {
				astQuickViewClose.addEventListener( 'click', AstraProQuickView._close_quick_view );
			}

			if (astQuickViewCloseOnOverlay) {
				astQuickViewCloseOnOverlay.addEventListener( 'click', AstraProQuickView._close_quick_view_on_overlay_click );
			}

			document.addEventListener( 'keyup', AstraProQuickView._close_quick_view_on_esc_keypress );

		},

		/**
		 * Open Quick View.
		 *
		 * @param  {[type]} e [description]
		 * @return {[type]}   [description]
		 */
		_open_quick_view: function( e ) {
			e.preventDefault();

			let self       	  = e.currentTarget,
				wrap 		  = self.closest('li.product'),
				quick_view    = document.querySelector( '#ast-quick-view-modal' ),
				quick_view_bg = document.querySelector( '.ast-quick-view-bg' );

			let product_id = self.getAttribute( 'data-product_id' );

			if ( wrap && wrap.classList.contains( 'ast-qv-on-image-click' ) ) {
				product_id = wrap.querySelector('.ast-quick-view-data').getAttribute( 'data-product_id' );
			}

			if ( quick_view && ! quick_view.classList.contains( 'loading' ) ) {
				quick_view.classList.add('loading');
			}

			if ( quick_view_bg && ! quick_view_bg.classList.contains( 'ast-quick-view-bg-ready' ) ) {
				quick_view_bg.classList.add( 'ast-quick-view-bg-ready' );
			}

			// stop loader
			document.dispatchEvent(new Event("ast_quick_view_loading"));

			// Append the single product markup into the popup.
			// Process the AJAX to open the product.
			let xhrRequest = new XMLHttpRequest();
			xhrRequest.open('POST', astra.ajax_url, true);
			xhrRequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
			xhrRequest.send( 'action=ast_load_product_quick_view&product_id= ' + product_id );
			xhrRequest.responseType = 'text';
			xhrRequest.onreadystatechange = function () {
				const string = xhrRequest.responseText;

				if ( xhrRequest.readyState == XMLHttpRequest.DONE ) {   // XMLHttpRequest.DONE == 4
					if ( 200 <= xhrRequest.status || 400 <= xhrRequest.status ) {

						const quickViewMarkup = document.querySelector('#ast-quick-view-modal');
						quickViewMarkup.querySelector('#ast-quick-view-content').innerHTML = string;
						// Added for compatibility with Astra Quick View for Spectra Modal.
						const loadAstraQuickViewForModal = new CustomEvent('AstraQuickViewForModal', {
							detail: {
								'class_name': '.uagb-modal-wrapper',
							},
						});
						document.dispatchEvent(loadAstraQuickViewForModal);
						AstraProQuickView._after_markup_append_process();
					}
				}
			}
			
			const closeCart = document.querySelector('.astra-cart-drawer-close');

			if( closeCart && astra.woo_cart_empty_featured_product ) {
				document.querySelector('.astra-cart-drawer-close').click();
			}
		},

		/**
		 * Auto set height to the content.
		 */
		_after_markup_append_process: function() {

			let quick_view 		   = document.querySelector( '#ast-quick-view-modal' ),
				quick_view_content = quick_view.querySelector( '#ast-quick-view-content' ),
				form_variation     = quick_view_content.querySelectorAll('.variations_form');

				if ( quick_view && ! quick_view.classList.contains('open') ) {

					let modal_height  = quick_view_content.outerHeight,
						window_height = window.innerHeight,
						$html 		  = document.querySelector( 'html' );

					if( modal_height > window_height ) {
						$html.style.marginRight = AstraProQuickView._get_scrollbar_width();
					} else {
						$html.style.marginRight = '';
						if ( $html.querySelector('.ast-sticky-active') ) {
							$html.querySelector('.ast-sticky-active').style.maxWidth = '100%';
						}
						if ( $html.querySelector('.ast-header-sticky-active') ) {
							$html.querySelector('.ast-header-sticky-active').style.maxWidth = '100%';
						}
						if ($html.querySelector('.ast-custom-footer')) {
							$html.querySelector('.ast-custom-footer').style.maxWidth = '100%';
						}
					}

					$html.classList.add('ast-quick-view-is-open');
				}

				// Here we use Jquery intentionally because of some critical cases
				let quick_view_box = jQuery(document).find('#ast-quick-view-modal');
				// Initialize variable form.
				if ( quick_view_box.length > 0 ) {

					// Trigger variation form actions.
					quick_view_box.find('.variations_form').trigger( 'check_variations' );
					quick_view_box.find('.variations_form').trigger( 'reset_image' );

					// Trigger variation form.
					quick_view_box.find('.variations_form').wc_variation_form();
					quick_view_box.find('.variations_form select').change();

					// Initialize flex slider.
					const image_slider_wrap = quick_view_box.find('.ast-qv-image-slider');
					if ( image_slider_wrap.find('li').length > 1 ) {
						image_slider_wrap.flexslider();

						try {
								productVariation(image_slider_wrap);
						}
						catch(err) {
						}

					}
				}

			setTimeout(function() {
				AstraProQuickView._auto_set_content_height_by_image();

				// Add popup open class.
				quick_view.classList.remove('loading');
				quick_view.classList.add('open');
				document.querySelector('.ast-quick-view-bg').classList.add('open');
			}, 100);

			// stop loader
			document.dispatchEvent( new Event( "ast_quick_view_loader_stop" ) );
		},

		/**
		 * Auto set height to the content depends on the option.
		 *
		 * @return {[type]} [description]
		 */
		_auto_set_content_height_by_image: function() {

			imagesLoaded( document.querySelector('#ast-quick-view-modal'), function() {

				let quick_view 		   = document.getElementById('ast-quick-view-modal');
				let image_height = quick_view.querySelector('.woocommerce-product-gallery__image img').getBoundingClientRect().height,
					summary = quick_view.querySelector('.product .summary.entry-summary');

				// No Image.
				let featured_image = quick_view.querySelectorAll('.woocommerce-product-gallery__image img, .ast-qv-slides img');

				/**
				 * Auto height to the content as per image height.
				 *
				 * @param  {[type]} AstraProQuickView.auto_popup_height_by_image [description]
				 * @return {[type]}                                              [description]
				 */
				let popup_height = parseFloat( window.innerHeight ) - 120;
				image_height = parseFloat( image_height );

				if( AstraProQuickView.auto_popup_height_by_image ) {
					if( featured_image.length ) {

						// If image height is less then popup/window height the set max height of `image` to the summery.
						if (image_height < popup_height) {
							summary.style.maxHeight = parseFloat(image_height) + 'px';

						// Or set the popup/window height.
						} else {
							summary.style.maxHeight = popup_height + 'px';
						}
					} else {
						summary.style.width = '100%';
					}
				} else {
					summary.style.maxHeight = parseFloat(popup_height) + 'px';
				}

				/**
				 * Stick the Add to Cart Box.
				 *
				 * @param  {[type]} AstraProQuickView.stick_add_to_cart [description]
				 * @return {[type]}                                     [description]
				 */
				if( AstraProQuickView.stick_add_to_cart ) {

					quick_view.classList.add('stick-add-to-cart');

					let cart_height  = quick_view.querySelector('.cart').getBoundingClientRect().height;
					let summery_height = parseFloat(popup_height) - parseFloat(cart_height);

					// Reset the summery height:
					// If Image height is large than the stick cart form
					// Then calculate the sticky cart height and set the summery.
					if( image_height > cart_height ) {

						// Stick Class.
						quick_view.querySelector('.cart').classList.add('stick');

						// Recalculate the outer heights,
						// Because, These are change after adding `stick` class to the form.
						popup_height   = document.querySelector('#ast-quick-view-content').getBoundingClientRect().height;
						cart_height    = quick_view.querySelector('.cart').getBoundingClientRect().height;
						summery_height = parseFloat(popup_height) - parseFloat(cart_height);

						summary.style.maxHeight = parseFloat(summery_height) + 'px';

					} else {

						// If image height is less then popup/window height the set max height of `image` to the summery.
						if (popup_height > summery_height) {
							summary.style.maxHeight = parseFloat(popup_height) + 'px';
						} else {
							summary.style.maxHeight = '';
						}
					}
				}
			});

		},

		/**
		 * Close box with esc key.
		 *
		 * @param  {[type]} e [description]
		 * @return {[type]}   [description]
		 */
		_close_quick_view_on_esc_keypress: function( e ) {
			if( e.keyCode === 27 ) {
				AstraProQuickView._close_quick_view();
			}
		},

		/**
		 * Close Quick View.
		 *
		 * @param  {[type]} e [description]
		 * @return {[type]}   [description]
		 */
		 _close_quick_view: function( e ) {

			if( e ) {
				e.preventDefault();
			}

			document.querySelector( '.ast-quick-view-bg' ).classList.remove('ast-quick-view-bg-ready' );
			document.querySelector( '#ast-quick-view-modal' ).classList.remove( 'open', 'loading');
			document.querySelector( '.ast-quick-view-bg' ).classList.remove('open');
			document.querySelector( 'html' ).classList.remove('ast-quick-view-is-open');
			document.querySelector( 'html' ).style.marginRight = "";

			setTimeout(function () {
				document.querySelector( '#ast-quick-view-modal' ).querySelector( '#ast-quick-view-content' ).innerHTML = '';
			}, 600);
		},

		/**
		 * Close box by click overlay.
		 *
		 * @param  {[type]} e [description]
		 * @return {[type]}   [description]
		 */
		_close_quick_view_on_overlay_click: function( e ) {
			if ( this === e.target ) {
				AstraProQuickView._close_quick_view();
			}
		},

		/**
		 * Get Scrollbar Width
		 *
		 * @return {[type]} [description]
		 */
		 _get_scrollbar_width: function () {
			// Append our div, do our calculation and then remove it.
			const divElement = document.createElement("div");

			divElement.classList.add('ast-get-scrollbar-width');
			divElement.style.width = '50px';
			divElement.style.height = '50px';
			divElement.style.overflow = 'hidden';
			divElement.style.position = 'absolute';
			divElement.style.top = '-200px';
			divElement.style.left = '-200px';

			const childElement = document.createElement("div");

			childElement.style.height = '100px';

			divElement.appendChild(childElement);
			document.querySelector("body").appendChild(divElement);

			const w1 = document.querySelector('.ast-get-scrollbar-width').clientWidth;

			divElement.style.overflowY = 'scroll';

			const w2 = document.querySelector('.ast-get-scrollbar-width').clientWidth;

			document.querySelector('.ast-get-scrollbar-width').remove();

			return (w1 - w2);
		}

	};

	/**
	 * Initialization
	 */
	const domReady = function(callback) {
		document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
	};
	domReady(function() {
		AstraProQuickView.init();
	});

	const cart_flyout = document.getElementById('astra-mobile-cart-drawer');

	document.addEventListener( 'astra_on_slide_In_cart_open', function() {
		if( astra.woo_cart_empty_featured_product && cart_flyout && cart_flyout.classList.contains( 'active' ) ) {
			AstraProQuickView.init(); 
		}
	})
	
	document.addEventListener( 'astra_on_slide_in_cart_empty', function() {
		if( astra.woo_cart_empty_featured_product && cart_flyout && cart_flyout.classList.contains( 'active' ) ) {
			AstraProQuickView.init(); 
		}
	});
	document.addEventListener( 'astraInfinitePaginationLoaded' , function() {
		AstraProQuickView.init();
	})

})();
