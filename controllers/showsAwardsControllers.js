/* eslint-disable no-console */
const models = require('../models')

const addShowAward = async (req, res) => {
  try {
    const { showId, awardId } = req.body

    if (!showId || !awardId) {
      return res.status(400).send('Missing one of the following: showId, awardId')
    }

    const newShowAward = await models.ShowsAwards.create({ showId, awardId })

    return res.status(200).send(newShowAward)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while adding a new show/award, please try again')
  }
}

const getAllShowAwards = async (req, res) => {
  try {
    const getAllShowAwards = await models.ShowsAwards.findAll()

    return res.status(200).send(getAllShowAwards)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error retrieving shows/award, please try again')
  }
}

module.exports = {
  addShowAward,
  getAllShowAwards
}
