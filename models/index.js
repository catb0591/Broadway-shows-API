const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const awardsModel = require('./awards')
const genresModel = require('./genres')
const showsModel = require('./shows')
const showsAwardsModel = require('./showsAwards')
const showsGenresModel = require('./showsGenres')
const theatersModel = require('./theaters')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Awards = awardsModel(connection, Sequelize)
const Genres = genresModel(connection, Sequelize)
const Theaters = theatersModel(connection, Sequelize)
const Shows = showsModel(connection, Sequelize, Theaters)
const ShowsAwards = showsAwardsModel(connection, Sequelize, Shows, Awards)
const ShowsGenres = showsGenresModel(connection, Sequelize, Shows, Genres)


Shows.belongsToMany(Genres, { through: ShowsGenres })
Genres.belongsToMany(Shows, { through: ShowsGenres })
Shows.belongsTo(Theaters)
Theaters.hasMany(Shows)
Awards.belongsToMany(Shows, { through: ShowsAwards })
Shows.belongsToMany(Awards, { through: ShowsAwards })

module.exports = {
  Awards,
  Genres,
  Shows,
  ShowsAwards,
  ShowsGenres,
  Theaters,
  Op: Sequelize.Op
}
