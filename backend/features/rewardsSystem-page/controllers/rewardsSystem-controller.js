import {
    getAllRewards,
    createReward,
    deleteReward,
    getDailyLogin,
    updateDailyLogin
} from "../models/rewardsSystem-model.js";

// Welcome message
export const welcomeMessage = (req, res) => {
    res.send('Well done, treat yourself to a reward!')
};

// Get all rewards
export const getAllRewardsController = (req, res) => {
    const { id } = req.params;
    getAllRewards(id, (error, results) => {
        if (error) return res.status(500).json({ error:error.message });
        res.status(200).json(results);
    });
};

// Create a new reward
export const createRewardController = (req, res) => {
    const { user_id, forks, reward_name } = req.body;
    if (!user_id || !forks || !reward_name) {
        return res.status(400).json({ error: 'Missing required fields '});
    }

    const reward = { user_id, forks, reward_name };
    createReward(reward, (error, results) => {
        if (error) {
            console.error('Error creating reward:', error);
            res.status(500).json({ error: error.message });
        }
        res.status(201).json(results)
    });
};

// Delete a reward
/*export const deleteRewardController = (req, res) => {
    const { id } = req.params;
    deleteReward(id, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};*/


// Get daily log in
export const getDailyLoginController = (req, res) => {
    const { id } = req.params;
    getDailyLogin(id, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};

// Update daily log in
export const updateDailyLoginController = (req, res) => {
    const { id } = req.params;
    const updatedDailyLogin = req.body;
    updateDailyLogin(id, updatedDailyLogin, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};
