import express from "express";
import controller from "../controllers/energy-controllers.js"

const router = express.Router();

//get all the activities for the user, displayed on the main page
router.get("/", controller.getAllActivities)

//create a new activity using activity info, ie name and spoons
router.post("/", controller.createNewActivity)

// update the spoon count of an activity
router.put("/:id", controller.updateActivity)

//delete a current activity using the activityId
router.delete("/:id", controller.deleteActivity)

export default router;