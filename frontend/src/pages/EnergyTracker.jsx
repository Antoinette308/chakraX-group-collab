import { Box, Flex} from "@chakra-ui/react";
import ActivityButton from "../components/energy-tracker/ActivityButton";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Instructions from "../components/energy-tracker/Instructions";
import DailyEnergyV2 from "../components/energy-tracker/DailyEnergyV2";
import AddActivityDialog from "../components/energy-tracker/addActivityDialog";
import { useOutletContext } from "react-router-dom";
import { nanoid } from "nanoid";

function EnergyTracker() {
    //state 
    const theme= useOutletContext()
    const [isMobile, setIsMobile] = useState(false);
    const [spoons, setSpoons] = useState(12)
// mobile style handling start 
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
// mobile style handling end  


    const initialActivities = [
        { name: "Have a cold", spoons: 4, isActive: false},
        {  name: "Slept Badly", spoons: 1, isActive: false},
        { name: "Missed Meds", spoons: 1, isActive: false},
        { name: "Skipped A Meal", spoons: 1, isactive: false},
        { name: "Get Out Of Bed", spoons: 1, isactive: false},
        { name: "Take Pills", spoons: 1, isActive: false},
        { name: "Watch TV", spoons: 1, isActive: false},
        {name: "Bathe", spoons: 2, isActive: false},
        {name: "Style Hair", spoons: 2, isActive: false},
        {name: "Use Internet", spoons: 2, isActive: false},
        {name: "Study", spoons: 2, isActive: false},
        { name: "Make Dinner", spoons: 3, isActive: false},
        { name: "Socialise", spoons: 3, isActive: false},
        { name: "Housework", spoons: 3, isActive: false},
        { name: "Go for a Drive", spoons: 3, isActive: false},
        { name: "Go to Work", spoons: 4, isActive: false},
        { name: "Go Shopping", spoons: 4, isActive: false},
        { name: "Exercise", spoons: 5, isActive: false}
    ];
const [activities, setActivities] = useState([]);
const [token, setToken] = useState(1);

    async function getUserData(){
        if(token){
            console.log(token)
            const url = `http://localhost:3000/energy-tracker/${token}`
        try {
            const response =  await fetch(url);
            if(!response.ok){
            throw new Error(`Response Status: ${response.status}`)
            }
            const json = await response.json()
                console.log(json)
                return json;
        } catch(error) {
            console.error(error.message)
        }
        
        
        } else {
            return [];
        }
    }

    async function postActivities() {
        const url = "http://localhost:3000/energy-tracker/";
        activities.map(async (a) => {
            console.log(a)
            try{
                const response = await fetch(url, 
                {
                    method: "POST",
                body: JSON.stringify({
                    userId: 1,
                    activityId: a.id,
                    name: a.name,
                    spoons: a.spoons,
                    isActive: a.isActive ? 1 : 0
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if(!response.ok){
                throw new Error(`Response Status: ${response.status}`)
            }
            const json = await response.json()
                console.log(json)
                return json;
            }
            catch(err){
                console.error(err.message);
            }
            
        })
    }

const [prevActivities, setPrevActivities] = useState(activities);



    ///This sets the activities for the page, can be replaced with an API call that gets all of the activity info for a single person 


    function changeSpoons(){
            //This will only acitvate once the first activity array has been set. 
        if(prevActivities.length < activities.length ){
                    //This will only activate if a new activity has been added to the array. 
                setPrevActivities(activities);
        } else if(activities.length < prevActivities.length){
                //This will only activate if an activity has been deleted.
            prevActivities.map((a) => {
                //Map through the previous activities to see if they are in the new activities state
                if(!activities.includes(a) && a.isActive){
                    //If the new activities array does not include an object from the previous activities array, do the following
                    setSpoons(prev => prev + a.spoons)
                } 
            }) //end of prevActivities map
        } // end of else if statement 
    
        else {
                //This only activates if the previousActivities length is the same as the new activities length 
            activities.map((activity, index) => {
                const prevAct = prevActivities[index];
                if(activity.isActive && activity.isActive !== prevAct.isActive 
                && activity.spoons === prevAct.spoons && spoons - activity.spoons >= 0){
                    /*If the current object in the array is active, was not active before the state change, 
                    the spoon amount has not changed and the spoon amount will not take the  overall energy below 0, 
                    do the following:*/
                    setSpoons(prev => prev - activity.spoons)
                } else if (!activity.isActive && activity.isActive !== prevAct.isActive ) {
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

    /*This will activate twice but it's an issue with strict mode. 
    In production(without strict mode) it works. */
    useEffect(() =>{
        getUserData().then((res) => {
            console.log(res)
            if(!res.length){
                console.log("no response")
                setActivities(() => 
                    JSON.parse(localStorage.getItem('activities')) || 
                    initialActivities.map((a) => {
                        return {...a, 
                        id: nanoid()}
                    }));
                postActivities();
                    
            } else {
                setActivities(res);
            }
        })
        prevActivities.map((a) => {
        if(a.isActive){
            setSpoons(prev => prev - a.spoons)
        }
    })
} , [])

useEffect(() => {
    if(activities.length > 0){
        console.log(activities, prevActivities)
    localStorage.setItem('activities', JSON.stringify(activities));
    changeSpoons()
    }
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
                        {activities.map((a, index) => {
                            return <ActivityButton key={a.activityId} 
                                index={index}
                                id={a.activityId} text={a.name} 
                                active={a.isActive}
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