/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// import { createConnection } from 'mysql2';
// import dotenv from "dotenv";

const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// const connection = createConnection({


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(error => {
    if (error) throw error;
    console.log('Database connected successfully')
});

/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// export default connection;

module.exports = connection;