const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const maravilhosas = require('./routes/Maravilhosas')

app.use(bodyParser.json())
app.use('/', maravilhosas)

module.exports = app