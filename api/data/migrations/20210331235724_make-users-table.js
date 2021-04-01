exports.up = async (knex) => {
  // createTable() takes two args: table name and a cb function that takes the instantiated table
  await knex.schema.createTable('Users', table => {
    table.increments('user_id') // primary key: unique & notNullable constraint - auto increments
    table.string('username', 200).notNullable()
    table.string('password', 320).notNullable()
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('Users')
};
