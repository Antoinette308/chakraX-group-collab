import models from "../models/energy-models.js"

function getAllActivities(req, res) {
    // Get all activities used in the energy tracker
    const { userId } = req.body;
    models.getAllActivities(userId, (err, results) => {
        if (err) {
            console.log("Error getting all activities", err)
            res.status(500).json({ error: err.message })
        } else {
            res.status(200).json(results);
        }
    })
}

function createNewActivity(req, red) {
    //Create a new activity using information inputted in the back-end
    const activityInfo = req.body;
    models.createNewEntry(activityInfo, (err, results) => {
        if (err) {
            console.log("Error adding new activity", err);
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(results);
        }
    })
}

function updateActivity(req, res) {
    // Update the energy for an activity based on it's spoon count
    const spoons = req.body;
    models.updateActivity(spoons, (err, results) => {
        if (err) {
            console.log("Error update the spoon count", err);
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(results);
        }
    })
}

function deleteActivity(req, res) {
    // Delete an activity using the activity's id
    const activityId = req.body;
    models.deleteActivity(activityId, (err, results) => {
        if (err) {
            console.log("Error deleting this activity", err);
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(results);
        }
    })
}

export default { getAllActivities, createNewActivity, updateActivity, deleteActivity }