const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:username', (req, res) => {
  db.findUser(req.params.username)
    .then(returnedUser => {
      if (!returnedUser) {
        res.statusMessage = 'User profile not found'
        res.status(404).end()
      } else {
        delete returnedUser.password
        res.json(returnedUser)
      }
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  console.log('object given to post route in users ', req.body)
  db.editUser(req.body)
    .then(response => {
      response === 1 && res.send('Profile was successfully updated')
      response === 0 && res.send('Failed to update profile')
    })
    .catch(err => res.send(err))
})

module.exports = router
