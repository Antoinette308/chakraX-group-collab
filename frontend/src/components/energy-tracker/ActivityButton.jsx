/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, IconButton, Text } from "@chakra-ui/react";
import { Rating } from "../ui/rating";
import { FaUtensilSpoon } from "react-icons/fa";
import { useState } from "react";
import EditDialog from "./EditDialog";
import { FaRegTrashCan } from "react-icons/fa6";


function ActivityButton(props){ 
    const [energy, setEnergy] = useState(props.value);
    const [isActive, setIsActive] = useState(false);
    const [activity, setActivity] = useState(props.activity)

    function handleSpoonChange(e, a) {
        {
            setIsActive(false)
            setEnergy(e);
            setActivity(a);
            props.setActivities([...props.activities].map(activity => {
                if(activity.id === props.id) { 
                    console.log(activity)
                    return {
                    ...activity,
                    active: false, 
                    spoons: e,
                    activity: a
                }
            }else 
                return activity; 
            }))
        props.onClick();
        }
    }



    function handleActivate() {
        props.setActivities([...props.activities].map(activity => {
            if(activity.id === props.id) { 
                if(activity.active === true || activity.spoons > props.overallSpoons){
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
            bg= { isActive ? {base:"teal.700",_hover:"teal.600"} : {base:"teal.500", _hover:"teal.600"}} 
            borderRadius="20px" 
            textAlign="center" 
            color={isActive ? {base: "gray", _hover: "white"} : {base: "white"}}
            alignContent={"center"} 
            onClick={() => {
                handleActivate(); 
                console.log(props.activities)
                props.onClick()
        }}>
            <Text>
                {props.text}
            </Text>
            <Rating
                icon={<FaUtensilSpoon/>} 
                defaultValue="0" 
                value={props.value} 
                readOnly
                count="5"
                /> 
            <EditDialog onValueChange={handleSpoonChange} 
                value={energy} 
                text={props.text} 
                activities={props.activities} 
                setActivities={props.setActivities} 
                id={props.id}/>
            <IconButton aria="delete" margin="5px" variant="outline" color="white" onClick={(e) => 
                {  
                    e.stopPropagation();
                    props.onClick();
                    props.setActivities(props.activities.filter(a => a.id !== props.id))
                }}>
                <FaRegTrashCan />
            </IconButton>

    </Box> )
    
}

export default ActivityButton;