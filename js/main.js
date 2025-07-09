const mainHeader = document.querySelector('.header-area');

ScrollTrigger.create({
    trigger:"body",
    start:"top -50px",
    end:"300px top",
    onUpdate: (self) =>{
        if(self.progress > 0){
            mainHeader.classList.add('scrolled');
        }else{
            mainHeader.classList.remove('scrolled')
        }
    }
});

const parallaxbg = document.querySelector('.header-parallax-bg');
gsap.to(parallaxbg,{
    y:'-50%',
    ease:'none',
    ScrollTrigger:{
        trigger:".main-header",
        start:"top -10px",
        end:"bottom top",
        scrub:true,
        markers:true,
    }
});

// Header
document.addEventListener('DOMContentLoaded',() =>{
    const tl = gsap.timeline({defaults:{ease:"power3.out"}});

    // Animation for Logo
    tl.from(".location",{
        y:-10,
        opacity:0,
        duration:0.8
    });
})