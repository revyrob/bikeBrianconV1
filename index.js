const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/map', (req, res) => res.render('pages/map'))
  .get('/about', (req, res) => res.render('pages/index2-about'))
  .get('/how', (req, res) => res.render('pages/how'))
  .get('/guide', (req, res) => res.render('pages/guide'))
    // .get('/map', (req, res) => res.sendFile(path.join(__dirname + '/views/qgis/map.html')))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
