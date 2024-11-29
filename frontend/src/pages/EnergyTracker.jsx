import { Box, Flex} from "@chakra-ui/react";
import ActivityButton from "../components/energy-tracker/ActivityButton";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import DailyEnergy from "../components/energy-tracker/DailyEnergy";
import Instructions from "../components/energy-tracker/Instructions";

function EnergyTracker() {
    const [activities, setActivities] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [spoons, setSpoons] = useState("12")
    

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    function handleActivityChoice(e){
        if((spoons - e.spoons)< 0 && !e.active){
            console.log("no")
            
        } else if((!e.active && spoons - e.spoons >= 0))
            setSpoons(prev => prev - e.spoons)
        else if(e.active) {
        setSpoons(prev => prev + e.spoons)
        
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])



    ///This sets the activities for the page, can be replaced with an API call that gets all of the activity info for a single person 
    useEffect(() => {
        // Simulated fetch (replace with actual API call)
        const mockActivities = [
            { id: 1, activity: "Get Out Of Bed", spoons: 5, active: false},
            { id: 2, activity: "brush teeth", spoons: 6, active: false},
            { id: 3, activity: "Stuff", spoons: 1, active: false},
            {id: 4, activity: "Sleep", spoons: 0, active: false},
            {id: 5, activity: "Watch TV", spoons: 0, active: false},
            {id: 6, activity: "Exercise", spoons: 3, active: false},
            {id: 7, activity: "Make Dinner", spoons: 2, active: false},
            {id: 8, activity: "Appointments", spoons: 3, active: false}
        ];
        setActivities(mockActivities);
    }, []);

    useEffect(() =>{
        console.log(activities)
    }
    , [activities])








    return (
        <Box>
            <Header 
                size="6xl" 
                bg="teal.500" 
                color="gray.900" 
                text="Energy Tracker"/>
                <Flex 
                    justifyContent={"center"} 
                    gap="10px" 
                    flexDir={"column"} 
                    alignItems={"center"}>
                    <Flex 
                        justifyContent={"space-evenly"} 
                        width="75%" 
                        marginTop="10px" 
                        gap={"10px"}>
                    <DailyEnergy 
                        isMobile={isMobile} 
                        spoons={spoons} 
                        onValueChange={(e) => setSpoons(e.value)} />
                    <Instructions 
                        isMobile={isMobile} />
                    </Flex>
                    <Flex 
                        width="75%" 
                        justifyContent={"space-evenly"} 
                        marginTop="10px" 
                        flexWrap={"wrap"} 
                        gap="10px">
                        {activities.map((a) => {
                            return <ActivityButton key={a.id} 
                                id={a.id}
                                text={a.activity} 
                                value={a.spoons} 
                                setActivities={setActivities} 
                                activities={activities} 
                                onClick={() => handleActivityChoice(a)} 
                                overallSpoons = {spoons} /> 
                        })}
                    </Flex>
                    
                </Flex>
        </Box>

    )
}
                    


export default EnergyTracker;