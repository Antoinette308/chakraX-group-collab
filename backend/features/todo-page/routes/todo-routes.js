
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
import { authenticateToken } from '../../authentication/middleware/auth-middleware.js';


// declare router
const router = express.Router();

// welcomeMessage test
router.get('/', welcomeMessage);
console.log(welcomeMessage);

// CRUD routes
router.post('/new-task', authenticateToken, createTodoController);

router.get('/all-tasks/:id', authenticateToken,  getTodosController);

router.get('/task/:id', authenticateToken,  getTodoByIdController);

router.put('/update-task/:id', authenticateToken, updateTodoController);

router.delete('/delete-task/:id', authenticateToken, deleteTodoByIdController);

export default router;