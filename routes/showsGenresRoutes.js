const express = require('express')

const showsGenresControllers = require('../controllers/showsGenresControllers')
const router = express.Router()

router.post('/', showsGenresControllers.addShowGenre)

router.get('/', showsGenresControllers.getAllShowGenres)

module.exports = router
