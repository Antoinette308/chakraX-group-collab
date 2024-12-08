
/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// imports
import express from 'express';
import { welcomeMessage } from '../controllers/habitTracker-controller.js';
import { 
    createHabitController,
    getHabitByIdController,
    getAllHabitsController,
    updateHabitByIdController,
    deleteHabitByIdController
 } from '../controllers/habitTracker-controller.js';
//  import { validateHabit, checkValidationResult } from '../validators/habitTracker-validator.js';
 import { authenticateToken } from '../../authentication/middleware/auth-middleware.js';

// declare router
const router = express.Router();

// welcome message
router.get('/', welcomeMessage);

// CRUD routes
router.post('/new-habit', authenticateToken, createHabitController);

router.get('/habit/:id', authenticateToken, getHabitByIdController);

router.get('/habit', authenticateToken, getAllHabitsController);

router.put('/update-habit/:id', authenticateToken, updateHabitByIdController);

router.delete('/delete-habit/:id', authenticateToken, deleteHabitByIdController);


export default router;