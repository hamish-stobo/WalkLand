if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const passport = require('passport')
const jwtSecret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')

const db = require('../db/db')

router.post('/registerUser', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error(err)
    }
    if (info !== undefined) {
      res.statusMessage = `${info.message}`
      res.status(403).end()
    } else {
      res.statusMessage = 'user created!'
      res.status(200).end()
    }
  })(req, res, next)
})

router.post('/loginUser', (req, res, next) => {
  passport.authenticate('login', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`)
    }
    if (info !== undefined) {
      console.log('login error ', info.message)
      res.statusMessage = `${info.message}`
      if (info.message === 'bad username') {
        res.status(401).end()
      } else {
        res.status(403).end()
      }
    } else {
      db.findUser(req.body.username)
        .then(user => {
          const token = jwt.sign({ id: user.id }, jwtSecret, {
            expiresIn: 60 * 60
          })
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in',
            avatarImage: user.avatarImage
          })
        })
    }
  })(req, res, next)
})

router.post('/editUser', (req, res, next) => {
  console.log('object given to post route in users ', req.body)
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err)
    }
    if (info !== undefined) {
      console.error(info.message)
      res.statusMessage = `${info.message}`
      res.status(403).end()
    } else {
      console.log('username in from client ', req.body.username, 'username from jwt auth ', user.username)
      if (req.body.username === user.username) {
        db.editUser(req.body)
          .then((userInfo) => {
            if (userInfo === 1) {
              console.log('user updated!')
              res.statusMessage = `${'user was updated in db!'}`
              res.status(200).end()
            } else {
              res.statusMessage = 'no user with that username to delete'
              res.status(404).end()
            }
          })
          .catch((error) => {
            console.log(error)
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

router.delete('/deleteUser/:username', (req, res, next) => {
  console.log('request in route ', req.params)
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err)
    }
    if (info !== undefined) {
      console.error(info.message)
      res.statusMessage = `${info.message}`
      res.status(403).end()
    } else {
      console.log('username in params ', req.params.username, 'username from jwt auth ', user.username)
      if (req.params.username === user.username) {
        db.deleteUser(user.username)
          .then((userInfo) => {
            if (userInfo === 1) {
              console.log('user deleted from db')
              res.statusMessage = `${'user deleted from db'}`
              res.status(200).end()
            } else {
              res.statusMessage = 'no user with that username to delete'
              res.status(404).end()
            }
          })
          .catch((error) => {
            console.log(error)
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
