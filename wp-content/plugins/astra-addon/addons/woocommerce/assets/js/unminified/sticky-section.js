const getHeaderHeightIfSticky = () => {
    const checkPage            = document.querySelector( 'body' );
    const isAboveFixed         = document.querySelector( '.ast-above-sticky-header-active' );
    const isFixedHeader        = document.querySelector( '.ast-primary-sticky-header-active' );
    const isBelowFixed         = document.querySelector( '.ast-below-sticky-header-active' ); 
    const isAdminBar           = document.querySelector( '.admin-bar' );
    const StickySections       = document.querySelectorAll( '.ast-sticky-active' );
    let isSticky
    let stickySelector;

    if( checkPage && ( checkPage.classList.contains( 'woocommerce-shop' ) || checkPage.classList.contains( 'ast-woo-shop-archive' ) ) ) {
        isSticky       = document.querySelector( '.woocommerce-shop.ast-left-sidebar #content .ast-container, .woocommerce-shop.ast-right-sidebar #content .ast-container, .ast-woo-shop-archive.ast-left-sidebar #content .ast-container, .ast-woo-shop-archive.ast-right-sidebar #content .ast-container' );
        stickySelector = document.querySelector( '.woocommerce-shop.ast-left-sidebar #content .ast-container > .widget-area, .woocommerce-shop.ast-right-sidebar #content .ast-container > .widget-area, .ast-woo-shop-archive.ast-left-sidebar #content .ast-container > .widget-area, .ast-woo-shop-archive.ast-right-sidebar #content .ast-container > .widget-area' );
    }

    if( checkPage && checkPage.classList.contains( 'woocommerce-cart' ) && astraAddon.cart_sticky_cart_totals ) {
        isSticky       = document.querySelector( '#ast-cart-wrapper' );
        stickySelector = document.querySelector( '#ast-cart-wrapper .cart-collaterals' );
    }

    if( checkPage && checkPage.classList.contains( 'single-product' ) ) {
        isSticky       = document.querySelector( '#ast-sticky-row-summary' );
        stickySelector = document.querySelector( '#ast-sticky-row-summary .summary' );
    }

    if( checkPage && checkPage.classList.contains( 'woocommerce-checkout' ) && astraAddon.checkout_order_review_sticky ) {
        isSticky       = document.querySelector( '.woocommerce-checkout' );
        stickySelector = document.querySelector( '#ast-order-review-wrapper' );
    }


    if( StickySections ) {

        let siteHeaderHeight = 0;

        StickySections.forEach( single => {
            siteHeaderHeight += single.clientHeight;
        });

        if( isSticky && ( isAboveFixed || isFixedHeader || isBelowFixed ) && stickySelector && siteHeaderHeight ) {
            
            stickySelector.style.position = 'sticky';
            
            if( isAdminBar ) {
                stickySelector.style.top = siteHeaderHeight + 50 + 'px';
            } else {
                stickySelector.style.top = siteHeaderHeight + 20 + 'px';
            }
        } else {
            if( isSticky && stickySelector ) {

                stickySelector.style.position = 'sticky';

                if( isAdminBar ) {
                    stickySelector.style.top = 3 + 'em';
                } else {
                    stickySelector.style.top = 1 + 'em'; 
                }
            }
        }
    }
}

window.onscroll = function(event) {
    getHeaderHeightIfSticky();
};

