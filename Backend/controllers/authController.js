const Users = require('../model/Users.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import jwt for token generation

exports.registerUser = async (req, res) => {
  const { name, email, password, phone, address, dateOfBirth } = req.body;
  console.log(req.body);

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const copy = await Users.findOne({ email });
    if (copy) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const newUser = new Users({
      name,
      email,
      password: hashedPassword, // Save the hashed password
      phone,
      address,
      dateOfBirth
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};