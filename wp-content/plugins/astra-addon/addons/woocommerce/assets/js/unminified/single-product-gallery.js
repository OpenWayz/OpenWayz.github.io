document.addEventListener( "DOMContentLoaded" , function () {
    triggerFirstSlide();
} );

function triggerFirstSlide() {
    const sliderTrigger = document.querySelector( '.woocommerce-product-gallery-thumbnails__wrapper div' );
    const variationWrap = jQuery( '.single_variation_wrap' );

    if( variationWrap && sliderTrigger ) {
      variationWrap.on( "show_variation", function ( event, variation ) {
        sliderTrigger.click();
      } );
    }
   
}