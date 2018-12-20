var express = require('express')
var fs = require('fs')
var app = express()
var mockData = require('./mockData.json')
let users = {}

app.use(express.json())
app.use(express.static('./build/'))
app.use(express.urlencoded())

app.get('/login', function(req, res) {
  const { username, password } = req.query
  if (users[username] && users[username].password === password) {
    res.status(200).send({ error: null, message: 'success' })
  } else {
    res
      .status(404)
      .send({ error: "either username doesn't exist or password is wrong" })
  }
})
app.get('/getData', function(req, res) {
  res.status(200).send({ error: null, message: 'success', data: mockData })
})
app.post('/signup', function(req, res) {
  const { username, password } = req.body
  if (username && !users[username] && password) {
    users[username] = req.body
    res.status(200).send({ error: null, message: 'success' })
  } else {
    res.status(404).send({
      error: 'user already exists with same username or password is missing',
    })
  }
})

var server = app.listen(4001, function() {
  console.log('Server running at http://localhost:' + server.address().port)
})
