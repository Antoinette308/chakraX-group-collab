import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import { useOutletContext } from "react-router-dom";
import DailyVisitBox from "../components/rewards-system/DailyVisitBox";
import RewardShop from "../components/rewards-system/RewardShop";
import { useState } from "react";
import MiniHeaders from "../components/rewards-system/MiniHeaders";

function Rewards(){

    const theme= useOutletContext()
    const days = [1,2,3,4,5,6,7]
    const [forks, setForks] = useState(6)
    const mockUserData = {userId: 1, forks: 6, lastVisit: "2024-12-04", streak: 1}
    const [weeks, setWeeks] = useState(1);
    const [streak, setStreak] = useState(mockUserData.streak)
    const [lastVisit, setLastVisit] = useState(mockUserData.lastVisit)
    
    
    function calculateWeeks(){
        let thisStreak = streak;
        while(thisStreak > 7){
            console.log(streak)
            setWeeks(prev => prev +1)
            thisStreak = thisStreak - 7;
        };
        return thisStreak;
    }

    function checkStreak(){
        const oldDate = new Date(lastVisit)
        const date = Date.now();
        const today = new Date(date);
        if(today.getDay() === oldDate.getDay()){
            return;
        }
        if(today.getDay() -1 == oldDate.getDay() 
            && today.getMonth() === oldDate.getMonth()
            && today.getFullYear() === oldDate.getFullYear()){
            setStreak(prev => prev + 1);

        } else {
            setStreak(0);
        } if(streak > 7){
            calculateWeeks()
        }
        setLastVisit(today.toISOString());

    }

    function addForks(){
        switch(streak){
            case 0: 
            break;
            case 1:
            case 2: 
                setForks(prev => prev + 1);
                break;
            case 3:
            case 4: 
                setForks(prev => prev + 2);
                break;
            case 5:
            case 6: 
                setForks(prev => prev + 3);
                break;
            default: 
                setForks(prev=>prev + 3);
                break;
        }
    }
    




    return ( 
        <Box bg={theme.pageBg}>
            <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="Your Rewards"/>
            <MiniHeaders theme={theme} text={`Week ${weeks}`} /> 
            <Flex margin="20px" justifyContent={"space-evenly"}>
                {days.map((d) => {
                    return <DailyVisitBox key={d} theme={theme} text={`Day ${d}`} isChecked={streak >= d ? true: false}/>
                })}
            </Flex>
            <RewardShop theme={theme} forks={forks}></RewardShop>
        </Box>
    )
};

export default Rewards;