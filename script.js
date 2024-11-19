$(document).ready(function () {
    $(".carousel-one").owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoplaySpeed: 800, // Speed of autoplay transitions
        smartSpeed: 800,
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
$(document).ready(function () {
    let $carousel = $(".carousel-sale");

    $carousel.owlCarousel({
        loop: true,
        nav: false,
        autoplay: false, // Disable default autoplay
        dots: false,
        items: 4, // Adjust as per your design
        margin: 10, // Space between items
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

    // Custom continuous scroll logic
    function continuousScroll() {
        let $stage = $carousel.find(".owl-stage");
        let left = parseFloat($stage.css("transform").split(",")[4]) || 0;

        $stage.css({
            transform: `translate3d(${left - 2}px, 0, 0)`,
            transition: "none"
        });

        if (Math.abs(left) >= $stage.width() / 2) {
            $stage.css("transform", "translate3d(0, 0, 0)");
        }

        requestAnimationFrame(continuousScroll);
    }

    continuousScroll(); // Start the custom scroll animation
});

