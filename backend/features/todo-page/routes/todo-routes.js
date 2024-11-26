
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
// import { validateTodo, checkValidationResult } from '../validators/todo-validator.js';


// declare router
const router = express.Router();

// welcomeMessage test
router.get('/', welcomeMessage);
console.log(welcomeMessage);

// CRUD routes
router.post('/new-task', createTodoController); //validateTodo, checkValidationResult,

router.get('/all-tasks', getTodosController);

router.get('/task/:id', getTodoByIdController);

router.put('/update-task/:id', updateTodoController); // validateTodo, checkValidationResult, 

router.delete('/delete-task/:id', deleteTodoByIdController);

// export router
export default router;