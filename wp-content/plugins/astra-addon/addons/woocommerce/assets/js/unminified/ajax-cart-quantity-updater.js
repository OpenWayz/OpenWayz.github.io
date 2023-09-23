window.addEventListener('DOMContentLoaded', (event) => {
    cartQuantityUpdater();
});

function cartQuantityUpdater() {
    const checkIfCart = document.querySelector('body');
    pageParentClass   = document.querySelector( 'div.woocommerce' );
    let timeout;
    
    if( checkIfCart.classList.contains( 'woocommerce-cart' ) && pageParentClass ) {
        
        pageParentClass.addEventListener( 'change' , function(e) {

            if( e.target && e.target.classList.contains( 'qty' ) ){
                if ( timeout != undefined ) clearTimeout( timeout );
                if ( e.target.value == '' ) return;
                timeout = setTimeout( function() {
                    document.querySelector( '[name="update_cart"]' ).click();
                }, 1000 )
            }
            
        } );
    }

}