import News from '../models/News.js';
export const getNews = async (req, res) => { res.json(await News.find()); };
export const createNews = async (req, res) => { res.status(201).json(await new News(req.body).save()); };
