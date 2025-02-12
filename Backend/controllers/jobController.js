const jobPosting = require('../model/jobPosting.js');

exports.createJobPosting = async (req, res) => {
  const { title, image, description, category, location } = req.body;

  try {
    const newJob = new jobPosting({
      title,
      image,
      description,
      category,
      location,
    });

    await newJob.save();
    res.status(201).json({ message: 'Job posting created successfully', job: newJob });
  } catch (error) {
    res.status(500).json({ message: 'Error creating job posting', error });
  }
};

exports.getJobPostings = async (req, res) => {
  try {
    const jobs = await jobPosting.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job postings', error });
  }
}; 