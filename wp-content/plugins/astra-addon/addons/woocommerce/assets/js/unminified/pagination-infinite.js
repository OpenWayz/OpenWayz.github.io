(function () {
	var total 			    = parseInt( astra.shop_infinite_total ) || '',
		count               = parseInt( astra.shop_infinite_count ) || '',
		pagination          = astra.shop_pagination || '',
		masonryEnabled      = false,
		loadStatus          = true,
		infinite_event      = astra.shop_infinite_scroll_event || '',
		loader              = document.querySelector('.ast-shop-pagination-infinite .ast-loader');
		astShopLoadMore			= document.querySelector('.ast-shop-load-more');

	//	Is 'infinite' pagination?
	if( typeof pagination != '' && pagination == 'infinite' ) {

		var in_customizer = false;

		// check for wp.customize return boolean
		if ( typeof wp !== 'undefined' ) {

			in_customizer =  typeof wp.customize !== 'undefined' ? true : false;

			if ( in_customizer ) {
				return;
			}
		}

		if(	typeof infinite_event != '' ) {
			switch( infinite_event ) {
				case 'click':
					if(astShopLoadMore){
						astShopLoadMore.addEventListener('click',function(event) {
							event.preventDefault();
							//	For Click
							if( count != 'undefined' && count != ''&& total != 'undefined' && total != '' ) {
								if ( count > total )
									return false;
									NextloadArticles(count);
									count++;
								}
							});

					}

					break;

				case 'scroll':
							var rect = document.querySelector(".product:last-child").getBoundingClientRect();
							var offset = { 
								top: rect.top + window.scrollY, 
								left: rect.left + window.scrollX, 
							};
							if( astShopLoadMore ){
								astShopLoadMore.classList.add('ast-add-more-button-hide');
							}
							if( document.getElementById('main').querySelectorAll('.product:last-child').length > 0 ) {
								var windowHeight50 = window.outerHeight / 1.25;
								window.addEventListener('scroll', function() {
									if( (window.scrollY + windowHeight50 ) >= ( offset.top ) ) {
										if (count > total) {
											return false;
										} else {

											//	Pause for the moment ( execute if post loaded )
											if( loadStatus == true ) {
												NextloadArticles(count);
												count++;
												loadStatus = false;
											}
										}
									}
								});
							}

					break;
			}
		}

		/**
		 * Append Posts via AJAX
		 *
		 * Perform masonry operations.
		 */
		function NextloadArticles(pageNumber) {
			if( astShopLoadMore ){
				astShopLoadMore.classList.remove('active');
			}
			var pageUrlSelector = document.querySelector('a.next.page-numbers');
			var nextDestUrl = pageUrlSelector.getAttribute('href');
			loader.style.display = 'block'; 
			var request = new XMLHttpRequest();
				request.open('GET', nextDestUrl, true);
				request.send();
				request.onload = function() {
					var string = request.response;
					var data = new DOMParser().parseFromString(string, 'text/html');
					var	boxes = data.querySelectorAll( 'li.product' ),
						productContainer = document.querySelector('.ast-woocommerce-container ul.products');

					if ( ! productContainer ) {
						var productContainer = document.querySelector('.elementor-widget-wc-archive-products ul.products');
					}

					//	Disable loader
					loader.style.display = 'none';
					if( astShopLoadMore ){
						astShopLoadMore.classList.add('active');
					} 

					//	Append articles
					
					for (var boxCount = 0; boxCount < boxes.length; boxCount++) {
						productContainer.append(boxes[boxCount]);
					}

					var grid_layout 	= astra.grid_layout || '3';

					// Add grid classes
					var msg = astra.shop_no_more_post_message || '';

					//	Show no more post message
					if( count > total ) {
						document.querySelector('.ast-shop-pagination-infinite').innerHTML = '<span class="ast-shop-load-more no-more active" style="display: inline-block;">' + msg + "</span>";
					} else {
						var newNextTargetUrl = nextDestUrl.replace(/\/page\/[0-9]+/, '/page/' + (pageNumber + 1));
						pageUrlSelector.setAttribute('href', newNextTargetUrl);
					}

					// Complete the process 'loadStatus'
					loadStatus = true;

					document.dispatchEvent( new CustomEvent( "astraInfinitePaginationLoaded",  { "detail": {} }) );
				}
		}
	}
})();
