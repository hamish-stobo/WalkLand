exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'testEmail1.com', password: 5 },
        { username: 'testEmail2.com', password: 3 },
        { username: 'testEmail3.com', password: 2 }

      ])
    })
}
