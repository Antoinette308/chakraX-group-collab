import connection from '../../../config/database.js';
import dotenv from 'dotenv';

dotenv.config();

// handle user rewards
/* 
this will need:
First model to have a select all using user id as a WHERE clause*/
export const getAllRewards = (id, callback) => { 
    const query = 'SELECT * FROM user_rewards WHERE user_id = ?'; // this must match the column names for the table, else it will give us a syntax error & we'll be referencing off the user_id
    connection.query(query, [id], (error, results) => { // using just id here is fine, because it's being declared for use in JS not SQL
        if (error) return callback(error);
        callback(null, results);
    });
};
/*Second model to insert data into the table*/
export const createReward = (reward, callback) => {
    const query = 'INSERT INTO user_rewards (user_id, forks, reward_name) VALUES (?, ?, ?)'; // created_at is a timestamp, so it's generated

    const values = [
        reward.user_id, // think we need to be using user_id for most of these models as it's all to do with login ie user id
        reward.forks,
        reward.reward_name
    ];

    connection.query(query, values, (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

/*Third model: delete a reward based on reward_id*/
export const deleteReward = (reward_id, callback) => {
    const query = 'DELETE FROM user_rewards WHERE rewards_id = ?';

    connection.query = (query, [reward_id], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};



// handle daily login
/*
this will need:
First model to select all using user id as a WHERE clause*/
export const getDailyLogin = (user_id, callback) => {
    const query = 'SELECT * FROM daily_login WHERE user_id = ?';
    connection.query(query, [user_id], (error, results) => {
        if (error) return callback(error);
        callback(null, results[0]);
    })
}

/*Second model to update using user id as a WHERE clause: updates streaks, last_visit and weeks*/
export const updateDailyLogin = (user_id, updates, callback) => {
    const query = 'UPDATE daily-login SET streak =?, last_visit = ?, weeks = ? WHERE user_id = ?';

    const values = [
        updates.streak,
        updates.last_visit,
        updates.weeks,
        user_id
    ];

    connection.query(query, values, (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};