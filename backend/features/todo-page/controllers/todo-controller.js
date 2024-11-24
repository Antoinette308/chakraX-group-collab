console.log("CG Start");

/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
// import db connection
// import connection from "../../../config/database.js";

const connection = require('../../../config/database.js')

// test welcome message
// export < ES6 syntax 
const welcomeMessage = (req, res) => {
    res.send(`What's on the agenda?`);
}

// Create new todo

// Read all todos

// Update a todo by ID

// Delete a todo by ID

module.exports = { welcomeMessage };

console.log("CG finish");