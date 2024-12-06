import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import JournalCard from "../../components/journal/JournalCard";
import AddNewEntry from "../../components/journal/AddNewEntry";
import { useOutletContext } from "react-router-dom";

// Keely-Ann notes: gathering the AddNewEntry component and the JournalCard component together.
function Journal() {
    const [entries, setEntries] = useState([]);
    const theme= useOutletContext()
    // Deleting an entry 
    const handleDelete = (id) => {
        setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
    };

    /* Simulated fetch (replace with actual API call)
    useEffect(() => {
        const mockEntries = [
            { id: 1, title: "First Entry", text: "This is the first journal entry." },
            { id: 2, title: "Second Entry", text: "This is the second journal entry." },
            { id: 3, title: "Third Entry", text: "This is the third journal entry." },
        ];
        setEntries(mockEntries);
    }, []); */
    
    return (
        <>
            <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="My Entries" />
            <SimpleGrid columns={[1, 2, 3]} spacing="10px" p="4">
                {entries.length > 0 ? ( entries.map((entry) => (
                <JournalCard
                    key={entry.id}
                    entries={entries}
                    entry={entry}
                    onDelete={handleDelete}
                />
            ))
        ) : (
            <p>No entries available.</p>
        )}
            </SimpleGrid>
            <AddNewEntry colorPalette={theme.pageButtons}/>
        </>
    );
};

export default Journal;
