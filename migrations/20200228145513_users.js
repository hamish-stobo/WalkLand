exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', function (table) {
    table.increments().primary()
    table.text('username')
    table.text('password')
    table.text('bio')
    table.text('avatarImage')
    table.text('coverPhoto')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
