/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// imports
import express from 'express';
import { welcomeMessage } from '../controllers/auth-controller.js';
import {
    createUserController,
    existingUserController,
    getUserDetailsController,
    updateUserInformationController,
    deleteUserAccountController
} from '../controllers/auth-controller.js';
import { authenticateToken } from '../middleware/auth-middleware.js';

// declare router
const router = express.Router();

// welcome message
router.get('/', welcomeMessage);

// CRUD(ish) routes
router.post('/new-user', createUserController);

router.post('/login', existingUserController);

router.get('/user-details', authenticateToken, getUserDetailsController);

router.put('/update-user-details', authenticateToken, updateUserInformationController),

router.delete('/deactivate-account', authenticateToken, deleteUserAccountController);


// just for testing the token authentication
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route'})
});

export default router;