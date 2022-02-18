const express = require('express')

const awardsControllers = require('../controllers/awardsControllers')
const router = express.Router()

router.post('/', awardsControllers.addAward)

router.get('/', awardsControllers.getAllAwards)

router.get('/:id', awardsControllers.getAwardById)

router.delete('/:id', awardsControllers.deleteAward)

module.exports = router
