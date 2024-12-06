
// import { check, validationResult } from 'express-validator';

// export const validateHabit = [
//     check('habit')
//         .notEmpty()
//         .withMessage('A title is required for your new habit')
//         .isString()
//         .withMessage('The habit title must be a string'),
//     check('frequency')
//         .notEmpty()
//         .withMessage('Frequency is required')
//         .isInt()
//         .withMessage('Frequency must be a number'),
//     check('recurrence')
//         .notEmpty()
//         .withMessage('Recurrence is required')
//         .isIn(['daily', 'weekly', 'monthly', 'yearly'])
//         .withMessage('Recurrence must be: daily, weekly, monthly or yearly'),
//     check('start_date')
//         .notEmpty()
//         .withMessage('Start date is required')
//         .isISO8601()
//         .toDate()
//         .withMessage('Start date must be YYYY-MM-DD'),
//     check('last_completed')
//         .optional()
//         .isISO8601()
//         .toDate()
//         .withMessage('Last completed date must be YYYY-MM-DD')
// ];

//export const checkValidationResult = (req, res, next) => {
  //  const errors = validationResult(req);
    //if (!errors.isEmpty()) {
      //  console.log('Validation Errors:', errors.array());
        //return res.status(400).json({ errors: errors.array() });
    //}
    //next(); 
//};