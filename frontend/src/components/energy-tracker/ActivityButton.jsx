/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { Rating } from "../ui/rating";
import { FaUtensilSpoon } from "react-icons/fa";
import { useState } from "react";


function ActivityButton(props){ 
    const [energy, setEnergy] = useState(props.value);

    function handleChange(e) {
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
    
    return (
    <Box width="125px" height={'125px'} bg="teal.500" borderRadius="20px" textAlign="center" alignContent={"center"} >
            <Text>{props.text}</Text>
            <Rating icon={<FaUtensilSpoon />} defaultValue="0" value={energy} onValueChange={(e) => handleChange(e)} count="5"/> 
    </Box> )
}

export default ActivityButton;