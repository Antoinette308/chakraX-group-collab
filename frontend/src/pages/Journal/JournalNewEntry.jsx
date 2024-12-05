/* eslint-disable react/prop-types */
import Header from "../components/Header";
import JournalForm from "../components/journal/JournalForm";
import { Box } from "@chakra-ui/react";


function NewEntry({ handleSave }) {

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="What's on your mind?" />
           <Box margin={10}>
           <JournalForm onSave={handleSave} />
           </Box>
            
        </>
    )
};

export default NewEntry;