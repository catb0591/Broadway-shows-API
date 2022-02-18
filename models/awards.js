const Awards = (connection, Sequelize) => {
  return connection.define('awards', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING }
  }, { paranoid: true })
}

module.exports = Awards
