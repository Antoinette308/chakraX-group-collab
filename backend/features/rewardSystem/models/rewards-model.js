
import connection from '../../../config/database.js';

// get rewards
export const getUserRewards = (id, callback) => {
    const query = 'SELECT * FROM user_rewards WHERE user_id = ?';
    connection.query(query, [id], (error, results) => {
         if (error) return callback(error);
         callback(null, results[0]);
    });
};

// add rewards
export const addUserReward = (reward, callback) => {
    const query = 'INSERT INTO user_rewards (user_id, forks, reward_name) VALUES (?, ?, ?)';
    connection.query(query, [reward.user_id, reward.forks, reward.rewards_name], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

// get streak
export const getLoginStreak = (id, callback) => {
    const query = 'SELECT * FROM daily_login WHERE user_id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

// update streak 
export const updateLoginStreak = (id, loginStreak, callback) => {
    const query = 'UPDATE daily_login SET streak = ?, last_visit = ?, weeks = ? WHERE user_id = ?';
    connection.query(query, [loginStreak.streak, loginStreak.last_visit, loginStreak.weeks, id], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};