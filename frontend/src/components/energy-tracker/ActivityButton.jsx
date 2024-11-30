/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { Rating } from "../ui/rating";
import { FaUtensilSpoon } from "react-icons/fa";
import { useState } from "react";
import EditDialog from "./EditDialog";


function ActivityButton(props){ 
    const [energy, setEnergy] = useState(props.value);
    const [isActive, setIsActive] = useState(false);

    function handleSpoonChange(e) {
        {

            setEnergy(e.value);
            props.setActivities([...props.activities].map(activity => {
                if(activity.id === props.id) {
                    return {
                    ...activity, 
                    spoons: e.value
                }
            }else 
                return activity; 
            }))
        }
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


return  ( <Box 
            width="125px" 
            height={'125px'} 
            bg= { isActive ? "teal.600" : "teal.500"} 
            borderRadius="20px" 
            textAlign="center" 
            alignContent={"center"} 
            onClick={(e) => {
                handleActivate(e); 
                props.onClick()
        }}>
            <Text>
                {props.text}
            </Text>
            <Rating 
                icon={<FaUtensilSpoon />} 
                defaultValue="0" 
                value={props.value} 
                readOnly
                count="5"/> 
            <EditDialog onValueChange={handleSpoonChange} value={props.energy} text={props.text} />

    </Box> )
    
}

export default ActivityButton;