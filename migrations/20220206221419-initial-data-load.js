module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.bulkInsert('awards', [
      {
        id: '',
        name: '',
      },
    ])

    await queryInterface.bulkInsert('genres', [
      {
        id: '',
        type: '',
      }
    ])

    await queryInterface.bulkInsert('theaters', [
      {
        id: '',
        name: '',
        yearBuilt: '',
      }
    ])

    await queryInterface.bulkInsert('shows', [
      {
        id: '',
        title: '',
        theaterId: '',
        rating: '',
        status: '',
      }
    ])

    await queryInterface.bulkInsert('showsAwards', [
      {
        showId: '',
        awardId: '',
      }
    ])

    return queryInterface.bulkInsert('showsGenres', [
      {
        showId: '',
        genreId: '',
      }
    ])
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.bulkDelete('users');
     */
    await queryInterface.bulkDelete('awards')
    await queryInterface.bulkDelete('genres')
    await queryInterface.bulkDelete('theaters')
    await queryInterface.bulkDelete('shows')
    await queryInterface.bulkDelete('showsAwards')
    await queryInterface.bulkDelete('showsGenres')
  }
}
