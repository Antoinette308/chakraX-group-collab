/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// import db connection
import connection from "../../../config/database.js";
import { format  } from "date-fns";

// create new habit
export const createHabit = (habit, callback) => {
    const query = 'INSERT INTO habits (user_id, habit_name, description, frequency, recurrence, start_date, last_completed) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [habit.user_id, habit.habit_name, habit.description, habit.frequency, habit.recurrence, habit.start_date, habit.last_completed], (error, results) => {
        if (error) return callback(error);
        const formattedHabit = {
            habits_id: results.insertId,
            ...habit
            // start_date: format(new Date(habit.start_date), 'yyyy-MM-dd')
        };
        callback(null, formattedHabit);
    });
};

// read habit by ID
export const getHabitById = (id, callback) => {
    const query = 'SELECT * FROM habits WHERE habits_id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) return callback(error);
        callback(null, results[0]);
    });
};

// get all habits
export const getAllHabits = (callback) => {
    const query = 'SELECT * FROM habits';
    connection.query(query, (error, results) => {
        if (error) return callback (error);
        callback(null, results);
    });
};

// update habit by ID
export const updateHabitById = (id, updatedHabit, callback) => {
    const query = 'UPDATE habits SET habit_name = ?, description = ?, frequency = ?, recurrence = ?, start_date = ?, last_completed = ? WHERE habits_id = ?';
    connection.query(query, [updatedHabit.habit_name, updatedHabit.description, updatedHabit.frequency, updatedHabit.recurrence, updatedHabit.start_date, updatedHabit.last_completed, id], (error, results) => {
        if (error) return callback(error);
        callback(null, results)
    });
};

// delete habit by ID
export const deleteHabitById = (id, callback) => {
    const query = 'DELETE FROM habits WHERE habits_id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

