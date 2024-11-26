import { SimpleGrid } from "@chakra-ui/react";
import Header from "../components/Header";
import JournalCard from "../components/JournalPreview";
import AddNewButton from "../components/AddNewEntry";
import { useEffect, useState } from "react";

function AllEntries() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Simulated fetch (replace with actual API call)
        const mockEntries = [
            { id: 1, title: "First Entry", text: "This is the first journal entry." },
            { id: 2, title: "Second Entry", text: "This is the second journal entry." },
            { id: 3, title: "Third Entry", text: "This is the third journal entry." }
        ];
        setEntries(mockEntries); 
    }, []);

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="My Entries" />
            <SimpleGrid columns={[1, 2, 3]} spacing="10px" p="4">
                {entries.map((entry) => (
                    <JournalCard key={entry.id} entry={entry} />
                ))}
            </SimpleGrid>
            <AddNewButton />
        </>
    );
};

export default AllEntries;