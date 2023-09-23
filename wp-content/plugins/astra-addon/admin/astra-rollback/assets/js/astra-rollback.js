/**
 * Astra Theme rollback version
 *
 * @package Astra Addon
 * @since  x.x.x
 */

 (function( $ ) {
    astRollbackVersion = {

        init: function() {
            $( document ).on('change', '.ast-rollback-version-select' , astRollbackVersion.onSelectVersion );
            $( document ).on('click', '.ast-rollback-button' , astRollbackVersion.onRollbackClick );
            $( document ).on('click', '.ast-confirm-cancel' , astRollbackVersion.closeRollbackPopup );
            $( document ).on('click', '.ast-confirm-ok' , astRollbackVersion.onRollbackOk );
        },
        
        onSelectVersion:function() {
            var selectRollback = jQuery( this );
            rollbackButton  = selectRollback.next( '.ast-rollback-button' )
            placeholderUrl  = rollbackButton.data( 'placeholder-url' );
            rollbackButton.attr( 'href', placeholderUrl.replace( 'VERSION', selectRollback.val() ) );
        },

        onRollbackClick: function ( e ) {
            e.preventDefault();
			rollbackConfirmText   = $('.ast-confirm-text');
			versionNumber		  = $('.ast-rollback-version-select').val();

			rollbackConfirmdata = rollbackConfirmText.data('text').replace( '#VERSION#', versionNumber );
			rollbackConfirmText.html( rollbackConfirmdata );
            document.querySelector('.ast-confirm-rollback-popup').style.display = 'block';
        },

        closeRollbackPopup: function ( e ) {
            document.querySelector('.ast-confirm-rollback-popup').style.display = 'none';
        },

        onRollbackOk:function ( e ) {
            e.preventDefault();
            location.href = $( '.ast-rollback-button' ).attr('href');
            astRollbackVersion.closeRollbackPopup( e );
        }
    }

    $( document ).ready(function() {
		astRollbackVersion.init();
	});

})( jQuery );