/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// import db connection
import connection from "../../../config/database.js";
import { format  } from "date-fns";

// create new habit
export const createHabit = (habit, callback) => {
    const query = 'INSERT INTO habits (habit, frequency, recurrence, monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [habit.habit, habit.description, habit.frequency, habit.recurrence, habit.monday, habit.tuesday, habit.wednesday, habit.thursday, habit.friday, habit.saturday, habit.sunday], (error, results) => {
        if (error) return callback(error);
        const formattedHabit = {
            id: results.insertId,
            ...habit
            // start_date: format(new Date(habit.start_date), 'yyyy-MM-dd')
        };
        callback(null, formattedHabit);
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
    const query = 'UPDATE habits SET habit = ?, frequency = ?, recurrence = ?, monday = ?, tuesday = ?, wednesday = ?, thursday = ?, friday = ?, saturday = ?, sunday = ?, WHERE id = ?';
    connection.query(query, [updatedHabit.habit_name, updatedHabit.description, updatedHabit.frequency, updatedHabit.recurrence, updatedHabit.monday, updatedHabit.tuesday, updatedHabit.wednesday, updatedHabit.thursday, updatedHabit.friday, updatedHabit.saturday, updatedHabit.sunday, id], (error, results) => {
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

