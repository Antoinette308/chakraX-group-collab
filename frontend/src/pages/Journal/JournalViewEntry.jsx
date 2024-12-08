
import { useParams, useLocation } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useOutletContext } from "react-router-dom";
// import { useEffect } from "react";

function ViewEntry() {
    const { id } = useParams();
    console.log("Currently viewing entry: ", id)
    const location = useLocation();
    const theme= useOutletContext()

    return (
        <>
            <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text={location.state.entry.title} />
                <Box margin={10}>
                    <Text>{location.state.entry.entry}</Text>
                </Box> 
        </>
    );
}

export default ViewEntry;