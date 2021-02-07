const router = require('express').Router()
const townList = require('../townList')
const hbs = require('hbs')

hbs.registerHelper('replacer', function (aString) {
    return aString.replace("_"," ")
})

router.get('/', (req,res) => {
    res.render('home')
})

router.get('/o-nas', (req,res) => {
    res.render('o-nas')
})

router.get('/internet-swiatlowodowy', (req,res) => {
    res.render('internet-swiatlowodowy')
})


router.get('/internet/zasieg-internet', (req,res) => {
    res.render('zasieg-internet', {
        town: "",
        townList
    })
})

router.get('/internet/zasieg-internet/:id', (req,res) => {

    const town = req.params.id

    if (townList.includes(town)) {
        res.render('zasieg-internet', {
            town,
            townList
        })
    } else {
        res.redirect('/internet/zasieg-internet')
    }
})

router.get('/internet/oferta-radiowa' , (req,res) => {
    res.render('oferta-radiowa')
})

router.get('/internet/oferta-swiatlowodowa', (req,res) => {
    res.render('oferta-swiatlowodowa')
})

router.get('/internet/oferta-dla-firm', (req,res) => {
    res.render('oferta-dla-firm')
})

router.get('/internet/nasze-lacze-internetowe', (req,res) => {
    res.render('nasze-lacze-internetowe')
})

router.get('/internet/test-szybkosci-lacza', (req,res) => {
    res.render('test-szybkosci-lacza')
})

router.get('/telewizja', (req,res) => {
    res.render('telewizja')
})

router.get('/kontakt', (req,res) => {
    res.render('kontakt')
})


router.get('/panel-klienta', (req,res) => {
    res.render('panel-klienta')
})

router.get('/telefon', (req,res) => {
    res.render('telefon')
})

router.get('/praca', (req,res) => {
    res.render('praca')
})



module.exports = router





