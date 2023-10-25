export function custom(flickity){

    var galleryElems = document.querySelectorAll('.main-carousel');

    //[INICIO] Flickity 
    for ( var i=0, len = galleryElems.length; i < len; i++ ) {
        var galleryElem = galleryElems[i];
        var flk = new flickity( galleryElem, {
            cellAlign: 'center',
            contain: true,
            // groupCells: true,
            // lazyLoad: 1,
            fullscreen:true,
            // freeScroll: true,
            // wrapAround: true,
            watchCSS: true,
            imagesLoaded: true
        });
    }
    //[FIN] Flickity 

    $('[data-toggle="tooltip"]').tooltip();
}