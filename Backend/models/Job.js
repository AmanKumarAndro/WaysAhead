import mongoose from 'mongoose';
const JobSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    location: String,
    postedAt: { type: Date, default: Date.now }
});
export default mongoose.model('Job', JobSchema);