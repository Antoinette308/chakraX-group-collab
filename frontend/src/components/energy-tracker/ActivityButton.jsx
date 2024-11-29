/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { Rating } from "../ui/rating";
import { FaUtensilSpoon } from "react-icons/fa";
import { useState } from "react";


function ActivityButton(props){ 
    const [energy, setEnergy] = useState(props.value);
    const [isActive, setIsActive] = useState(false);

    function handleSpoonChange(e) {
        setEnergy(e.value);
        props.setActivities([...props.activities].map(activity => {
            if(activity.id === props.id) {
                return {
                ...activity, 
                spoons: e.value
            }
            }
            else 
            return activity; 
        }))
        }

    function handleActivate() {
        props.setActivities([...props.activities].map(activity => {
            if(activity.id === props.id) { 
                if(activity.active === true){
                    setIsActive(false);
                    return {
                        ...activity, 
                        active: false
                        }
                } else {
                    setIsActive(true);
                    return {
                        ...activity,
                        active: true
                    }
                }
            } else {
                return activity; 
            }
            }))
    }
    
    return isActive ? 
    ( <Box width="125px" 
        height={'125px'} 
        bg="teal.600" 
        borderRadius="20px" 
        textAlign="center" 
        alignContent={"center"} 
        onClick={(e) => {
            handleActivate(e); 
            props.onClick()
        }}>
            <Text>{props.text}</Text>
            <Rating icon={<FaUtensilSpoon />} defaultValue="0" value={energy} onValueChange={(e) => handleSpoonChange(e)} count="5"/> 
    </Box> )
    : 
    (
    <Box width="125px" 
        height={'125px'} 
        bg="teal.500" 
        borderRadius="20px" 
        textAlign="center" 
        alignContent={"center"} 
        onClick={() => { 
            if(props.overallSpoons - energy >= 0){
            handleActivate(); 
            props.onClick()
            }
        }}>
            <Text>{props.text}</Text>
            <Rating icon={<FaUtensilSpoon />} defaultValue="0" value={energy} onValueChange={(e) => handleSpoonChange(e)} count="5"/> 
    </Box> )
}

export default ActivityButton;