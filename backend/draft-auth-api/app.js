// const express = require('express')
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const { body, validationResult } = require('express-validator');
// // const mysql = require('mysql2');
// const users = require('./mockData');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cors());

// // const db = mysql.createConnection({
// //     host: process.env.DB_HOST,
// //     user: process.env.DB_USER,
// //     password: process.env.DB_PASS,
// //     database: process.env.DB_NAME
// // });

// // db.connect((err) => {
// //     if(err) {
// //         console.error('Database connection failed:', err.stack);
// //         return;
// //     }
// //     console.log('Connected to database');
// // });

// app.listen(PORT, () => {
//     console.log(`Server successfully connected to Port ${PORT}`);
// });

// app.get('/accounts', (req, res) => {
//     res.status(200).json({message: 'Authentication API'});
// });

// /* ===========================================================================
//                         REGISTRATION ENDPOINT
// =========================================================================== */
// /* TODO:
// post to /register
// username input
// email input
// password input
// handle error
// encrypt password with bcrypt
// handle successful registration
// */

// /* ===========================================================================
//                         LOGIN ENDPOINT
// =========================================================================== */
// /* TODO:
// post to /login
// username input
// password input
// handle empty fields 
// check credentials with bcrypt
// give user token 
// */

// /* ===========================================================================
//                         MIDDLEWARE FUNCTION
// =========================================================================== */


// /* ===========================================================================
//                         PROTECTED ENDPOINTS
// =========================================================================== */


// module.exports = app;