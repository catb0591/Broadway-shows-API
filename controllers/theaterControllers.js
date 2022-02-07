/* eslint-disable no-console */
const models = require('../models')

const addTheater = async (req, res) => {
  try {
    const { name, yearBuilt } = req.body

    if (!name || !yearBuilt) {
      return res.status(400).send('Missing one of the following: name, yearBuilt')
    }

    const newTheater = await models.Theaters.create({ name, yearBuilt })

    return res.status(200).send(newTheater)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while adding a new theater, please try again')
  }
}

const getAllTheaters = async (req, res) => {
  try {
    const getAllTheaters = await models.Theaters.findAll()

    return res.status(200).send(getAllTheaters)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error retrieving theaters, please try again')
  }
}

const getTheaterById = async (req, res) => {
  try {
    const { id } = req.params

    const getTheaterById = await models.Theaters.findAll({
      where: {
        [models.Op.or]: [{ name: { [models.Op.like]: `%${id}%` } }, { id }]
      }
    })

    if (getTheaterById.length === 0) return res.status(400).send('No theater found, please try again')

    return res.status(200).send(getTheaterById)
  } catch (e) {
    return res.status(500).send('Error trying to retrieve theater, please try again')
  }
}

const updateTheater = async (req, res) => {
  try {
    const { name, yearBuilt } = req.body

    const { id } = req.params

    if (!yearBuilt || !name) {
      return res.status(400).send('Missing one of the following: name, yearBuilt')
    }

    const theater = await models.Theaters.findOne({ where: { id } })

    if (!theater) return res.status(400).send(`Unable to find the theater with id: ${id} to update`)

    await theater.update({ name, yearBuilt })

    return res.status(201).send('The theater has been successfully updated')
  } catch (e) {
    console.log(e)

    res.status(500).send('Error while updating theater')
  }
}

const deleteTheater = async (req, res) => {
  try {
    const { id } = req.params

    const theater = await models.Theaters.findOne({ where: { id } })

    if (!theater) return res.status(400).send(`Unable to find the theater with id: ${id} to delete`)

    await theater.destroy()

    return res.status(200).send('Theater has been successfully deleted')
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while deleting theater')
  }
}

module.exports = {
  addTheater,
  getAllTheaters,
  getTheaterById,
  updateTheater,
  deleteTheater
}
