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
const [token, setToken] = useState(2);

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

    async function postActivityData(a) {
        const url = "http://localhost:3000/energy-tracker/";
            try{
                const response = await fetch(url, 
                {
                    method: "POST",
                body: JSON.stringify({
                    userId: 2,
                    activityId: a.activityId,
                    name: a.name,
                    spoons: a.spoons,
                    isActive: a.isActive ? 1 : 0
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                });

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
            
        
    }

    async function updateActivityData(a){
        const url = `http://localhost:3000/energy-tracker/${a.activityId}`;
            try{
                const response = await fetch(url, 
                {
                    method: "PUT",
                body: JSON.stringify({
                    activityId: a.activityId,
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
            
        
    }

    async function deleteActivityData(a){
        const url = `http://localhost:3000/energy-tracker/${a.activityId}`;
            try{
                const response = await fetch(url, 
                {
                    method: "DELETE",
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
    }


    ///This sets the activities for the page, can be replaced with an API call that gets all of the activity info for a single person 


    function subtractSpoons(a){
        setSpoons(prev => prev - a.spoons)
    }

    function addSpoons(a){
        setSpoons(prev => prev + a.spoons)
    }

    function addActivity(a){
        postActivityData(a);
        setActivities([...activities, a]);
    }

    function deleteActivity(a){
        if(token){
            deleteActivityData(a);
        }
        setActivities(activities.filter((activity) => activity.activityId !== a.activityId))
    }

    function editActivities(a){
        if(token){
        updateActivityData(a);
        }
        setActivities(activities.map((activity) => {
            if(a.activityId === activity.activityId){
                return {...activity,
                spoons: a.spoons,
                isActive: a.isActive,
                name: a.name
                }
            } else {
                return {
                    ...activity,
                }
            }
        }))
    }

    useEffect(() =>{
        getUserData().then((res) => {
            console.log(res)
            if(!res.length){
                console.log("no response")
                const activitiesWithId = initialActivities.map((a) => {
                        return {...a, 
                        activityId: nanoid()}
                    }) 
                console.log(activitiesWithId)
                setActivities(() => [
                    JSON.parse(localStorage.getItem('activities')) || 
                    activitiesWithId])
                activitiesWithId.forEach((a) => {
                    postActivityData(a);
                })
                res.map((a) => {
                    if(a.isActive){
                        /*This will activate twice but it's an issue with strict mode. 
                        In production(without strict mode) it works. */
                        console.log("subtracting spoons", a.spoons)
                        subtractSpoons(a);
                    }
                })
            }
            else {
                setActivities(res);
            }
                
            
        })
} , [])

useEffect(() => {
    console.log(activities)
        localStorage.setItem('activities', JSON.stringify(activities));
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
                        <AddActivityDialog theme={theme} addActivity={addActivity}
                        activities={activities} setActivities={setActivities} />
                        {activities.map((a, index) => {
                            return <ActivityButton key={a.activityId} 
                                index={index}
                                id={a.activityId} text={a.name} 
                                active={a.isActive}
                                value={a.spoons}
                                activity={a} 
                                setActivities={setActivities} 
                                addActivity ={addActivity}
                                deleteActivity={deleteActivity}
                                addSpoons={addSpoons}
                                subtractSpoons={subtractSpoons}
                                editActivities={editActivities}
                                
                                activities={activities} overallSpoons = {spoons} theme={theme}
                                /> 
                        })}
                </Flex>
            </Flex>
        </Box>

    )
}



export default EnergyTracker;