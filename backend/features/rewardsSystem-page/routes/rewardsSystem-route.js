import express from 'express';
import { welcomeMessage } from '../controllers/rewardsSystem-controller';
import import {
    getAllRewardsController,
    createRewardController,
    deleteRewardController,
    getDailyLoginController,
    updateDailyLoginController
} from "../models/rewardsSystem-controller";

// Declare router
const router = express.Router();

// Welcome message
router.get('/', welcomeMessage);

// CRUD routes
router.get('/rewards', getAllRewardsController);

router.post('/new-reward', createRewardController);

router.delete('/delete-reward', deleteRewardController);

router.get('/daily-login', getDailyLoginController);

router.put('/update-daily-login', updateDailyLoginController);

export default router;