
/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// imports
import express from 'express';
import { welcomeMessage } from '../controllers/habitTracker-controller.js';
import { 
    createHabitController,
    getHabitByIdController
 } from '../controllers/habitTracker-controller.js';

// declare router
const router = express.Router();

// welcome message
router.get('/', welcomeMessage);

// CRUD routes
router.post('/new-habit', createHabitController);

router.get('./habit/:id', getHabitByIdController);


export default router;