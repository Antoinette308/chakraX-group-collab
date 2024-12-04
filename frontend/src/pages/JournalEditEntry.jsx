import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditEntry(entries, handleUpdate) {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);

    // update new entry 
    useEffect(() => {
        const foundEntry = entries.find((e) => e.id === parseInt(id, 10));
        setEntry(foundEntry);
    }, [id, entries]);

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="What's on your  mind?" />
            {entry}
        </>
    )
};

export default EditEntry;