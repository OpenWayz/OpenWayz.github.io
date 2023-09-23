(function () {
	var total 			= parseInt( astra.infinite_total ) || '',
		count 			= parseInt( astra.infinite_count ) || '',
		pagination 		= astra.pagination || '',
		masonryEnabled  = astra.masonryEnabled || false,
		loadStatus 		= true,
		infinite_event 	= astra.infinite_scroll_event || '',
		loader 			= document.querySelector('.ast-pagination-infinite .ast-loader'),
		astLoadMore		= document.querySelector('.ast-load-more');

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
							if( astLoadMore ){
								astLoadMore.addEventListener('click',function(event) {
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
							var mainSelector = document.getElementById('main');
							var rect = mainSelector.getBoundingClientRect();
							var offset = {
								top: rect.top + window.scrollY,
								left: rect.left + window.scrollX,
							};
							if( astLoadMore ){
									astLoadMore.classList.remove('active');
							}
							if( mainSelector.querySelectorAll('article:last-child').length > 0 ) {

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
			if( astLoadMore ){
				astLoadMore.classList.remove('active');
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
					var boxes = data.querySelectorAll( 'article.ast-article-post' );

					//	Disable loader
					loader.style.display = 'none';
					if( astLoadMore ){
						astLoadMore.classList.add( 'active');
					}
					//	Append articles
					for (var boxCount = 0; boxCount < boxes.length; boxCount++) {
						document.querySelector('#main > .ast-row').append(boxes[boxCount]);
					}

					var grid_layout 	= astra.grid_layout || '3';

					//	Append articles
					if( 1 == masonryEnabled && grid_layout > 1 ) {
						var grid = document.querySelector('#main > .ast-row');
						var msnry = new Masonry( grid, {});

						imagesLoaded( document.querySelector('#main > .ast-row'), function() {
							msnry.appended( boxes );
							msnry.reloadItems();
							msnry.layout();
						});
					}

					//	Add grid classes
					var msg 			= astra.no_more_post_message || '';
					//	Show no more post message
					if( count > total ) {
						document.querySelector('.ast-pagination-infinite').innerHTML = '<span class="ast-load-more no-more active" style="display: inline-block;">' + msg + "</span>";
					} else {
						var newNextTargetUrl = nextDestUrl.replace(/\/page\/[0-9]+/, '/page/' + (pageNumber + 1));
						pageUrlSelector.setAttribute('href', newNextTargetUrl);
					}

					//	Complete the process 'loadStatus'
					loadStatus = true;
				}
		}
	}

})();
