/* eslint-disable no-console */
const models = require('../models')

const addGenre = async (req, res) => {
  try {
    const { type } = req.body

    if (!type) {
      return res.status(400).send('Missing the type')
    }

    const newGenre = await models.Genres.create({ type })

    return res.status(200).send(newGenre)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while adding a new genre, please try again')
  }
}

const getAllGenres = async (req, res) => {
  try {
    const getAllGenres = await models.Genres.findAll()

    return res.status(200).send(getAllGenres)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error retrieving genres, please try again')
  }
}

const getGenreById = async (req, res) => {
  try {
    const { id } = req.params

    const getGenreById = await models.Genres.findAll({
      where: {
        [models.Op.or]:
          [{ type: { [models.Op.like]: `%${id}%` } }, { id }]
      }
    })

    if (getGenreById.length === 0) return res.status(400).send('No genre found, please try again')

    return res.status(200).send(getGenreById)
  } catch (e) {
    return res.status(500).send('Error trying to retrieve genre, please try again')
  }
}

const updateGenre = async (req, res) => {
  try {
    const { type } = req.body

    const { id } = req.params

    if (!type) {
      return res.status(400).send('Missing the type ')
    }

    const genre = await models.Genres.findOne({ where: { id } })

    if (!genre) return res.status(400).send(`Unable to find the genre with id: ${id} to update`)

    await genre.update({ type })

    return res.status(201).send('The genre has been successfully updated')
  } catch (e) {
    console.log(e)

    res.status(500).send('Error while updating genre')
  }
}

const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params

    const genre = await models.Genres.findOne({ where: { id } })

    if (!genre) return res.status(400).send(`Unable to find the genre with id: ${id} to delete`)

    await genre.destroy()

    return res.status(200).send('Genre has been successfully deleted')
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while deleting genre')
  }
}

module.exports = {
  addGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
  deleteGenre
}
