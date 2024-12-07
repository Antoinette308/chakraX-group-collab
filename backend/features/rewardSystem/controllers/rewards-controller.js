
import {
    getUserRewards,
    addUserReward,
    getLoginStreak,
    updateLoginStreak
} from '../models/rewards-model.js';

// welcome message
export const welcomeMessage = (req, res) => {
    res.send('What rewards are we aiming for this week?');
};

// get rewards
export const getUserRewardsController = (req, res) => {
    const id = req.body;
    getUserRewards(id, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};

// add rewards
export const addUserRewardController = (req, res) => {
    const reward = req.body;
    addUserReward(reward, (error, results) => {
        if (error) {
            console.error('Error adding new reward:', error);
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json(results);
    });
};

// get streak
export const getLoginStreakController = (req, res) => {
    const id = req.body
    getLoginStreak(id, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};

// update streak
export const updateLoginStreakController = (req, res) => {
    const { id } = req.params;
    const updatedStreak = req.body;
    updateLoginStreak(id, updatedStreak, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};