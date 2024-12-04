import connection from "../../../config/database.js"

function getAllActivities(userId, response) {
    const query = "SELECT * FROM energy_activity WHERE userId = ?"
    connection.query(query, [userId], (err, results) => {
        if (err) {
            return response(err);
        }
        else {
            return response(null, results)
        }
    })
}

function createNewActivity(activityInfo, response) {
    const query = "INSERT INTO energy_activity (userId, name, spoons, isActive, activityId) VALUES (?, ?, ?, ?, ?)";
    connection.query(query, [activityInfo.userId, activityInfo.name, activityInfo.spoons, activityInfo.isActive, activityInfo.activityId], (err, results) => {
        return err ? response(err) : response(null, (results, activityInfo))
    });
}

function updateActivity(spoons, response) {
    const query = "UPDATE energy_activity SET spoons = ? WHERE entryId = ?"
    connection.query(query, [spoons], (err, results) => {
        return err ? response(err) : response(null, (results, entryInfo));
    });
}

function deleteActivity(activityId, response) {
    const query = "DELETE FROM energy_activity WHERE activityId = ?"
    connection.query(query, [activityId], (err, results) => {
        return err ? response(err) : response(null, (results, activityId));
    });
}


export default { getAllActivities, createNewActivity, updateActivity, deleteActivity };