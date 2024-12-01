/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// import db connection
import connection from "../../../config/database.js";

// Create
export const createUser = (user, callback) => {
    const query = 'INSERT INTO users (email, password) VALUES ( ?, ?)';
    connection.query(query, [user.email, user.password], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return callback(error)
        };
        const formattedUser = {
            id: results.insertId,
            ...user
        };
        console.log('User created:', formattedUser);
        callback(null, formattedUser);
    });
};

// Create & Read
export const findUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], (error, results) => {
        if (error) return callback(error);
        const user = results[0];
        callback(null, user);
    });
};

// Update email
export const updateUserInformation = (email, updatedInfo, callback) => {
    const query = 'UPDATE users SET email = ? WHERE email = ?';
    connection.query(query, [updatedInfo.email, email], (error, results) => {
        if (error) return callback(error);
        callback(null, results)
    });
};

// Update forgotten password


// Delete / deactivate account
export const deactiveUserAccount = (email, callback) => {
    const query = 'DELETE FROM users WHERE email = ?';
    connection.query(query, [email], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};