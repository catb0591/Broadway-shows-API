const theaters = (connection, Sequelize) => {
  connection.define('theaters', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    yearBuilt: { type: Sequelize.INTEGER }
  }, { paranoid: true })
}

module.exports = (theaters)
