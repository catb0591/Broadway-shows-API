const showsAwards = (connection, Sequelize, shows, awards) => {
  connection.define('showsAwards', {
    showId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: shows, key: 'id' } },
    awardId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: awards, key: 'id' } }
  }, { paranoid: true })
}

module.exports = (showsAwards)
