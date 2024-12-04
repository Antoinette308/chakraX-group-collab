import models from "../models/journal-models.js"

function getJournalEntries(req, res){
    //Get the journal entries from the backend to be used in the rendering
    const userId = req.params.id;
    models.getAllEntries(userId, (err, results) => {
        if(err) { 
            console.log("Error getting journal entries", err)
            res.status(500).json({error : err.message})
        } else {
            console.log(results)
            res.status(200).json(results);
        }
    })
}

function createJournalEntry(req, res){
    //Create a journal entry in the database using info sent from the frontend
    const entryInfo = req.body
    models.createNewEntry(entryInfo, (err, results) => {
        if(err) {
            console.log("Error creating journal entry", err);
            res.status(500).json({error : err.message});
        } else {
            res.status(201).json(results);
        }
    })
}

function updateJournalEntry(req, res){
    //Update the journal entry using the id number of the entry being changed. 
    const entryInfo = req.body;
    models.updateJournalEntry(entryInfo, (err, results) => {
        if(err){
            console.log("Error updating journal entry", err);
            res.status(500).json({error: err.message});
        } else {
            res.status(200).json(results);
        }
    })
}

function deleteJournalEntry(req, res){
    //Delete the journal entry from the database using the id of the entry
    const {entryId} = req.body;
    models.deleteJournalEntry(entryId, (err, results) => {
        if(err){
            console.log("Error deleting journal entry", err);
            res.status(500).json({error: err.message});
        } else {
            res.status(200).json({deleted: results});
        }
    })
}


export default {getJournalEntries, createJournalEntry, updateJournalEntry, deleteJournalEntry}
