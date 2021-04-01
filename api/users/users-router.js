// imports
const express = require('express')
const User = require('./users-model.js') // Users Model

// instantiate router
const router = express.Router()

/***** ENDPOINTS *****/
// [POST] user signup
router.post('/signup', async (req, res, next) => {
  try {
    const createdUser = await User.create(req.body)
    res.status(201).json(createdUser)

  } catch (err) {
    next(err) // jump to the error handling middleware at the end of server.js
  }
})

// [POST] user login
router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findById(req.body)
    res.status(200).json(user)

  } catch (err) {
    next(err)
  }
})

// export
module.exports = router
