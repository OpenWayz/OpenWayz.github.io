window.addEventListener('DOMContentLoaded', (event) => {
    customCoupon();
});

// Triggers Coupon.
function customCoupon() {
    const pageParentClass   = document.querySelector( 'div.woocommerce' );
    const wooAstraWrap      = document.querySelector( 'body' );
    
    if( pageParentClass && ( wooAstraWrap.classList.contains( 'woocommerce-checkout' ) || wooAstraWrap.classList.contains( 'woocommerce-cart' ) ) ) {
        const triggerCouponClick = (e) => {
            const realCouponInput            = document.querySelector( '#coupon_code' );
            const realCouponButton           = document.querySelector( 'button[name="apply_coupon"]' );
            const customCouponSelectorInput  = document.querySelector( '#ast-coupon-code' );
            const couponContentWrapper       = document.querySelector( '#ast-checkout-coupon .coupon' );
    
            // Show coupon field.
            if( couponContentWrapper && e.target && 'ast-coupon-trigger' === e.target.id ){
                couponContentWrapper.style.display  = "flex";
                e.target.style.display              = "none"
            }
    
            // Adds value inside real input and triggers click.
            if( realCouponInput && realCouponButton && customCouponSelectorInput && e.target && 'ast-apply-coupon' === e.target.id ){
                realCouponInput.value = customCouponSelectorInput.value;
                realCouponButton.click();
            }
        }
        pageParentClass.addEventListener( 'click' ,function(e) {
            triggerCouponClick(e);
        } ) 
        // Trigger click for Coupon through Enter Key on Tab Navigation.
        pageParentClass.addEventListener('keypress', function (e) {
            const key = e.which || e.keyCode;
            if (key === 13) {
                triggerCouponClick(e);
            }
        });
    }
}




