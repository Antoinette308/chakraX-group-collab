
/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// imports
import express from 'express';
import { welcomeMessage } from '../controllers/todo-controller.js';
import { 
    createTodoController, 
    getTodosController, 
    getTodoByIdController, 
    updateTodoController, 
    deleteTodoByIdController 
} from '../controllers/todo-controller.js';
//import { validateTodo, checkValidationResult } from '../validators/todo-validator.js';
import { authenticateToken } from '../../authentication/middleware/auth-middleware.js';


// declare router
const router = express.Router();

// welcomeMessage test
router.get('/', welcomeMessage);
console.log(welcomeMessage);

// CRUD routes
router.post('/new-task', /*validateTodo, checkValidationResult,*/ authenticateToken, createTodoController);

router.get('/all-tasks/:id', /*authenticateToken,*/  getTodosController);

router.get('/task/:id', authenticateToken,  getTodoByIdController);

router.put('/update-task/:id',  /*validateTodo, checkValidationResult,*/ authenticateToken, updateTodoController);

router.delete('/delete-task/:id', authenticateToken, deleteTodoByIdController);

// My new code by Antoinette in this code block. I've added a new route with the endpoint to create a new task that works for the frontend, because I kept recieving errors before.
router.post('/new-task', (req, res) => { 
    const todo = req.body;
    createTodo(todo, (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json(result);
    });
});

// // My new code by Antoinette in this code block. I've added a new route with the endpoint to delete a todo by ID, because I keep recieving network errors.
// router.delete('/delete-task/:id', (req, res) => {
//     const { id } = req.params;
//     deleteTodoById(id, (error, result) => {
//         if (error) {
//             return res.status(500).json({ error: error.message });
//         }
//         res.status(200).json(result);
//     });
// });

export default router;