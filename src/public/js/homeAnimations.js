const descriptionSection = document.querySelector('[data-description ]')
const offerBoxItems = [...document.querySelectorAll('.advantages__box__item')]
const advantagesBox = document.querySelector('.advantages__box')

const chevrons = [...document.querySelectorAll('.chevron')]


chevrons.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('expanded')
        item.parentElement.children[0].classList.toggle('border-change')
    })
})

const action = new TimelineMax()
.fromTo(advantagesBox,0.6,{opacity: 0,y:-30}, {opacity: 1,y:0,ease:Power2.easeInOut})

const controller = new ScrollMagic.Controller();

if (window.innerWidth >=889) {
    new ScrollMagic.Scene({
        triggerElement: document.querySelector('#ad'),
        duration: 0,
        triggerHook: 1,
        reverse: false
    }).setTween(action)
    .addTo(controller)
} else {
    new ScrollMagic.Scene({
        triggerElement: document.querySelector('#phone-anim'),
        duration: 0,
        triggerHook: 0.5,
        reverse: false
    }).setTween(action)
    .addTo(controller)
}




const premiumBox = document.querySelector('[data-premium]')
const basicBoxes = [...document.querySelectorAll('[data-basic]')]


let tl

if (window.innerWidth >=1800) {
    tl = new TimelineMax()
    .fromTo(basicBoxes,0.7,{opacity: 0,y:30}, {opacity: 1,y:0,ease:Power2.easeInOut})
    .fromTo(premiumBox,0.7,{opacity: 0,y:30}, {opacity: 1,y:-30,ease:Power2.easeInOut})
} else {
    tl = new TimelineMax()
    .fromTo(basicBoxes,0.7,{opacity: 0,y:30}, {opacity: 1,y:0,ease:Power2.easeInOut})
    .fromTo(premiumBox,0.7,{opacity: 0,y:30}, {opacity: 1,y:0,ease:Power2.easeInOut})
}

new ScrollMagic.Scene({
    triggerElement: document.querySelector('#cards'),
    duration: 0,
    triggerHook: 1,
    reverse: false
}).setTween(tl)
.addTo(controller)






