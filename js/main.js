const mainHeader = document.querySelector('.header-area');

ScrollTrigger.create({
    trigger: "body",
    start: "top -50px",
    end: "300px top",
    onUpdate: (self) => {
        if (self.progress > 0) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled')
        }
    }
});

const parallaxbg = document.querySelector('.header-parallax-bg');
gsap.to(parallaxbg, {
    y: '-50%',
    ease: 'none',
    ScrollTrigger: {
        trigger: ".main-header",
        start: "top -10px",
        end: "bottom top",
        scrub: true,
        markers: true,
    }
});

// Header
document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    // Header Area
    // Animation for Logo
    tl.from('.biz-slider-area',{
        x:50,
        opacity:0,
        duration:0.4,
    })
    tl.from(".header-top-area-wrapper", {
        y: -50,
        opacity: 0,
        duration: 0.8
    });
    tl.from(".biz-logo", {
        x: -50,
        opacity: 0,
        duration: 0.2
    });
    tl.from("nav ul li", {
        y: -5, // Starts 50px above
        opacity: 0, // Starts invisible
        duration: 0.2, // Animation duration for each item
        stagger: 0.1, // Stagger the animation by 0.1 seconds for each item
        delay: -0.1 // Starts 0.3 seconds before the previous animation ends (overlap)
    });
    tl.from(".mobile-menu-bar", {
        y: -10, // Starts 50px above
        opacity: 0, // Starts invisible
        duration: 0.2, // Animation duration for each item
    });
    tl.from(".header-action-btn", {
        y: -10, // Starts 50px above
        opacity: 0, // Starts invisible
        duration: 0.3, // Animation duration for each item
    });
    tl.from(".header-search-action", {
        y: -10, // Starts 50px above
        opacity: 0, // Starts invisible
        duration: 0.3, // Animation duration for each item
    });

    // Hero Area
    tl.from(".biz-slider-subtitle", {
        y: -20,
        opacity: 0,
        duration: 1.2,
    });
    tl.from(".biz-slider-title", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay:-0.7
    });
    tl.from(".biz-slider-shape", {
        x: -50,
        opacity: 0,
        duration: 0.4,
    });
    tl.from(".slider-arrow-btn", {
        x: -50,
        opacity: 1,
        duration: 0.4,
        delay:3
    });

    // Service Section
    tl.from('.biz-service-bg',{
        scale:0,
        duration:1,
        delay:.2
    });
    tl.from('.biz-section-title',{
        y:-40,
        opacity:0,
        duration:.3,
    });
    tl.from('.biz-single-service-box',{
        y: -5, // Starts 50px above
        opacity: 0, // Starts invisible
        duration: 0.2, // Animation duration for each item
        stagger: 0.1, // Stagger the animation by 0.1 seconds for each item
        delay: -0.1 // Starts 0.3 seconds before the previous animation ends (overlap)
    });
})