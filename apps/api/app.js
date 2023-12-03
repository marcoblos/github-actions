"use strict"
var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
var indexRouter = require('./routes/index')
var loginRouter = require('./routes/login')
var usersRouter = require('./routes/users')
var app = express()
app.use(logger('dev'))

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/users', usersRouter)
module.exports = app
