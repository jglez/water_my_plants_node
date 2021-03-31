require('dotenv').config() // enables utilization of environment variables

const pg = require('pg') // postgres driver

if (process.env.DATABASE_URL) { // if process.env.DATABASE_URL is truthy (which it will be on Heroku)
  pg.defaults.ssl = { rejectUnauthorized: false } // use these settings on Heroku
}

// set the client and directory paths for configuration
// we will reuse these settings in all of our environments
const sharedConfig = {
  client: 'pg',
  migrations: { directory: './api/data/migrations' },
  seeds: { directory: './api/data/seeds' }
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL // environment variable declared inside .env
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL // environment variable declared inside .env
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL, // environment variable that exists on Heroku
    pool: { min: 2, max: 10 },
  }
};
