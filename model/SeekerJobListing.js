    const mongoose = require('mongoose')
    const Schema = mongoose.Schema

    const SeekerJobListingData = new Schema({
        jobtitle:{
            type:String,
            required:true
        },
        jobdescription:{
            type:String,
            required:true
        },
        qualification:{
            type:String,
            required:true
        },
        responsbillities:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        salary_rang:{
            type:String,
            required:true
        },
        jobseekerid:{
            type:mongoose.Types.ObjectId,
            ref:'Job_Seeker',
            required:true
        }
    })
    const JobListing = mongoose.model('SeekerJobListing',SeekerJobListingData)
    module.exports = JobListing