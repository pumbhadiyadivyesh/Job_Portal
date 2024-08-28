var express = require('express');
var router = express.Router();
const multer = require('multer')
const UserAuth = require('../controllers/UserAuthcntr')
const JobSeekerscntr = require('../controllers/JobSeekercntr')
const SeekerJobListingcntr = require('../controllers/SeekerJobListingcntr')


/* API Page. */
router.post('/Signup',UserAuth.SignUp)
router.post('/Login',UserAuth.Secure,UserAuth.Login)

router.post('/addJobSeckers',UserAuth.Secure,JobSeekerscntr.addJobSeekers)
router.get('/SeekersGet',UserAuth.Secure,JobSeekerscntr.JobSeekersGet)
router.delete('/SeekersDataDelete/:id',UserAuth.Secure,JobSeekerscntr.JobSeekerDataDelete)
router.put('/SeekersDataUpdate/:id',UserAuth.Secure,JobSeekerscntr.JobSeekersDataUpdate)

router.post('/addJobSeekerList',UserAuth.Secure,SeekerJobListingcntr.addJobSeekerList)
router.get('/JobSeekerListGet',UserAuth.Secure,SeekerJobListingcntr.JobSeekerListGet)
router.delete('/JobseekerListDataDelete/:id',UserAuth.Secure,SeekerJobListingcntr.JobseekerListDataDelete)
router.put('/JobseekerListDataUpdate/:id',UserAuth.Secure,SeekerJobListingcntr.JobseekerListDataUpdate)

module.exports = router;
