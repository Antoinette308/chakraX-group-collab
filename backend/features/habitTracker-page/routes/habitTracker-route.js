
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
//import { validateHabit, checkValidationResult } from '../validators/habitTracker-validator.js';

// declare router
const router = express.Router();

// welcome message
router.get('/', welcomeMessage);

// CRUD routes
router.post('/new-habit', createHabitController);

router.get('/habit/:id', getHabitByIdController);

router.get('/habit', getAllHabitsController);

router.put('/update-habit/:id', updateHabitByIdController);

router.delete('/delete-habit/:id', deleteHabitByIdController);

export default router;