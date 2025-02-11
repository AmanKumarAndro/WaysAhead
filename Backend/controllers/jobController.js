import Job from '../models/Job.js';
export const getJobs = async (req, res) => { res.json(await Job.find()); };
export const createJob = async (req, res) => { res.status(201).json(await new Job(req.body).save()); };
