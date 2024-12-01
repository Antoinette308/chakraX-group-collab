import { Box, Flex} from "@chakra-ui/react";
import ActivityButton from "../components/energy-tracker/ActivityButton";
import Header from "../components/Header";
import { useState, useEffect } from "react";
// import DailyEnergy from "../components/energy-tracker/DailyEnergy";
import Instructions from "../components/energy-tracker/Instructions";
import DailyEnergyV2 from "../components/energy-tracker/DailyEnergyV2";

import AddActivityDialog from "../components/energy-tracker/addActivityDialog";


function EnergyTracker() {
    const [activities, setActivities] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [spoons, setSpoons] = useState("12")
    const [prevActivities, setPrevActivities] = useState(activities)
    

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // function handleActivityChoice(e){
        
    //     if((spoons - e.spoons)< 0 && !e.active){
    //         console.log("no")
            
    //     } else if((!e.active && spoons - e.spoons >= 0)){
    //         console.log(e, spoons, prevActivities[e.id-1].spoons)
    //         setSpoons(prev => prev - e.spoons)
    //     }
    //     else if(e.active) {
    //         console.log(e, spoons)
    //     setSpoons(prev => prev + e.spoons)
    //     console.log(e, spoons)
        
    //     }
    
    // }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])



    ///This sets the activities for the page, can be replaced with an API call that gets all of the activity info for a single person 
    useEffect(() => {
        // Simulated fetch (replace with actual API call)
        const mockActivities = [
            { id: 1, activity: "Get Out Of Bed", spoons: 5, active: false},
            { id: 2, activity: "brush teeth", spoons: 5, active: false},
            { id: 3, activity: "Stuff", spoons: 1, active: false},
            {id: 4, activity: "Sleep", spoons: 0, active: false},
            {id: 5, activity: "Watch TV", spoons: 0, active: false},
            {id: 6, activity: "Exercise", spoons: 3, active: false},
            {id: 7, activity: "Make Dinner", spoons: 2, active: false},
            {id: 8, activity: "Appointments", spoons: 3, active: false},
            {id: 9, activity: "Appointments", spoons: 4, active: false},
            {id: 10, activity: "Appointments", spoons: 3, active: false},
            {id: 11, activity: "Appointments", spoons: 2, active: false},
            {id: 12, activity: "Appointments", spoons: 3, active: false},
            {id: 13, activity: "Appointments", spoons: 3, active: false},
            {id: 14, activity: "Appointments", spoons: 1, active: false},
            {id: 15, activity: "Appointments", spoons: 3, active: false},
            {id: 16, activity: "Appointments", spoons: 3, active: false},
            {id: 17, activity: "Appointments", spoons: 3, active: false}


        ];
        setActivities(mockActivities);
    }, []);

    useEffect(() =>{
        console.log(activities, prevActivities)
        if(prevActivities.length > 0){
            if(prevActivities.length < activities.length ){
                setPrevActivities(activities);
                console.log(prevActivities)
            }else if(activities.length < prevActivities.length &&  prevActivities.at(-1).active){
                setPrevActivities(activities);
                setSpoons(prev => prev +  prevActivities.at(-1).spoons)
            }
        else{
        activities.map((activity, index) => {
            const prevAct = prevActivities[index];
            
            if(activity.active === true 
                && activity.active !== prevAct.active 
                && activity.spoons === prevAct.spoons
                && spoons - activity.spoons >= 0){
                    setSpoons(prev => prev - activity.spoons)
            } else if (!activity.active && activity.active !== prevAct.active ) {
                if(activity.spoons !== prevAct.spoon && prevAct.id !== activity.id )
                    {
                    setSpoons(prev => prev + prevAct.spoons)
                } else {
                    setSpoons(prev => prev + activity.spoons)
                }
            } 
        })
        }
    }
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
                        alignItems={"stretch"}
                        justifyContent={"space-evenly"} 
                        width="75%" 
                        marginTop="10px" 
                        gap={"10px"}>
                            <DailyEnergyV2 
                            value={spoons} />
                            <Instructions 
                            isMobile={isMobile} />
                    </Flex>
                    <Flex 
                        width="75%" 
                        justifyContent={"flex-start"} 
                        marginTop="10px" 
                        flexWrap={"wrap"} 
                        gap="10px">
                        <AddActivityDialog activities={activities} setActivities={setActivities} />
                        
                        {activities.map((a) => {
                            return <ActivityButton key={a.id} 
                                id={a.id}
                                text={a.activity} 
                                value={a.spoons} 
                                setActivities={setActivities} 
                                activities={activities} 
                                onClick={() => {console.log(a, prevActivities); setPrevActivities(activities)}} 
                                overallSpoons = {spoons} /> 
                            
                        })}
                    </Flex>
                </Flex>
        </Box>

    )
}
                    


export default EnergyTracker;