/* eslint-disable no-console */
const models = require('../models')

const addShowGenre = async (req, res) => {
  try {
    const { showId, genreId } = req.body

    if (!showId || !genreId) {
      return res.status(400).send('Missing one of the following: showId, genreId')
    }

    const newShowGenre = await models.ShowsGenres.create({ showId, genreId })

    return res.status(200).send(newShowGenre)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while adding a new show/genre, please try again')
  }
}

const getAllShowGenres = async (req, res) => {
  try {
    const getAllShowGenres = await models.ShowsGenres.findAll()

    return res.status(200).send(getAllShowGenres)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error retrieving shows/genres, please try again')
  }
}

module.exports = {
  addShowGenre,
  getAllShowGenres
}
