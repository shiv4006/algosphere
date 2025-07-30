// File: ~/Desktop/Project/backend/src/config/db.js

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Make sure you are using process.env.MONGO_URL here!
    const dbURI = process.env.MONGO_URL;

    // Crucial Debugging Step: Log the URI to see what's being loaded
    console.log('Attempting to connect to MongoDB with URI:', dbURI);

    if (!dbURI) {
      // This condition would explain the "undefined" error if MONGO_URL isn't loaded
      throw new Error('MONGO_URL is not defined in environment variables or is undefined.');
    }

    await mongoose.connect(dbURI, {
      // Mongoose 6+ no longer needs these options by default, but add if required:
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log('MongoDB Connected successfully to:', dbURI);
  } catch (err) {
    // Log the full error message from Mongoose or your custom error
    console.error(`❌ mongodb connection error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;