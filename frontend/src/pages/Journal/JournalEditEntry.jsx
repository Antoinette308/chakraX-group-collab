import Header from "../../components/Header";
import JournalForm from "../../components/journal/JournalForm";
import { useParams, useLocation, useOutletContext} from "react-router-dom";
import { Box } from "@chakra-ui/react";

function EditEntry({handleUpdate }) {
    const { id } = useParams();
    console.log("Currently editing entry: ", id)
    const location = useLocation();
    const theme = useOutletContext();
    const entry = location.state?.entry || null; 
    console.log("Current entry details: ", entry)

    return (
        <>
            <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="What was on your mind?" />
            <Box margin={10}>
            <JournalForm entry={entry} onUpdate={handleUpdate} />
            </Box>
           
        </>
    )
};

export default EditEntry;