(function () {
	/**
	 * Astra Advanced Headers
	 *
	 * @class AstraPageTitle
	 * @since 1.0
	 */
	AstraPageTitle = {
		/**
		 * Initializes a Astra Advanced Headers.
		 *
		 * @since 1.0
		 * @method init
		 */
		init: function () {
			// Init backgrounds.
			AstraPageTitle._initBackgrounds();
			AstraPageTitle._initFullScreenHeight();
		},
		/**
		 * Initializes Page Parallax backgrounds that require
		 * parallax.
		 *
		 * @since 1.1.4
		 * @access private
		 * @method _initBackgrounds
		 */
		_initBackgrounds: function () {
			if (
				document.querySelectorAll(".ast-advanced-headers-parallax").length > 0
			) {
				AstraPageTitle._scrollParallaxBackground();
				window.addEventListener("scroll", function () {
					AstraPageTitle._scrollParallaxBackgrounds();
				});
				window.addEventListener("resize", function () {
					AstraPageTitle._scrollParallaxBackgrounds();
				});
			}
		},

		/**
		 * Fires when the window is scrolled to adjust
		 * a single parallax backgrounds.
		 *
		 * @since 1.1.4
		 * @access private
		 * @method _scrollParallaxBackgrounds
		 */
		_scrollParallaxBackgrounds: function () {
			document
				.querySelectorAll(".ast-advanced-headers-parallax")
				.forEach((element) => {
					AstraPageTitle._scrollParallaxBackground();
				});
		},
		/**
		 * Fires when the window is scrolled to adjust
		 * a single parallax background.
		 *
		 * @since 1.1.4
		 * @access private
		 * @method _scrollParallaxBackgrounds
		 */
		_scrollParallaxBackground: function () {
			const content = document.querySelector(".ast-advanced-headers-parallax");

			const rect = content.getBoundingClientRect();

			const offset = {
				top: rect.top + window.scrollY,
				left: rect.left + window.scrollX,
			};

			const speed = content.getAttribute("data-parallax-speed"),
				device = content.getAttribute("data-parallax-device"),
				yPos = -((window.scrollY - offset.top) / speed);

			if ("both" === device) {
				content.style.backgroundPosition = "center " + yPos + "px";
			} else if ("desktop" === device) {
				if (document.body.classList.contains("ast-desktop")) {
					content.style.backgroundPosition = "center " + yPos + "px";
				} else {
					content.style.backgroundPosition = "";
				}
			} else {
				if (document.body.classList.contains("ast-header-break-point")) {
					content.style.backgroundPosition = "center " + yPos + "px";
				} else {
					content.style.backgroundPosition = "";
				}
			}
		},
		/**
		 * Fires when the Advanced Headers full screen selected.
		 *
		 * @since 1.1.4
		 * @access private
		 * @method _initFullScreenHeight
		 */
		_initFullScreenHeight: function () {
			let ResizeTime;
			if (document.querySelectorAll(".ast-full-advanced-header") && document.querySelectorAll(".ast-full-advanced-header")[0]) {
				// Initiate full window height on resize
				AstraPageTitle._astraPageFullHeader();

				let width = window.innerWidth;
				window.addEventListener("resize", function () {
					if (window.innerWidth != width) {
						clearTimeout(ResizeTime);
						ResizeTime = setTimeout(function () {
							AstraPageTitle._astraPageFullHeader();
						}, 200);
						width = window.innerWidth;
					}
				});

				window.addEventListener("orientationchange", function () {
					if (window.innerWidth != width) {
						clearTimeout(ResizeTime);
						ResizeTime = setTimeout(function () {
							AstraPageTitle._astraPageFullHeader();
						}, 200);
						width = window.innerWidth;
					}
				});
			}
		},
		/**
		 * Fires when the Advanced Headers full screen selected.
		 *
		 * @since 1.1.4
		 * @access private
		 * @method _astraPageFullHeader
		 */
		_astraPageFullHeader: function () {
			if (!document.querySelectorAll(".ast-full-advanced-header").length)
				return;

			const window_height = window.innerHeight;

			const rect = document
				.querySelector(".ast-full-advanced-header")
				.getBoundingClientRect();

			const offset = rect.top + window.scrollY;

			document.querySelector(".ast-full-advanced-header").style.height =
				window_height - offset + "px";
		},
	};

	/* Initializes the Astra Advanced Headers. */
	const domReady = function (callback) {
		document.readyState === "interactive" || document.readyState === "complete"
			? callback()
			: document.addEventListener("DOMContentLoaded", callback);
	};
	domReady(function () {
		AstraPageTitle.init();
	});
})();
