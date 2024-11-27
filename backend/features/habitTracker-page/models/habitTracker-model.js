/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// import db connection
import connection from "../../../config/database.js";

// create new habit
export const createHabit = (habit, callback) => {
    const query = 'INSERT INTO habits (habit_name, description, frequency, recurrence, start_date, last_completed) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [habit.habit_name, habit.description, habit.frequency, habit.reccurrence, habit.start_date, habit.last_completed], (error, results) => {
        if (error) return callback(error);
        callback(null, { id: results.insertId, ...habit});
    });
};

// read habit by ID
export const getHabitById = (id, callback) => {
    const query = 'SELECT * FROM habits WHERE id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) return callback(error);
        callback(null, results[0]);
    });
};

// update habit by ID
export const updateHabitById = (id, updatedHabit, callback) => {
    const query = 'UPDATE habits SET habit_name = ?, description = ?, frequency = ?, reccurence = ?, start_date = ?, last_completed = ? WHERE id = ?';
    connection.query(query, [updatedHabit.habit_name, updatedHabit.description, updatedHabit.frequency, updatedHabit.reccurence, updatedHabit.start_date, updatedHabit.last_completed, id], (error, results) => {
        if (error) return callback(error);
        callback(null, results)
    });
};

// delete habit by ID
export const deleteHabitById = (id, callback) => {
    const query = 'DELETE FROM habits WHERE id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

