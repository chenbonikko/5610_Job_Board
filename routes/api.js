const express = require('express')

const router = express.Router()

//const Job = ''


// get all jobs
router.get('/jobs', function(req, res, next) {
    console.log('lets go fetch all jobs')
    res.send('see all jobs')
})


//get one job
router.get()


// add new job
router.post()


// update job
router.put()


// delete jon
router.delete()

module.exports = router