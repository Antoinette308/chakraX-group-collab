import Header from "../components/Header"
import { Box, Text } from "@chakra-ui/react";
import { useOutletContext } from "react-router-dom";

function Test(){

const theme= useOutletContext()


    return (
        <Box height="100%" bg={theme.pageBg}>
        <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="Hello World"/>
        <Text textAlign={"center"} fontSize={20}>Hello There. How nice to see you</Text>

    </Box>
)
}

export default Test;