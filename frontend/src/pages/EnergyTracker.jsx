import { Box, Flex} from "@chakra-ui/react";
import ActivityButton from "../components/energy-tracker/ActivityButton";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Instructions from "../components/energy-tracker/Instructions";
import DailyEnergyV2 from "../components/energy-tracker/DailyEnergyV2";
import AddActivityDialog from "../components/energy-tracker/addActivityDialog";
import { useOutletContext } from "react-router-dom";

function EnergyTracker() {
    const theme= useOutletContext()
    const [isMobile, setIsMobile] = useState(false);
    const [spoons, setSpoons] = useState(12)
    

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }


    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])

    const initialActivities = [
        { id: 1, activity: "Have a cold", spoons: 4, active: false},
        { id: 2, activity: "Slept Badly", spoons: 1, active: false},
        { id: 3, activity: "Missed Meds", spoons: 1, active: false},
        {id: 4, activity: "Skipped A Meal", spoons: 1, active: false},
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
const [activities, setActivities] = useState(() => JSON.parse(localStorage.getItem('activities')) || initialActivities);
const [prevActivities, setPrevActivities] = useState(activities);



    ///This sets the activities for the page, can be replaced with an API call that gets all of the activity info for a single person 


    function changeSpoons(){
        if(prevActivities.length > 0){
            //This will only acitvate once the first activity array has been set. 
            if(prevActivities.length < activities.length ){
                    //This will only activate if a new activity has been added to the array. 
                    setPrevActivities(activities);
            } else if(activities.length < prevActivities.length){
                    //This will only activate if an activity has been deleted.
                prevActivities.map((a) => {
                    //Map through the previous activities to see if they are in the new activities state
                    if(!activities.includes(a) && a.active){
                        //If the new activities array does not include an object from the previous activities array, do the following
                        setSpoons(prev => prev + a.spoons)
                    } 
                }) //end of prevActivities map
            } // end of else if statement 
    
            else {
                //This only activates if the previousActivities length is the same as the new activities length 
                activities.map((activity, index) => {
                    const prevAct = prevActivities[index];
                    if(activity.active 
                    && activity.active !== prevAct.active 
                    && activity.spoons === prevAct.spoons
                    && spoons - activity.spoons >= 0){
                        /*If the current object in the array is active, was not active before the state change, 
                        the spoon amount has not changed and the spoon amount will not take the  overall energy below 0, 
                        do the following:*/
                        setSpoons(prev => prev - activity.spoons)
    
                    } else if (!activity.active && activity.active !== prevAct.active ) {
                    /* If the current object in the array is not active, and it was active before the state change, 
                    do the following  */
                        if(activity.spoons !== prevAct.spoons) {
                            //if the spoon amount has changed on the current object, do the following
                            setSpoons(prev => prev + prevAct.spoons)
                        } else {
                            setSpoons(prev => prev + activity.spoons)
                        } //end of if else statement
                    } //end of else if statement 
                }) //end of array mapping
            } //end of else statement
        }
    }

    //This will activate twice but it's an issue with strict mode. In production it works. 
    useEffect(() =>{
        console.log(activities, prevActivities)
        prevActivities.map((a) => {
        if(a.active){
            setSpoons(prev => prev - a.spoons)
        }
    })
} , []) //end of useEffect()

useEffect(() => {
    console.log(spoons)
}, [spoons])

useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
    changeSpoons()
},[activities])



    return (
        <Box bg={theme.pageBg}>
            <Header size="6xl" 
            bg={theme.sideBarBg} color={theme.buttonColor} 
            text="Energy Tracker"/>

            <Flex justifyContent={"center"} 
            gap="10px" flexDir={"column"} 
            alignItems={"center"}>

                <Flex alignItems={"stretch"}
                justifyContent={"space-evenly"} width="75%" 
                marginTop="10px" gap={"10px"}>
                    <DailyEnergyV2 value={spoons} theme={theme} />
                    <Instructions isMobile={isMobile} theme={theme} />
                </Flex>

                <Flex width="75%" justifyContent={"flex-start"} 
                marginTop="10px" flexWrap={"wrap"} 
                gap="10px" maxHeight={"100%"}>
                        <AddActivityDialog theme={theme}
                        activities={activities} setActivities={setActivities} />
                        {activities.map((a) => {
                            return <ActivityButton key={a.id} 
                                id={a.id} text={a.activity} 
                                active={a.active}
                                value={a.spoons} setActivities={setActivities} 
                                activities={activities} overallSpoons = {spoons} theme={theme}
                                onClick={() => setPrevActivities(activities)} /> 
                        })}
                </Flex>
            </Flex>
        </Box>

    )
}



export default EnergyTracker;