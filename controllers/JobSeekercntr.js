const JobSeckerUser = require('../model/Job_Seeker')

exports.addJobSeekers = async function(req,res){
    try {
        if (!req.body.PersnalInformation || !req.body.ResumeUpload || !req.body.ContactDetail) {
            throw new Error('Please Enter All Details')
        }   
        const JobSeckerData = await JobSeckerUser.create(req.body)
        res.status(201).json({
            Success:true,
            message:"Successfully Created"
        })
    } catch (error) {
        res.status(404).json({
            Success:false,
            message:error.message
        })
    }
}

exports.JobSeekersGet = async function (req,res) {
    try {
        const JobSeckersDataFind = await JobSeckerUser.find(req.body)
        res.status(202).json({
            Success:true,
            message:"All Data Find",
            Data:JobSeckersDataFind
        })
    } catch (error) {
        res.status(404).json({
            Success:false,
            message:error.message
        })
    }
}
exports.JobSeekerDataDelete = async function (req,res) {
    try {
        await JobSeckerUser.findByIdAndDelete(req.params.id)
        res.status(202).json({
            Success:true,
            message:"Data Deleted Success"
        })   
    } catch (error) {
        res.status(404).json({
            Success:false,
            message:error.message
        })
    }
}
exports.JobSeekersDataUpdate = async function (req,res) {
    try {
        const UpdatedData = await JobSeckerUser.findByIdAndUpdate(req.params.id , req.body,{new:true})
        res.status(202).json({
            Success:true,
            message:"Data Updated Success"
        }) 
    } catch (error) {
        res.status(404).json({
            Success:false,
            message:error.message
        })
    }
}