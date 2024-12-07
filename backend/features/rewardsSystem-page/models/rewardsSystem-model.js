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
        callback(null, results[0]);
    });
};
/*Second model to insert data into the table*/
export const createReward = (reward, callback) => {
    const query = 'INSERT INTO user_rewards (user_id, forks, reward_name) VALUES (?, ?, ?)'; // created_at is a timestamp, so it's generated

    const values = [
        reward.user_id, // think we need to be using user_id for most of these models as it's all to do with login ie user id
        reward.forks,
        reward.reward_name
       /* reward.created_at */ // this should be a timestamp
    ];

    connection.query(query, values, (error, results) => {
        if (error) return callback(error);
        /*const formattedReward = {
            user_id: results.insertId,
            rewards_id: results.insertId,

            ...reward,
            created_at: format(new Date(reward.current_date), 'YYYY-MM-DD')
        };*/ // none of this should be needed as we're not inputting date, we're going to let the 
        callback(null, results);
    });
};


// handle daily login
/*
this will need:
First model to select all using user id as a WHERE clause
Second model to update using user id as a WHERE clause
*/