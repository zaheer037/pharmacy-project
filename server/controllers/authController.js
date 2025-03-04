const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};

/*
  Combined authentication logic:
  - If a user exists, attempt login.
  - If not, register the new user.
*/
exports.auth = async (req, res) => {
  const { name, emailOrPhone, password, occupation } = req.body;
  try {
    // Check if the user exists
    let user = await User.findOne({ emailOrPhone });
    if (user) {
      // Attempt login
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      // Register new user
      user = await User.create({ name, emailOrPhone, password, occupation });
    }
    res.status(200).json({
      _id: user._id,
      name: user.name,
      emailOrPhone: user.emailOrPhone,
      occupation: user.occupation,
      token: generateToken(user)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
