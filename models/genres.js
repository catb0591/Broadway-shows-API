const genres = (connection, Sequelize) => {
  return connection.define('genres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    type: { type: Sequelize.VARCHAR }
  }, { paranoid: true })
}

module.exports = (genres)
