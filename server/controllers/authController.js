const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Validate email and password
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      occupation: user.occupation,
      token: generateToken(user)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Register new user
exports.register = async (req, res) => {
  const { name, email, password, occupation } = req.body;
  
  try {
    // Validate required fields
    if (!name || !email || !password || !occupation) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Create new user
    const user = await User.create({ name, email, password, occupation });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      occupation: user.occupation,
      token: generateToken(user)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

/*
  Legacy combined authentication logic:
  - If a user exists, attempt login.
  - If not, register the new user.
  - Keeping for backward compatibility
*/
exports.auth = async (req, res) => {
  const { name, emailOrPhone, email, password, occupation } = req.body;
  
  // Use email if provided, otherwise fall back to emailOrPhone for legacy support
  const userEmail = email || emailOrPhone;
  
  try {
    // Check if the user exists
    let user = await User.findOne({ 
      $or: [
        { email: userEmail },
        { emailOrPhone: userEmail } // Legacy field support
      ]
    });
    
    if (user) {
      // Attempt login
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      // Register new user with updated schema
      user = await User.create({ 
        name, 
        email: userEmail, 
        password, 
        occupation 
      });
    }
    
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email || user.emailOrPhone, // Support both fields
      occupation: user.occupation,
      token: generateToken(user)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
