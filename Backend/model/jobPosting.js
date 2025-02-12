const mongoose = require('mongoose');


const JobSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    category: String,
    location: String,
    postedAt: { type: Date, default: Date.now }
});


const jobPosting = mongoose.model('jobPosting', JobSchema);

module.exports = jobPosting