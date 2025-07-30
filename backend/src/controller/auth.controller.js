import User from "../models/userModel.js"
import bcrypt, { hash } from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if(!(name && email && password && confirmPassword)) {
      return res.status(402).json({message: "all fields are required"});
    }

    if(password != confirmPassword) {
      return res.status(401).json({message: "password and confirm password must be same"});
    }

    const existingUser = await User.findOne({email});
    if(existingUser) {
      return res.status(403).json({message: "user already exist"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({name, email, password: hashedPassword});
    await newUser.save();

    const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

    res.status(201).json({message: "user registered successfully", token});

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "error creating user"});
  }
}

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log('Backend signin attempt for:', email);

    // Now 'User' will be defined because of the import above
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      console.log(`Backend signin: User not found for email: ${email}`);
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      console.log(`Backend signin: Invalid credentials for email: ${email}`);
      return res.status(403).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    const userPayload = {
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      completedProblems: existingUser.completedProblems || [],
      revisedProblems: existingUser.revisedProblems || [],
    };

    console.log(`Backend signin: User ${email} logged in successfully. Sending user payload.`);
    res.status(200).json({
      message: "User logged in successfully",
      token: token,
      user: userPayload
    });

  } catch (error) {
    // Log the specific error name and message for better debugging
    console.error('Backend signin: Error during sign-in process -', error.name, ':', error.message);
    // Send back a generic error message but also the specific one for development/debugging if needed
    res.status(500).json({ message: "Error logging in user", error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({message: "user logged out successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "error logging out user"});
  }
}

export const checkUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    if(!token) {
      return res.status(401).json({message: "not authorized, no token"});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`Decoded token: ${JSON.stringify(decoded)}`);

    if (!decoded || !decoded.userId) {
      console.log('Decoded token does not contain userId:', decoded);
      return res.status(401).json({message: "not authorized, invalid token"});
    }

    const existingUser = await User.findById(decoded.userId).select("-password");

    if (!existingUser) {
      console.log(`User not found for ID: ${decoded.userId}`);
      return res.status(404).json({message: "user not found"});
    }

    const userPayload = {
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      completedProblems: existingUser.completedProblems || [],
      revisedProblems: existingUser.revisedProblems || [],
    };

    return res.status(200).json({
      message: "user is authenticated",
      userId: decoded.userId,
      user: userPayload,
    });
  } catch (error) {
    console.error('Error in checkUser:', error.name, error.message);
    return res.status(500).json({message: "internal server error", error: error.message});
  }
}


export const getUserProgress = async (req, res) => {
  const userId = req.user ? req.user._id : null;

  if (!userId) return res.status(401).json({ message: 'Unauthorized: User ID not available.' });

  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: 'User not found.' });

    console.log(user);
    return res.status(200).json({
      userDetails: user,
      totalProblemsCompleted: user.completedProblems.length,
      completedProblemLevels: user.completedProblemLevels || {},
      completedProblemTopics: user.completedProblemTopics || {},
    });
  } catch (error) {
    console.error('Error fetching user progress:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateUserDetails = async (req, res) => {
  const userId = req.user ? req.user._id : null;

  if (!userId) return res.status(401).json({ message: 'Unauthorized: User ID not available.' });

  const { location, college, linkedin, github, leetcode } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        location,
        college,
        linkedin,
        github,
        leetcode,
      },
      { new: true, runValidators: true, lean: true }
    ).select('location college linkedin github leetcode');

    if (!updatedUser) return res.status(404).json({ message: 'User not found.' });

    return res.status(200).json({
      message: 'User details updated successfully.',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error updating user details:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};