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
    const [isCurrentlyActive, setIsCurrentlyActive] = useState(props.active);
    const [activity, setActivity] = useState(props.activity)


    function handleSpoonChange(e, a) {
        setIsCurrentlyActive(0)
        setEnergy(e);
        setActivity(a);
        props.setActivities([...props.activities].map(activity => {
            if(activity.id === props.id) { 
                return {
                ...activity,
                isActive: 0, 
                spoons: e,
                name: a
                }
            }else 
                return activity; 
            }))
        props.onClick();
    }



    function handleActivate() {
        props.setActivities([...props.activities].map(activity => {
            if(activity.activityId === props.id) { 
                console.log(activity.activityId,props.id)
                if(activity.isActive || activity.spoons > props.overallSpoons){
                    setIsCurrentlyActive(0);
                    return {
                        ...activity, 
                        isActive: 0
                    }
                } else {
                    setIsCurrentlyActive(1);
                    return {
                        ...activity,
                        isActive: 1
                    }
                }
            } else {
                return activity; 
            }
        }))
    }


    function handleDelete(e, a) {
        setIsCurrentlyActive(0)
        setEnergy(e);
        setActivity(a);
        props.setActivities([...props.activities].map(activity => {
            if(activity.id === props.id) { 
                console.log(activity)
                return {
                ...activity,
                isActive: 0, 
                spoons: e,
                activity: a
            }
            }else {
                return activity; 
            }
        }))
        props.onClick();
    }

    function checkId(){
        if(props.index <= 3)
            if(isCurrentlyActive){
                return {base:"green.700",_hover:"green.600"}
            } else {
                return {base:"green.500",_hover:"green.600"}
            }
        else if(isCurrentlyActive){
            return props.theme.pageButtonActive
        } else {
            return props.theme.pageButtons
        }
    }


    return  ( 
        <Box width="125px" height={'125px'} 
        borderRadius="20px" bg={checkId()}
        color={isCurrentlyActive ? {base: "gray.300", _hover: "white"} : props.theme.pageButtonText}
        textAlign="center" alignContent={"center"} 
        onClick={() => {
            handleActivate(); 
            props.onClick()
        }}>
            <Text>{props.text}</Text>
            
            <Rating icon={<FaUtensilSpoon/>} 
            defaultValue="0" value={props.value}
            readOnly count="5"/> 

            <EditDialog id={props.index}
            onValueChange={handleSpoonChange} 
            value={energy} text={props.text} 
            activities={props.activities} 
            setActivities={props.setActivities}
            theme={props.theme}/>

            <IconButton aria="delete" margin="5px" 
            variant="outline" color={props.theme.pageButtonText} 
            display={props.index <= 3 ? "none" : "default" } 
            onClick={(e) => {  
                e.stopPropagation();
                handleDelete(energy, activity)
                props.setActivities(props.activities.filter(a => a.id !== props.id))
            }}>
                <FaRegTrashCan />
            </IconButton>
    </Box> )
    }

export default ActivityButton;