
//bring in express and define app
const express = require('express')
const { join } = require('path')
const app = express()


//bring in middleware functions
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//bring in routes folder
app.use(require('./routes'))
//route to render html pages with localhost
app.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname,
    './public/exercise.html'))
})
app.get('/stats', (req, res) => {
  res.sendFile(join(__dirname,
    './public/stats.html'
  ))
})
//route to connect * with index.html
app.get('/', (req, res) => {
  res.sendFile(join(__dirname,
    'index.html'
  ))
})
//bring in database connection in config folder
require('./config')
  //listen for port 3000
  .then(app.listen(3000, () => {
    //console.log below message
    console.log("App running on port 3000!")
  }))
  //catch any errors
  .catch(err => console.error(err))