( function( $ ) {

	/**
	 * Handles logic for the theme layout admin edit interface.
	 *
	 * @class AstraPageTitleBarAdminEdit
	 * @since 1.0
	 */
	AstraPageTitleBarAdmin = {

		/**
		 * Initializes the theme layout admin edit interface.
		 *
		 * @since 1.0
		 * @access private
		 * @method _init
		 */
		_init: function()
		{

			this._bind();
			this._initLayoutSettings();
			this._inputFileInit();
		},

		/**
		 * Binds events for the theme layout admin edit interface.
		 *
		 * @since 1.0
		 * @access private
		 * @method _bind
		 */
		_bind: function()
		{
			// Instead of updating PHP globals $parent_file, $submenu_file, used following JS for making Custom Layout menu active while editing any post.
			$( 'li#menu-appearance.wp-has-current-submenu, li#menu-appearance.wp-has-current-submenu > a' ).removeClass('wp-has-current-submenu');
			$( 'li#toplevel_page_' + astraPageHeaderVars.home_slug + ', li#toplevel_page_' + astraPageHeaderVars.home_slug + ' > a' ).removeClass('wp-not-current-submenu').addClass('wp-has-current-submenu');
			$( 'li#toplevel_page_' + astraPageHeaderVars.home_slug + ' a[href="edit.php?post_type=astra_adv_header"]' ).parent().addClass('current');

			// Call Tooltip
			$('.ast-advanced-headers-heading-help').tooltip({
				content: function() {
					return $(this).prop('title');
				},
				tooltipClass: 'ast-advanced-headers-ui-tooltip',
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

			$('.ast-advanced-headers-heading-img-help').tooltip({
				content: function() {
					return $(this).prop('title');
				},
				tooltipClass: 'ast-advanced-headers-ui-img-tooltip',
				position: {
					my: 'center top',
					at: 'center bottom+10',
				},
				hide: {
					duration: 0,
				},
				show: {
					duration: 0,
				},
			});

			// Call color picker
    		$('.ast-advanced-headers-color-picker').wpColorPicker();

			// General events
			$( '.ast-advanced-header-layout-radio-button-wrap label' ).on( 'click', this._astraPageTitleRadioImagesClicked );
			$( '#ast-advanced-headers-tabs ul li a' ).on( 'click', this._astraPageTitleTabsClicked );


			$( '#ast-advanced-header-layout-breadcrumb' ).on( 'change', this._astraBreadcrumbChecked );

			$( '#ast-advanced-header-layout-merged' ).on( 'change', this._astrPageTitleMergeChecked );

			$( '#ast-advanced-header-design-bg-size' ).on( 'change', this._astrPageTitleBgSizeChecked );

			$( '#ast-advanced-header-layout-above-header' ).on( 'change', this._astrAboveHeaderChecked );

			$( '#ast-advanced-header-layout-below-header' ).on( 'change', this._astrBelowHeaderChecked );

			$( '#ast-advanced-headers-design-custom-menu-item' ).on( 'change', this._astrCustomMenuChanged );

			$( '#ast-advanced-headers-design-custom-menu-item' ).trigger('change');

			// Force disable transparent header on archive pages.
			$('input[name="ast-advanced-headers-layout[force-transparent-disabled]"]').on('change', function() {
			   $('input[name="ast-advanced-headers-layout[force-transparent-disabled]"]').not(this).prop('checked', false);
			});

			$( '#ast-advanced-header-diff-header-logo' ).on( 'change', this._astrToggleLogo );
			$( '#ast-advanced-header-diff-header-retina-logo' ).on( 'change', this._astrToggleRetinaLogo );
		},

		/**
		 * Callback for when click button on image upload
		 * builder is clicked.
		 *
		 * @since 1.0
		 * @access private
		 * @method _inputFileInit
		 */
		_inputFileInit: function() {

			var file_frame;
			window.inputWrapper = '';

			$( document.body ).on('click', '.ast-advanced-headers-bg-image-select', function(e) {

				e.preventDefault();

				var button = $(this);
				window.inputWrapper = $(this).closest('.ast-advanced-headers-row-content');

				if ( file_frame ) {
					file_frame.open();
					return;
				}

				// Create the media frame.
				file_frame = wp.media( {
					multiple: false
				} );

				// When an image is selected, run a callback.
				file_frame.on( 'select', function() {

					var attachment = file_frame.state().get( 'selection' ).first().toJSON();

					// place first attachment in field
					window.inputWrapper.find( '#ast-advanced-headers-preview-img' ).children('.saved-image').remove();
					window.inputWrapper.find( '#ast-advanced-headers-preview-img' ).append('<img src="' + attachment.url + '" width="150" class="saved-image" style="margin-bottom:12px;" />');
					window.inputWrapper.find( '.ast-advanced-headers-bg-image-id' ).val( attachment.id );
					window.inputWrapper.find( '.ast-advanced-headers-bg-image' ).val( attachment.url );
					$('.ast-advanced-headers-bg-image-remove').show();
				});

				// Finally, open the modal
				file_frame.open();
			});

			$( '.ast-advanced-headers-bg-image-remove' ).on( 'click', function( e ) {
				e.preventDefault();

				var button   = $(this),
				    closeRow = $(this).closest('.ast-advanced-headers-row-content');

				    closeRow.find( '#ast-advanced-headers-preview-img img' ).hide();
				    closeRow.find( '.ast-advanced-headers-bg-image-id' ).val('');
				    closeRow.find( '.ast-advanced-headers-bg-image' ).val('');
				    button.hide();

			});

			// Logo Upload.
			$( document.body ).on('click', '.ast-advanced-header-logo-select', function(e) {

				e.preventDefault();

				var button = $(this);
				window.inputWrapper = $(this).closest('.ast-advanced-headers-row-content');

				if ( file_frame ) {
					file_frame.open();
					return;
				}

				// Create the media frame.
				file_frame = wp.media( {
					multiple: false
				} );

				// When an image is selected, run a callback.
				file_frame.on( 'select', function() {

					var attachment = file_frame.state().get( 'selection' ).first().toJSON();

					// place first attachment in field
					window.inputWrapper.find( '#ast-advanced-headers-preview-logo' ).children('.saved-image').remove();
					window.inputWrapper.find( '#ast-advanced-headers-preview-logo' ).append('<img src="' + attachment.url + '" class="saved-image" style="margin-bottom:12px;max-width:150px;" />');
					window.inputWrapper.find( '.ast-advanced-headers-logo-id' ).val( attachment.id );
					window.inputWrapper.find( '.ast-advanced-headers-logo' ).val( attachment.url );
					window.inputWrapper.find('.ast-advanced-headers-logo-remove').show();
				});

				// Finally, open the modal
				file_frame.open();
			});

			$( '.ast-advanced-headers-logo-remove' ).on( 'click', function( e ) {
				e.preventDefault();

				var button   = $(this),
				    closeRow = $(this).closest('.ast-advanced-headers-row-content');

				    closeRow.find( '#ast-advanced-headers-preview-logo img' ).hide();
				    closeRow.find( '.ast-advanced-headers-logo-id' ).val('');
				    closeRow.find( '.ast-advanced-headers-logo' ).val('');
				    button.hide();

			});

			var file_frame;
			window.inputWrapper = '';
		},

		/**
		 * Callback for when the button to launch the
		 * builder is clicked.
		 *
		 * @since 1.0
		 * @access private
		 * @method _astraBreadcrumbChecked
		 */
		_astraBreadcrumbChecked: function( e )
		{

			if( $(this).is(':checked') ){
            	$('.ast-advanced-headers-row.breadcrumb-row').show();
			}
			else{
				$('.ast-advanced-headers-row.breadcrumb-row').hide();
			}
		},


		/**
		 * Callback for when the button to launch the
		 * builder is clicked.
		 *
		 * @since 1.0
		 * @access private
		 * @method _astrPageTitleBgSizeChecked
		 */
		_astrPageTitleBgSizeChecked: function( e )
		{
			if( 'custom-bg-size' == $(this).val() ){
            	$('.ast-advanced-haeders-design-bg-custom-size-wrap').show();
			}
			else{
				$('.ast-advanced-haeders-design-bg-custom-size-wrap').hide();
			}
		},

		/**
		 * Callback for when the above header is checked
		 *
		 * @since 1.0
		 * @access private
		 * @method _astrAboveHeaderChecked
		 */
		_astrAboveHeaderChecked: function( e )
		{
			if( $(this).is(':checked') ) {
            	$('.ast-advanced-headers-row.ast-above-header-required').show();
			}
			else{
				$('.ast-advanced-headers-row.ast-above-header-required').hide();
			}
		},

		/**
		 * Callback for when the Below header is checked
		 *
		 * @since 1.0
		 * @access private
		 * @method _astrBelowHeaderChecked
		 */
		_astrBelowHeaderChecked: function( e )
		{
			if( $(this).is(':checked') ) {
            	$('.ast-advanced-headers-row.ast-below-header-required').show();
			}
			else{
				$('.ast-advanced-headers-row.ast-below-header-required').hide();
			}
		},

		/**
		 * Callback for when the Below header is checked
		 *
		 * @since 1.0
		 * @access private
		 * @method _astrCustomMenuChanged
		 */
		_astrCustomMenuChanged: function( e )
		{
			var custom_menu = $(this).val();
			if( 'default' != custom_menu && 'none' != custom_menu ) {
            	$('.ast-advanced-headers-row.ast-custom-menu-item-enabled').show();
            }
			else{
            	$('.ast-advanced-headers-row.ast-custom-menu-item-enabled').hide();
			}

			if( 'text-html' == custom_menu ) {
            	$('.ast-advanced-headers-row.ast-custom-menu-item-text-enabled').show();
			}
			else{
            	$('.ast-advanced-headers-row.ast-custom-menu-item-text-enabled').hide();
			}

			if( 'search' == custom_menu ) {
            	$('#ast-advanced-headers-design-search-style').parents('.ast-advanced-headers-row').show();
			}
			else{
            	$('#ast-advanced-headers-design-search-style').parents('.ast-advanced-headers-row').hide();
			}
		},

		/**
		 * Callback for when the button to launch the
		 * builder is clicked.
		 *
		 * @since 1.0
		 * @access private
		 * @method _astrPageTitleMergeChecked
		 */
		_astrPageTitleMergeChecked: function( e )
		{

			if( $(this).is(':checked') ){
            	$('.require-merge-ast-advanced-header').show();
			}
			else{
				$('.require-merge-ast-advanced-header').hide();
			}
		},

		/**
		 * Callback for when the button to launch the
		 * builder is clicked.
		 *
		 * @since 1.0
		 * @access private
		 * @method _astraPageTitleTabsClicked
		 */
		_astraPageTitleTabsClicked: function( e )
		{
			e.preventDefault();

			var current = $(this),
				href = current.attr('href');
				//custom ui tabs select
				$('#ast-advanced-headers-tabs ul li a').removeClass('nav-tab-active');
				$(current).addClass('nav-tab-active');
				$('.ast-adv-headers-tabs-section').removeClass('tab-active');
				$(href).addClass('tab-active');
				tabId = current.attr( 'id' );
				$('#advanced-headers-current-tab').val( tabId );
		},

		/**
		 * Init the layout settings based on type.
		 *
		 * @since 1.0
		 * @access private
		 * @method _initLayoutSettings
		 */
		_initLayoutSettings: function()
		{
			var type      = $( 'input[name="ast-advanced-headers-layout[layout]"]:checked' ).val(),
				// all element dependent ti title bar layout.
				allStylingWrap    = $( '.ast-advanced-header-layout-breadcrumb-wrap, .ast-advanced-headers-table.design-wrap' ),
				allNotRequired = $('.ast-required-no-headers'),
				breadcrumbCheck = $( '#ast-advanced-header-layout-breadcrumb' ),
				mergeHeaderCheck = $ ( '#ast-advanced-header-layout-merged'),
				backgroundSizeCheck = $( '#ast-advanced-header-design-bg-size' ).val(),
				differentLogoCheck  = $( '#ast-advanced-header-diff-header-logo' ),
				differentRetinaLogoCheck  = $( '#ast-advanced-header-diff-header-retina-logo' );

			// If Advanced Headers is desabled.
			if ( 'disable' == type ) {
				// Hide all dependent element for advanced header layout.
				allStylingWrap.hide();
				allNotRequired.show();
				$('.ast-transparent-notice-wrap').show();
			}
			else{
				allNotRequired.hide();
				$('.ast-transparent-notice-wrap').hide();
			}
			if( ! breadcrumbCheck.is(':checked') ) {
				$('.ast-advanced-headers-row.breadcrumb-row').hide();
			}

			if( ! mergeHeaderCheck.is(':checked') ) {
				$('.require-merge-ast-advanced-header').hide();

			}
			if ( 'custom-bg-size' != backgroundSizeCheck ) {
				$('.ast-advanced-haeders-design-bg-custom-size-wrap').hide();
			}

			if ( ! $( '#ast-advanced-header-layout-above-header' ).is(':checked') ) {
				$('.ast-advanced-headers-row.ast-above-header-required').hide();
			}
			if ( ! $( '#ast-advanced-header-layout-below-header' ).is(':checked') ) {
				$('.ast-advanced-headers-row.ast-below-header-required').hide();
			}

			if( differentLogoCheck.is(':checked') ) {
				$('.ast-logo-settings-wrap').show();
				$('.ast-diff-header-retina-logo').show();
			} else {
				$('.ast-logo-settings-wrap').hide();
				$('.ast-diff-header-retina-logo').hide();
			}

			if( differentRetinaLogoCheck.is(':checked') && differentLogoCheck.is(':checked') ) {
				$('.ast-retina-logo-settings-wrap').show();
			} else {
				$('.ast-retina-logo-settings-wrap').hide();
			}
		},

		/**
		 * Radio button Images clicked.
		 *
		 * @since 1.0
		 * @access private
		 * @method _astraPageTitleRadioImagesClicked
		 */
		_astraPageTitleRadioImagesClicked: function()
		{
			var allRadioLabels  = $('.ast-advanced-header-layout-radio-button-wrap label'),
				radioButtonWrap = $('.ast-advanced-header-layout-radio-button-wrap'),
				allStylingWrap = $('.ast-advanced-header-layout-breadcrumb-wrap, .ast-advanced-headers-table.design-wrap'),
				allNotRequired = $('.ast-required-no-headers');
			    allRadioLabels.attr("checked",false);

			    $(this).attr("checked", true);
			    radioButtonWrap.children( "input[type='radio']" ).attr("checked",false);
			    $(this).children( "input[type='radio']" ).attr("checked",true);

			    // Disable Breadcrumb for no advanced header layout.
			    if ( 'disable' == $(this).children( "input[type='radio']" ).val()) {
					allStylingWrap.hide();
					allNotRequired.show();
					$('.ast-transparent-notice-wrap').show();
				}
				else{
					allStylingWrap.show();
					allNotRequired.hide();
					$('.ast-transparent-notice-wrap').hide();
				}
		},

		_astrToggleLogo: function()
		{
			if( $(this).is(':checked') ){
				$( ".ast-logo-settings-wrap" ).show();
				$( ".ast-diff-header-retina-logo" ).show();

				if( $(this).is(':checked') && $( '#ast-advanced-header-diff-header-retina-logo' ).is(':checked') ){
					$( ".ast-retina-logo-settings-wrap" ).show();
				} else {
					$( ".ast-retina-logo-settings-wrap" ).hide();
				}

			} else {
				$( ".ast-logo-settings-wrap" ).hide();
				$( ".ast-diff-header-retina-logo" ).hide();

				if( $(this).is(':checked') && $( '#ast-advanced-header-diff-header-retina-logo' ).is(':checked') ){
					$( ".ast-retina-logo-settings-wrap" ).show();
				} else {
					$( ".ast-retina-logo-settings-wrap" ).hide();
				}
			}
		},

		_astrToggleRetinaLogo: function()
		{
			if( $(this).is(':checked') && $( '#ast-advanced-header-diff-header-logo' ).is(':checked') ){
				$( ".ast-retina-logo-settings-wrap" ).show();
			} else {
				$( ".ast-retina-logo-settings-wrap" ).hide();
			}
		}
	};

    $( function() { AstraPageTitleBarAdmin._init(); } );
} )( jQuery );
