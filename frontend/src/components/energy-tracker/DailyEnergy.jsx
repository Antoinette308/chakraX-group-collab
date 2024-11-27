/* eslint-disable react/prop-types */
"use client"

import { Box, Text } from "@chakra-ui/react";
import { NumberInputField, NumberInputRoot } from "../ui/number-input";
import {StepperInput} from "../ui/stepper-input"

function DailyEnergy(props){
    
    return (
        <Box width="150px" height="175px;" bg="teal.500" borderRadius="25px" textAlign={"center"}>
            <Text textAlign={"center"} padding="20px"textStyle={"lg"} fontWeight={"bold"}>Available Spoons</Text>
            { props.isMobile ? <StepperInput onValueChange={props.onValueChange} value={props.spoons}/> : 
            <NumberInputRoot maxW="100px"value={props.spoons} onValueChange={props.onValueChange} margin="auto">
                <NumberInputField/>
            </NumberInputRoot> }
        </Box>
    )  
    
}

export default DailyEnergy;