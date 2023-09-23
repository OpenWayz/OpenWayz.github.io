/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra Addon
 * @since x.x.x
 */

( function( $ ) {

  for ( var index = 1; index <= AstraAddonMenuData.component_limit; index++ ) {

    /**
     * Box Shadow
     */
    (function (index) {

      var selector = '.ast-desktop .ast-mega-menu-enabled .ast-builder-menu-' + index + ' div:not( .astra-full-megamenu-wrapper) .sub-menu, .ast-builder-menu-' + index + ' .inline-on-mobile .sub-menu, .ast-desktop .ast-builder-menu-' + index + ' .astra-full-megamenu-wrapper, .ast-desktop .ast-builder-menu-' + index + ' .menu-item .sub-menu';

      // Box Shadow CSS Generation.
      astra_addon_box_shadow_css( 'header-menu' + index, selector );

    })(index);
  }

} )( jQuery );
