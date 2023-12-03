"use strict"
var express = require('express')
var router = express.Router()

const {
  addPointsById,
  getAll,
  getUserById,
} = require('./users.store')

router.get('/', function (req, res, next) {
  console.log('Get all users')
  const users = getAll()
  res.json(users)
})

router.get('/:id', function (req, res, next) {
  console.log(`Get user[${req.params.id}]`)
  const user = getUserById({ id: req.params.id })
  console.log(user)
  res.json(user)
})

router.put('/:id', function (req, res, next) {
  console.log(`Add points[${req.body.points}] to user[${req.params.id}]`)
  addPointsById({ id: req.params.id, points: req.body.points })

  const user = getUserById({ id: req.params.id })
  console.log(`New user[${user?.name}] score[${user?.points}]`)
  res.json(user)
})

module.exports = router
