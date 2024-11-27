import { Box, Flex} from "@chakra-ui/react";
import ActivityButton from "../components/energy-tracker/ActivityButton";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import DailyEnergy from "../components/energy-tracker/DailyEnergy";

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
      
      // create an event listener
      useEffect(() => {
        window.addEventListener("resize", handleResize)
      }, [])

    useEffect(() => {
        // Simulated fetch (replace with actual API call)
        const mockActivities = [
            { id: 1, activity: "Get Out Of Bed", spoons: 1},
            { id: 2, activity: "brush teeth", spoons: 2 },
            { id: 3, activity: "Stuff", spoons: 1 },
            {id: 4, activity: "Sleep", spoons: 1}
        ];
        setActivities(mockActivities);
    }, []);

    return (
        <Box>
            <Header size="6xl" bg="teal.500" color="gray.900" text="Energy Tracker"/>
                <DailyEnergy isMobile={isMobile} spoons={spoons} onValueChange={(e) => setSpoons(e.value)} />
                <Flex justifyContent={"center"} gap="10px" >
                    <Flex width="75%" justifyContent={"space-evenly"} marginTop="10px">
                    {activities.map((a) => {
                        return <ActivityButton key={a.id} text={a.activity} default={a.spoons} />
                        })}
                    </Flex>
                    
                </Flex>
        </Box>
    )
}
                    


export default EnergyTracker;