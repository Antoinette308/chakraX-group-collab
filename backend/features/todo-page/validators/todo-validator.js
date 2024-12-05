
import { check, validationResult } from 'express-validator';

export const validateTodo = [
    check('tasks')
        .notEmpty()
        .withMessage('A task is required')
        .isLength({ min: 3 })
        .withMessage('Your task needs to be at least 3 characters long')
        .isString()
        .withMessage('Your task must be a string'),
    check('completed')
        .isBoolean()
        .withMessage('Must be either True or False')
];

export const checkValidationResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('Validation errors:', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}