(function ($) {
    "use strict";
    $(document).ready(function () {
        /*
       Jquery Mobile Menu
       ============================*/
        $('#biz-mean-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="fal fa-plus"></i>'],
        });

        /*
       Jquery Sidebar Toggle
       ============================*/
        $(".mobile-menu-toggle-btn").on("click", function () {
            $(".menu-sidebar-area").addClass("active");
            $(".body-overlay").addClass("active");
        });
        $(".menu-sidebar-close-btn").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

        // Search bar Area
        $('.header-search-action').on('click', function () {
            $('.biz-search-bar-area').addClass('show animated fadeInDown');
        });
        $('.close-search-bar').on('click', function () {
            $('.biz-search-bar-area').removeClass('show animated fadeInDown');
        });

        /*
       Jquery Body Overlay
       ============================*/
        $(".body-overlay").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });
        /*
        Stikey Js
        ============================*/

        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,
            html.scrollHeight, html.offsetHeight);

        // if (100 < $(window).scrollTop()) {
        //     $(".fixed-header").addClass("sticky_menu");
        // }

       
            let nav = $(".fixed-header");
                if (100 < $(window).scrollTop()) {
                    nav
                        .addClass("sticky_menu animated fadeIn")
                }else{
                    nav.removeClass("sticky_menu animated fadeIn");
                }


        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .post-content p').filter(function () {
            return /\u00A0/.test($(this).text());
        }).hide();

        /*
       Slider
       ============================*/
        $(".biz-slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Info Card Slider
       ============================*/
        $("#info_card_slider_wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
       Team Slider
       ============================*/
        $(".ta_ta_portfolio_slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Client-Slider
       ============================*/
        $(".biz-providint-brand-wrap").slick({
            slidesToShow: 5,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 5000,
            cssEase: 'linear',
            infinite: true,
            focusOnSelect: false,
            arrows: false,
            dots: false,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn active'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
        /*
       Testimonial Slider
       ============================*/
        $(".biz-project-wrap").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            centerMode: true,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-arrow-left title-1'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn active'><i class='fa-solid fa-arrow-right title-1'></i></button>",
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                    },
                },

                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                    },
                },

                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
                    },
                },

            ],
        });

        // arrow button active class
        $(".testimonial-arrow-btn").on("click", function () {
            $(".testimonial-arrow-btn").removeClass("active");
            $(this).addClass("active");
        });

        // Review-slider-area button trigger
        $('#review-prev').on('click', function (e) {
            e.preventDefault();
            $('.prev-btn').trigger('click');
        });
        $('#review-next').on('click', function (e) {
            e.preventDefault();
            $('.next-btn').trigger('click');
        });

        // Header notification
        $('.header-top-btn').on('click', function (e) {
            e.preventDefault();
            $('.header-top').css("display", "none");
        });


        // Isotop
        $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        });
        var $grid = $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
            masonry: {
                columnWidth: '.isotope-item'
            }
        });
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        $(".filter-button-group").on("click", 'button', function () {
            $('.filter-button-group button').removeClass("active");
            $(this).addClass("active");
        });

        // Accordion height
        const accordionEl = $(".accordion");
        const accordionHeight = accordionEl.innerHeight();

        var width = $(window).width();
        if (width < 767) {
            accordionEl.css("height", 'auto');
        } else {
            accordionEl.css("height", accordionHeight);
        }

        /*
       Related Portfolio Slider
       ============================*/
        $("#related_portfolio").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='portfolio-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='portfolio-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // portfolio-area slider style-1
        $(".portfolio-slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        autoplay: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 554,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });
        // Testimonial-slider-area slider style-1
        $(".testimonial-slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            vertical: true,
            touchMove: true,
            useTransform: true,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn testimonial-prev'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn testimonial-next'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });
        // Review-slider-area button trigger
        $('#left-arrow').on('click', function (e) {
            e.preventDefault();
            $('.testimonial-prev').trigger('click');
        });
        $('#right-arrow').on('click', function (e) {
            e.preventDefault();
            $('.testimonial-next').trigger('click');
        });

        // portfolio-area slider style-1
        $(".review-slider").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            variableWidth: true,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        autoplay: true,
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        autoplay: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 554,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // accordion
        $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
            $(e.target)
                .prev()
                .find("i:last-child")
                .toggleClass("fa-minus fa-plus");
        });


        /*
        Counter Js
        ============================*/
        $(".count").counterUp({
            delay: 100,
            time: 1000,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        /*
        Jquery Wow Js
        ============================*/
        // new WOW().init();
        if ($('.wow').length) {
            var wow = new WOW(
                {
                    boxClass: 'wow',      // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    offset: 0,          // distance to the element when triggering the animation (default is 0)
                    mobile: false,       // trigger animations on mobile devices (default is true)
                    live: true       // act on asynchronously loaded content (default is true)
                }
            );
            wow.init();
        }

        /*
       Jquery Nice Select Js
       ============================*/
        $('select.select_option, select.wpcf7-select,select').niceSelect();

        /*
       Jquery Tilt Js
       ============================*/
        $('#tilt-effect-on-box,#tilt-effect-on-box-2,#tilt-effect-on-box-3,#biz-about-video-play-image,#biz-about-parent-image,.absolute-content-1,.absolute-content-2,.absolute-content-3,#biz-faq-image,#biz-call-action-area,#biz-single-team-member,.biz-single-blog-item').tilt({
            // maxTilt: 12,
            // perspective: 1500,
            maxTilt: 30,   // Max tilt value
            perspective: 1000, // Perspective value
            easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit
            speed: 500,  // Speed of the enter/exit transition in milliseconds
            transition: true, // Set a transition on the enter/exit. This is true by default.
            axis: null, // What axis should be enabled. Can be "x" or "y".
            reset: true, // If the tilt effect has to be reset on exit. This is true by default.
            glare: true, // If it should have a "glare" effect
            maxGlare: 0.3,  // The maximum opacity of the glare effect (0 to 1)
            scale: 1
        });
        // Tilt custom effect
        let customEffectOfTilt = true;

        $(".absolute-content-1,.absolute-content-2,.absolute-content-3").on('mousedown', function () {
            customEffectOfTilt = false;
        })
        $(".absolute-content-1,.absolute-content-2,.absolute-content-3").on('mouseup', function () {
            customEffectOfTilt = true;
        })


        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function () {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup-btn").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });
        /*
        Preeloader
        ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({ "overflow-x": "hidden" });
        });

        // Custom-switch
        $('.switch').on('click', function () {

            $(".switch").toggleClass("active");
            $("#custom-switch").toggleClass("active");
            $('.yearly').toggleClass("active");
            $('.monthly').toggleClass("active");
        });
        // Price-card switch
        // $('.price-switch').on('click', function () {
        //     $('.switch-price-card').toggleClass(' reverse ');
        // });
        // Accordion
        $('.accordion-item').on('click', function () {

            $(this).toggleClass("active");
        });
        // animate.css
        // Function to check if an element is in the viewport
        function isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to add animation class when element is in viewport
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animated');
            elements.forEach((element) => {
                if (isElementInViewport(element)) {
                    element.classList.add('activate-animation');
                }
            });
        }

        // Attach the scroll event listener to trigger animations
        window.addEventListener('scroll', animateOnScroll);

        // Initially trigger animations for elements in the viewport on page load
        animateOnScroll();

    });
})(jQuery);
