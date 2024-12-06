/* eslint-disable react/prop-types */
import { useOutletContext } from "react-router-dom";
import Header from "../../components/Header";
import JournalForm from "../../components/journal/JournalForm";
import { Box } from "@chakra-ui/react";


function NewEntry({ handleSave }) {
    const theme =useOutletContext();
    return (
        <>
            <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="What's on your mind?" />
           <Box margin={10}>
           <JournalForm onSave={handleSave} theme={theme}/>
           </Box>
            
        </>
    )
};

export default NewEntry;