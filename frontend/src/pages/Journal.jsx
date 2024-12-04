import { SimpleGrid } from "@chakra-ui/react";
import Header from "../components/Header";
import JournalCard from "../components/JournalCard";
import { useEffect, useState } from "react";
import AddNewEntry from "../components/AddNewEntry";
import { useNavigate } from "react-router-dom";

// Keely-Ann notes: gathering the AddNewEntry component and the JournalCard component together.
function Journal() {
    const [entries, setEntries] = useState([]);
    // editing and updating entries

    const handleEdit = (entry) => {
        navigate(`/journal/edit/${entry.id}`);
    };

    // Deleting an entry 
    const handleDelete = (id) => {
        setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
    };

    // Simulated fetch (replace with actual API call)
    useEffect(() => {
        const mockEntries = [
            { id: 1, title: "First Entry", text: "This is the first journal entry." },
            { id: 2, title: "Second Entry", text: "This is the second journal entry." },
            { id: 3, title: "Third Entry", text: "This is the third journal entry." },
        ];
        setEntries(mockEntries);
    }, []);

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="My Entries" />
            <SimpleGrid columns={[1, 2, 3]} spacing="10px" p="4">
                {entries.map((entry) => (
                    <JournalCard
                        key={entry.id}
                        entry={entry}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </SimpleGrid>
            <AddNewEntry />
        </>
    );
};

export default Journal;