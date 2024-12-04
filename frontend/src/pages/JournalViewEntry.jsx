
import { useParams, useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";

function ViewEntry({ entries }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const entry = entries.find((e) => e.id === parseInt(id, 10));

    if (!entry) {
        setTimeout(() => navigate("/journal"), 3000);
        return (
            <Box>
                <Text>Entry not found.</Text>
            </Box>
        );
    }

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text={entry.title} />
            <Box>
                <Text>{entry.text}</Text>
            </Box>
        </>
    );


}

export default ViewEntry;