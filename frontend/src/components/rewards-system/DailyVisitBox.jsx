/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";

function DailyVisitBox(props){
    return (
        <Box bg={props.theme.accentColor} width="150px" height="150px" borderRadius={"25px"} textAlign={"center"}>
            <Text bg={props.theme.sideBarBg} 
            borderRadius={"25px 25px 0 0"} 
            height="2em" padding=".5em" 
            textStyle="xl" fontWeight={"bold"} 
            color={props.theme.ButtonColor} boxShadow={"sm"}>{props.text}</Text>
        </Box>
    )
}

export default DailyVisitBox;