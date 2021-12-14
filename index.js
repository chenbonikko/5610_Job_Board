const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use('/api', require('./routes/api'))

app.listen(process.env.port || 4000, function () {
    console.log('ready for accept request')
})

