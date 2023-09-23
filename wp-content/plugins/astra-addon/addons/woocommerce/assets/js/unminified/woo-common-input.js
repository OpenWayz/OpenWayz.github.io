function modernLayoutInputs() {
    const inputs = document.querySelectorAll( '.woocommerce input, .woocommerce select, .woocommerce textarea' );

    if( inputs ) {

        inputs.forEach( element => {

            element.addEventListener( 'input', function(e) {
                addAnimateClass( e.currentTarget );
            } );

            addPlaceholder( element );
            addRequiredFields( element );
            addAnimateClass( element );
        });
    }

};

function addAnimateClass( single ) {
    const inputAnimateClass = 'ast-animate-input';

    const fieldRow = single.closest( '.form-row' );

    if( ! fieldRow ) {
        return;
    }

    const condition = 'select' === single.tagName || single.classList.contains( 'select2-hidden-accessible' );
    const fieldValue = condition ? single.querySelector( ':selected' ).textContent : single.value;

    if ( fieldValue !== '' || ( fieldValue !== ' ' && 'select' === single.tagName ) ) {
        fieldRow.classList.add( inputAnimateClass );
    }

    if ( 'hidden' === fieldValue ) {
        fieldRow.classList.remove( inputAnimateClass );
    }

    '' === fieldValue ? fieldRow.classList.remove( inputAnimateClass ) : fieldRow.classList.add( inputAnimateClass );

}

function addPlaceholder( single ) {
    const fieldRow = single.closest( '.form-row' );

    if( ! fieldRow ) {
        return;
    }

    let placeholderText = single.getAttribute( 'placeholder' );

    if( ! placeholderText ) {
        const currentPlaceholderText = single.closest( '.form-row' ).querySelector('label');
        
        if( currentPlaceholderText ) {
            single.setAttribute( 'placeholder', currentPlaceholderText.textContent );
        }

        
    }
}

function addRequiredFields( single ) {
    
    const fieldRow      = single.closest( '.form-row' );

    if( ! fieldRow ) {
        return;
    }

    const isRequired    = fieldRow.classList.contains( 'validate-required' );
    let placeholderText = single.getAttribute( 'placeholder' );

    if( isRequired && '' !== placeholderText && !placeholderText.includes('*') ) {
        placeholderText = placeholderText + ' *';
    }

    single.setAttribute( 'placeholder', placeholderText );
}

document.addEventListener("DOMContentLoaded", function(event) { 
    const body = document.querySelector( 'body' );

    if( body && ! body.classList.contains( 'cartflows_step-template' ) ) {
        modernLayoutInputs();
    }
});