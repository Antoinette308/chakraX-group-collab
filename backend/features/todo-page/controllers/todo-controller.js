
/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */

// imports
import { createTodo, getTodos, getTodoById, updateTodoById, deleteTodoById } from "../models/todo-model.js";

// test welcome message
export const welcomeMessage = (req, res) => {
    res.send(`What's on the agenda?`);
}

// create a new todo
export const createTodoController = (req, res) => {
    console.log('Request body:', req.body);
    const todo = req.body;
    createTodo(todo, (error, results) => {
        if (error) {
            console.error('Error creating todo:', error);
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json(results);
    });
};

// read all todos by 
export const getTodosController = (req, res) => {
    const { id } = req.params;
    getTodos(id, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};

// read todo by ID
export const getTodoByIdController = (req, res) => {
    const { id } = req.params;
    // const readDataById = req.body;
    getTodoById(id, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};

// update todo by ID
export const updateTodoController = (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    updateTodoById(id, updateData, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    });
};

// delete todo by ID
export const deleteTodoByIdController = (req, res) => {
    const { id } = req.params;
    // const deleteData = req.body;
    deleteTodoById(id, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results);
    })
};