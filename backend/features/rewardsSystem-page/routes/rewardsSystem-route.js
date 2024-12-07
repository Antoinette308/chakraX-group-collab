import express from 'express';
import { welcomeMessage } from '../controllers/rewardsSystem-controller';
import {
    getAllRewardsController,
    createRewardController,
    deleteRewardController,
    getDailyLoginController,
    updateDailyLoginController
} from "../controllers/rewardsSystem-controller";

// Declare router
const router = express.Router();

// Welcome message
router.get('/', welcomeMessage);

// CRUD routes
// Rewards
router.get('/rewards/:user_id', getAllRewardsController);

router.post('/new-reward', createRewardController);

router.delete('/delete-reward/:reward_id', deleteRewardController);


// Daily login 
router.get('/daily-login/:user_id', getDailyLoginController);

router.put('/update-daily-login/:user_id', updateDailyLoginController);

export default router;