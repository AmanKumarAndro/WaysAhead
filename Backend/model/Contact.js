const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    region: { type: String, required: true },
    industry: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});
export default mongoose.model('Contact', ContactSchema);