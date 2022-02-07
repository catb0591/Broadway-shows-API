const express = require('express')

const showsAwardsControllers = require('../controllers/showsAwardsControllers')
const router = express.Router()

router.post('/', showsAwardsControllers.addShowAward)

router.get('/', showsAwardsControllers.getAllShowAwards)

module.exports = router
