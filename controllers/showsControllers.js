/* eslint-disable no-console */
const models = require('../models')

const addShow = async (req, res) => {
  try {
    const { title, theaterId, rating, status } = req.body

    if (!title || !theaterId || !rating || !status) {
      return res.status(400).send('Missing one of the following: title, theaterId, rating, status')
    }

    const newShows = await models.Shows.create({ title, theaterId, rating, status })

    return res.status(200).send(newShows)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while adding a new show, please try again')
  }
}

const getAllShows = async (req, res) => {
  try {
    const getAllShows = await models.Shows.findAll({
      attributes: ['id', 'title', 'rating', 'status'],
      include: [
        {
          model: models.Theaters,
          attributes: ['name', 'yearBuilt']
        },
        {
          model: models.Awards,
          attributes: ['name']
        },
        {
          model: models.Genres,
          attributes: ['type']
        },
      ]
    })

    return res.status(200).send(getAllShows)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error retrieving shows, please try again')
  }
}

const getShowById = async (req, res) => {
  try {
    const { id } = req.params

    const getShowById = await models.Shows.findAll({
      where: {
        [models.Op.or]:
        [{ title: { [models.Op.like]: `%${id}%` } }, { id }, { status: { [models.Op.like]: `%${id}%` } }]
      },
      attributes: ['id', 'title', 'rating', 'status'],
      include: [
        {
          model: models.Theaters,
          attributes: ['name', 'yearBuilt']
        },
        {
          model: models.Awards,
          attributes: ['name']
        },
        {
          model: models.Genres,
          attributes: ['type']
        },
      ]
    })

    if (getShowById.length === 0) return res.status(400).send('No show found, please try again')

    return res.status(200).send(getShowById)
  } catch (e) {
    return res.status(500).send('Error trying to retrieve show, please try again')
  }
}

const updateShow = async (req, res) => {
  try {
    const { title, theaterId, rating, status } = req.body

    const { id } = req.params

    if (!title || !theaterId || !rating || !status) {
      return res.status(400).send('Missing one of the following: title, theaterId, rating, status ')
    }

    const show = await models.Shows.findOne({ where: { id } })

    if (!show) return res.status(400).send(`Unable to find the show with id: ${id} to update`)

    await show.update({ title, theaterId, rating, status })

    return res.status(201).send('The show has been successfully updated')
  } catch (e) {
    console.log(e)

    res.status(500).send('Error while updating show')
  }
}

const deleteShow = async (req, res) => {
  try {
    const { id } = req.params

    const show = await models.Shows.findOne({ where: { id } })

    if (!show) return res.status(400).send(`Unable to find the show with id: ${id} to delete`)

    await show.destroy()

    return res.status(200).send('Show has been successfully deleted')
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while deleting show')
  }
}

module.exports = {
  addShow,
  getAllShows,
  getShowById,
  updateShow,
  deleteShow
}
