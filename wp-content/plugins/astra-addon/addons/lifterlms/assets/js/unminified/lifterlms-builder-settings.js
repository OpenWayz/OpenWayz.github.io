/**
 *
 * @package Astra Addon
 * @since  1.3.3
 */

( function( $ ) {

	$(document).on('click', '.llms-action-icon.edit-lesson', function() {

		function toggle_sticky_header_options( value ) {
			var llms_id = '#llms-model-settings-field--';
			if ( 'enabled' == value ) {
				$( llms_id+'header-main-stick-meta' ).slideDown();
				$( llms_id+'header-above-stick-meta' ).slideDown();
				$( llms_id+'header-below-stick-meta' ).slideDown();
			} else {
				$( llms_id+'header-main-stick-meta' ).slideUp();
				$( llms_id+'header-above-stick-meta' ).slideUp();
				$( llms_id+'header-below-stick-meta' ).slideUp();
			}
		}

		$( 'select[name=stick-header-meta]' ).each(function(index, el) {
			var value = $( el ).val();
			toggle_sticky_header_options( value );
			$( el ).change(function(event) {
				value = $( el ).val();
				toggle_sticky_header_options( value );
			});
		});
	});

} )( jQuery );
