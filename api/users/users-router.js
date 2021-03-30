// imports
const express = require('express')
const User = require('./users-model.js') // Users Model

// instantiate router
const router = express.Router()

/***** ENDPOINTS *****/
// [POST] user signup
router.post('/signup', (req, res, next) => {
  User.create()
    .then(res.status(200).json('Inside of signup'))
    .catch(next) // jump to the error handling middleware at the end of server.js
})

// [POST] user login
router.get('/login', async (req, res, next) => {
  try {
    const user = await User.findById(req.body)
    res.status(200).json(user)

  } catch (err) {
    next(err)
  }
})

// export
module.exports = router
