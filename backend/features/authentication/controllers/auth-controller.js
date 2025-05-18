/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */

// imports
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
    createUser,
    findUserByEmail,
    updateUserInformation,
    deleteUserAccount
} from '../models/auth-model.js';
import crypto from 'crypto';
import {
    saveResetToken,
    findUserByToken,
    updateUserPassword
} from '../models/auth-model.js';
import dotenv from "dotenv";

dotenv.config();

// console.log('jsonwebtoken model:', jwt);
// console.log('SECRET_KEY:', process.env.SECRET_KEY);

// welcome message
export const welcomeMessage = (req, res) => {
    res.send('Log in or sign up for full access!')
};

// Create new user
export const createUserController = (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log('Register request body:', req.body);

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ error: err.message });
        }

        createUser({ first_name: firstName, last_name: lastName, email, password: hashedPassword }, (error, user) => {
            if (error) {
                console.error('Error creating user:', error);
                return res.status(500).json({ error: error.message });
            }
            // console.log('User registered:', user);
            res.status(201).json({ id: user.user_id, first_name: user.firstName, last_name: user.lastName, email: user.email });
            console.log('Response:', { id: user.user_id, email: user.email });
        });
    });
};

// Log in to existing user
export const existingUserController = (req, res) => {
    const { email, password } = req.body;
    console.log('Login request body:', req.body);

    findUserByEmail(email, (error, user) => {
        if (error) {
            console.error('Error finding user:', error);
            return res.status(500).json({ error: error.message });
        }
        if (!user) {
            console.log('User not found:', email);
            return res.status(404).json({ message: 'User not found'});
        }

        bcrypt.compare(password, user.password, (err, isValid) => {
            if (err) {
                console.error('Error comparing password:', err);
                return res.status(500).json({ error: err.message });
            }
            console.log(isValid);
            if (!isValid) {  
                console.log('Invalid credentials for user:', email);
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '4h' });
            console.log('Generated token:', token, user.user_id);
            res.json({ token, user: user.user_id});
        });
        // });
    });
};

// Read user information - settings type scenario
export const getUserDetailsController = (req, res) => {
    const { email } = req.body;
    findUserByEmail(email, (error, user) => {
        if (error) {
            console.error('Error finding user by email:', error);
            return res.status(500).json({ error: error.message });
        }
        if (!user) {
            return res.status(404).json({ message: `${email} not found` });
        }
        res.json({ email: user.email })
    })
}


// Update user information?
export const updateUserInformationController = (req, res) => {
    const { email } = req.params;
    const { password, ...updatedInformation } = req.body;
    updateUserInformation(email, updatedInformation, (error, results) => {
        if (error) {
            console.error('Error updating user information:', error);
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results);
    });
};

// Password reset
    // controller to handle token generatation
export const passwordResetTokenController = (req, res) => {
    const { email } = req.body;
    findUserByEmail(email, (error, user) => {
        if (error) {
            console.error('Error finding user:', error);
            return res.status(500).json({ error: error.message });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const token = crypto.randomBytes(32).toString('hex');
        const resetPasswordExpires = new Date(Date.now() + 1800000).toISOString().slice(0, 19).replace('T', ' '); 

        saveResetToken(user.email, token, resetPasswordExpires, (err) => {
            if (err) {
                console.error('Error saving reset token:', err);
                return res.status(500).json({ error: err.message });
            }
            console.log(`Generated token: ${token}`);
            res.status(200).json({ message: 'Token saved', token });
        });
    });
};

    // controller to use the token and reset the password
export const resetPasswordWithTokenController = (req, res) => {
    const { token, newPassword } = req.body;
    findUserByToken(token, (error, user) => {
        if (error) {
            console.error('Error finding user by token', error);
            return res.status(500).json({ error: error.message });
        }
        if (!user || user.resetPasswordExpires < Date.now()) {
            return res.status(400).json({ message: 'Password Reset Token is invalid or has expired' });
        }
        bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing password:', err);
                return res.status(500).json({ error: err.message });
            }
            updateUserPassword(user.email, hashedPassword, (error, results) => {
                if (error) {
                    console.error('Error updating password:', error);
                    return res.status(500).json({ error: error.message });
                }
                res.status(200).json({ message: 'Password successfully reset' });
            });
        });
    });
};

// delete/deactivate user account
export const deleteUserAccountController = (req, res) => {
    const { email } = req.params;
    const { password } = req.body;
    deleteUserAccount(email, password, (error, results) => {
        if (error) {
            console.error('Error deleting user account:', error);
            return res.status(500).json(results);
        }
        res.status(200).json({ message: 'User account deleted successfully.'})
    });
};