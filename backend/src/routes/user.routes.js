// src/routes/user.routes.js
import express from 'express';
import { getUserProgress, markProblemAsCompleted, markProblemAsRevised, updateUserDetails } from '../controller/problem.controller.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// POST /api/users/complete-problem
// This route will now use the updated controller logic for toggling
router.post('/complete-problem', protect, markProblemAsCompleted);
router.post('/revise-problem', protect, markProblemAsRevised);
router.get('/progress', protect, getUserProgress);
router.put('/update-profile', protect, updateUserDetails);

export default router;