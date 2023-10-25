export function menuScroll() {
    var scrolling = false;

    $(window).scroll(function(event) {
        if (!scrolling) {
            scrolling = true;
            setTimeout(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= 75) {
                    $("body").addClass("top-scroll");
                } else {
                    $("body").removeClass("top-scroll");
                }
                scrolling = false;
            }, 100); // Espera 100ms después del último evento de desplazamiento
        }
    });
}
