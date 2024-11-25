import express from "express";
import controller from "../controllers/journal.controllers.js"
const router = express.Router();

//This will get journal entries based off of user id
//There needs to be some way to get the user id to the backend whenever routes are called
router.get("/", controllers.getJournalEntries)


//This will create a new journal for the user 
router.post("/", controller.createJournalEntry)


//This will update journal entry using the entry id 
router.put("/:id", controller.updateJournalEntry)


//This will delete journal entry using the entry id 
router.delete("/:id", controller.deleteJournalEntry)


export default router;