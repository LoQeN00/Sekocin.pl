const makeAnimation = () => {
    const offerBoxes = [...document.querySelectorAll('[data-box]')]

    offerBoxes.forEach(box => {
        box.style.opacity = "0"
    })

    const action = new TimelineMax()

    const controller = new ScrollMagic.Controller()

    new ScrollMagic.Scene({
        triggerElement: document.querySelector('#offer-boxes'),
        duration: 0,
        triggerHook: 1,
        reverse: false
    }).setTween(() => offerBoxes.forEach(box => {
        action.fromTo(box,0.6,{opacity: 0,y:-30}, {opacity: 1,y:0,ease:Power2.easeInOut})
    }))
    .addTo(controller)

}


makeAnimation()

