const express = require('express')
const router = express.Router()
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const passport = require('passport')
const jwtSecret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getReviewRatings()
    .then(response => {
      res.json(response)
    })
})

router.post('/', (req, res) => {
  db.findUser(req.body.username)
    .then(returnedUser => {
      const newObject = {
        walkId: req.body.walkId,
        username: req.body.username,
        rating: Number(req.body.rating),
        review: req.body.review
      }
      db.addReview(newObject)
        .then(() => res.json('success!'))
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/edit', (req, res, next) => {
  const newObject = {
    walkId: req.body.walkId,
    username: req.body.username,
    rating: Number(req.body.rating),
    review: req.body.review
  }
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err)
    }
    if (info !== undefined) {
      console.error(info.message)
      res.statusMessage = `${info.message}`
      res.status(403).end()
    } else {
      console.log('username in params ', req.body.username, 'username from jwt auth ', user.username)
      if (req.body.username === user.username) {
        db.editReview(newObject)
          .then(resolve => {
            console.log('res from db ', resolve)
            res.json('')
          })
          .catch(err => {
            console.log(err)
            res.statusMessage = 'problem communicating with db'
            res.status(500).end()
          })
      } else {
        console.error('jwt id and username do not match')
        res.statusMessage = 'You are not authorized'
        res.status(403).end()
      }
    }
  })(req, res, next)
})

router.delete('/', (req, res, next) => {
  console.log('request given to delete route ', req.body)
  const newObject = {
    walkId: req.body.walkId,
    username: req.body.username,
    rating: Number(req.body.rating),
    review: req.body.review
  }
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err)
    }
    if (info !== undefined) {
      console.error(info.message)
      res.statusMessage = `${info.message}`
      res.status(403).end()
    } else {
      console.log('username in params ', req.body.username, 'username from jwt auth ', user.username)
      if (req.body.username === user.username) {
        db.deleteReview(newObject)
          .then(success => {
            console.log('res from db ', success)
            res.json(success)
          })
          .catch(err => {
            console.log(err)
            res.statusMessage = 'problem communicating with db'
            res.status(500).end()
          })
      } else {
        console.error('jwt id and username do not match')
        res.statusMessage = 'You are not authorized'
        res.status(403).end()
      }
    }
  })(req, res, next)
})

module.exports = router
