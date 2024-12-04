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

    async function postActivity(a) {
        const url = "http://localhost:3000/energy-tracker/";
            try{
                const response = await fetch(url, 
                {
                    method: "POST",
                body: JSON.stringify({
                    userId: 2,
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
            
        
    }




    ///This sets the activities for the page, can be replaced with an API call that gets all of the activity info for a single person 

    //function to act as lodash isEqual method
    function isEqual(x, y) {
        const objectKeys = Object.keys; 
        const typeX = typeof x;
        const  typeY = typeof y;
        return x && y && typeX === 'object' && typeX === typeY ? (
            objectKeys(x).length === objectKeys(y).length &&
            objectKeys(x).every(key => isEqual(x[key], y[key]))
        ) : (x === y);
    };


    function subtractSpoons(a){
        setSpoons(prev => prev - a.spoons)
    }

    function addSpoons(a){
        setSpoons(prev => prev + a.spoons)
    }

    function addActivity(a){
        setActivities(...activities, a)
    }

    function deleteActivity(a){
        setActivities(activities.filter((activity) => activity.activityId !== a.activityId))
    }

    function editActivities(a){
        console.log("Making changes", a)
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
                    console.log(activities)
            } else {
                setActivities(res);
                console.log(activities)
            }
        })
    //     prevActivities.map((a) => {
    //     if(a.isActive){
    //         setSpoons(prev => prev - a.spoons)
    //     }
    // })
} , [])

useEffect(() => {
    
        // activities.map(a => postActivity(a))
        console.log(activities) 
    {
        // activities.map(a => postActivity(a))
    localStorage.setItem('activities', JSON.stringify(activities));

    console.log(activities)
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