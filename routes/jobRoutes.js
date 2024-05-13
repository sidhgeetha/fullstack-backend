const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/jobController");
const auth = require("../middlewares/auth");


//define endpoints
jobRouter.post("/", auth.verifyToken, jobController.createJob);
jobRouter.get("/", auth.verifyToken, jobController.getAllJobs);
jobRouter.get("/:id", auth.verifyToken, jobController.getJob);

module.exports = jobRouter;
