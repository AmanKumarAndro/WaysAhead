const jwt = require('jsonwebtoken');
const Users = require('../model/Users.js');

exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

exports.getUserDetails = async (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from headers
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await Users.findById(decoded.id).select('-password'); // Exclude password
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user details', error });
  }
}; 