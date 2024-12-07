import connection from '../../../config/database.js';
import dotenv from 'dotenv';

dotenv.config();

// handle user rewards
/* 
this will need:
First model to have a select all using user id as a WHERE clause*/
export const getAllRewards = (id, callback) => {
    const query = 'SELECT * FROM user_rewards WHERE id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) return callback(error);
        callback(null, results[0]);
    });
};
/*Second model to insert data into the table*/
export const createReward = (reward, callback) => {
    const query = 'INSERT INTO user_rewards (forks, reward_name, created_at) VALUES (?, ?, ?)';

    const values = [
        reward.forks,
        reward.reward_name,
        reward.created_at
    ];

    connection.query(query, values, (error, results) => {
        if (error) return callback(error);
        const formattedReward = {
            user_id: results.insertId,
            rewards_id: results.insertId,

            ...reward,
            created_at: format(new Date(reward.current_date), 'YYYY-MM-DD')
        };
        callback(null, formattedReward);
    });
};


// handle daily login
/*
this will need:
First model to select all using user id as a WHERE clause
Second model to update using user id as a WHERE clause
*/