document.addEventListener("DOMContentLoaded", display_mega_menu_on_load);
document.addEventListener(
	"astPartialContentRendered",
	display_mega_menu_on_load
);

/**
 * Remove "hidden" class after the page is fully loaded to fix the visibility issue of MegaMenu width.
 */
function display_mega_menu_on_load() {
	// For Content width.
	var menu_content = document.querySelectorAll(".content-width-mega");
	if (menu_content.length > 0) {
		for (var i = 0; i < menu_content.length; i++) {
			menu_content[i].addEventListener("mouseenter", function (event) {
				var mega_menu_container = event.target.querySelector(
					".astra-mega-menu-width-content"
				);
				if (null !== mega_menu_container) {
					mega_menu_container.classList.remove("ast-hidden");
				}
			});
		}
	}

	// For Menu Container width.
	var menu_container = document.querySelectorAll(".menu-container-width-mega");
	if (menu_container.length > 0) {
		for (var i = 0; i < menu_container.length; i++) {
			menu_container[i].addEventListener("mouseenter", function (event) {
				var mega_menu_container = event.target.querySelector(
					".astra-mega-menu-width-menu-container"
				);
				if (null !== mega_menu_container) {
					mega_menu_container.classList.remove("ast-hidden");
				}
			});
		}
	}

	// For Full width.
	var menu_full_width = document.querySelectorAll(".full-width-mega");
	if (menu_full_width.length > 0) {
		for (var i = 0; i < menu_full_width.length; i++) {
			menu_full_width[i].addEventListener("mouseenter", function (event) {
				var mega_menu_container = event.target.querySelector(
					".astra-full-megamenu-wrapper"
				);
				var mega_menu_submenu = event.target.querySelector(
					".astra-mega-menu-width-full"
				);
				if (null !== mega_menu_container) {
					mega_menu_container.classList.remove("ast-hidden");
				}
				if (null !== mega_menu_submenu) {
					mega_menu_submenu.classList.remove("ast-hidden");
				}
			});
		}
	}

	// For Full width Stretched.
	var menu_full_width_stretched = document.querySelectorAll(
		".full-stretched-width-mega"
	);
	if (menu_full_width_stretched.length > 0) {
		for (var i = 0; i < menu_full_width_stretched.length; i++) {
			menu_full_width_stretched[i].addEventListener(
				"mouseenter",
				function (event) {
					var mega_menu_container = event.target.querySelector(
						".astra-full-megamenu-wrapper"
					);
					var mega_menu_submenu = event.target.querySelector(
						".astra-mega-menu-width-full-stretched"
					);
					if (null !== mega_menu_container) {
						mega_menu_container.classList.remove("ast-hidden");
					}
					if (null !== mega_menu_submenu) {
						mega_menu_submenu.classList.remove("ast-hidden");
					}
				}
			);
		}
	}

	// For Custom Width MegaMenu.
	var customWidthStretched = document.querySelectorAll(".custom-width-mega");
	if (customWidthStretched.length > 0) {
		for (var i = 0; i < customWidthStretched.length; i++) {
			customWidthStretched[i].addEventListener("mouseenter", function (event) {
				var megaMenuSubmenu = event.target.querySelector(
					".astra-mega-menu-width-custom"
				);
				if (null !== megaMenuSubmenu) {
					megaMenuSubmenu.classList.remove("ast-hidden");
				}
			});
		}
	}
}

var items = document.getElementsByClassName("astra-megamenu-li");

function apply_megamenu_width_styles() {
	[].slice.call(items).forEach(function (container) {
		jQuery(container).hover(function () {
			var ast_container = jQuery(container).parents(".ast-container"),
				$main_container = ast_container.children(),
				$full_width_main_container = ast_container.parent(),
				$this = jQuery(this);

			// Full width mega menu
			if (
				$this.hasClass("full-width-mega") ||
				$this.hasClass("full-stretched-width-mega")
			) {
				$main_container = jQuery($main_container).closest(".ast-container");
			}

			if (
				parseInt(jQuery(window).width()) > parseInt(astra.break_point) &&
				"ast-hf-mobile-menu" !== $this.parent().attr("id") &&
				"ast-desktop-toggle-menu" !== $this.parent().attr("id")
			) {
				var $menuWidth = $main_container.width(),
					$menuPosition = $main_container.offset(),
					$menuItemPosition = $this.offset(),
					positionLeft =
						$menuItemPosition.left -
						($menuPosition.left +
							parseFloat($main_container.css("paddingLeft"))),
					positionRight = $menuWidth - ($menuItemPosition.left + $menuPosition.left) + 130;

				var $fullMenuWidth = $full_width_main_container.width(),
					$fullMenuPosition = $full_width_main_container.offset(),
					fullPositionLeft =
						$menuItemPosition.left -
						($fullMenuPosition.left +
							parseFloat($full_width_main_container.css("paddingLeft")));

				if ($this.hasClass("custom-width-mega")) {
					var customMegaMenuWidth =
						window
							.getComputedStyle(
								$this.find(".astra-mega-menu-width-custom")[0],
								"::before"
							)
							.getPropertyValue("content") || 1200;

					customMegaMenuWidth = customMegaMenuWidth.replace(/[^0-9]/g, "");
					customMegaMenuWidth = parseInt(customMegaMenuWidth);

					if (customMegaMenuWidth <= $menuWidth) {
						var extra_width = parseInt($menuWidth - customMegaMenuWidth),
							customWithPositionLeft = parseInt(positionLeft - extra_width),
							customWithPositionRight =
								$menuPosition.left - customWithPositionLeft;
					} else {
						var extra_width = parseInt(customMegaMenuWidth - $menuWidth),
							customWithPositionLeft = parseInt(positionLeft + extra_width),
							customWithPositionRight =
								$menuPosition.left + customWithPositionLeft;
					}
				}

				if ($this.hasClass("menu-container-width-mega")) {
					var menu_width_container =
						jQuery(container).parents(".main-navigation");

					if ($full_width_main_container.hasClass("ast-above-header")) {
						menu_width_container = jQuery(".ast-above-header-navigation");
					} else if ($full_width_main_container.hasClass("ast-below-header")) {
						menu_width_container = jQuery(".ast-below-header-actual-nav");
					}

					if (menu_width_container.length) {
						$target_container = menu_width_container;
					} else {
						$target_container = $this.parent("ul");
					}

					$menuWidth = $target_container.width() + "px";
					var $offset_right =
						jQuery(window).width() -
						($target_container.offset().left + $target_container.outerWidth());
					var $current_offset = $this.offset();
					var $width =
							jQuery(window).width() - $offset_right - $current_offset.left,
						positionLeft = parseInt($target_container.width() - $width),
						positionRight =
							parseInt($menuWidth) -
							$this.outerWidth() -
							parseInt($target_container.width() - $width);
				}
				if ($this.hasClass("full-width-mega")) {
					$this
						.find(".astra-full-megamenu-wrapper")
						.css({
							left: "-" + fullPositionLeft + "px",
							width: $fullMenuWidth,
						});
					$this.find(".astra-megamenu").css({ width: $menuWidth });
				} else if ($this.hasClass("full-stretched-width-mega")) {
					$this
						.find(".astra-full-megamenu-wrapper")
						.css({
							left: "-" + fullPositionLeft + "px",
							width: $fullMenuWidth,
						});
				} else if ($this.hasClass("custom-width-mega")) {
					if (astra.isRtl) {
						$this
							.find(".astra-mega-menu-width-custom")
							.css({
								right: "-" + customWithPositionRight + "px",
								width: customMegaMenuWidth + "px",
							});
					} else {
						$this
							.find(".astra-mega-menu-width-custom")
							.css({
								left: "-" + customWithPositionLeft + "px",
								width: customMegaMenuWidth + "px",
							});
					}
				} else {
					if (astra.isRtl) {
						$this
							.find(".astra-megamenu")
							.css({ right: "-" + positionRight + "px", width: $menuWidth });
					} else {
						$this
							.find(".astra-megamenu")
							.css({ left: "-" + positionLeft + "px", width: $menuWidth });
					}
				}
			} else {
				if (astra.isRtl) {
					$this
						.find(".astra-megamenu")
						.css({ right: "", width: "", "background-image": "" });
					$this
						.find(".astra-full-megamenu-wrapper")
						.css({ right: "", width: "", "background-image": "" });
				} else {
					$this
						.find(".astra-megamenu")
						.css({ left: "", width: "", "background-image": "" });
					$this
						.find(".astra-full-megamenu-wrapper")
						.css({ left: "", width: "", "background-image": "" });
				}
			}
		});

		jQuery(container).mouseenter(function () {
			document.dispatchEvent(
				new CustomEvent("astra_mega_menu_on_hover", { detail: {} })
			);
		});
	});
}

apply_megamenu_width_styles();

document.addEventListener("astMenuHoverStyleChanged", function () {
	apply_megamenu_width_styles();
});

// Achieve accessibility for megamenus using focusin on <a>.
[].slice.call(items).forEach(function (container) {
	var ast_container = jQuery(container).parents(".ast-container"),
		$main_container = ast_container.children(),
		$full_width_main_container = ast_container.parent(),
		$this = jQuery(container);

	// Full width mega menu
	if (
		$this.hasClass("full-width-mega") ||
		$this.hasClass("full-stretched-width-mega")
	) {
		$main_container = jQuery($main_container).closest(".ast-container");
		$this.find(".astra-full-megamenu-wrapper").removeClass("ast-hidden");
	}

	$this.find(".menu-link").focusin(function (e) {
		if (!astra.is_header_footer_builder_active) {
			$this.find(".sub-menu").addClass("astra-megamenu-focus");
			$this
				.find(".astra-full-megamenu-wrapper")
				.addClass("astra-megamenu-wrapper-focus");
		}

		$this.find(".sub-menu").removeClass("ast-hidden");
		if (
			parseInt(jQuery(window).width()) > parseInt(astra.break_point) &&
			"ast-hf-mobile-menu" !== $this.parent().attr("id") &&
			"ast-desktop-toggle-menu" !== $this.parent().attr("id")
		) {
			var $menuWidth = $main_container.width(),
				$menuPosition = $main_container.offset(),
				$menuItemPosition = $this.offset(),
				positionLeft =
					$menuItemPosition.left -
					($menuPosition.left + parseFloat($main_container.css("paddingLeft"))),
				positionRight = $menuItemPosition.left + $menuPosition.left;

			var $fullMenuWidth = $full_width_main_container.width(),
				$fullMenuPosition = $full_width_main_container.offset(),
				fullPositionLeft =
					$menuItemPosition.left -
					($fullMenuPosition.left +
						parseFloat($full_width_main_container.css("paddingLeft")));

			if ($this.hasClass("custom-width-mega")) {
				var customMegaMenuWidth =
					window
						.getComputedStyle(
							$this.find(".astra-mega-menu-width-custom")[0],
							"::before"
						)
						.getPropertyValue("content") || 1200;

				customMegaMenuWidth = customMegaMenuWidth.replace(/[^0-9]/g, "");
				customMegaMenuWidth = parseInt(customMegaMenuWidth);

				if (customMegaMenuWidth <= $menuWidth) {
					var extra_width = parseInt($menuWidth - customMegaMenuWidth),
						customWithPositionLeft = parseInt(positionLeft - extra_width),
						customWithPositionRight =
							$menuPosition.left - customWithPositionLeft;
				} else {
					var extra_width = parseInt(customMegaMenuWidth - $menuWidth),
						customWithPositionLeft = parseInt(positionLeft + extra_width),
						customWithPositionRight =
							$menuPosition.left + customWithPositionLeft;
				}
			}

			if ($this.hasClass("menu-container-width-mega")) {
				var menu_width_container =
					jQuery(container).parents(".main-navigation");

				if ($full_width_main_container.hasClass("ast-above-header")) {
					menu_width_container = jQuery(".ast-above-header-navigation");
				} else if ($full_width_main_container.hasClass("ast-below-header")) {
					menu_width_container = jQuery(".ast-below-header-actual-nav");
				}

				if (menu_width_container.length) {
					$target_container = menu_width_container;
				} else {
					$target_container = $this.parent("ul");
				}

				$menuWidth = $target_container.width() + "px";
				var $offset_right =
					jQuery(window).width() -
					($target_container.offset().left + $target_container.outerWidth());
				var $current_offset = $this.offset();
				var $width =
						jQuery(window).width() - $offset_right - $current_offset.left,
					positionLeft = parseInt($target_container.width() - $width),
					positionRight =
						parseInt($menuWidth) -
						$this.outerWidth() -
						parseInt($target_container.width() - $width);
			}
			if ($this.hasClass("full-width-mega")) {
				$this
					.find(".astra-full-megamenu-wrapper")
					.css({ left: "-" + fullPositionLeft + "px", width: $fullMenuWidth });
				$this.find(".astra-megamenu").css({ width: $menuWidth });
			} else if ($this.hasClass("full-stretched-width-mega")) {
				$this
					.find(".astra-full-megamenu-wrapper")
					.css({ left: "-" + fullPositionLeft + "px", width: $fullMenuWidth });
			} else if ($this.hasClass("custom-width-mega")) {
				if (astra.isRtl) {
					$this
						.find(".astra-mega-menu-width-custom")
						.css({
							right: "-" + customWithPositionRight + "px",
							width: customMegaMenuWidth + "px",
						});
				} else {
					$this
						.find(".astra-mega-menu-width-custom")
						.css({
							left: "-" + customWithPositionLeft + "px",
							width: customMegaMenuWidth + "px",
						});
				}
			} else {
				if (astra.isRtl) {
					$this
						.find(".astra-megamenu")
						.css({ right: "-" + positionRight + "px", width: $menuWidth });
				} else {
					$this
						.find(".astra-megamenu")
						.css({ left: "-" + positionLeft + "px", width: $menuWidth });
				}
			}
		} else {
			if (astra.isRtl) {
				$this
					.find(".astra-megamenu")
					.css({ right: "", width: "", "background-image": "" });
				$this
					.find(".astra-full-megamenu-wrapper")
					.css({ right: "", width: "", "background-image": "" });
			} else {
				$this
					.find(".astra-megamenu")
					.css({ left: "", width: "", "background-image": "" });
				$this
					.find(".astra-full-megamenu-wrapper")
					.css({ left: "", width: "", "background-image": "" });
			}
		}
	});

	if (!astra.is_header_footer_builder_active) {
		$this.find(".menu-link").keydown(function (e) {
			if (e.which == 9 && e.shiftKey) {
				$this.find(".sub-menu").removeClass("astra-megamenu-focus");
				$this
					.find(".astra-full-megamenu-wrapper")
					.removeClass("astra-megamenu-wrapper-focus");
			}
		});

		jQuery(container)
			.find(".sub-menu .menu-item")
			.last()
			.focusout(function () {
				$this.find(".sub-menu").removeClass("astra-megamenu-focus");
				$this
					.find(".astra-full-megamenu-wrapper")
					.removeClass("astra-megamenu-wrapper-focus");
			});

		jQuery(window).click(function () {
			$this.find(".sub-menu").removeClass("astra-megamenu-focus");
			$this
				.find(".astra-full-megamenu-wrapper")
				.removeClass("astra-megamenu-wrapper-focus");
		});
	}

	$this.click(function (event) {
		if (!jQuery(event.target).hasClass("menu-item")) {
			return;
		}
		// event.stopPropagation();
		event.stopImmediatePropagation();
	});
});
