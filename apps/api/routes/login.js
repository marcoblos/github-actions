"use strict"
var express = require('express')
var router = express.Router()

router.post('/', function (req, res, next) {
  console.log('Login')
  const a = {
    access_token: 'd60Dg4rHhdcdXyOI79c3GAI3ruiV',
    refresh_token: 'k8EqTMEASBlGK5cVxng401rE2eQ7VcpX',
    okta_id_token: 'eyJraWQiOiJuQm56R3MtNUpZaUZCYkNRMmd4S2dT'
  }
  res.json(a)
})

module.exports = router
