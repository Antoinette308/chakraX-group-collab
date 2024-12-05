import { check, validationResult } from 'express-validator';

export const validateUser = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email'),
    check('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
];

export const validateUpdateUser = [
    check('email')
        .optional()
        .isEmail()
        .withMessage('Must be a valid email')
];

export const validateResetPassword = [
    check('token')
        .notEmpty()
        .withMessage('Token is required'),
    check('newPassword')
        .isLength({ min: 8 })
        .withMessage('New password must be at least 8 characters long')
];

export const checkValidationResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('Validation errors:', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}