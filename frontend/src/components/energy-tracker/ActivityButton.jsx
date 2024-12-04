/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, IconButton, Text } from "@chakra-ui/react";
import { Rating } from "../ui/rating";
import { FaUtensilSpoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import EditDialog from "./EditDialog";
import { FaRegTrashCan } from "react-icons/fa6";


function ActivityButton(props){ 
    const [activityInfo, setActivityInfo] = useState(props.activity)

    function handleEdit(energy, activity) {
        if(activityInfo.isActive){
            props.addSpoons(activityInfo)
        }
        if(energy !== activityInfo.spoons && activity === activityInfo.name){
            setActivityInfo(
                {...activityInfo,
                    spoons: energy,
                    isActive: 0
            })
        } else if(activity !== activityInfo.name && energy === activityInfo.spoons) {
            setActivityInfo(
                {...activityInfo,
                    name: activity,
                    isActive: 0
            })
        } else { 
            setActivityInfo(
                {...activityInfo,
                    spoons: energy,
                    name: activity,
                    isActive: 0
            })
        }
    }



    function handleActiveChange() {
            if(activityInfo.isActive){
                props.addSpoons(activityInfo)
                setActivityInfo(
                    {...activityInfo,
                        isActive: 0
                    })
            } else {
                props.subtractSpoons(activityInfo)
                setActivityInfo(
                    {...activityInfo,
                        isActive: 1
                    })
            }
        };

    function handleDelete(e, a) {
        if(activityInfo.isActive){
            props.addSpoons(activityInfo)
            console.log(activityInfo)
        }
    }

    useEffect(()=> {
        {console.log(activityInfo)
        props.editActivities(activityInfo)}
    },[activityInfo])

    return  ( 
        <Box width="125px" height={'125px'} 
        borderRadius="20px" bg={activityInfo.isActive ? props.theme.pageButtonActive : props.theme.pageButtons}
        color={activityInfo.isActive ? {base: "gray.300", _hover: "white"} : props.theme.pageButtonText}
        textAlign="center" alignContent={"center"} 
        onClick={ handleActiveChange}>
            <Text>{activityInfo.name}</Text>
            
            <Rating icon={<FaUtensilSpoon/>} 
            defaultValue="1" value={activityInfo.spoons}
            readOnly count="5"/> 

            <EditDialog
            onValueChange={handleEdit} 
            value={activityInfo.spoons} text={activityInfo.name} 
            activities={props.activities} 
            setActivities={props.setActivities}
            theme={props.theme}/>

            <IconButton aria="delete" margin="5px" 
            variant="outline" color={props.theme.pageButtonText} 
            onClick={(e) => {  
                e.stopPropagation();
                handleDelete(activityInfo.spoons, activityInfo.name)
                props.deleteActivity(activityInfo);
            }}>
                <FaRegTrashCan />
            </IconButton>
    </Box> )
    }

export default ActivityButton;