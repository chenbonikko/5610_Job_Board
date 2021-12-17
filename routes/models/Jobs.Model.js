const mongoose = require("mongoose")
const JobSchema = require('../schema/job.Schema').JobSchema

const JobModel = mongoose.model("Job", JobSchema);

function insertjob(job) {
    return JobModel.create(job);
}

function getAllJob() {
    return JobModel.find().exec();
}

function findJobByTitle(title) {
    return JobModel.find({title: title}).exec();
}

function findPokemonById(id) {
    return JobModel.findById(id).exec();
}



// Make sure to export a function after you create it!
module.exports = {
    insertjob,
    findJobByTitle,
    getAllJob,
    findPokemonById
};



