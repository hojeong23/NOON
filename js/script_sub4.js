console.clear(); // Start with a clean console on refesh 
gsap.registerPlugin(ScrollTrigger);

let page2 = document.querySelector(".page2");


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".pinThis",
        pin: true,
        scrub: 1,
        end: () => "+=" + (window.innerWidth * 2), // Get bowser width * 2 because two slides
        markers: false
    }
});

tl.from(page2, {
    xPercent: 100,
    ease: "none"
});
