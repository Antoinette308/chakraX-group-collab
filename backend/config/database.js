/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import { createConnection } from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(error => {
    if (error) throw error;
    console.log('Database connected successfully')
});

export default connection;