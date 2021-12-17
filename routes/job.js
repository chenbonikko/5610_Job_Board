const express = require('express')
const auth_middleware = require('./auth_middleware');
const router = express.Router()
const JobAccessor = require('./models/Jobs.Model');

// get all jobs
router.get('/', function(request, response, next) {
    return JobAccessor.getAllJob()
    .then(jobResponse => response.status(200).send(jobResponse))
    .catch(error => response.status(400).send(error))
})



//get one job

router.get('/:id', auth_middleware, function(request, response) {
    return JobAccessor.findJobByTitle(request.title)
    .then(jobResponse => response.status(200).send(jobResponse))
    .catch(error => response.status(400).send(error))
    
  })
// router.get('/jobs/:id', function(req, res, next) {
//     Job.findOne({_id: req.params.id}).then(function (job) {
//         res.send(job)
//     }).catch(next)
// })


// add new job
router.post('/', auth_middleware, (request, response) => {
    const job = request.body;
    if(!job.title || !job.description || !job.location || !job.companyName) {
      return response.status(422).send("Missing data");
    }
    //pokemon.owner = request.username;
  
    JobAccessor.insertjob(request.body)
      .then(jobResponse => response.status(200).send(jobResponse))
      .catch(error => response.status(400).send(error))
})
// router.post('/jobs', function(req, res, next) {
//     Job.create(req.body)
//     .then(function (job) {
//         res.send(job)
//     }).catch(next)
// })


// update job
router.put('/:id', auth_middleware ,function(req, res, next){
    Job.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function () {
        Job.findOne({_id: req.params.id}).then(function (job) {
            res.send(job)
        })
    }).catch(next)
})


// delete job
router.delete('/:id', auth_middleware ,function(req, res, next){
    Job.findByIdAndRemove({_id: req.params.id})
    .then(function (job) {
        res.send(job)
    }).catch(next)
})

module.exports = router;