/* eslint-disable react/prop-types */

import { useParams, useNavigate, useLocation} from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { useEffect } from "react";

function ViewEntry({ entries }) {
    const { id } = useParams();
    console.log(id)
    const location = useLocation();
    const entry = entries.find((e) => e.id === id);
    console.log(entry)

    // if (!entry) {
    //     setTimeout(() => navigate("/journal"), 3000);
    //     return (
    //         <Box>
    //             <Text>Entry not found.</Text>
    //         </Box>
    //     );
    // }

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="What was on your mind?" />
            <Box>
                <h1> {location.state.entry.title} </h1>
                <Text> {location.state.entry.text} </Text>
            </Box>
        </>
    );


}

export default ViewEntry;