// imports
/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import { Router } from 'express';
import { welcomeMessage } from '../controllers/todo-controller.js';

// declare router
const router = express.Router();

// welcomeMessage test
router.get('/', welcomeMessage);

// Create new todo

// Read all todos

// Update a todo by ID

// Delete a todo by ID

// export router
export default router;