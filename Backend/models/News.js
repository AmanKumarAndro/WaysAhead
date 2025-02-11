const NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    publishedAt: { type: Date, default: Date.now }
});
export default mongoose.model('News', NewsSchema);