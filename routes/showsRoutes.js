const express = require('express')

const showsControllers = require('../controllers/showsControllers')
const router = express.Router()

router.post('/', showsControllers.addShow)

router.get('/', showsControllers.getAllShows)

router.get('/:id', showsControllers.getShowById)

router.put('/:id', showsControllers.updateShow)

router.delete('/:id', showsControllers.deleteShow)

module.exports = router
