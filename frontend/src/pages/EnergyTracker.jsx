import { Box, Flex} from "@chakra-ui/react";
import ActivityButton from "../components/energy-tracker/ActivityButton";
import Header from "../components/Universal/Header";
import { useState, useEffect } from "react";
import Instructions from "../components/energy-tracker/Instructions";
import DailyEnergyV2 from "../components/energy-tracker/DailyEnergyV2";
import AddActivityDialog from "../components/energy-tracker/addActivityDialog";
import { useOutletContext } from "react-router-dom";


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
        { name: "Have a cold", spoons: 4, is_active: false},
        {  name: "Slept Badly", spoons: 1, is_active: false},
        { name: "Missed Meds", spoons: 1, is_active: false},
        { name: "Skipped A Meal", spoons: 1, is_active: false},
        { name: "Get Out Of Bed", spoons: 1, is_active: false},
        { name: "Take Pills", spoons: 1, is_active: false},
        { name: "Watch TV", spoons: 1, is_active: false},
        {name: "Bathe", spoons: 2, is_active: false},
        {name: "Style Hair", spoons: 2, is_active: false},
        {name: "Use Internet", spoons: 2, is_active: false},
        {name: "Study", spoons: 2, is_active: false},
        { name: "Make Dinner", spoons: 3, is_active: false},
        { name: "Socialise", spoons: 3, is_active: false},
        { name: "Housework", spoons: 3, is_active: false},
        { name: "Go for a Drive", spoons: 3, is_active: false},
        { name: "Go to Work", spoons: 4, is_active: false},
        { name: "Go Shopping", spoons: 4, is_active: false},
        { name: "Exercise", spoons: 5, is_active: false}
    ];
const [activities, setActivities] = useState([]);
const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem("token"))

    async function getUserData(){
        
            console.log(user, token)
            const url = `http://localhost:3000/energy-tracker/${user}`
        try {
            const response =  await fetch(url, { 
                headers: {
                    "Authorization": `Bearer ${token}`}
            });
            if(!response.ok){
            throw new Error(`Response Status: ${response.status}`)
            }
            const json = await response.json()
                console.log(json)
                return json;
        } catch(error) {
            console.error(error.message)
        }
    }


    async function postActivityData(a) {
        const url = "http://localhost:3000/energy-tracker/";
            try{
                const response = await fetch(url, 
                {
                    method: "POST",
                body: JSON.stringify({
                    user_id: user,
                    name: a.name,
                    spoons: a.spoons,
                    is_active: a.is_active 
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
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
        const url = `http://localhost:3000/energy-tracker/${a.activity_id}`;
            try{
                const response = await fetch(url, 
                {
                    method: "PUT",
                body: JSON.stringify({
                    user_id: user,
                    name: a.name,
                    spoons: a.spoons,
                    is_active: a.is_active 
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
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
        const url = `http://localhost:3000/energy-tracker/${a.activity_id}`;
            try{
                const response = await fetch(url, 
                {
                    method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
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
        postActivityData(a).then((res) => {
            setActivities([...activities, {...a, activity_id: res.activity_id}]) 
        })
        
    }

    function deleteActivity(a){
        console.log("deleting", a.activity_id, activities)
            deleteActivityData(a);
            setActivities(activities.filter((activity) => activity.activity_id !== a.activity_id))
    }

    function editActivities(a){
        {
        updateActivityData(a);
        }
        setActivities(activities.map((activity) => {
            if(a.activity_id === activity.activity_id){
                return {...activity,
                spoons: a.spoons,
                is_active: a.is_active,
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
                setActivities([]);
            }
            else {
                console.log(res)
                setActivities(res);
                res.map((a) => {
                    if(a.is_active){
                        /*This will activate twice but it's an issue with strict mode. 
                        In production(without strict mode) it works. */
                        console.log("subtracting spoons", a.spoons)
                        subtractSpoons(a);
                    }
                })
            }
        })
} , [])

useEffect(() => {
    console.log(activities)
},[activities])



    return (
        <Box bg={theme.pageBg}>
            <Header size="6xl" 
            bg={theme.sideBarBg} color={theme.ButtonColor} 
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
                            console.log("activity", a)
                            return <ActivityButton key={a.activity_id} 
                                index={index}
                                id={a.activity_id} text={a.name} 
                                active={a.is_active}
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