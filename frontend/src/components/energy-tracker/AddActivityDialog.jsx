/* eslint-disable react/prop-types */
import { DialogActionTrigger, 
    DialogBody, DialogCloseTrigger, 
    DialogContent, DialogFooter, 
    DialogHeader, DialogRoot, 
    DialogTitle, DialogTrigger} from "../ui/dialog"
import {Button} from "../ui/button"
import {Icon, Input} from "@chakra-ui/react";
import { Rating } from "../ui/rating";
import { Field } from "../ui/field"
import { FaPlus, FaUtensilSpoon } from "react-icons/fa";
import { useState } from "react";
import {nanoid} from "nanoid";


function AddActivityDialog(props){
    //States for activity inputs and whether dialog has been opened

    const [open, setOpen] = useState(false)
    const [energy, setEnergy] = useState('');
    const [activity, setActivity] = useState('');

    //Resets the add activity dialog for next use
    function handleDialog(openState){
        setOpen(openState)
        setActivity('')
        setEnergy('')
    };


    return (
        <DialogRoot motionPreset="slide-in-bottom" open={open}>
            {/* start of dialog trigger*/}
            <DialogTrigger asChild>
                <Button width={"125px"} height={'125px'}
                borderRadius={"20px"} color={"white"} 
                textAlign={"center"} alignContent={"center"}
                bg= {props.theme.pageButtons} 
                onClick={() => handleDialog(true)}>
                    <Icon size="lg">
                        <FaPlus/>
                    </Icon>
                </Button>
            </DialogTrigger>
            {/* End of dialog trigger
            Start of Dialog Content*/}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>What Activity Would You Like To Add?</DialogTitle>
                </DialogHeader>
                {/* Start of Dialog Body */}
                <DialogBody textAlign={"center"}>
                    <Field marginBottom="10px" label="New Activity">
                        <Input placeholder="See Friends" value={activity} 
                        onChange={(e) => setActivity(e.target.value)} />
                    </Field>
                    <Rating icon={<FaUtensilSpoon />} 
                    defaultValue="0" value={energy} 
                    onValueChange={(e) => setEnergy(e.value)} 
                    count="5"/> 
                </DialogBody>
                {/*End of Dialog Body 
                Start of Dialog Footer*/}
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline" 
                        onClick={() => handleDialog(false)}>
                            {"Cancel"}
                        </Button>
                    </DialogActionTrigger>
                    <Button onClick={() => 
                        {handleDialog(false);
                            const newActivity = {
                                name: activity, 
                                spoons: energy, 
                                is_active:0}
                        props.addActivity(newActivity)
                    }}>
                        {"Add Activity"}
                    </Button>
                </DialogFooter>
                {/* End of Dialog Footer */}
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )};

export default AddActivityDialog;