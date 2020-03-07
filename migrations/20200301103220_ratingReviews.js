exports.up = (knex, Promise) => {
  return knex.schema.createTable('ratingreviews', function (table) {
    table.increments().primary()
    table.integer('walkId')
    table.text('username')
    table.integer('rating')
    table.text('review')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('ratingreviews')
}
