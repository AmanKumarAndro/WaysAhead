const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    submittedAt: { type: Date, default: Date.now }
});
export default mongoose.model('Contact', ContactSchema);