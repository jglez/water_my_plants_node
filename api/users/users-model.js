// Scaffolding - wip

const db = require('../data/db-config.js') // pull in the db so we can interact with it

function create(createdUser) {
  return db('Users').insert(createdUser, ['user_id', 'username'])
}

function findById(id) {
  return db('Users').where('user_id', id)
}

function getAll() {
  return db.select('user_id', 'username').from('Users')
}

module.exports = {
  create,
  findById,
  getAll
}
