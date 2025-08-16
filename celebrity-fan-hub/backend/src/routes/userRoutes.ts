import { Router } from 'express';
import { getUserProfile, upgradeMembership } from '../controllers/userController';
import { isAuthenticated } from '../middleware/authMiddleware';

const router = Router();

// Route to get user profile
router.get('/profile', isAuthenticated, getUserProfile);

// Route to upgrade membership
router.post('/upgrade-membership', isAuthenticated, upgradeMembership);

export default router;