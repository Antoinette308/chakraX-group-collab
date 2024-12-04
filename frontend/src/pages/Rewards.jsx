import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import { useOutletContext } from "react-router-dom";
import DailyVisitBox from "../components/rewards-system/DailyVisitBox";
import RewardShop from "../components/rewards-system/RewardShop";
import { useState } from "react";

function Rewards(){

    const theme= useOutletContext()
    const days = [1,2,3,4,5,6,7]
    const [forks, setForks] = useState(5)

    return ( 
        <Box bg={theme.pageBg}>
            <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="Your Rewards"/>
            <Flex margin="20px" justifyContent={"space-evenly"}>
                {days.map((d) => {
                    return <DailyVisitBox key={d} theme={theme} text={`Day ${d}`}/>
                })}
            </Flex>
            <RewardShop theme={theme} forks={forks}></RewardShop>
        </Box>
    )
};

export default Rewards;