exports.up = async (knex) => {
  // createTable() takes two args: table name and a cb function that takes the instantiated table
  await knex.schema.createTable('Users', table => {
    table.increments('user_id') // primary key: unique & notNullable constraint - auto increments
    table.string('user_username', 200).notNullable()
    table.string('user_password', 320).notNullable()
    table.timestamps(true, false) // timestamp for created_at, no updated_at
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('Users')
};
