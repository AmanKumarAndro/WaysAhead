const jwt = require("jsonwebtoken");
const User = require("../model/Users");
require("dotenv").config();

const verifyAuth = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send({ message: "Token not found." });
  }
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const user = await User.findOne({ _id: decoded._id }, "-password");
  if (!user) {
    return res.status(401).send({ message: "Access Denied." });
  }
  req.user = user;
  // console.log(req.user); 
  next();
};

module.exports = {verifyAuth};