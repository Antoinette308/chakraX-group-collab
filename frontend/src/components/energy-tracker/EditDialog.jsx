/* eslint-disable react/prop-types */
import { Button} from "../ui/button"

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
import { FaUtensilSpoon } from "react-icons/fa";
import { useState } from "react";
import { Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { FaRegEdit } from "react-icons/fa";



function EditDialog(props) {
const [open, setOpen] = useState(false)
const [energy, setEnergy] = useState(props.value);
const [activity, setActivity] = useState(props.text)

function handleClicks(e, openState){
    e.stopPropagation();
    setOpen(openState)
}




    return (
        <DialogRoot motionPreset="slide-in-bottom" open={open}>
            <DialogTrigger asChild>
                <Button width="25px" margin="5px" 
                variant="outline" color={props.theme.pageButtonText}
                display={props.id <= 3 ? "none" : "default" } 
                onClick={(e) => handleClicks(e, true)}>
                    {<FaRegEdit/>}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Activity</DialogTitle>
                </DialogHeader>
                <DialogBody textAlign={"center"}>
                    <Field marginBottom="10px" label="New Activity">
                        <Input placeholder="See Friends" value={activity} 
                        onClick={e => e.stopPropagation()} 
                        onChange={(e) => setActivity(e.target.value)} />
                    </Field>
                    <Rating icon={<FaUtensilSpoon />} 
                    defaultValue="0" value={energy} 
                    onClick={e => e.stopPropagation()} 
                    onValueChange={(e) => setEnergy(e.value)} 
                    count="5"/> 
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline" 
                        onClick={(e) => handleClicks(e,false)}>
                                {"Cancel"}
                            </Button>
                    </DialogActionTrigger>
                    <Button onClick={(e) => 
                        {handleClicks(e, false);
                        props.onValueChange(energy, activity);}}>
                        {"Save"}
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )};

export default EditDialog;