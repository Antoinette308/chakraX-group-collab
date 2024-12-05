/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// import db connection
import connection from "../../../config/database.js";

// use todo/feature name declared in routes || const featureName = req.body || and callback instead of req res because it allows for the implementation of mock data etc if necessary

// Create new todo
export const createTodo = (todo, callback) => {
    const query = 'INSERT INTO todos (tasks, completed) VALUES (?, ?)';
    connection.query(query, [todo.tasks, todo.completed], (error, results) => {
        if (error) return callback(error);
        callback(null, { id: results.insertId, ...todo });
    });
};

// Read all todos
export const getTodos = (callback) => {
    const query = 'SELECT * FROM todos';
    connection.query(query, (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

// Read todo by ID
export const getTodoById = (id, callback) => {
    const query = 'SELECT * FROM todos WHERE todo_id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) return callback(error);
        callback(null, results[0]);
    });
};

// Update a todo by ID
export const updateTodoById = (id, updatedTodo, callback) => {
    const query = 'UPDATE todos SET tasks = ?, completed = ? WHERE todo_id = ?';
    connection.query(query, [updatedTodo.tasks, updatedTodo.completed, id], (error, results) => {
        if (error) return callback(error);
        callback(null, results)
    });
};

// Delete a todo by ID
export const deleteTodoById = (id, callback) => {
    const query = 'DELETE FROM todos WHERE todo_id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};