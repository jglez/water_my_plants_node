exports.up = function (knex) {
  // createTable() takes two args: table name and a cb function that takes the instantiated table
  return knex.schema.createTable('Users', table => {
    table.increments('user_id') // primary key: unique & notNullable constraint - auto increments
    table.string('user_username', 200).notNullable()
    table.string('user_password', 320).notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('Users')
};
