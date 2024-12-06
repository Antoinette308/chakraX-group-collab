import express from "express";
import controller from "../controllers/energy-controllers.js";
import { authenticateToken } from "../../authentication/middleware/auth-middleware.js";

const router = express.Router();

//get all the activities for the user, displayed on the main page
router.get("/:id", authenticateToken, controller.getAllActivities)

//create a new activity using activity info, ie name and spoons
router.post("/", authenticateToken, controller.createNewActivity)

// update the spoon count of an activity
router.put("/:id", /*authenticateToken,*/ controller.updateActivity)

//delete a current activity using the activityId
router.delete("/:id", authenticateToken, controller.deleteActivity)

export default router;