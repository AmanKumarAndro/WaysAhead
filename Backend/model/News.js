const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now }
});

const News = mongoose.model('News', NewsSchema);
module.exports = News;