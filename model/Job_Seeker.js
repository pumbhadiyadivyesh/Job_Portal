const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobseekerData = new Schema({
    PersnalInformation:[{
        name:{
            type:String,
            required:true
        },
        LastName:{
            type:String,
            required:true
        }
    }],
    ResumeUpload:{
        type:String,
        required:true
    },
    ContactDetail:{
        type:Number,
        // Max:10['Not Valid Over 10 Digit'],
        // Min:10['Not Valid Lesthen 10 Digit']
    }
})
const Jobseeker = mongoose.model('Job_Seeker',JobseekerData)
module.exports = Jobseeker