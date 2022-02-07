const express = require('express')

const genresControllers = require('../controllers/genresControllers')
const router = express.Router()

router.post('/', genresControllers.addGenre)

router.get('/', genresControllers.getAllGenres)

router.get('/:id', genresControllers.getGenreById)

router.put('/:id', genresControllers.updateGenre)

router.delete('/:id', genresControllers.deleteGenre)

module.exports = router
