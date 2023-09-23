(function ($) {

	"use strict";

	// Variables
	var content_container 	= '#main.site-main';
	var post_title_selector = 'h1.entry-title';
	var nav_container 		= 'nav.post-navigation';
	var comments_container 	= 'div#comments';
	var remove_comments     = 'yes';
	var track_pageviews     = 'yes';
	var curr_url            = window.location.href;
	var post_count          = 0;
	var stop_reading        = false;
	var show_comments       = astra.show_comments || 'Show Comments';
	var edit_post_url		= astra.edit_post_url || '';
	var siteUrl		    	= astra.site_url || '';

	$( document ).ready( function() {

		var in_customizer = false;

		// check for wp.customize return boolean
		if ( typeof wp !== 'undefined' ) {
			in_customizer =  typeof wp.customize !== 'undefined' ? true : false;
		}

		// Don't do this if looking for comments or in customizer.
		if ( in_customizer || window.location.href.indexOf( '#comments' ) > -1 ) {
			return;
		}

		// Remove Comments.
		if ( remove_comments === 'yes' ) {
			initialise_comment( comments_container );
		}

		var temp_content_container = $( content_container );
		var post_ID = temp_content_container.find('.ast-article-single').attr('id');

		if ( typeof post_ID !== typeof undefined && post_ID !== "" ) {
			post_ID = post_ID.replace('post-', '');
		}

		// Add a post divider.
		temp_content_container.prepend( '<hr style="height: 0" class="post-divider" data-title="' + window.document.title + '" data-url="' + window.location.href + '" data-post-id="' + post_ID + '"/>' );

		// Initialise scrollSpy
		initialise_scrollspy();

		$('body').on( 'click', '.ast-show-comments', function( e ) {
			var parent = $(this).closest('.ast-show-comments-data');
			parent.hide();
			parent.siblings().show();
		});

		/**
		 * Track Page View with Google Analytics.
		 *
		 * It will first detect if Google Analytics is installed before
		 * attempting to send a pageview.
		 *
		 * The tracker detects both classic and universal tracking methods.
		 *
		 * Also supports Google Analytics by Monster Insights should it be used.
		 */
		$('body').on( 'asta-post-changed', function( e, post_title, post_url, post_id, post_count, stop_reading ) {
			if ( track_pageviews != 'yes' ) {
				return;
			}

			if ( typeof pageTracker === "undefined" && typeof _gaq === 'undefined' && typeof ga === 'undefined' && typeof __gaTracker === 'undefined' ) {
				return;
			}

			// Remove the base URL from the post_url.
			var regexp = new RegExp(siteUrl, 'gi')
			var postUrl = post_url.replace(regexp, '');

			// This uses Asynchronous version of Google Analytics tracking method.
			if ( typeof pageTracker !== "undefined" && pageTracker !== null ) {
				pageTracker._trackPageview( postUrl );
			}

			// This uses Google's classic Google Analytics tracking method.
			if ( typeof _gaq !== 'undefined' && _gaq !== null ) {
				_gaq.push(['_trackPageview', postUrl]);
			}

			// This uses Google Analytics Universal Analytics tracking method.
			if ( typeof ga !== 'undefined' && ga !== null ) {
				ga( 'send', 'pageview', postUrl );
			}

			// This uses Monster Insights method of tracking Google Analytics.
			if ( typeof __gaTracker !== 'undefined' && __gaTracker !== null ) {
				__gaTracker( 'send', 'pageview', postUrl );
			}

			// This uses Google Analytics Universal Analytics tracking method.
			if ( typeof gtag !== 'undefined' && gtag !== null ) {
				gtag('event', 'page_view', {
				  'page_title' : post_title,
				  'page_path': postUrl
				});
			}

		});

	}); // END document()

	function initialise_comment( comments_wrapper ) {

		var $comments_container = $( comments_wrapper );

		if (  0 === $comments_container.length ) {
			return;
		}

		$comments_container.each(function( index ) {

			var $this = $(this);

			if ( $this.find('.ast-show-comments-data').length === 0  ) {
				var comments_count_wrapper 	= $this.find( '.comments-count-wrapper' );
				var comment_data = '<div class="ast-show-comments-data">';

				$this.find( '.comment-respond' ).hide();

				if ( comments_count_wrapper.length > 0 ) {
					comments_count_wrapper.hide();
					$this.find( '.ast-comment-list' ).hide();
					comment_data += '<div class="ast-show-comments-count"><h3 class="comments-title">' + comments_count_wrapper.find('.comments-title').text() + '</h3></div>';
				}

				comment_data += '<div class="ast-show-comments button ast-button">' + show_comments + '</div>';

				comment_data += '</div>';

				$this.find( '.no-comments' ).hide();

				$this.prepend( comment_data );
			}
		});
	}

	function initialise_scrollspy() {
		scrollspy();
	} // END initialise_scrollspy()

	function scrollspy() {

		$( '.post-divider').off( 'scrollSpy:enter', astra_enter );
		$( '.post-divider').off( 'scrollSpy:exit', astra_leave );

		// Spy on post-divider - changes the URL in browser location and loads new post.
		$( '.post-divider').on( 'scrollSpy:enter', astra_enter );
		$( '.post-divider').on( 'scrollSpy:exit', astra_leave );
		$( '.post-divider').scrollSpy();
	} // END scrollspy()

	function astra_enter() {
		var $enter = $(this);
		changeURL($enter, 'enter' );
	} // END astra_enter()

	function astra_leave() {
		var $leave = $(this);
		changeURL($leave, 'leave' );
	} // END astra_leave()

	function changeURL( $this, in_out_style ) {
		var el           = $($this);
		var this_url     = el.attr( 'data-url' );
		var this_title   = el.attr( 'data-title' );
		var this_post_id = el.attr( 'data-post-id' );
		var offset       = el.offset();
		var scrollTop    = $(document).scrollTop();

		// If exiting or entering from top, change URL.
		if ( ( offset.top - scrollTop ) < 200 && curr_url != this_url ) {
			curr_url = this_url;
			History.pushState(null, this_title, this_url);

			// Update edit link if possible
			if( $('#wp-admin-bar-edit').length > 0 && '' != edit_post_url ) {

				var new_edit_post_url = edit_post_url.replace( "{{id}}", this_post_id );

				$('#wp-admin-bar-edit a').attr( 'href', new_edit_post_url );
			}
			$('body').trigger( 'asta-post-changed', [ this_title, this_url, this_post_id, post_count, stop_reading ] );
		}

		if ( el.nextAll( '.post-divider' ).length === 0 ) {
			// Look for the next post to load if any.
			auto_load_next_post();
		}
	} // END changeURL()

	/**
	 * This is the main function.
	 */
	function auto_load_next_post() {
		// If the user can no read any more then stop looking for new posts.
		if ( stop_reading ) {
			return;
		}

		// Grab the url for the next post in the post navigation.
		var post_url = $( nav_container ).find( 'a[rel="prev"]').attr( 'href' );

		// Return if previous post URL is same as current URL.
		if ( ! post_url || post_url === window.location.href ) {
			return;
		}

		// Check to see if pretty permalinks, if not then add partial-prev=1
		if ( post_url.indexOf( '?' ) > -1 ) {
			var np_url = post_url + '&partial-prev=1'
		} else {
			var np_url = post_url + '?partial-prev=1'
		}

		// Remove the post navigation HTML once the next post has loaded.
		$( nav_container ).remove();

		let request = new XMLHttpRequest();
		request.open('GET', post_url, true);
		request.send();
		request.onload = function() {
			let string = request.response;
			let postData = new DOMParser().parseFromString(string, 'text/html'),
				postId = postData.querySelector( 'article.ast-article-single' ) ? postData.querySelector( 'article.ast-article-single' ).getAttribute('id') : '';
			postId = '' != postId ? postId.replace('post-', '') : ''; // Make sure that only the post ID remains.

			let linkId = postData.getElementById("uag-style-" + postId + "-css"),
				styleId = postData.getElementById("uagb-style-frontend-" + postId);

			if ( '' !== postId && linkId ) {
				// If file generation is enabled.
				let href = linkId.href,
					styleLink = document.createElement("link");

				styleLink.rel = "stylesheet";
				styleLink.id = "uag-style-" + postId + "-css";
				styleLink.href = href;
				styleLink.media = "all";

				document.head.appendChild( styleLink );
			}

			if ( '' !== postId && styleId ) {
				// If inline dynamic styles loaded.
				let styleLink = document.createElement("style");

				styleLink.id = "uagb-style-frontend-" + postId;
				styleLink.textContent = styleId.innerText;

				document.head.appendChild( styleLink );
			}
		}

		$.get( np_url , function( data ) {

			var post = $( "<div>" + data + "</div>" );

			data = post.html(); // Returns the HTML data of the next post that was loaded.

			var post_divider = '<hr style="height: 0" class="ast-single-previous-hr post-divider" data-url="' + post_url + '"/>';
			var post_html    = $( post_divider + data );
			var post_title   = post_html.find( post_title_selector ); // Find the post title of the loaded article.
			var post_ID      = $(post).find( 'article' ).attr( 'id' ); // Find the post ID of the loaded article.

			if ( typeof post_ID !== typeof undefined && post_ID !== "" ) {
				post_ID = post_ID.replace('post-', ''); // Make sure that only the post ID remains.
			}

			$( content_container ).append( post_html ); // Add next post.

			// Remove Comments.
			if ( remove_comments === 'yes' ) {
				initialise_comment( comments_container );
			}

			// Get the hidden "HR" element and add the missing post title and post id attributes. Also make sure it remains hidden.
			$( 'hr[data-url="' + post_url + '"]').attr( 'data-title' , post_title.text() ).attr( 'data-post-id' , post_ID );// .css( 'display', 'inline-block' );

			scrollspy(); // Need to set up ScrollSpy now that the new content has loaded.

			post_count = post_count+1; // Updates the post count.

			// Run an event once the post has loaded.
			$('body').trigger( 'astra-post-loaded', [ post_title.text(), post_url, post_ID, post_count ] );
		});

	} // END auto_load_next_post()


})(jQuery);
