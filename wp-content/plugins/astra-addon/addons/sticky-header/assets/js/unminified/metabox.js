/**
 * Sticky Header Metabox
 *
 * @package Astra Addon
 * @since 1.0.0
 */

(function( $ ) {

	function toggle_sticky_header_options( value ) {
		if ( 'enabled' == value ) {
			$( '#stick-header-meta-options' ).slideDown();
			toggle_sticky_header_opacity();
		} else {
			$( '#stick-header-meta-options' ).slideUp();
			$( '.sticky-header-bg-opc-wrap' ).slideUp();
		}
	}

	$( '#stick-header-meta' ).each(function(index, el) {
		var value = $( el ).val();
		toggle_sticky_header_options( value );
		$( el ).change(function(event) {
			value = $( el ).val();
			toggle_sticky_header_options( value );
		});
	});

	$( '#stick-header-meta-options input' ).click(function() {
		toggle_sticky_header_opacity();
	});

	function toggle_sticky_header_opacity() {
		var checkedValues = $( '#stick-header-meta-options input[type=checkbox]:checked' ).map(function () {
	        return this.value;
	    }).get();
	    if (checkedValues == '') {
	    	$( '.sticky-header-bg-opc-wrap' ).slideUp();
	    } else {
	    	$( '.sticky-header-bg-opc-wrap' ).slideDown();
	    }
	}
	
	/**
	 * Below Header meta option
	 */
	toggle_sticky_suppl_options();
	$( '#ast-below-header-display').click(function(){
		toggle_sticky_suppl_options();
		toggle_stick_wrapper();
	})

	function toggle_sticky_suppl_options(){
		if ( $( '#ast-below-header-display' ).is(':checked')) {
			$( '.sticky-below-header-meta-wrapper' ).slideUp();
		}
		else{
			$( '.sticky-below-header-meta-wrapper' ).slideDown();	
		}
	}

	/**
	 * Above Header meta option
	 */
	toggle_sticky_above_header_options();
	$( '#ast-above-header-display').click(function(){
		toggle_sticky_above_header_options();
		toggle_stick_wrapper();
	})

	function toggle_sticky_above_header_options(){
		if ( $( '#ast-above-header-display' ).is(':checked')) {
			$( '.sticky-above-header-meta-wrapper' ).slideUp();
		}
		else{
			$( '.sticky-above-header-meta-wrapper' ).slideDown();	
		}
	}

	/**
	 * Above Header meta option
	 */
	toggle_sticky_primary_header_options();
	$( '#ast-main-header-display').click(function(){
		toggle_sticky_primary_header_options();
		toggle_stick_wrapper();
	})

	function toggle_sticky_primary_header_options(){
		if ( $( '#ast-main-header-display' ).is(':checked')) {
			$( '.stick-main-header-meta-wrapper' ).slideUp();
		}
		else{
			$( '.stick-main-header-meta-wrapper' ).slideDown();	
		}
	}
	/**
	 * Header meta option disabled
	 */
	toggle_stick_wrapper();

	function toggle_stick_wrapper(){
		//Main Header & Above Header & Below Header
		 if( $('#ast-main-header-display').length && $('#ast-above-header-display').length && $('#ast-below-header-display').length)
		{
		     if ( $( '#ast-main-header-display' ).is(':checked') && 
				$( '#ast-above-header-display' ).is(':checked') && 
				$( '#ast-below-header-display' ).is(':checked')) 
			{
				$( '.stick-header-wrapper' ).slideUp();
			}
			else{
				$( '.stick-header-wrapper' ).slideDown();	
			}
		}
		//Main Header & Above Header
		else if( $('#ast-main-header-display').length && $('#ast-above-header-display').length)
			{
		     	if ( $( '#ast-main-header-display' ).is(':checked') && 
					$( '#ast-above-header-display' ).is(':checked')) 
				{
					$( '.stick-header-wrapper' ).slideUp();
				}
				else{
					$( '.stick-header-wrapper' ).slideDown();	
				}
		}
		//Main Header & Below Header
		else if( $('#ast-main-header-display').length && $('#ast-below-header-display').length)
		{
		     if ( $( '#ast-main-header-display' ).is(':checked') && 
				$( '#ast-below-header-display' ).is(':checked')) 
			{
				$( '.stick-header-wrapper' ).slideUp();
			}
			else{
				$( '.stick-header-wrapper' ).slideDown();	
			}
		}
		//Main Header
		else{
			if ( $( '#ast-main-header-display' ).is(':checked') ) 
			{
				$( '.stick-header-wrapper' ).slideUp();
			}
			else{
				$( '.stick-header-wrapper' ).slideDown();	
			}
		}
	}

})( jQuery );
