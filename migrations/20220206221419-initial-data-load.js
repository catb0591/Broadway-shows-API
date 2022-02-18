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
        name: 'Billboard Music Award',
      },
      {
        name: 'Daytime Emmy Award',
      },
      {
        name: 'Drama Desk Award',
      },
      {
        name: 'Drama League Award',
      },
      {
        name: 'Dramatists Guild of America Awards',
      },
      {
        name: 'Edgar Award',
      },
      {
        name: 'Fred and Adele Astaire Awards',
      },
      {
        name: 'Grammy Award',
      },
      {
        name: 'Outer Critics Circle Award',
      },
      {
        name: 'Pulitzer Prize',
      },
      {
        name: 'Theater World Award',
      },
      {
        name: 'Tony Award',
      }
    ])

    await queryInterface.bulkInsert('genres', [
      {
        type: 'Comedy',
      },
      {
        type: 'Dark Comedy',
      },
      {
        type: 'Drama',
      },
      {
        type: 'Fantasy',
      },
      {
        type: 'Historical',
      },
      {
        type: 'Musical',
      },
      {
        type: 'Play',
      }
    ])

    await queryInterface.bulkInsert('theaters', [
      {
        name: 'Ambassador Theatre',
        yearBuilt: 1921,
      },
      {
        name: 'Gershwin Theatre',
        yearBuilt: 1972,
      },
      {
        name: 'Lyric Theatre',
        yearBuilt: 1998,
      },
      {
        name: 'Music Box Theatre',
        yearBuilt: 1921,
      },
      {
        name: 'Richard Rodgers Theatre',
        yearBuilt: 1925,
      }
    ])

    await queryInterface.bulkInsert('shows', [
      {
        title: 'Hamilton',
        theaterId: 5,
        rating: 10,
        status: 'Running',
      },
      {
        title: '42nd Street',
        theaterId: 3,
        rating: 7,
        status: 'Retired',
      },
      {
        title: 'Chicago',
        theaterId: 1,
        rating: 19,
        status: 'Running',
      },
      {
        title: 'Dear Evan Hansen',
        theaterId: 4,
        rating: 9,
        status: 'Running',
      },
      {
        title: 'Deathtrap',
        theaterId: 4,
        rating: 7,
        status: 'Retired',
      },
      {
        title: 'Dreamgirls',
        theaterId: 1,
        rating: 7,
        status: 'Retired',
      },
      {
        title: 'Fiddler on the Roof',
        theaterId: 2,
        rating: 8,
        status: 'Retired',
      },
      {
        title: 'Harry Potter and the Cursed Child',
        theaterId: 3,
        rating: 9,
        status: 'Running',
      },
      {
        title: 'In The Heights',
        theaterId: 5,
        rating: 7,
        status: 'Retired',
      },
      {
        title: 'Wicked',
        theaterId: 2,
        rating: 5,
        status: 'Running',
      }
    ])

    await queryInterface.bulkInsert('showsAwards', [
      {
        showId: 1,
        awardId: 1,
      },
      {
        showId: 1,
        awardId: 5,
      },
      {
        showId: 1,
        awardId: 7,
      },
      {
        showId: 1,
        awardId: 10,
      },
      {
        showId: 1,
        awardId: 12,
      },
      {
        showId: 2,
        awardId: 3,
      },
      {
        showId: 2,
        awardId: 11,
      },
      {
        showId: 2,
        awardId: 12,
      },
      {
        showId: 3,
        awardId: 3,
      },
      {
        showId: 4,
        awardId: 2,
      },
      {
        showId: 4,
        awardId: 4,
      },
      {
        showId: 4,
        awardId: 8,
      },
      {
        showId: 4,
        awardId: 12,
      },
      {
        showId: 5,
        awardId: 6,
      },
      {
        showId: 6,
        awardId: 3,
      },
      {
        showId: 6,
        awardId: 8,
      },
      {
        showId: 6,
        awardId: 12,
      },
      {
        showId: 7,
        awardId: 12,
      },
      {
        showId: 8,
        awardId: 3,
      },
      {
        showId: 8,
        awardId: 4,
      },
      {
        showId: 8,
        awardId: 9,
      },
      {
        showId: 8,
        awardId: 12,
      },
      {
        showId: 9,
        awardId: 8,
      },
      {
        showId: 9,
        awardId: 12,
      },
      {
        showId: 10,
        awardId: 3,
      },
      {
        showId: 10,
        awardId: 12,
      }
    ])

    return queryInterface.bulkInsert('showsGenres', [
      {
        showId: 1,
        genreId: 5,
      },
      {
        showId: 1,
        genreId: 6,
      },
      {
        showId: 2,
        genreId: 1,
      },
      {
        showId: 2,
        genreId: 6,
      },
      {
        showId: 3,
        genreId: 2,
      },
      {
        showId: 3,
        genreId: 6,
      },
      {
        showId: 4,
        genreId: 2,
      },
      {
        showId: 4,
        genreId: 3,
      },
      {
        showId: 4,
        genreId: 6,
      },
      {
        showId: 5,
        genreId: 1,
      },
      {
        showId: 5,
        genreId: 2,
      },
      {
        showId: 5,
        genreId: 7,
      },
      {
        showId: 6,
        genreId: 3,
      },
      {
        showId: 6,
        genreId: 6,
      },
      {
        showId: 7,
        genreId: 2,
      },
      {
        showId: 7,
        genreId: 6,
      },
      {
        showId: 8,
        genreId: 3,
      },
      {
        showId: 8,
        genreId: 4,
      },
      {
        showId: 8,
        genreId: 7,
      },
      {
        showId: 9,
        genreId: 1,
      },
      {
        showId: 9,
        genreId: 3,
      },
      {
        showId: 9,
        genreId: 6,
      },
      {
        showId: 10,
        genreId: 4,
      },
      {
        showId: 10,
        genreId: 6,
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
