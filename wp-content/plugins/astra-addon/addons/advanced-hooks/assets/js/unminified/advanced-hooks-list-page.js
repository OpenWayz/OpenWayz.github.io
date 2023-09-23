/**
 * Custom Layout Enable or Disable actions.
 *
 * @package Astra Addon
 * @since x.x.x
 */

const toggelSwitch = function() {
	const self = this;
	self.classList.toggle('ast-active');
	const enable = self.classList.contains('ast-active') ? 'yes' : 'no'
	// Ajax request.
	const xhttp = new XMLHttpRequest();
	const ajaxUrl = astHooksData.url + '?action=ast_advanced_hook_display_toggle&post_id=' + self.dataset.post_id + '&enable=' + enable + '&nonce=' + astHooksData.nonce;
	xhttp.open("GET", ajaxUrl);
	xhttp.send();
}
const quickViewPopup = function( event ) {
	const self = this;
	self.classList.add( "requesting" );

	// Ajax request.
	const xhttp = new XMLHttpRequest();
	const ajaxUrl = astHooksData.url + '?action=ast_advanced_layout_quick_preview&post_id=' + self.dataset.layout_id + '&nonce=' + astHooksData.quick_view_nonce;
	xhttp.open( "GET", ajaxUrl );
	xhttp.send();
	xhttp.onload = function() {
		const response = JSON.parse( xhttp.response );
		self.classList.remove( "requesting" );
		if ( response.success ) {
			const template = wp.template( 'ast-modal-view-layout-details' );
			document.body.style.overflow = 'hidden';
			document.querySelector( ".ast-custom-layout-preview-wrapper" ).innerHTML = template( response.data );
		}
	}
}
const copyShortcodeToClipboard = function() {
	const self = this,
		toBeCopyInputSelector = self.dataset.linked_span,
		copyTextTarget = document.querySelector( '.' + toBeCopyInputSelector ),
		hiddenInpput = document.createElement( "input" );

	hiddenInpput.setAttribute( "value", copyTextTarget.innerHTML );
	document.body.appendChild(hiddenInpput);
	hiddenInpput.select();

	if ( document.execCommand( 'copy' ) ) {
		self.classList.add( 'shortcode-copied' );
		setTimeout( function () {
			self.classList.remove( 'shortcode-copied' );
		}, 1000 );
	}

	document.body.removeChild(hiddenInpput);
}
document.addEventListener("DOMContentLoaded", function() {
	// For Enable/Disable toggle switch.
	const switchSelector = document.querySelectorAll('.ast-custom-layout-switch');
	for ( let switchSelectorCount = 0; switchSelectorCount < switchSelector.length; switchSelectorCount++ ) {
		switchSelector[switchSelectorCount].addEventListener( 'click', toggelSwitch, false );
	}

	// For Quick View popup setup.
	const quickViewSelector = document.querySelectorAll('.advanced_hook_data_trigger');
	for ( let quickViewSelectorCount = 0; quickViewSelectorCount < quickViewSelector.length; quickViewSelectorCount++ ) {
		quickViewSelector[quickViewSelectorCount].addEventListener( 'click', quickViewPopup, false );
	}

	// Shortcode copy to clipboard.
	const shortcodeCopySelector = document.querySelectorAll('.ast-copy-layout-shortcode');
	for ( let shortcodeCopySelectorCount = 0; shortcodeCopySelectorCount < shortcodeCopySelector.length; shortcodeCopySelectorCount++ ) {
		shortcodeCopySelector[shortcodeCopySelectorCount].addEventListener( 'click', copyShortcodeToClipboard, false );
	}

	document.addEventListener( 'click', function(e) {
		if( e.target && e.target.id === 'modal-close-link' ) {
			document.body.style.overflow = 'auto';
			document.querySelector( ".ast-custom-layout-preview-wrapper" ).innerHTML = '';
		}
	});
});
