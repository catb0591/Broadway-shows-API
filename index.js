/* eslint-disable no-console */
const express = require('express')
const path = require('path')
const cors = require('cors')
const awardsRouter = require('./routes/awardsRoutes')
const genresRouter = require('./routes/genresRoutes')
const showsRouter = require('./routes/showsRoutes')
const showsAwardsRouter = require('./routes/showsAwardsRoutes')
const showsGenresRouter = require('./routes/showsGenresRoutes')
const theatersRouters = require('./routes/theaterRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.static('client/build'))

app.use('/api/award', awardsRouter)
app.use('/api/genre', genresRouter)
app.use('/api/show', showsRouter)
app.use('/api/shows/awards', showsAwardsRouter)
app.use('/api/shows/genres', showsGenresRouter)
app.use('/api/theater', theatersRouters)

app.set('view engine', 'pug')

app.get('/pug', (request, response) => {
  response.render('index')
})

app.all('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
})

app.listen(1337, () => {
  console.log('Listening on http://localhost:1337...')
})
