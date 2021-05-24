//require('dotenv').config()
const express = require('express')
const app = express()
const port  = process.env.PORT || 3000
const handlebars = require('express-handlebars')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Zet hbs als templating engine
// app.set('view engine',no 'hbs')
// app.set('views', 'views')
// app.use(express.static(__dirname + '/public'))
// app.use(express.urlencoded({ extended: true}))

// Set custom templating engine
// app.engine('hbs', handlebars({
//     layoutsDir: `${__dirname}/views`,
//     extname: 'hbs',
//     defaultLayout: 'index',
//     partialsDir: `${__dirname}/views/partials`
// }))


// Maak een verbinding met mongodb via mongoose
// const connectDBMongoose = require('./config/mongoose')
// connectDBMongoose()

// const routes =  require('./router/router.js')
// app.use('/', routes)

// app.listen(PORT, () => {
//   console.log(`Listening at http://localhost:${PORT}`)
// })