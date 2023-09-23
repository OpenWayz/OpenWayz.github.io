
window.addEventListener('DOMContentLoaded', (event) => {
    CartCrossSellsSummaryHeight();
});

function CartCrossSellsSummaryHeight() {
    const checkIfCart               = document.querySelector( 'body' );
    const crossSellsProductsWrapper = document.querySelector( '.cross-sells' );

    if( checkIfCart.classList.contains( 'woocommerce-cart' ) && crossSellsProductsWrapper ) {
        const crossSellsProducts = crossSellsProductsWrapper.querySelectorAll( '.products > li' );

        if( crossSellsProducts ) {
            crossSellsProducts.forEach( singleProduct => {
                if( singleProduct ) {
                    const singleProductSummary              = singleProduct.querySelectorAll( '.astra-shop-summary-wrap' );
                    if( singleProductSummary ) {
                        singleProductSummary.forEach( singleSummary => {
                            const singleProductSummaryButton    = singleSummary.querySelector( '.price' );
                            const singleProductSummaryPrice     = singleSummary.querySelector( 'a.button' );
                            const quickView                     = singleSummary.querySelector( 'a.ast-quick-view-button' );
                            if( singleProductSummaryButton || singleProductSummaryPrice ) {

                                const buttonHeight          = singleProductSummaryButton ? singleProductSummaryButton.clientHeight : 0;
                                const priceHeight           = singleProductSummaryPrice ? singleProductSummaryPrice.clientHeight : 0 ;                                
                                const quickViewButtonHeight = quickView ? quickView.clientHeight : 0;
                                const currentHeight = buttonHeight + priceHeight + quickViewButtonHeight + 15;
    
                                if( currentHeight ) {
                                    singleSummary.style.minHeight = currentHeight + 'px';
                                }
                            }
                        });
                    }
                    
                }
            });
        }

    }
}

CartCrossSellsSummaryHeightResize();

function CartCrossSellsSummaryHeightResize() {
    let resizeEnd;

    window.addEventListener( 'resize' , function( event ){
        clearTimeout( resizeEnd );
        resizeEnd = setTimeout( function() {
            CartCrossSellsSummaryHeight();
        }, 500 );
    });
}

