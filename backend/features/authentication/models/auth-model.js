/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// import db connection
import connection from "../../../config/database.js";

// Create
export const createUser = (user, callback) => {
    const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
    connection.query(query, [user.first_name, user.last_name, user.email, user.password], (error, results) => {
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
    // store the reset token
export const saveResetToken = (email, token, reset_password_expires, callback) => {
    const query = 'UPDATE users SET reset_password_token = ?, reset_password_expires = ? WHERE email = ?';
    connection.query(query, [token, reset_password_expires, email], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

    // find the user by the reset token
export const findUserByToken = (token, callback) => {
    const query = 'SELECT * FROM users WHERE reset_password_token = ? AND reset_password_expires > ?';
    connection.query(query, [token, Date.now()], (error, results) => {
        if (error) return callback(error);
        callback(null, results[0]);
    });
};
    // Update user password
export const updateUserPassword = (email, hashedPassword, callback) => {
    const query = 'UPDATE users SET password = ?, reset_password_token = NULL, reset_password_expires = NULL';
    connection.query(query, [hashedPassword, email], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    })
}

// Delete / deactivate account
export const deleteUserAccount = (email, callback) => {
    const query = 'DELETE FROM users WHERE email = ?';
    connection.query(query, [email], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};