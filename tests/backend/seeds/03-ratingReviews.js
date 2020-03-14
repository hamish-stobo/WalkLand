exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ratingReviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('ratingReviews').insert([
        { id: 1, walkId: 1, username: 'testEmail1.com', rating: 5, review: 'walk was amazing' },
        { id: 2, walkId: 2, username: 'testEmail2.com', rating: 3, review: 'walk was yikes' },
        { id: 3, walkId: 3, username: 'testEmail3.com', rating: 2, review: 'test review here' }

      ])
    })
}
