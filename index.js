/* eslint-disable no-console */
const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index')
})

app.listen(1337, () => {
  console.log('Listening on http://localhost:1337...')
})
