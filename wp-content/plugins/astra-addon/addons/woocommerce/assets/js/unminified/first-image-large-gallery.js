
const woocommerceGallery = document.querySelector( '.woocommerce-product-gallery__wrapper' );
const mediaQuery = window.matchMedia( '(min-width: 922px)' );

if (  woocommerceGallery && ! mediaQuery.matches ) {
    
    let slider = tns( {
        container: '.woocommerce-product-gallery__wrapper',
        items: 1,
        slideBy: 'page',
        mouseDrag: true,
        loop: false
    } );

    destroySlider( slider );

    triggerFirstSlide( slider );
    
    let resizeEnd;
    window.addEventListener('resize', function() {
        clearTimeout( resizeEnd );
        resizeEnd = setTimeout( function() {
            destroySlider( slider );
        }, 250 );   
    } );

}

function destroySlider( slider ) {
    const productGallery = document.querySelector( '.woocommerce-product-gallery__wrapper' );

    if( mediaQuery.matches && productGallery && productGallery.classList.contains('tns-slider') ) {
        slider.destroy();
    }
} 

function triggerFirstSlide( slider ) {
    const variationWrap = jQuery( '.single_variation_wrap' );

    if( variationWrap ) {
      variationWrap.on( "show_variation", function ( event, variation ) {
        slider.goTo('first');
      } );
    } 
}