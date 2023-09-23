// Horizontal gallery slider.
jQuery('.ast-single-product-thumbnails').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 80,
    itemMargin: 15,
    maxItems: 4,
    asNavFor: '.woocommerce-product-gallery',
    selector: '.woocommerce-product-gallery-thumbnails__wrapper > div',
});

const articleSingle = document.querySelector('.ast-article-single');

if (articleSingle && articleSingle.classList.contains('ast-product-single-variable')) {
    const img = document.querySelector(".woocommerce-product-gallery .woocommerce-product-gallery__image");
    const thumbnail_images = document.querySelectorAll('.woocommerce-product-gallery .ast-woocommerce-product-gallery__image img');

    if (img && thumbnail_images) {
        observer = new MutationObserver((changes) => {
            changes.forEach(change => {
                if (change.attributeName.includes('data-thumb')) {
                    if (thumbnail_images !== null) {
                        thumbnail_images.forEach(element => {
                            if (element.getAttribute('srcset') !== null && element.getAttribute('srcset').includes(img.getAttribute('data-thumb'))) {
                                element.click();
                            }
                        });
                    }
                }
            });
        });
        observer.observe(img, { attributes: true });
    }
}
