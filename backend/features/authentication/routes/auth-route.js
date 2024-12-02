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
    deleteUserAccountController,
    passwordResetTokenController,
    resetPasswordWithTokenController
} from '../controllers/auth-controller.js';
import { authenticateToken } from '../middleware/auth-middleware.js';

// declare router
const router = express.Router();

// welcome message
router.get('/', welcomeMessage);

// CRUD(ish) routes
router.post('/new-user', createUserController);

router.post('/login', existingUserController);

// router.post('/logout')

router.get('/user-details', authenticateToken, getUserDetailsController);

router.put('/update-user-details', authenticateToken, updateUserInformationController);

router.post('/request-password-reset', passwordResetTokenController);

router.post('/reset-password', resetPasswordWithTokenController);

router.delete('/deactivate-account', authenticateToken, deleteUserAccountController);


// just for testing the token authentication
// router.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'This is a protected route'})
// });

export default router;