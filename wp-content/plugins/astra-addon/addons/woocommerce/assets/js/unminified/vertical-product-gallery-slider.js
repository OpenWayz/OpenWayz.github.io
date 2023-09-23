document.addEventListener( "DOMContentLoaded" , function () {

  const savePreviousParent = document.querySelector( '#ast-vertical-slider-inner' );
  if( savePreviousParent ) {
      savePreviousParent.setAttribute( 'ast-translate', 0 ); 
  }

  // Gets current thumbnail wrapper selector.
  const currentThumbnailSelector = document.querySelector( '#ast-gallery-thumbnails' );
  const checkIfNoGallerySelector = document.querySelector( '.ast-product-gallery-layout-vertical-slider' );

  // Checks if thumbnails are available.
  if ( ! currentThumbnailSelector || checkIfNoGallerySelector.classList.contains( 'ast-product-gallery-with-no-image' ) ) {
    return false;
  }

  //Gets the current thumbnail image width.
  const currentThumbnailWidth = currentThumbnailSelector.clientWidth;

  // Sets defaults.
  const carouselInit = {
    width: currentThumbnailWidth, // Images are forced into a width of this many pixels.
    numVisible: 4,  // The number of images visible at once.
  };

  // Current carousel.
  const carousel = carouselInit.carousel = document.querySelector( '#ast-vertical-slider-inner' );

  // Checks if thumbnail images are available.
  if ( ! carousel ) {
    return false;
  }

  // Next and previous navigation selector.
  const prevButton = document.querySelector( '#ast-vertical-navigation-prev' );
  const nextButton = document.querySelector( '#ast-vertical-navigation-next' );

  dynamicImageResize( carouselInit, carousel );

  verticalSliderNavigationArrows( prevButton, nextButton );

  focusSlideOnClick();

  const articleSingle = document.querySelector('.ast-article-single');

  if( articleSingle && articleSingle.classList.contains( 'ast-product-single-variable' ) ) {
    scrollToSlideVariableProduct( prevButton, nextButton );
  }

  enableDisableNavigationArrows( prevButton, nextButton );

  saleBadgeAlignment();

  // Dynamically resizes images.
  let resizeEnd;
  window.onresize = function () {
    clearTimeout( resizeEnd );
    resizeEnd = setTimeout( function () {
      dynamicImageResize( carouselInit, carousel );
      saleBadgeAlignment();
    }, 400 );
  }

});


// Adds dynamic heights for vertical slider.
function dynamicImageResize( carouselInit, carousel ) {
  const carouselParent         = document.querySelector( '#ast-vertical-thumbnail-wrapper' );
  const thumbnailWrapperSingle = carousel.getElementsByTagName( 'div' )[0];

  // Gets single image height , multiplies the value and add the height to parent.
  if ( thumbnailWrapperSingle && carouselParent ) {
    carouselInit.rowHeight      = thumbnailWrapperSingle.offsetHeight;
    const carouselHeight        = carouselInit.numVisible * carouselInit.rowHeight + 'px';
    carousel.style.height       = carouselHeight;
    carouselParent.style.height = carouselHeight;
    carousel.style.visibility   = 'visible';
  }

  //Gets the vertical slider parent height and adds it to main image.
  const MainGalleryParent = document.querySelector( '.woocommerce-product-gallery__wrapper' );

  if ( MainGalleryParent ) {
    
    const thumbnailTotalHeight = carouselParent.clientHeight;
    const addDynamicHeight     = MainGalleryParent.querySelectorAll('a img');

    if ( addDynamicHeight ) {
      addDynamicHeight.forEach( element => {
        element.style.height = thumbnailTotalHeight - 10 + 'px'
      } );
    }

  }
}

// Moves slides forwards or backwards.
function MoveSlide( type, prevButton, nextButton ) {
  const parentDiv = document.querySelector( '#ast-vertical-slider-inner' );
  if( parentDiv ) {
    const imageHeight = parentDiv.querySelector( 'img' ).clientHeight + 10;
    let savePrevious = parseInt( parentDiv.getAttribute( 'ast-translate' ) );
    if( imageHeight ) {
        if( 'next' === type ) {
          savePrevious += imageHeight;
          enableDisableNavigationArrows( prevButton, nextButton, savePrevious, imageHeight );
        } else {
          if( savePrevious > 0 ) {
            savePrevious -= imageHeight;
            enableDisableNavigationArrows( prevButton, nextButton, savePrevious, imageHeight );
          } 
        }
        parentDiv.setAttribute( 'ast-translate' , savePrevious );
        parentDiv.style.transform = `translate3d( 0, -${savePrevious}px, 0 )`;
        parentDiv.style.transition = `.3s`;
    }
  }
}

// Adds arrow navigation for vertical slider.
function verticalSliderNavigationArrows( prevButton, nextButton ) {

  if ( prevButton ) {
    prevButton.onclick = function () {
      MoveSlide( 'prev' , prevButton, nextButton  );
    }
  }

  if ( nextButton ) {
    nextButton.onclick = function () {
      MoveSlide( 'next', prevButton, nextButton );
    }
  }
}

// Sync's thumbnail and gallery slide on click.
function focusSlideOnClick() {
  const slideTriggers = document.querySelectorAll( '#ast-vertical-slider-inner .ast-woocommerce-product-gallery__image' );

  slideTriggers.forEach(singleTrigger => {
    singleTrigger.addEventListener( 'click', function (e) {
      const currentSlideIndex = e.currentTarget.getAttribute( 'data-slide-number' );

      slideTriggers.forEach( removeClassSingle => {
        removeClassSingle.classList.remove( 'flex-active-slide' );
      });

      e.currentTarget.classList.add( 'flex-active-slide' );

      jQuery( '.woocommerce-product-gallery' ).data( "flexslider" ).flexAnimate( parseInt( currentSlideIndex ) );
    });
  });
}

// Enables / Disables slider navigation.
function enableDisableNavigationArrows( prevButton, nextButton, translateX = 0, initialTranslateX = 0 ) {
  const slideCountSelector = document.querySelectorAll( '#ast-vertical-slider-inner .ast-woocommerce-product-gallery__image' );

  if ( slideCountSelector ) {
    const slideCount           = slideCountSelector.length;
    const currentSlide         = slideCount - 4;
    const arrowNavigationClass = 'flex-disabled';

    if( 1 > parseInt( translateX ) || parseInt( translateX ) < parseInt( initialTranslateX * currentSlide ) ) {
      nextButton.classList.remove( arrowNavigationClass );
      prevButton.classList.remove( arrowNavigationClass );
    }

    if( parseInt( translateX ) === parseInt( initialTranslateX * currentSlide ) ) {
      nextButton.classList.add( arrowNavigationClass );
      prevButton.classList.remove( arrowNavigationClass );
    }

    if( 0 === parseInt( translateX ) ) {
      nextButton.classList.remove( arrowNavigationClass );
      prevButton.classList.add( arrowNavigationClass );
    }

    if( parseInt( slideCount ) <= 4 ) {
      nextButton.classList.add( arrowNavigationClass );
      prevButton.classList.add( arrowNavigationClass );
    }

  }
}

// Calculates and aligns the sale badge.
function saleBadgeAlignment() {
  const checkVerticalGallery = document.querySelector( '#ast-vertical-slider-inner > div' );
  if( checkVerticalGallery ) {
    const ThumbnailSectionWidth =  document.querySelector( '#ast-gallery-thumbnails' ).clientWidth;
    if( ThumbnailSectionWidth ) {
      const saleBadge = document.querySelector( '.woocommerce div.product.ast-product-gallery-layout-vertical-slider > span.onsale, .woocommerce div.product.ast-product-gallery-layout-vertical-slider > span.ast-onsale-card' );
      if( saleBadge ) {
        const offset = saleBadge.classList.contains( 'ast-onsale-card' ) ? 25 : 15;
        saleBadge.style.left = ( ThumbnailSectionWidth + offset ) + 'px';
      }
    }
  }
}

function scrollToSlideVariableProduct( prevButton, nextButton ) {
  const img = document.querySelector(".woocommerce-product-gallery .woocommerce-product-gallery__image");
  const thumbnail_images = document.querySelectorAll('.woocommerce-product-gallery .ast-woocommerce-product-gallery__image img');
  
  if (img && thumbnail_images) {
    observer = new MutationObserver((changes) => {
      changes.forEach(change => {
        if (change.attributeName && change.attributeName.includes('data-thumb')) {
          thumbnail_images.forEach(element => {
            if (element.getAttribute('srcset') && element.getAttribute('srcset').includes(img.getAttribute('data-thumb'))) {
              element.click();
              const parentDiv = document.querySelector('#ast-vertical-slider-inner');

              if (parentDiv) {
                const imageHeight = parentDiv.querySelector('img').clientHeight + 10;
                const getPosition = element.closest('.ast-woocommerce-product-gallery__image').getAttribute('data-slide-number');

                if (imageHeight && getPosition) {
                  const firstSectionHeight = imageHeight * 4;
                  const getNumber = parseInt(getPosition) + 1;

                  if (getNumber > 4) {
                    const currentSectionHeight = imageHeight * getNumber;
                    const currentSlidePosition = currentSectionHeight - firstSectionHeight;
                    parentDiv.style.transform = `translate3d( 0, -${currentSlidePosition}px, 0 )`;
                    parentDiv.setAttribute('ast-translate', currentSlidePosition);
                    enableDisableNavigationArrows(prevButton, nextButton, parentDiv.getAttribute('ast-translate'), imageHeight);
                  } else {
                    parentDiv.setAttribute('ast-translate', 0);
                    parentDiv.style.transform = `translate3d( 0, 0px, 0 )`;
                    enableDisableNavigationArrows(prevButton, nextButton, parentDiv.getAttribute('ast-translate'), imageHeight);
                  }
                  parentDiv.style.transition = `.3s`;
                }
              }
            }
          });
        }
      });
    });
    observer.observe(img, {attributes: true});
  }
}


