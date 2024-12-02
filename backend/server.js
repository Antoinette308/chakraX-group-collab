//This is the entry point for the server
/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import app from './app.js'
import dotenv from 'dotenv'; // Import dotenv to access environment variables

dotenv.config(); // Initialize dotenv

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server successfully running on port ${PORT}`)
});