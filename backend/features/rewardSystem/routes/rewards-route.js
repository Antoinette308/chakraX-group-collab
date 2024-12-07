
import express from 'express';
import {
    welcomeMessage,
    getUserRewardsController,
    addUserRewardController,
    getLoginStreakController,
    updateLoginStreakController
} from '../controllers/rewards-controller.js';
import { authenticateToken } from '../../authentication/middleware/auth-middleware.js'

const router = express.Router();

router.get('/', welcomeMessage);

router.get('/user-rewards', authenticateToken, getUserRewardsController);

router.post('/new-reward', authenticateToken, addUserRewardController);

router.get('/login-streak', authenticateToken, getLoginStreakController);

router.put('/login-streak/:id', authenticateToken, updateLoginStreakController);

export default router;