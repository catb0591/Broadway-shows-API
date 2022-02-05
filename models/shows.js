const shows = (connection, Sequelize, theater) => {
  return connection.define('shows', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.VARCHAR },
    theaterId: { type: Sequelize.INTEGER, references: { model: theater, key: 'id' } },
    rating: { type: Sequelize.INTEGER },
    status: { type: Sequelize.ENUM('Running', 'Retired') },
  }, { paranoid: true })
}

module.exports = (shows)
