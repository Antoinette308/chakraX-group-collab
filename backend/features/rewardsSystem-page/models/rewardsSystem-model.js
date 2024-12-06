import connection from '../../../config/database.js';
import dotenv from 'dotenv';

dotenv.config();

// handle user rewards
/* 
this will need:
First model to have a select all using user id as a WHERE clause
Second model to insert data into the table
*/

// handle daily login
/*
this will need:
First model to select all using user id as a WHERE clause
Second model to update using user id as a WHERE clause
*/