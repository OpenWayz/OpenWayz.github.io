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
	var astWooFormTriggerLinks = document.querySelectorAll( '.ast-woo-account-form-link' );

	for ( var count = 0; count < astWooFormTriggerLinks.length; count++ ) {
		astWooFormTriggerLinks[count].onclick = function( e ) {

			e.preventDefault();
			var type = this.dataset.type;

			if( 'do-register' === type ) {
				// Registration form should be visible.
				document.querySelector( '#customer_login > .u-column1' ).style.display = "none";
				document.querySelector( '#customer_login > .u-column2' ).style.display = "block";
			} else {
				// Login form should be visible.
				document.querySelector( '#customer_login > .u-column1' ).style.display = "block";
				document.querySelector( '#customer_login > .u-column2' ).style.display = "none";
			}
		}
	}
}

window.addEventListener('load', function () {
	astraUpdateShopView();
});
