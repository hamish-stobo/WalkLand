exports.up = (knex, Promise) => {
  return knex.schema.createTable('walks', function (table) {
    table.increments().primary()
    table.text('title')
    table.float('latitude')
    table.float('longitude')
    table.text('location')
    table.text('mainPhoto')
    table.text('photos')
    table.text('routeImage')
    table.text('distance')
    table.integer('elevationGain')
    table.text('timeTaken')
    table.text('difficulty')
    table.text('description')
    table.text('surface')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('walks')
}