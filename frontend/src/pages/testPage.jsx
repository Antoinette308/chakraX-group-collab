import Header from "../components/Header"
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useOutletContext } from "react-router-dom";

function Test(){

const theme= useOutletContext()


    return (
        <GridItem height="100%" bg={theme.pageBg}>
        <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="Hello World"/>
        <Text textAlign={"center"} fontSize={20}>Hello There. How nice to see you</Text>

    </GridItem>
)
}

export default Test;