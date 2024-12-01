/* eslint-disable react/prop-types */
import { Box, Collapsible, Text } from "@chakra-ui/react";

function Instructions(props){
    return ( 
    <Box bg={"teal.500"} borderRadius={"25px"}
    flexBasis={"50%"} textAlign={"center"} 
    minWidth={"200px"} maxWidth={"450px"}>
    {props.isMobile ? 
        <Collapsible.Root>
            <Collapsible.Trigger textStyle="2xl">
                Start With 12 Spoons A Day 
            </Collapsible.Trigger>
            <Collapsible.Content> 
                <Text>
                    Take away 1 spoon if you didn&apos;t sleep well, 
                    forgot meds, or skipped a meal. Take 4 spoons away if you have a cold.
                </Text>
            </Collapsible.Content> 
        </Collapsible.Root>
    : <>
        <Text textStyle="2xl" padding="20px">
            Start with 12 Spoons Each Day
        </Text>
        <Text>
            Take away 1 spoon if you didn&apos;t sleep well, forgot meds, or skipped a meal. Take 4 spoons away if you have a cold.
        </Text>
        </> }
    </Box>)
}

export default Instructions;