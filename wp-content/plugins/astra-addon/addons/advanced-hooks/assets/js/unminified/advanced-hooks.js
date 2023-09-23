(function($){

	/**
	 * Advanced Hooks
	 *
	 * @class AstraAdvancedHooks
	 * @since 1.0
	 */
	AstraAdvancedHooks = {

		/**
		 * Initializes a Advanced Hooks.
		 *
		 * @since 1.0
		 * @method init
		 */
		init: function()
		{
			// Init backgrounds.
			AstraAdvancedHooks.bind();
			AstraAdvancedHooks.php_snippet_area();
			AstraAdvancedHooks.action_description();
			AstraAdvancedHooks.bind_tooltip();
			AstraAdvancedHooks.initLayoutSettings();
			AstraAdvancedHooks.timeDurationEnabled();

			if( astraCustomHookVars.is_complete_package && document.body.classList.contains('block-editor-page') ) {
				wp.data.subscribe(function () {
					setTimeout( function () {
						AstraAdvancedHooks.code_editor_switcher();
					}, 1 );
				});
			}
		},

		timeDurationEnabled: function () {

			var startDateTime = $('#ast-advanced-time-duration-start-dt');
			var endDateTime = $('#ast-advanced-time-duration-end-dt');

			var timeDurationEnabledElement = $('#ast-advanced-time-duration-enabled');
			$('.ast-advanced-time-duration-enabled').toggle(timeDurationEnabledElement.is(':checked'));
			timeDurationEnabledElement.change(function () {
				$('.ast-advanced-time-duration-enabled').toggle(this.checked);
				if( ! this.checked ) {
					startDateTime.val('');
					endDateTime.val('');
				}
			});

			startDateTime.datetimepicker({
				timeFormat: 'HH:mm:ss',
				onClose: function(dateText, inst) {
					if (endDateTime.val() !== '') {
						var testStartDate = startDateTime.datetimepicker('getDate');
						var testEndDate = endDateTime.datetimepicker('getDate');
						if (testStartDate > testEndDate)
							endDateTime.datetimepicker('setDate', testStartDate);
					}
					else {
						endDateTime.val(dateText);
					}
				},
				onSelect: function (selectedDateTime){
					endDateTime.datetimepicker('option', 'minDate', startDateTime.datetimepicker('getDate') );
				}
			});
			endDateTime.datetimepicker({
				timeFormat: 'HH:mm:ss',
				onClose: function(dateText, inst) {
					if (startDateTime.val() !== '') {
						var testStartDate = startDateTime.datetimepicker('getDate');
						var testEndDate = endDateTime.datetimepicker('getDate');
						if (testStartDate > testEndDate)
							startDateTime.datetimepicker('setDate', testEndDate);
					}
					else {
						startDateTime.val(dateText);
					}
				},
				onSelect: function (selectedDateTime){
					startDateTime.datetimepicker('option', 'maxDate', endDateTime.datetimepicker('getDate') );
				}
			});

		},

		code_editor_switcher: function()
		{
			if( $('.edit-post-header-toolbar .ast-advanced-hook-enable-php-wrapper').length ) {
				return;
			}

			var editor = $('#editor'),
				switchMode = $($('#astra-editor-button-switch-mode').html());
			editor.find('.edit-post-header-toolbar').append( switchMode );
		},

		bind: function()
		{
			// Instead of updating PHP globals $parent_file, $submenu_file, used following JS for making Custom Layout menu active while editing any post.
			$( 'li#toplevel_page_' + astraCustomHookVars.home_slug + ', li#toplevel_page_' + astraCustomHookVars.home_slug + ' > a' ).removeClass('wp-not-current-submenu').addClass('wp-has-current-submenu');
			$( 'li#toplevel_page_' + astraCustomHookVars.home_slug + ' a[href="edit.php?post_type=astra-advanced-hook"]' ).parent().addClass('current');
			$( 'li#menu-appearance.wp-has-current-submenu, li#menu-appearance.wp-has-current-submenu > a' ).removeClass('wp-has-current-submenu');

			$( 'input[name="ast-advanced-hook-header[sticky]"]' ).on( 'change', AstraAdvancedHooks.stickyHeaderChanged );
			$( 'input[name="ast-advanced-hook-footer[sticky]"]' ).on( 'change', AstraAdvancedHooks.stickyFooterChanged );
			$( 'select[name="ast-advanced-hook-layout"]' ).on( 'change', AstraAdvancedHooks.layoutChanged );
			$( 'select[name="ast-advanced-hook-content[location]"]' ).on( 'change', AstraAdvancedHooks.contentLocationChanged );
		},

		bind_tooltip: function() {

			// Call Tooltip
			$('.ast-advanced-hook-heading-help').tooltip({
				content: function() {
					return $(this).prop('title');
				},
				tooltipClass: 'ast-advanced-hook-ui-tooltip',
				position: {
					my: 'center top',
					at: 'center bottom+10',
				},
				hide: {
					duration: 200,
				},
				show: {
					duration: 200,
				},
			});
		},

		php_snippet_area: function() {
			var url = window.location.href,
				button = $( '.ast-advanced-hook-enable-php-btn' ),
				button_input = button.children( '.ast-advanced-hook-with-php' );

			if( url.indexOf( '&code_editor' ) > -1 ) {
				button_input.val('enabled');
				$('body').addClass( 'astra-php-snippt-enabled' );
			} else if( url.indexOf( '&wordpress_editor' ) > -1 ) {
				button_input.val('');
				$('body').removeClass( 'astra-php-snippt-enabled' );
			}

			$(document).on( 'click', '.ast-advanced-hook-enable-php-btn', function(e) {
				e.preventDefault();
				var editor_type = $( this ).data( 'editor-type' ),
					url 		= window.location.href;

				if( url.indexOf( '&code_editor' ) > -1 || 'code_editor' == editor_type ) {
					button_input.val('enabled');
					$('body').addClass( 'astra-php-snippt-enabled' );
					url = url.replace( '&code_editor', '' );
					window.location.replace( url + '&wordpress_editor' );
				} else if( url.indexOf( '&wordpress_editor' ) > -1 || 'wordpress_editor' == editor_type ) {
					button_input.val('');
					$('body').removeClass( 'astra-php-snippt-enabled' );
					url = url.replace( '&wordpress_editor', '' );
					window.location.replace( url + '&code_editor' );
				} else {
					if ( $('body').hasClass( 'block-editor-page' ) ) {
						window.location = url + '&code_editor';
					} else {
						window.location = url + '&wordpress_editor';
					}
				}
			});
		},

		action_description: function() {
			$('#ast-advanced-hook-action').on('change', function(e) {
				var desc_wrap    = $(this).next('.ast-advanced-hook-action-desc'),
					desc_content = $(this).find('option:selected').attr('data-desc'),
					action      = $( '#ast-advanced-hook-action' ).val();

				if( 'custom_hook' === action ) {
					$( '.ast-custom-action-wrap' ).show();
				} else {
					$( '.ast-custom-action-wrap' ).hide();
				}

				if ( 'undefined' != typeof desc_content && '' != desc_content ) {
					desc_wrap.removeClass('ast-no-desc');
					desc_wrap.text(desc_content);
				} else {
					desc_wrap.addClass('ast-no-desc');
					desc_wrap.text('');
				}
			});
		},

		/**
		 * Init the layout settings based on layout.
		 *
		 * @since 1.0
		 * @method initLayoutSettings
		 */
		initLayoutSettings: function()
		{
			var layout      = $( '#ast-advanced-hook-layout' ).val(),
				action      = $( '#ast-advanced-hook-action' ).val(),
				sticky_header    = $( 'input[name="ast-advanced-hook-header[sticky]"]' ),
				sticky_footer    = $( 'input[name="ast-advanced-hook-footer[sticky]"]' ),
				content_location = $( '#ast-advanced-hook-content-location' ).val();

			$( '.ast-layout-content-after-blocks, .ast-layout-content-before-heading, .ast-layout-content-location-required, .ast-inside-content-notice' ).hide();

			if( 'header' == layout ){
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-header-required' ).show();
				$( '.ast-layout-required' ).show();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-404-layout-required' ).hide();
			} else if( 'hooks' == layout ){
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-hooks-required' ).show();
				$( '.ast-layout-required' ).show();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-404-layout-required' ).hide();
				if( 'custom_hook' === action ) {
					$( '.ast-custom-action-wrap' ).show();
				} else {
					$( '.ast-custom-action-wrap' ).hide();
				}
			} else if( 'footer' == layout ) {
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-footer-required' ).show();
				$( '.ast-layout-required' ).show();
				$( '.ast-404-layout-required' ).hide();
			} else if ( '404-page' == layout ) {
				$( '.ast-404-layout-required' ).show();
				$( '.ast-target-rules-user' ).show();
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-target-rules-display' ).hide();
				$( '.ast-target-rules-exclude' ).hide();
			} else if ( 'content' == layout ) {
				$( '.ast-layout-content-required' ).show();
				$( '.ast-target-rules-user' ).show();
				$( '.ast-target-rules-display' ).show();
				$( '.ast-layout-content-location-required' ).show();
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-404-layout-required' ).hide();
				$( '.ast-inside-content-notice' ).show();

				if( 'after_blocks' === content_location ) {
					$( '.ast-layout-content-after-blocks' ).show();
					$( '.ast-inside-content-blocks-notice' ).show();
				} else {
					$( '.ast-layout-content-before-heading' ).show();
					$( '.ast-inside-content-heading-notice' ).show();
				}
			} else {
				$( '.ast-layout-content-required' ).hide();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-required' ).hide();
				$( '.ast-404-layout-required' ).hide();
			}

			if( sticky_header.is(':checked') && 'header' == layout ){
				$( '.ast-layout-header-sticky-required' ).show();
			}
			else{
				$( '.ast-layout-header-sticky-required' ).hide();
			}

			if( sticky_footer.is(':checked') && 'footer' == layout ){
				$( '.ast-layout-footer-sticky-required' ).show();
			}
			else{
				$( '.ast-layout-footer-sticky-required' ).hide();
			}
		},

		stickyHeaderChanged: function()
		{
			if( $(this).is(':checked') ){
				$( '.ast-layout-header-sticky-required' ).show();
			}
			else{
				$( '.ast-layout-header-sticky-required' ).hide();
			}
		},

		stickyFooterChanged: function()
		{
			if( $(this).is(':checked') ){
				$( '.ast-layout-footer-sticky-required' ).show();
			}
			else{
				$( '.ast-layout-footer-sticky-required' ).hide();
			}
		},

		layoutChanged: function()
		{
			var val     = $(this).val(),
				content_location      = $( '#ast-advanced-hook-content-location' ).val(),
			    sticky_header  = $( 'input[name="ast-advanced-hook-header[sticky]"]' ),
			    sticky_footer  = $( 'input[name="ast-advanced-hook-footer[sticky]"]' );

			$( '.ast-layout-content-after-blocks' ).hide();
			$( '.ast-layout-content-before-heading' ).hide();
			$( '.ast-layout-content-location-required' ).hide();
			$( '.ast-inside-content-notice' ).hide();

			if( 'header' == val ){
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-layout-header-required' ).show();
				$( '.ast-layout-required' ).show();
				$( '.ast-layout-content-required' ).hide();
				$( '.ast-404-layout-required' ).hide();
			} else if( 'hooks' == val ){
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-layout-hooks-required' ).show();
				$( '.ast-layout-required' ).show();
				$( '.ast-layout-content-required' ).hide();
				$( '.ast-404-layout-required' ).hide();
			} else if( 'footer' == val ) {
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-footer-required' ).show();
				$( '.ast-layout-required' ).show();
				$( '.ast-layout-content-required' ).hide();
				$( '.ast-404-layout-required' ).hide();
			} else if ( '404-page' == val ) {
				$( '.ast-404-layout-required' ).show();
				$( '.ast-target-rules-user' ).show();
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-layout-content-required' ).hide();
				$( '.ast-target-rules-display' ).hide();
				$( '.ast-target-rules-exclude' ).hide();
			} else if( 'content' == val ) {
				$( '.ast-layout-content-required' ).show();
				$( '.ast-target-rules-user' ).show();
				$( '.ast-target-rules-display' ).show();
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-404-layout-required' ).hide();
				$( '.ast-layout-content-location-required' ).show();
				$( '.ast-inside-content-notice' ).show();

				if( 'after_blocks' === content_location ) {
					$( '.ast-layout-content-after-blocks' ).show();
				} else {
					$( '.ast-layout-content-before-heading' ).show();
				}

			} else {
				$( '.ast-layout-content-required' ).hide();
				$( '.ast-layout-header-required' ).hide();
				$( '.ast-layout-footer-required' ).hide();
				$( '.ast-layout-hooks-required' ).hide();
				$( '.ast-layout-required' ).hide();
				$( '.ast-404-layout-required' ).hide();
				$( '.ast-layout-content-required' ).hide();
			}

			if( sticky_header.is(':checked') && 'header' == val ){
				$( '.ast-layout-header-sticky-required' ).show();
			}
			else{
				$( '.ast-layout-header-sticky-required' ).hide();
			}

			if( sticky_footer.is(':checked') && 'footer' == val ){
				$( '.ast-layout-footer-sticky-required' ).show();
			}
			else{
				$( '.ast-layout-footer-sticky-required' ).hide();
			}
		},

		contentLocationChanged: function() {
			var location = $(this).val();

			if( 'before_headings' == location ) {
				$( '.ast-layout-content-after-blocks' ).hide();
				$( '.ast-layout-content-before-heading' ).show();
			} else {
				$( '.ast-layout-content-after-blocks' ).show();
				$( '.ast-layout-content-before-heading' ).hide();
			}

		}
	}

	/* Initializes the Advanced Hooks. */
	$(function(){
		AstraAdvancedHooks.init();
	});

})(jQuery);
