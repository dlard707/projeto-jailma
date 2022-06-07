const express= require('express')
const app= express()
//const noticias= require('./mockup')

//configurações ejs
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static('./views/public'))

module.exports= app
