import User from '../models/userModel.js';
import Problem from '../models/problemModel.js';

export const markProblemAsCompleted = async (req, res) => {
  const { problemId, problemLevel, problemTopic, problemTitle } = req.body;
  const userId = req.user ? req.user._id : null;

  if (!userId) return res.status(401).json({ message: 'Unauthorized: User ID not available.' });
  if (!problemId) return res.status(400).json({ message: 'Problem ID is required' });
  if (!problemLevel || !problemTopic) return res.status(400).json({ message: 'Problem level and topic are required' });

  try {
    let user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: 'User not found.' });

    const existingIndex = user.completedProblems.findIndex(p => p.problemId === problemId);

    if (existingIndex !== -1) {
      console.log(`Problem with ID ${problemId} already exists in completedProblems.`);
      const toRemove = user.completedProblems[existingIndex];
      user.completedProblems.splice(existingIndex, 1);

      // Decrement counters safely
      user.completedProblemLevels.set(problemLevel, (user.completedProblemLevels.get(problemLevel) || 1) -1);
      user.completedProblemTopics.set(problemTopic, (user.completedProblemTopics.get(problemTopic) || 1) -1);

      await Problem.findOneAndDelete(toRemove.problem);
      await user.save();
    } else {
      // MARK problem
      console.log(`Marking problem with ID ${problemId} as complete.`);
      const newProblem = await Problem.create({
        problemId,
        title: problemTitle,
        topic: problemTopic,
        level: problemLevel,
        userId,
      })
      user.completedProblems.push({
        problem: newProblem._id,
        problemId: newProblem.problemId,
        completedAt: new Date(),
        notes: "",
      })

      // Increment counters safely
      user.completedProblemLevels.set(problemLevel, (user.completedProblemLevels.get(problemLevel) || 0) + 1);
      user.completedProblemTopics.set(problemTopic, (user.completedProblemTopics.get(problemTopic) || 0) + 1);


      await user.save();
    }

    user = await User.findById(userId).select('-password');

    return res.status(200).json({
      message: existingIndex === -1 ? 'Problem unmarked successfully' : 'Problem marked as complete successfully',
      completedProblems: user.completedProblems,
      completedProblemLevels: user.completedProblemLevels || {},
      completedProblemTopics: user.completedProblemTopics || {},
    });

  } catch (error) {
    console.error('Error toggling problem completion:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const markProblemAsRevised = async (req, res) => {
  const { problemId } = req.body;
  const userId = req.user ? req.user._id : null;

  if (!userId) return res.status(401).json({ message: 'Unauthorized: User ID not available.' });
  if (!problemId) return res.status(400).json({ message: 'Problem ID is required' });
  
  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: 'User not found.' });

    const isRevised = user.revisedProblems.includes(problemId);

    // Prepare updates
    let update = {};
    if (isRevised) {
      // UNMARK problem
      update.$pull = { revisedProblems: problemId };
    } else {
      // MARK problem
      update.$addToSet = { revisedProblems: problemId };
    }

    // Update user document atomically
    const updatedUser = await User.findByIdAndUpdate(userId, update, {
      new: true,
      runValidators: true,
    }).select('-password');

    // Ensure no negative counts (optional)
    // You may want to sanitize counts here if needed.

    return res.status(200).json({
      message: isRevised ? 'Problem unmarked successfully' : 'Problem marked as complete successfully',
      completedProblems: updatedUser.completedProblems || [],
      revisedProblems: updatedUser.revisedProblems || [],
      completedProblemLevels: updatedUser.completedProblemLevels || {},
      completedProblemTopics: updatedUser.completedProblemTopics || {},
    });

  } catch (error) {
    console.error('Error toggling problem completion:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

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