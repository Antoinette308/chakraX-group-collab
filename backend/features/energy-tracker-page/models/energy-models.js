import connection from "../../../config/database.js"

function getAllActivities(userId, response) {
    const query = "SELECT * FROM energy_activity WHERE user_id = ?"
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
    const query = "INSERT INTO energy_activity (user_id, name, spoons, is_active) VALUES (?, ?, ?, ?)"; // , activity_id , ?
    connection.query(query, [activityInfo.user_id, activityInfo.name, activityInfo.spoons, activityInfo.is_active/*, activityInfo.activity_id*/], (err, results) => {
        if (err) return response(err);
        const formattedEnergy = {
            activity_id: results.insertId,
            ...activityInfo
        };
        response(null, formattedEnergy);
    });
    };


function updateActivity(activityId, activityInfo, response) {
    const query = "UPDATE energy_activity SET user_id = ?, spoons = ?, name = ?, is_active = ? WHERE activity_id = ?"
    connection.query(query, [activityInfo.user_id, activityInfo.spoons, activityInfo.name, activityInfo.is_active, activityId], (err, results) => {
        return err ? response(err) : response(null, (results, activityInfo));
    });
}

function deleteActivity(activityId, response) {
    const query = "DELETE FROM energy_activity WHERE activity_id = ?"
    connection.query(query, [activityId], (err, results) => {
        return err ? response(err) : response(null, (results, activityId));
    });
}


export default { getAllActivities, createNewActivity, updateActivity, deleteActivity };