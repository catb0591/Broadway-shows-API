const express = require('express')

const theaterControllers = require('../controllers/theaterControllers')
const router = express.Router()

router.post('/', theaterControllers.addTheater)

router.get('/', theaterControllers.getAllTheaters)

router.get('/:id', theaterControllers.getTheaterById)

router.put('/:id', theaterControllers.updateTheater)

router.delete('/:id', theaterControllers.deleteTheater)

module.exports = router
