const SeekerJobList = require('../model/SeekerJobListing');

// Add a new job seeker listing
exports.addJobSeekerList = async function (req, res) {
    try {
        // Check if all required fields are provided
        if (!req.body.jobtitle || !req.body.jobdescription || !req.body.qualification || !req.body.responsbillities || !req.body.location
            || !req.body.salary_rang || !req.body.jobseekerid) {
            throw new Error('Please Enter All Details');
        }
        // Create a new job listing
        const JobseekerListData = await SeekerJobList.create(req.body);
        res.status(201).json({
            Success: true,
            message: "Successfully Created",
            Data: JobseekerListData
        });
    } catch (error) {
        res.status(400).json({
            Success: false,
            message: error.message
        });
    }
};

// Get job seeker listings with optional filters
exports.JobSeekerListGet = async function (req, res) {
    try {
        // Extract query parameters from the request
        const { jobtitle, location, keyword } = req.query;
        const query = {};
        if (jobtitle) {
            query.jobtitle = new RegExp(jobtitle, 'i'); 
        }
        if (location) {
            query.location = new RegExp(location, 'i'); 
        }
        if (keyword) {
            query.$or = [
                { jobtitle: new RegExp(keyword, 'i') },
                { jobdescription: new RegExp(keyword, 'i') },
                { qualification: new RegExp(keyword, 'i') },
                { responsbillities: new RegExp(keyword, 'i') }
            ];
        }

        // Find job listings based on the query
        const jobListings = await SeekerJobList.find(query);

        res.status(200).json({
            Success: true,
            message: "Job listings retrieved successfully",
            Data: jobListings
        });
    } catch (error) {
        res.status(400).json({
            Success: false,
            message: error.message
        });
    }
};

// Delete a job seeker listing by ID
exports.JobseekerListDataDelete = async function (req, res) {
    try {
        // Find and delete the job listing by ID
        await SeekerJobList.findByIdAndDelete(req.params.id);
        res.status(200).json({
            Success: true,
            message: "Data Deleted Successfully"
        });
    } catch (error) {
        res.status(400).json({
            Success: false,
            message: error.message
        });
    }
};

// Update a job seeker listing by ID
exports.JobseekerListDataUpdate = async function (req, res) {
    try {
        // Find and update the job listing by ID
        const JobseekerListUpdatedData = await SeekerJobList.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            Success: true,
            message: "Data Updated Successfully",
            Data: JobseekerListUpdatedData
        });
    } catch (error) {
        res.status(400).json({
            Success: false,
            message: error.message
        });
    }
};
