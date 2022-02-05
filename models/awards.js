const awards = (connection, Sequelize) => {
  connection.define('awards', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.VARCHAR }
  }, { paranoid: true })
}

module.exports = (awards)
