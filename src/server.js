const express = require('express')
const path = require('path')

const app = express()

const hbs = require('hbs')

app.set('view engine','hbs')

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/templates/partials')

app.set('views', path.join(__dirname, '/templates/views'))

const pageRouter = require('./routes/pageRouter')

const PORT = process.env.PORT || 3000

app.use(pageRouter)


app.listen(PORT, () => console.log('Serwer dziala'))


