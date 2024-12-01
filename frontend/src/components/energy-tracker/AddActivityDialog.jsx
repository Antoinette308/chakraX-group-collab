/* eslint-disable react/prop-types */
import {Button} from "../ui/button"
import {Icon} from "@chakra-ui/react";
import { DialogActionTrigger,
        DialogBody,
        DialogCloseTrigger,
        DialogContent,
        DialogFooter,
        DialogHeader,
        DialogRoot,
        DialogTitle,
        DialogTrigger} from "../ui/dialog"
import { Rating } from "../ui/rating";
import { FaPlus, FaUtensilSpoon } from "react-icons/fa";
import { useState } from "react";
import { Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import {nanoid} from "nanoid";


function AddActivityDialog(props){
    const [open, setOpen] = useState(false)
    const [energy, setEnergy] = useState('');
    const [activity, setActivity] =useState('');

    function handleDialog(e, openState){
        setOpen(openState)
        setActivity('')
        setEnergy('')
    };

    function handleAdd(){
        props.setActivities(
            [
            ...props.activities,
            {id: nanoid(), 
            activity: activity, 
            spoons: energy, 
            active:false}
        ])
    }





    return (
        <DialogRoot motionPreset="slide-in-bottom" open={open}>
            <DialogTrigger asChild>
                <Button width="125px" 
                    height={'125px'} 
                    bg= {{base: "teal.500", _hover: "teal.600"}} 
                    color={"white"}
                    borderRadius="20px" 
                    textAlign="center" 
                    alignContent={"center"}
                    onClick={(e) => handleDialog(e, true)}>
                    <Icon size="lg">
                        <FaPlus/>
                    </Icon>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>What Activity Would You Like To Add?</DialogTitle>
                </DialogHeader>
                <DialogBody textAlign={"center"}>
                    <Field marginBottom="10px" label="New Activity">
                        <Input placeholder="See Friends" 
                        value={activity} 
                        onChange={(e) => setActivity(e.target.value)} />
                    </Field>
                    <Rating icon={<FaUtensilSpoon />} 
                        defaultValue="0" value={energy} 
                        onValueChange={(e) => setEnergy(e.value)} 
                        count="5"/> 
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button 
                            variant="outline" 
                            onClick={(e) => handleDialog(e,false)}>
                            {"Cancel"}
                        </Button>
                    </DialogActionTrigger>
                    <Button onClick={(e) => 
                        {handleDialog(e, false);
                        handleAdd();
                        }}>
                            {"Add Activity"}
                        </Button>
                
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )};

export default AddActivityDialog;