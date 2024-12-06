import Header from "../../components/Header";
import JournalForm from "../../components/journal/JournalForm";
import { useParams, useLocation, useOutletContext, useNavigate} from "react-router-dom";
import { Box } from "@chakra-ui/react";

function EditEntry() {
    const { id } = useParams();
    console.log("Currently editing entry: ", id)
    const location = useLocation();
    const theme = useOutletContext();
    const entry = location.state?.entry || null; 
    console.log("Current entry details: ", entry)
    const navigate = useNavigate();

    async function handleUpdate (updatedEntry){
        const url = `http://localhost:3000/journal/`
        try{
            const response = await fetch(url, {
                method: "PUT",
            body: JSON.stringify({
                user_id: updatedEntry.user,
                title: updatedEntry.title,
                entry: updatedEntry.text,
                entry_id: id
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(!response.ok){
            throw new Error(`Response Status: ${response.status}`)
        }
        const json = await response.json()
            console.log(json)
            return json;
        }
        catch(err){
            console.error(err.message);
        }
    };

    return (
        <>
            <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="What was on your mind?" />
            <Box margin={10}>
            <JournalForm entry={entry} onUpdate={() =>{handleUpdate; navigate("/journal")}} theme={theme}/>
            </Box>
        </>
    )
};

export default EditEntry;