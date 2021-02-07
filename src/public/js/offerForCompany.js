const headerContent = document.querySelector('#header-content')

const tl = new TimelineMax()
.fromTo(headerContent,0.6,{opacity: 0,y:-30}, {opacity: 1,y:0,ease:Power2.easeInOut})

const controller = new ScrollMagic.Controller()

new ScrollMagic.Scene({
    triggerElement: document.querySelector('#header-content'),
    duration: 0,
    triggerHook: 1,
    reverse: false
}).setTween(tl)
.addTo(controller)