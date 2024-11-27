
/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// imports
import express from 'express';
import { welcomeMessage } from '../controllers/habitTracker-controller.js';
import { 
    createHabitController,
    getHabitByIdController,
    updateHabitByIdController,
    deleteHabitByIdController
 } from '../controllers/habitTracker-controller.js';

// declare router
const router = express.Router();

// welcome message
router.get('/', welcomeMessage);

// CRUD routes
router.post('/new-habit', createHabitController);

router.get('/habit/:id', getHabitByIdController);

router.put('/update-habit/:id', updateHabitByIdController);

router.delete('/delete-habit/:id', deleteHabitByIdController);

export default router;