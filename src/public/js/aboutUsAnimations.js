const aboutUsSection = document.querySelector('#about-us')

const action = new TimelineMax()
.fromTo(aboutUsSection,0.8,{opacity: 0,y:-30}, {opacity: 1,y:0,ease:Power2.easeInOut})

const controller = new ScrollMagic.Controller();


new ScrollMagic.Scene({
    triggerElement: document.querySelector('#about-us'),
    duration: 0,
    triggerHook: 0.5,
    reverse: false
}).setTween(action)
.addTo(controller)





