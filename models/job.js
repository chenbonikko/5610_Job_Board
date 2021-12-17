const mongoose = require('mongoose')

const Schema = mongoose.Schema

// job Schema

const JobSchema = new Schema({
    title:{
        type:String,
        required: [true, 'Tile field is required']
    },

    companyName:{
        type:String,
        required: [true, 'companyName field is required']
    },

    location:{
        type:String,
        required: [true, 'location field is required']
    },

    description:{
        type:String,
        required: [true, 'description field is required']
    },

    employerEmail:{
        type:String,
        required: [true, 'employerEmail field is required']
    },

    postingDate:{
        type:String,
        required: [true, 'postingDate field is required']
    },
})

const Job = mongoose.model('jobs', JobSchema)

module.exports = Job