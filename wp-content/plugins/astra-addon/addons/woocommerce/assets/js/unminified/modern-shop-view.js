/**
 * WooCommerce shop layout view updation.
 *
 * @package Astra Addon
 * @since x.x.x
 */

/**
 * Astra updating shop view. Grid|List.
 */
function astraUpdateShopView() {
	var shopViewButtons = document.querySelectorAll( '.ast-view-trigger' );
	for ( var count = 0; count < shopViewButtons.length; count++ ) {
		shopViewButtons[count].onclick = function( e ) {
			e.preventDefault();

			var viewType = this.dataset.view;
			document.querySelector( '.ast-view-trigger.active' ).classList.remove( 'active' );
			this.classList.add( 'active' );

			if( document.body.classList.contains( 'ast-default-shop-page-list-style' ) ) {
				if( 'grid' === viewType ) {
					document.body.classList.remove( 'ast-woocommerce-shop-page-list-style' );
				} else {
					document.body.classList.add( 'ast-woocommerce-shop-page-list-style' );
				}
			} else {
				if( 'grid' === viewType ) {
					document.body.classList.remove( 'ast-woocommerce-shop-page-list-view' );
				} else {
					document.body.classList.add( 'ast-woocommerce-shop-page-list-view' );
				}
			}
		}
	}
}

/**
 * Astra updating shop toolbar strcture.
 */
function astraUpdateShopToolbar() {
	// Stick shop filters, view triggers at bottom.
	if( document.body.classList.contains( 'ast-default-shop-page-modern-style' ) ) {
		var filtersWrap = document.querySelector( '.ast-sticky-shop-filters' );
		if( ast_modern_shop.mobile_breakpoint >= window.innerWidth && ! filtersWrap ) {
			var toolbarContainerHTML = document.querySelector( '.ast-shop-toolbar-container' ).innerHTML,
				dummyPara = document.createElement( "p" );

			dummyPara.className = 'woocommerce-result-count';
			if ( null !== document.querySelector( '.woocommerce-result-count'  ) ) {
				dummyPara.innerHTML = document.querySelector( '.woocommerce-result-count' ).innerHTML;
			}

			noticeWrapper = document.querySelector('.woocommerce-notices-wrapper');

			noticeWrapper.parentNode.insertBefore( dummyPara, noticeWrapper.nextSibling );

			document.querySelector( '.ast-shop-toolbar-container' ).innerHTML = "<div class='ast-sticky-shop-filters'>" + toolbarContainerHTML + "</div>";
		} else if( ast_modern_shop.mobile_breakpoint < window.innerWidth && filtersWrap ) {
			var toolbarContainerHTML = document.querySelector( '.ast-sticky-shop-filters' ).innerHTML;
			document.querySelector( '.ast-shop-toolbar-container' ).innerHTML = toolbarContainerHTML;

			document.querySelector( '.woocommerce-notices-wrapper + .woocommerce-result-count' ).remove();
		}
        // Submit form on "orderby" select change to trigger shop filters.
		if( document.querySelector( '.ast-woocommerce-shop-page-modern-style .woocommerce-ordering' ) ) {
			document.querySelector( '.ast-woocommerce-shop-page-modern-style .woocommerce-ordering' ).addEventListener( 'change', function( event ) {
				if ( event.target.classList.contains( 'orderby' )) {
					event.target.closest( 'form' ).submit();
				}
			});
		}
	}
}

window.addEventListener('load', function () {
	astraUpdateShopToolbar();
	astraUpdateShopView();
});

window.addEventListener('resize', function () {
	astraUpdateShopToolbar();
	astraUpdateShopView();
});
