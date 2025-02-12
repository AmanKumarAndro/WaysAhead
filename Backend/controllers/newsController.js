const News = require('../model/News.js');

exports.createNews = async (req, res) => {
  const { title, image, description } = req.body;

  try {
    const newNews = new News({
      title,
      image,
      description,
    });

    await newNews.save();
    res.status(201).json({ message: 'News created successfully', news: newNews });
  } catch (error) {
    res.status(500).json({ message: 'Error creating news', error });
  }
};

exports.getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error });
  }
}; 