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
export const getHabitById = (req, res) => {
    const { id } = req.params;
    getHabitById(id, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};

// update habit by ID


// delete habit by ID


