
/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */

// imports
import { 
    createHabit,
    getHabitById
 } from "../models/habitTracker-model.js";

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
export const getHabitByIdController = (req, res) => {
    const { id } = req.params;
    getHabitById(id, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};

// update habit by ID


// delete habit by ID
