const accordionContainer	= document.querySelector(".ast-woocommerce-accordion");

if( accordionContainer ) {
	const accordionHeadings		= accordionContainer.querySelectorAll(".ast-accordion-header");
	const accordionContents		= accordionContainer.querySelectorAll(".ast-accordion-content");
	const activeClass			= 'active';
	let singleAccordionContent;
	
	accordionHeadings.forEach( function ( heading, headingIndex ) {
		//get content related to heading
		singleAccordionContent = heading.nextElementSibling;
	
		//get original height of each content when in opened state
		let accordionContentHeight = singleAccordionContent.clientHeight;
	
		// Close all content except first by default
		if ( headingIndex == 0 ) {
			singleAccordionContent.style.height = accordionContentHeight + "px";
		} else {
			singleAccordionContent.style.height = 0;
		}
	
		// Close and open accordion when clicked.
		heading.addEventListener( "click", function ( event ) {
	
			// Removes class active for all accordion content.
			accordionContents.forEach(function ( dropdown, dropdownIndex ) {
				if ( headingIndex !== dropdownIndex ) {
					dropdown.style.height = 0;
					dropdown.classList.remove( activeClass );
				}
			} );
	
			// Removes class active for all accordion headings.
			accordionHeadings.forEach(function ( single, singleIndex ) {
				if ( headingIndex !== singleIndex ) {
					single.classList.remove( activeClass );
				}
			} );
	
			// current accordion content.
			const currentAccordionContent = event.target.nextElementSibling;
	
			// Sets new height when accordion opened.
			accordionContentHeight = currentAccordionContent.querySelector( '.ast-accordion-wrap' ).clientHeight;
	
			if (currentAccordionContent.classList.contains( activeClass ) ) {
				currentAccordionContent.classList.remove( activeClass );
				event.target.classList.remove( activeClass );
				currentAccordionContent.style.height = 0;
			} else {
				currentAccordionContent.classList.add( activeClass );
				event.target.classList.add( activeClass );
				currentAccordionContent.style.height = accordionContentHeight + "px";
			}
		} );
	} );
}
