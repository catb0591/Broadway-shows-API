const showsGenres = (connection, Sequelize, shows, genres) => {
  return connection.define('showsGenres', {
    showId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: shows, key: 'id' } },
    genreId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: genres, key: 'id' } }
  }, { paranoid: true })
}

module.exports = (showsGenres)
