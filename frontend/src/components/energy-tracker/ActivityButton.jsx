/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { Rating } from "../ui/rating";
import { FaUtensilSpoon } from "react-icons/fa";


function ActivityButton(props){ 
    return (
    <Box width="125px" height={'125px'} bg="teal.500" borderRadius="20px" textAlign="center" alignContent={"center"} >
            <Text>{props.text}</Text>
            <Rating icon={<FaUtensilSpoon />} defaultValue={props.default} count="5"/> 

    </Box> )
}

export default ActivityButton;