/**
 * Astra Addon Customizer JS
 *
 * @package Astra Addon
 * @since  1.4.0
 */

(function( $ ) {

	ASTExtAdmin = {

		init: function() {
			$(document).on( 'click', ".ast-customizer-internal-link", ASTExtAdmin.navigate_section );
			$(document).on( 'change', "#customize-control-astra-settings-mobile-menu-style select, #customize-control-astra-settings-mobile-above-header-menu-style select, #customize-control-astra-settings-mobile-below-header-menu-style select", ASTExtAdmin.remove_no_toggle_style );
		},

		navigate_section: function() {
			$this = jQuery( this );
			var sectionToNavigate = $this.data('ast-customizer-section') || '';
			var section = wp.customize.section( sectionToNavigate );
			section.expand();
		},

		remove_no_toggle_style: function() {
			var self = jQuery( this );
			var noToggleStyle = self.find( 'option[value="no-toggle"]' );
			if ( noToggleStyle.length && astAdminLacalizeVars.astra_no_toggle_menu_style_deprecate == false ) {
				noToggleStyle.remove();
			}
		},
	}

	$( document ).ready(function() {
		ASTExtAdmin.init();
	});

})( jQuery );
