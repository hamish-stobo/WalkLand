exports.seed = function (knex) {
  return knex('ratingReviews').del()
    .then(function () {
      return knex('ratingReviews').insert([
        { id: 1, walkId: 1, username: 'Felix', rating: 5, review: 'Goldie\'s Bush walk was amazing' },
        { id: 2, walkId: 2, username: 'Doderick', rating: 3, review: 'Western springs walk was amazing' },
        { id: 3, walkId: 3, username: 'Mylanta', rating: 5, review: 'Te Henga Walkway was amazing. The entry into the beach, the walk along the cliffside, the ease into Muriwai Beach. It truly showed the best of the beauty that Auckland\'s West Coast has to offer.' },
        { id: 4, walkId: 4, username: 'Duodenum', rating: 4, review: 'Rangitoto Summit Track was amazing' },
        { id: 5, walkId: 5, username: 'Femur', rating: 4, review: 'Maungauika/North Head Historic Walk was amazing' },
        { id: 6, walkId: 6, username: 'themonkey', rating: 2, review: 'Motutapu Walkway was amazing' },
        { id: 7, walkId: 7, username: 'dave', rating: 5, review: 'One Tree Hill Walk was amazing' },
        { id: 8, walkId: 8, username: 'bob', rating: 5, review: 'Kitekite Falls was amazing' },
        { id: 9, walkId: 9, username: 'jimmy', rating: 2, review: 'Orakei Basin Walkway fast and easy!' },
        { id: 10, walkId: 10, username: 'hamish', rating: 3, review: 'Long bay was awesome' }
      ])
    })
}
