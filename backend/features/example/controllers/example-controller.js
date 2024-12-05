
import connection from "../../../config/database.js";

// example welcome message
export const welcomeMessage = (req, res) => {
    res.send("This is an example!");
}

// now do the CRUD controllers