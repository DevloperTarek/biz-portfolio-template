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
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    // Header Area
    // Animation for Logo
    tl.from('.biz-slider-area', {
        x: 50,
        opacity: 0,
        duration: 0.4,
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
        delay: -0.1, // Starts 0.3 seconds before the previous animation ends (overlap)
        scrollTrigger: {
            trigger: ".header-area",
            start: "top 1%",
            toggleActions: "play none play none",
            scrub: 1
        }
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
        delay: -0.7
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
        delay: 3
    });

    // Service Section
    tl.from('.biz-service-bg', {
        duration: .5,
        opacity: 0,
        scale: 0,
        delay: .2,
        scrollTrigger: {
            trigger: ".biz-service-bg",
            start: "top 90%",
            toggleActions: "play none none none",
            markers: false,
            scrub: 1
        }
    });
    tl.from('.biz-section-title', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".biz-section-title", // <<< এখানে গুরুত্বপূর্ণ!
            start: "top 75%",
            toggleActions: "play none none none",
            scrub:1
            // markers: true, // ডিবাগ করার জন্য এটি আনকমেন্ট করতে পারেন
        }
    });
    tl.from('.biz-single-service-box', {
        y: -20, // Starts 50px above
        opacity: 1, // Starts invisible
        duration: 0.2, // Animation duration for each item
        stagger: 0.1, // Stagger the animation by 0.1 seconds for each item
        delay: -0.1 // Starts 0.3 seconds before the previous animation ends (overlap)
    });
    gsap.from(".biz-single-service-box", {
        y: -20,           // Move to original Y position
        opacity: 0,     // Fade in
        duration: 0.5,  // Animation duration for each box
        ease: "back.out(1.7)", // A nice slightly bouncy ease
        stagger: 0.1,  // Stagger the animation by 0.15 seconds for each box
        scrollTrigger: {
            trigger: ".biz-service-box-wrap",  // When the grid container enters the viewport
            start: "top 85%",          // Animation starts when top of grid is 75% from top of viewport
            toggleActions: "play none play none", // Play animation once
            markers: false,
            scrub: 1
            // Uncomment the lines below to see ScrollTrigger in action (useful for debugging)
            // markers: true,
            // scrub: 1 // Makes animation tied to scroll position
        }
    });

    // About Us

    tl.from(".biz-about-us-absolute-image-group", {
        x: -50,
        duration: 0.4,
        opacity: 0,
        scrollTrigger: {
            trigger: ".biz-about-us-area",
            start: "top 55%",
            end: "top top",
            tagger: .2,
            duration: 0.5,
            markers: false,
            scrub: 1
        }
    });
    tl.from(".biz-content-area-wrapper", {
        x: 50,
        duration: 0.4,
        opacity: 0,
        scrollTrigger: {
            trigger: ".biz-about-us-area",
            start: "top 40%",
            end: "top top",
            tagger: .2,
            duration: 0.5,
            delay: -0.3,
            markers: false,
            scrub: 1
        }
    });


    // What we do Section

    tl.from('.biz-providing-title', {
        x: -20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".biz-providing-title", // When this element enters the viewport
            start: "top 80%",          // Animation starts when top of title is 80% from top of viewport
            toggleActions: "play none none none", // Play animation once
            markers: false,
            scrub: 1
        }
    });
    tl.to('.biz-single-providing-what-we-do-box', {
        x:-20,           // Move to original Y position
        opacity: 0,     // Fade in
        duration: 0.5,  // Animation duration for each box
        ease: "back.out(1.7)", // A nice slightly bouncy ease
        stagger: 0.15,  // Stagger the animation by 0.15 seconds for each box
        scrollTrigger: {
            trigger: ".biz-providing-what-we-do-box-wrap",
            start: "top 40%",
            toggleActions: "play none none none",
            markers: false,
            scrub: 1
        }
    });
})