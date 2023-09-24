let spectraImageGalleryLoadStatus = true;

const UAGBImageGalleryMasonry = {
	init( $attr, $selector, lightboxSettings, thumbnailSettings ) {
		let count = 2;
		const windowHeight50 = window.innerHeight / 1.25;
		const $scope = document.querySelector( $selector );
		let thumbnailSwiper = null;
		if ( $attr.lightboxThumbnails ) {
			thumbnailSwiper = new Swiper( `${$selector}+.spectra-image-gallery__control-lightbox .spectra-image-gallery__control-lightbox--thumbnails`,
				thumbnailSettings
			);
			lightboxSettings = {
				...lightboxSettings,
				thumbs: {
					swiper: thumbnailSwiper,
				},
			}
		}
		const lightboxSwiper = new Swiper( `${$selector}+.spectra-image-gallery__control-lightbox .spectra-image-gallery__control-lightbox--main`,
			lightboxSettings
		)
		lightboxSwiper.lazy.load();
		loadLightBoxImages( $scope, lightboxSwiper, null, $attr, thumbnailSwiper );
		const loader = $scope?.querySelector( '.spectra-image-gallery__control-loader' );
		const loadButton = $scope?.querySelector( '.spectra-image-gallery__control-button' );
		if ( $attr.feedPagination && $attr.paginateUseLoader ) {
			window.addEventListener( 'scroll', function () {
				let mediaItem = $scope?.querySelector( '.spectra-image-gallery__media-wrapper' );
				if ( ! mediaItem ) {
					mediaItem = $scope;
				}
				const boundingClientRect = mediaItem.lastElementChild.getBoundingClientRect();
				const offsetTop = boundingClientRect.top + window.scrollY;
				if ( window.pageYOffset + windowHeight50 >= offsetTop ) {
					const $args = {
						page_number: count,
					};
					const total = $attr.gridPages;
					if ( spectraImageGalleryLoadStatus ) {
						if ( count > total ) {
							loader.style.display = 'none';
						}
						if ( count <= total ) {
							UAGBImageGalleryMasonry.callAjax( $scope, $args, $attr, false, count, $selector, lightboxSwiper, thumbnailSwiper );
							count++;
							spectraImageGalleryLoadStatus = false;
						}
					}
				}
			} );
		} else if ( $attr.feedPagination && ! $attr.paginateUseLoader ) {
			loadButton.onclick = function () {
				const total = $attr.gridPages;
				const $args = {
					total,
					page_number: count,
				};
				loadButton.classList.add( 'disabled' );
				if ( spectraImageGalleryLoadStatus ) {
					if ( count <= total ) {
						UAGBImageGalleryMasonry.callAjax( $scope, $args, $attr, false, count, $selector, lightboxSwiper, thumbnailSwiper );
						count++;
						spectraImageGalleryLoadStatus = false;
					}
				}
			};
		}
	},

	createElementFromHTML( htmlString ) {
		const htmlElement = document.createElement( 'div' );
		const htmlCleanString = htmlString.replace( /\s+/gm, ' ' ).replace( /( )+/gm, ' ' ).trim();
		htmlElement.innerHTML = htmlCleanString;
		return htmlElement;
	},

	getCustomURL( image, $attr ) {
		const urlValidRegex = new RegExp(
			'^((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$'
		);
		const imageID = parseInt( image.getAttribute( 'data-spectra-gallery-image-id' ) );
		return urlValidRegex.test( $attr?.customLinks[ imageID ] ) ? $attr.customLinks[ imageID ] : undefined;
	},

	openCustomURL( customURL ) {
		window.open( customURL, '_blank' );
	},

	addClickEvents( element, $attr ) {
		const imageElements = element?.querySelectorAll( '.spectra-image-gallery__media-wrapper' );
		imageElements.forEach( ( image ) => {
			const imageURL = UAGBImageGalleryMasonry.getCustomURL( image, $attr );
			if ( imageURL ) {
				image.style.cursor = 'pointer';
				image.addEventListener( 'click', () => UAGBImageGalleryMasonry.openCustomURL( imageURL ) );
			}
		} );
	},

	callAjax( $scope, $obj, $attr, append = false, count, $selector, lightboxSwiper, thumbnailSwiper ) {
		const mediaData = new FormData();
		mediaData.append( 'action', 'uag_load_image_gallery_masonry' );
		mediaData.append( 'nonce', uagb_image_gallery.uagb_image_gallery_masonry_ajax_nonce );
		mediaData.append( 'page_number', $obj.page_number );
		mediaData.append( 'attr', JSON.stringify( $attr ) );
		fetch( uagb_image_gallery.ajax_url, {
			method: 'POST',
			credentials: 'same-origin',
			body: mediaData,
		} )
			.then( ( resp ) => resp.json() )
			.then( function ( data ) {
				let element = $scope?.querySelector( '.spectra-image-gallery__layout--masonry' );
				if ( ! element ) {
					element = $scope;
				}
				const isotope = new Isotope( element, {
					itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
					stagger: 10,
				} );
				isotope.insert( UAGBImageGalleryMasonry.createElementFromHTML( data.data ) );
				imagesLoaded( element ).on( 'progress', function () {
					isotope.layout();
				} );
				imagesLoaded( element ).on( 'always', function () {
					const currentScope = document.querySelector( $selector );
					const loadButton = currentScope?.querySelector( '.spectra-image-gallery__control-button' )
						loadButton?.classList?.remove( 'disabled' );
						loadLightBoxImages( currentScope, lightboxSwiper, null, $attr, thumbnailSwiper );
					} );
				if ( $attr.customLinks ) {
					UAGBImageGalleryMasonry.addClickEvents( element, $attr );
				}
				spectraImageGalleryLoadStatus = true;
				if ( true === append ) {
					$scope?.querySelector( '.spectra-image-gallery__control-button' ).classList.toggle( 'disabled' );
				}
				if ( count === parseInt( $obj.total ) ) {
					$scope.querySelector( '.spectra-image-gallery__control-button' ).style.opacity = 0;
					setTimeout( () => {
						$scope.querySelector( '.spectra-image-gallery__control-button' ).parentElement.style.display =
							'none';
					}, 2000 );
				}
			} );
	},
};

const UAGBImageGalleryPagedGrid = {
	init( $attr, $selector, lightboxSettings, thumbnailSettings ) {
		let count = 1;
		const $scope = document.querySelector( $selector );
		let thumbnailSwiper = null;
		if ( $attr.lightboxThumbnails ){
			thumbnailSwiper = new Swiper( `${$selector}+.spectra-image-gallery__control-lightbox .spectra-image-gallery__control-lightbox--thumbnails`,
			thumbnailSettings
			);
			lightboxSettings = {
				...lightboxSettings,
				thumbs: {
					swiper: thumbnailSwiper,
				},
			}
		}
		const lightboxSwiper = new Swiper( `${$selector}+.spectra-image-gallery__control-lightbox .spectra-image-gallery__control-lightbox--main`,
			lightboxSettings
		)
		lightboxSwiper.lazy.load();
		loadLightBoxImages( $scope, lightboxSwiper, count, $attr, thumbnailSwiper );
		const arrows = $scope?.querySelectorAll( '.spectra-image-gallery__control-arrows--grid' );
		const dots = $scope?.querySelectorAll( '.spectra-image-gallery__control-dot' );
		for ( let i = 0; i < arrows.length; i++ ) {
			arrows[ i ].addEventListener( 'click', ( event ) => {
				const thisArrow = event.currentTarget;
				let page = count;
				switch ( thisArrow.getAttribute( 'data-direction' ) ) {
					case 'Prev':
						--page;
						break;
					case 'Next':
						++page;
						break;
				}
				let mediaItem = $scope?.querySelector( '.spectra-image-gallery__media-wrapper' );
				if ( ! mediaItem ) {
					mediaItem = $scope;
				}
				const total = $attr.gridPages;
				const $args = {
					page_number: page,
					total,
				};
				if ( page === total || page === 1 ) {
					thisArrow.disabled = true;
				} else {
					arrows.forEach( ( ele ) => {
						ele.disabled = false;
					} );
				}
				if ( page <= total && page >= 1 ) {
					UAGBImageGalleryPagedGrid.callAjax( $scope, $args, $attr, arrows, $selector, lightboxSwiper, thumbnailSwiper );
					count = page;
				}
			} );
		}
		for ( let i = 0; i < dots.length; i++ ) {
			dots[ i ].addEventListener( 'click', ( event ) => {
				const thisDot = event.currentTarget;
				const page = thisDot.getAttribute( 'data-go-to' );
				let mediaItem = $scope?.querySelector( '.spectra-image-gallery__media-wrapper' );
				if ( ! mediaItem ) {
					mediaItem = $scope;
				}
				const $args = {
					page_number: page,
					total: $attr.gridPages,
				};
				UAGBImageGalleryPagedGrid.callAjax( $scope, $args, $attr, arrows, $selector, lightboxSwiper, thumbnailSwiper );
				count = page;
			} );
		}
	},

	createElementFromHTML( htmlString ) {
		const htmlElement = document.createElement( 'div' );
		const htmlCleanString = htmlString.replace( /\s+/gm, ' ' ).replace( /( )+/gm, ' ' ).trim();
		htmlElement.innerHTML = htmlCleanString;
		return htmlElement;
	},

	getCustomURL( image, $attr ) {
		const urlValidRegex = new RegExp(
			'^((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$'
		);
		const imageID = parseInt( image.getAttribute( 'data-spectra-gallery-image-id' ) );
		return urlValidRegex.test( $attr?.customLinks[ imageID ] ) ? $attr.customLinks[ imageID ] : undefined;
	},

	openCustomURL( customURL ) {
		window.open( customURL, '_blank' );
	},

	addClickEvents( element, $attr ) {
		const imageElements = element?.querySelectorAll( '.spectra-image-gallery__media-wrapper' );
		imageElements.forEach( ( image ) => {
			const imageURL = UAGBImageGalleryPagedGrid.getCustomURL( image, $attr );
			if ( imageURL ) {
				image.style.cursor = 'pointer';
				image.addEventListener( 'click', () => UAGBImageGalleryPagedGrid.openCustomURL( imageURL ) );
			}
		} );
	},

	callAjax( $scope, $obj, $attr, arrows, $selector, lightboxSwiper, thumbnailSwiper ) {
		const mediaData = new FormData();
		mediaData.append( 'action', 'uag_load_image_gallery_grid_pagination' );
		mediaData.append( 'nonce', uagb_image_gallery.uagb_image_gallery_grid_pagination_ajax_nonce );
		mediaData.append( 'page_number', $obj.page_number );
		mediaData.append( 'attr', JSON.stringify( $attr ) );
		fetch( uagb_image_gallery.ajax_url, {
			method: 'POST',
			credentials: 'same-origin',
			body: mediaData,
		} )
			.then( ( resp ) => resp.json() )
			.then( function ( data ) {
				if ( data.success === false ) {
					return;
				}
				let element = $scope?.querySelector( '.spectra-image-gallery__layout--isogrid' );
				if ( ! element ) {
					element = $scope;
				}
				const mediaElements = element.querySelectorAll( '.spectra-image-gallery__media-wrapper--isotope' );
				const isotope = new Isotope( element, {
					itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
					layoutMode: 'fitRows',
				} );
				mediaElements.forEach( ( mediaEle ) => {
					isotope.remove( mediaEle );
					isotope.layout();
				} );
				isotope.insert( UAGBImageGalleryPagedGrid.createElementFromHTML( data.data ) );
				imagesLoaded( element ).on( 'progress', function () {
					isotope.layout();
				} );
				imagesLoaded( element ).on( 'always', function () {
					const currentScope = document.querySelector( $selector );
					loadLightBoxImages( currentScope, lightboxSwiper, parseInt( $obj.page_number ), $attr, thumbnailSwiper );
				} );
				if ( $attr.customLinks ) {
					UAGBImageGalleryPagedGrid.addClickEvents( element, $attr );
				}
				if ( parseInt( $obj.page_number ) === 1 ) {
					arrows.forEach( ( arrow ) => {
						arrow.disabled = arrow.getAttribute( 'data-direction' ) === 'Prev';
					} );
				} else if ( parseInt( $obj.page_number ) === parseInt( $obj.total ) ) {
					arrows.forEach( ( arrow ) => {
						arrow.disabled = arrow.getAttribute( 'data-direction' ) === 'Next';
					} );
				} else {
					arrows.forEach( ( arrow ) => {
						arrow.disabled = false;
					} );
				}
				$scope
					?.querySelector( '.spectra-image-gallery__control-dot--active' )
					.classList.toggle( 'spectra-image-gallery__control-dot--active' );
				const $activeDot = $scope?.querySelectorAll( '.spectra-image-gallery__control-dot' );
				$activeDot[ parseInt( $obj.page_number ) - 1 ].classList.toggle(
					'spectra-image-gallery__control-dot--active'
				);
			} );
	},
};

const loadLightBoxImages = ( blockScope, lightboxSwiper, pageNum, attr, thumbnailSwiper ) => {
	if ( ! blockScope ) {
		return;
	}
	const pageLimit = attr.paginateLimit;
	
	const theBody = document.querySelector( 'body' );
	const updateCounter = ( curPage ) => {
		const lightbox = blockScope.nextElementSibling;
		const counter = lightbox.querySelector( '.spectra-image-gallery__control-lightbox--count-page' );
		if ( counter ) {
			counter.innerHTML = parseInt( curPage ) + 1;
		}
	};
	lightboxSwiper.on( 'activeIndexChange', ( swiperInstance ) => {
		if ( attr.lightboxThumbnails ) {
			thumbnailSwiper.slideTo( swiperInstance.activeIndex );
		}
		if ( attr.lightboxDisplayCount ) {
			updateCounter( swiperInstance.activeIndex );
		}
		lightboxSwiper.lazy.load();
	} )
	if ( attr.lightboxThumbnails ) {
		thumbnailSwiper.on( 'activeIndexChange', ( swiperInstance ) => {
			lightboxSwiper.slideTo( swiperInstance.activeIndex );
		} );

	}
	if ( blockScope.nextElementSibling.classList.contains( 'spectra-image-gallery__control-lightbox' ) ) {
		const lightbox = blockScope.nextElementSibling;
		lightbox.addEventListener( 'keydown', ( event ) => {
			if ( 27 === event.keyCode ) {
				theBody.style.overflow = '';
				lightbox.style.opacity = 0;
				setTimeout( () => {
					lightbox.style.display = 'none';
				}, 250 );
			}
		} );
		lightbox.style.display = 'none';
		if ( attr.lightboxCloseIcon ) {
			const closeButton = lightbox.querySelector( '.spectra-image-gallery__control-lightbox--close' );
			if ( closeButton ) {
				closeButton.addEventListener( 'click', () => {
					theBody.style.overflow = '';
					lightbox.style.opacity = 0;
					setTimeout( () => {
						lightbox.style.display = 'none';
					}, 250 );
				} );
			}
		}
		if ( attr.lightboxDisplayCount ) {
			const lightboxTotal = lightbox.querySelector( '.spectra-image-gallery__control-lightbox--count-total' );
			lightboxTotal.innerHTML = attr.mediaGallery.length;
		}
	}
	const enableLightbox = ( goTo ) => {
		if ( ! lightboxSwiper ) {
			return;
		}
		const lightbox = blockScope?.nextElementSibling;
		if ( ! lightbox ) {
			return;
		}
		lightbox.style.display = '';
		lightbox.focus();
		setTimeout( () => {
			lightboxSwiper.slideTo( goTo );
		}, 100 );
		setTimeout( () => {
			lightbox.style.opacity = 1;
			theBody.style.overflow = 'hidden';
		}, 250 );
	}

	if ( pageNum !== null ) {
		setTimeout( () => {
			addClickListeners( blockScope, pageNum, enableLightbox, pageLimit );
		}, 1000 );
	} else {
		addClickListeners( blockScope, null, enableLightbox );
	}
};

// Common function for adding click event listeners to images
const addClickListeners = ( $scope, pageNum, enableLightbox, pageLimit )  => {
	const images = $scope.querySelectorAll( '.spectra-image-gallery__media-wrapper' );
	images.forEach( ( image, index ) => {
		const nextImg = pageNum !== null ? index + ( pageNum - 1 ) * pageLimit : index;
		image.style.cursor = 'pointer';
		image.addEventListener( 'click', () => enableLightbox( nextImg ) );
	} );
}