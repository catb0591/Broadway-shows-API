const shows = (connection, Sequelize, theaters) => {
  return connection.define('shows', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    theaterId: { type: Sequelize.INTEGER, references: { model: theaters, key: 'id' } },
    rating: { type: Sequelize.INTEGER },
    status: { type: Sequelize.ENUM('Running', 'Retired') },
  }, { paranoid: true })
}

module.exports = (shows)
