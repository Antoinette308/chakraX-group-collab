
/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */

// imports
import { createHabit } from "../models/habitTracker-model.js";

// welcome message
export const welcomeMessage = (req, res) => {
    res.send('What are we tracking today?');
};

// create new habit
export const createHabitController = (req, res) => {
    const habit = req.body;
    createHabit(habit, (error, results) => {
        if (error) {
            console.error('Error creating habit:', error);
            // return 
            res.status(500).json({ error: error.message });
        }
        res.status(201).json(results);
    });
};

// read habit by ID


// update habit by ID


// delete habit by ID
