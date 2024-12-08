import express from 'express';
import { welcomeMessage } from '../controllers/rewardsSystem-controller.js';
import {
    getAllRewardsController,
    createRewardController,
    deleteRewardController,
    getDailyLoginController,
    updateDailyLoginController
} from "../controllers/rewardsSystem-controller.js";
import { authenticateToken } from '../../authentication/middleware/auth-middleware.js';

// Declare router
const router = express.Router();

// Welcome message
router.get('/', welcomeMessage);

router.get('/:id', authenticateToken, getAllRewardsController);

router.post('/new-reward', authenticateToken, createRewardController);

// router.delete('/delete-reward/:id', deleteRewardController);

router.get('/login-streak/:id', authenticateToken, getDailyLoginController);

router.put('/login-streak/:id', authenticateToken, updateDailyLoginController);

export default router;