
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

router.get('/all-tasks', authenticateToken,  getTodosController);

router.get('/task/:id', authenticateToken,  getTodoByIdController);

router.put('/update-task/:id',  /*validateTodo, checkValidationResult,*/ authenticateToken, updateTodoController);

router.delete('/delete-task/:id', authenticateToken, deleteTodoByIdController);

// export router
export default router;