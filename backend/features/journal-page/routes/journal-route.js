import express from "express";
import controller from "../controllers/journal-controllers.js"
import { authenticateToken } from "../../authentication/middleware/auth-middleware.js";


const router = express.Router();

//This will get journal entries based off of user id
//There needs to be some way to get the user id to the backend whenever routes are called
router.get("/:id", authenticateToken, controller.getJournalEntries);


//This will create a new journal for the user 
router.post("/new-entry", authenticateToken, controller.createJournalEntry);


//This will update journal entry using the entry id 
router.put("/", authenticateToken, controller.updateJournalEntry);


//This will delete journal entry using the entry id 
router.delete("/:id", authenticateToken, controller.deleteJournalEntry);


export default router;