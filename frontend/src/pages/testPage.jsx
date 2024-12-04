import { SimpleGrid } from "@chakra-ui/react";
import Header from "../components/Header";
import JournalCard from "../components/JournalPreview";
import AddNewButton from "../components/AddNewEntry";
import { useEffect, useState } from "react";

function Test() {
    const [entries, setEntries] = useState([]);

    async function getJournals() {
        const userId = "1"
        console.log("calling API")
        const url = `http://localhost:3000/journal/${userId}`
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        
        console.log(json);
        return json;
        } catch (error) {
        console.error(error.message);
        }
    }


    useEffect(() => {
        // Simulated fetch (replace with actual API call)
        // const mockEntries = [
        //     { id: 1, title: "First Entry", text: "This is the first journal entry." },
        //     { id: 2, title: "Second Entry", text: "This is the second journal entry." },
        //     { id: 3, title: "Third Entry", text: "This is the third journal entry." }
        // ];
        // setEntries(mockEntries); 
        getJournals().then((res) => {
        setEntries(res);
        })
    
    }, []);

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="My Entries" />
            <SimpleGrid columns={[1, 2, 3]} spacing="10px" p="4">
                {entries.map((entry) => (
                    <JournalCard key={entry.entryId} entry={entry} />
                ))}
            </SimpleGrid>
            <AddNewButton />
        </>
    );
};

export default Test;