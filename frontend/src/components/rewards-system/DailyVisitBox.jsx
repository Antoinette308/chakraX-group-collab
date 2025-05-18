/* eslint-disable react/prop-types */
import { Box, Center, Icon, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";


function DailyVisitBox(props){
    if(props.isChecked){
    return (
        <Box bg={props.theme.navButtonBg} width="150px" height="150px" borderRadius={"25px"} textAlign={"center"}>
            <Text bg={props.theme.sideBarBg} 
            borderRadius={"25px 25px 0 0"} 
            height="2em" padding=".5em" 
            textStyle="xl" fontWeight={"bold"} 
            color={props.theme.ButtonColor} boxShadow={"sm"}>{props.text}</Text>
            <Center margin={"5px"}>
                <Icon size={"6xl"} height="100px" color={props.theme.accentColor}>
                <FaCheckCircle/>
                </Icon>
            </Center>
        </Box>
    )
} else {
    return (
        <Box bg={props.theme.navButtonBg} width="150px" height="150px" borderRadius={"25px"} textAlign={"center"}>
            <Text bg={props.theme.sideBarBg} 
            borderRadius={"25px 25px 0 0"} 
            height="2em" padding=".5em" 
            textStyle="xl" fontWeight={"bold"} 
            color={props.theme.ButtonColor} boxShadow={"sm"}>{props.text}</Text>
        </Box>
    )
}
}

export default DailyVisitBox;