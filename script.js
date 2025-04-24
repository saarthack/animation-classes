// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#page2',
        start: 'top 0%',
        end: 'top -100%',
        scrub: 1,
        pin: true,
        // markers:true 
    }
})

tl.to('img', {
    width: '100%',
})
tl.to('h1', {
    opacity: 1
})