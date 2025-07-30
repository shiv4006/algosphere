// src/middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'; // Adjust path as necessary

export const protect = async (req, res, next) => {
  let token;
  console.log('Cookies received by protect middleware:', req.cookies); // Log cookies
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
    console.log('Token found:', token);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Token decoded:', decoded);
      req.user = await User.findById(decoded.userId).select('-password');
      if (!req.user) {
        console.log('User not found for decoded ID:', decoded.userId);
        return res.status(401).json({ message: 'Not authorized, user not found for token' });
      }
      next();
    } catch (error) {
      console.error('Token verification error in protect middleware:', error.name, error.message);
      return res.status(401).json({ message: `Not authorized, token failed: ${error.message}` });
    }
  } else { // Moved the 'no token' check to cover the case where req.cookies or req.cookies.token is missing
    console.log('No token found in cookies.');
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};