
import { useParams, useLocation } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";
// import { useEffect } from "react";

function ViewEntry() {
    const { id } = useParams();
    console.log("Currently viewing entry: ", id)
    const location = useLocation();


    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text={location.state.entry.title} />
                <Box margin={10}>
                    <Text>{location.state.entry.text}</Text>
                </Box> 
        </>
    );


}

export default ViewEntry;