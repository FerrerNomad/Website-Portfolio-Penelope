$(window).scroll(function() {
    $scroll = $(window).scrollTop();

    if ($scroll > 0) {
        $('#navbar').css('background', "#212529");
    } else {
        $('#navbar').css('background', 'transparent');
    }
});

//Reviews
$('.reviews-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    items: 1,
    smartSpeed: 600,
});

$('.blog-carousel').owlCarousel({
    loop: true,
    margin: 32,
    items: 1,
    nav: false,
    smartSpeed: 600,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
    }
});

/*------carousel services---*/
$('.features-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        550: {
            items: 2,
        },
        991: {
            items: 3,
        },
        1210: {
            items: 4,
        },
    }
});