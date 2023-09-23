const encapsulateHtmlTag = ( el, wrapper, className ) => {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    wrapper.className = className;
}

const filterAccordion = () => {
    const isAccordionActive = document.querySelector( ".ast-filter-wrap" );

    // Checks if accordion mode is enabled.
    if( isAccordionActive && isAccordionActive.classList.contains( 'ast-accordion-layout' ) ) { 

        const filterList	= document.querySelectorAll( ".ast-filter-wrap .widget" );
        const activeClass   = 'active';

        if( filterList ) {
    
            filterList.forEach( function ( heading, headingIndex ) {
                const widgetTitle = heading.querySelector( ".ast-filter-wrap .widget-title" );
    
                if( ! widgetTitle ) {
                    return false;
                }
                
                widgetTitle.classList.add( activeClass );
    
                const singleFilterContent = widgetTitle.nextElementSibling;
    
                // Wraps div to widget content.
                if( singleFilterContent ) {
                    encapsulateHtmlTag(singleFilterContent, document.createElement('div'), 'ast-filter-content' );
                    encapsulateHtmlTag(singleFilterContent, document.createElement('div'), 'ast-filter-content-inner' );
                }
        
                // Accordion trigger.
                widgetTitle.addEventListener( "click", function ( event ) {
    
                    const currentFilterContent = event.target.nextElementSibling;
    
                    if( currentFilterContent ) {
                        const filterContentHeight = currentFilterContent.querySelector('.ast-filter-content > *').clientHeight;
                        const currentFilter       = event.target;
    
                        if( currentFilter.classList.contains( activeClass ) ) {
                            currentFilter.classList.remove( activeClass );
                            currentFilter.nextElementSibling.style.maxHeight = 0;
                        } else {
                            currentFilter.classList.add( activeClass );
                            currentFilter.nextElementSibling.style.maxHeight = filterContentHeight + 'px';
                        }
                    }
    
                } );
        
            } );
        }
    }

    // Adds dynamic hight for sidebar
    const wooSidebarFilters = document.querySelectorAll( ".ast-woo-sidebar-widget" );

    if( wooSidebarFilters ) {
        wooSidebarFilters.forEach( element => {
            const filterContent         = element.querySelector( '.ast-filter-content' );
            const filterContentInner    = element.querySelector( '.ast-filter-content-inner' );

            if( filterContent && filterContentInner ) {
                const filterContentHeight     = filterContentInner.clientHeight;
                filterContent.style.maxHeight = filterContentHeight + 'px';
            }  
        });
    }
}

filterAccordion();

