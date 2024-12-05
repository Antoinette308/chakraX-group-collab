import Header from "../components/Header";
import JournalForm from "../components/journal/JournalForm";
import { useParams, useLocation} from "react-router-dom";
import { Box } from "@chakra-ui/react";

function EditEntry({handleUpdate }) {
    const { id } = useParams();
    console.log("Currently editing entry: ", id)
    const location = useLocation();
    const entry = location.state?.entry || null; 
    console.log("Current entry details: ", entry)

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="What was on your mind?" />
            <Box margin={10}>
            <JournalForm entry={entry} onUpdate={handleUpdate} />
            </Box>
           
        </>
    )
};

export default EditEntry;