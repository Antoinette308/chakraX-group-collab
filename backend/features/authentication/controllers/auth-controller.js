/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */

// imports
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
    createUser,
    findUserByEmail
} from '../models/auth-model.js';

console.log('jsonwebtoken model:', jwt);
console.log('SECRET_KEY:', process.env.SECRET_KEY);

// welcome message
export const welcomeMessage = (req, res) => {
    res.send('Log in or sign up for full access!')
};

// Create new user
export const createUserController = (req, res) => {
    const { email, password } = req.body;
    console.log('Rester request body:', req.body);

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ error: err.message });
        }

        createUser({ email, password: hashedPassword }, (error, user) => {
            if (error) {
                console.error('Error creating user:', error);
                return res.status(500).json({ error: error.message });
            }
            console.log('User registered:', user);
            res.status(201).json({ id: user.id });
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
            if (!isValid) {
                console.log('Invalid credentials for user:', email);
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
            console.log('Generated token:', token);
            res.json({ token });
        });
    });
};

// Update user information?


// Password reset?