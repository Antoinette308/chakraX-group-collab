import connection from "../../../config/database.js"

function getAllEntries(userId, response){
    const query = "SELECT * FROM journal WHERE userId = ?"
    connection.query(query, [userId], (err, results) => {
        if(err) {
            return response(err);
        }
        else {
            return response(null, results)
        }
    })
}

function createNewEntry(entryInfo, response){
    const query = "INSERT INTO journal (title, entry, userId) VALUES (?, ?, ?)";
    connection.query(query, [entryInfo.title, entryInfo.entry, entryInfo.userId], (err, results) => {
        return  err ? response(err) : response(null, (results.insertId, entryInfo))
    });
}

function updateJournalEntry(entryInfo, response){
    const query = "UPDATE journal SET title = ?, entry = ? WHERE entryId = ?"
    connection.query(query, [entryInfo.title, entryInfo.entry, entryInfo.entryId], (err, results) => {
        return err ? response(err) : response(null, (results, entryInfo));
    });
}

function deleteJournalEntry(entryId, response){
    const query = "DELETE FROM journal WHERE entryId = ?";
    connection.query(query, [entryId], (err, results) => {
        return err ? response(err) : response(null, (results, entryId));
    })
}

export default {getAllEntries, createNewEntry, updateJournalEntry, deleteJournalEntry};