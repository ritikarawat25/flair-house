$(document).ready(function () {
    $(".carousel-one").owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $(".carousel-two").owlCarousel({
        loop: true,
        margin: 60,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'>&lt;</div>", "<div class='nav-btn next-slide'>&gt;</div>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

});
