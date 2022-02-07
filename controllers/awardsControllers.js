/* eslint-disable no-console */
const models = require('../models')

const addAward = async (req, res) => {
  try {
    const { name } = req.body

    if (!name) {
      return res.status(400).send('Missing the name')
    }

    const newAward = await models.Awards.create({ name })

    return res.status(200).send(newAward)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while adding a new award, please try again')
  }
}

const getAllAwards = async (req, res) => {
  try {
    const getAllAwards = await models.Awards.findAll()

    return res.status(200).send(getAllAwards)
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error retrieving awards, please try again')
  }
}

const getAwardById = async (req, res) => {
  try {
    const { id } = req.params

    const getAwardById = await models.Awards.findAll({
      where: {
        [models.Op.or]: [{ name: { [models.Op.like]: `%${id}%` } }, { id }]
      }
    })

    if (getAwardById.length === 0) return res.status(404).send('No award found, please try again')

    return res.status(200).send(getAwardById)
  } catch (e) {
    return res.status(500).send('Error trying to retrieve award, please try again')
  }
}

const deleteAward = async (req, res) => {
  try {
    const { id } = req.params

    const award = await models.Awards.findOne({ where: { id } })

    if (!award) return res.status(400).send(`Unable to find the award with id: ${id} to delete`)

    await award.destroy()

    return res.status(200).send('Award has been successfully deleted')
  } catch (e) {
    console.log(e)

    return res.status(500).send('Error while deleting award')
  }
}

module.exports = {
  addAward,
  getAllAwards,
  getAwardById,
  deleteAward
}
