const Job = require("../models/job");

const jobController = {
  createJob: async (request, response) => {
    try {
      // get the job inputs from the request body
      const { company, position, jobLocation, jobStatus, jobType } =
        request.body;

      // create a new job
      const newJob = new Job({
        company,
        position,
        jobLocation,
        jobStatus,
        jobType,
        user: request.userId,
      });

      // save the job
      await newJob.save();

      // send a success response
      response
        .status(201)
        .json({ message: "Job created successfully", job: newJob });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  getAllJobs: async (request, response) => {
    try {
      //   // get the job id from the request parameters
      //   const { id } = request.params;

      //   // get the job
      //   const job = await Job.findById(id);

      const job = await Job.find();

      // if the job is not found
      if (!job) {
        return response.status(404).json({ message: "Job not found" });
      }

      // send a success response
      response.status(200).json({ job });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  getJob: async (request, response) => {
    try {
      // get the job id from the request parameters
      const { id } = request.params;

      // get the job
      const job = await Job.findById(id);

      // if the job is not found
      if (!job) {
        return response.status(404).json({ message: "Job not found" });
      }

      // send a success response
      response.status(200).json({ job });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  updateJob: async (request, response) => {
    try {
      // get the job id from the request parameters
      const { id } = request.params;

      // get the job inputs from the request body
      const { company, position, jobLocation, jobStatus, jobType } =
        request.body;

      // update the job
      const updatedJob = await Job.findByIdAndUpdate(
        id,
        {
          company,
          position,
          jobLocation,
          jobStatus,
          jobType,
        },
        { new: true }
      );

      // if the job is not found
      if (!updatedJob) {
        return response.status(404).json({ message: "Job not found" });
      }

      // send a success response
      response
        .status(200)
        .json({ message: "Job updated successfully", job: updatedJob });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  deleteJob: async (request, response) => {
    try {
      // get the job id from the request parameters
      const { id } = request.params;

      // delete the job
      const deletedJob = await Job.findByIdAndDelete(id);

      // if the job is not found
      if (!deletedJob) {
        return response.status(404).json({ message: "Job not found" });
      }

      // send a success response
      response.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
};

module.exports = jobController;
