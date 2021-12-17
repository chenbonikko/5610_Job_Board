const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// init the app
const app = express()

// connect to mongodb
mongoose.connect('mongodb+srv://chenbonick:Nick123456789@cluster0.gkbbl.mongodb.net/job-board')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

// init routes
app.use('/job', require('./routes/job'))

// Error handling
app.use(function (err, req, res, next) {
    res.status(422).send({error: err.message})
})

app.listen(process.env.port || 4000, function () {
    console.log('ready for accept request')
})

