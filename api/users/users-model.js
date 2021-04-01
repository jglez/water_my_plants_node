// Scaffolding - wip

const db = require('../data/db-config.js') // pull in the db so we can interact with it

function create(user) {
  return Promise.resolve(user)
}

function findById(id) {
  return Promise.resolve(id)
}

module.exports = {
  create,
  findById
}
