import Header from "../components/Header";
import JournalForm from "../components/journal/JournalForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditEntry({ entries, handleUpdate }) {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);

    // update new entry 
    useEffect(() => {
        const foundEntry = entries.find((e) => e.id === parseInt(id, 10));
        setEntry(foundEntry);
    }, [id, entries]);

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="What was on your mind?" />
            <JournalForm entry={entries} onUpdate={handleUpdate} />
        </>
    )
};

export default EditEntry;