/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// import db connection
import connection from "../../../config/database.js";
// import { format  } from "date-fns";

// create new habit
/* 
export const createHabit = (habit, callback) => {
    const query = 'INSERT INTO habits (user_id, habit_name, description, frequency, recurrence, start_date, last_completed) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [habit.user_id, habit.habit_name, habit.description, habit.frequency, habit.recurrence, habit.start_date, habit.last_completed], (error, results) => {
        if (error) return callback(error);
        const formattedHabit = {
            id: results.insertId,
            ...habit,
            start_date: format(new Date(habit.start_date), 'yyyy-MM-dd')
        };
        callback(null, formattedHabit);
    });
}; 
*/

export const createHabit = (habit, callback) => {
    const query = 'INSERT INTO habits (user_id, habit_name, colour, frequency, unit, monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const values = [
        habit.user_id,
        habit.habit_name,
        habit.colour,
        habit.frequency,
        habit.unit,
        habit.monday || false,
        habit.tuesday || false,
        habit.wednesday || false,
        habit.thursday || false,
        habit.friday || false,
        habit.saturday || false,
        habit.sunday || false
    ];

    connection.query(query,[...values], (error, results) => {
        if (error) return callback(error);
        const formattedHabit = {
            habits_id: results.insertId,
            ...habit
        };
        console.log(formattedHabit)
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
export const getAllHabits = (id, callback) => {
    const query = 'SELECT * FROM habits WHERE user_id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) return callback (error);
        callback(null, results);
    });
};

// update habit by ID
/* 
export const updateHabitById = (id, updatedHabit, callback) => {
     const query = 'UPDATE habits SET habit_name = ?, description = ?, frequency = ?, recurrence = ?, start_date = ?, last_completed = ? WHERE habits_id = ?';
     connection.query(query, [updatedHabit.habit_name, updatedHabit.description, updatedHabit.frequency, updatedHabit.recurrence, updatedHabit.start_date, updatedHabit.last_completed, id], (error, results) => {
         if (error) return callback(error);
         callback(null, results)
    });
 }; 
 */

export const updateHabitById = (habits_id, updatedHabit, callback) => {
    const query = 'UPDATE habits SET monday = ?, tuesday = ?, wednesday = ?, thursday = ?, friday = ?, saturday = ?, sunday = ? WHERE habits_id = ?';
    const values = [
        updatedHabit.monday ? 1 : 0,
        updatedHabit.tuesday ? 1 : 0,
        updatedHabit.wednesday ? 1 : 0,
        updatedHabit.thursday ? 1 : 0,
        updatedHabit.friday ? 1 : 0,
        updatedHabit.saturday ? 1 : 0,
        updatedHabit.sunday ? 1 : 0,
        habits_id,
    ];

    connection.query(query, values, (error, results) => {
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

