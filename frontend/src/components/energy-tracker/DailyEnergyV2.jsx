/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import { StatLabel, StatRoot, StatValueText } from "../ui/stat"


function DailyEnergyV2(props){
return ( 
    <Box width="150px" height="175px;" bg="teal.500" borderRadius="25px" textAlign={"center"} color={"white"}>
        <StatRoot alignItems="center" padding="20px" size="lg">
            <StatLabel color="white"> Your Daily Spoons </StatLabel>
            <StatValueText textAlign="center">{props.value} </StatValueText>
        </StatRoot>
    </Box>
    )
}

export default DailyEnergyV2;