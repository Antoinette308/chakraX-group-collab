/* eslint-disable react/prop-types */
import { Button} from "../ui/button"
import { Text } from "@chakra-ui/react";
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


function EditDialog(props) {
const [open, setOpen] = useState(false)
const [energy, setEnergy] = useState(props.value);

function handleClicks(e, openState){
    e.stopPropagation();
    setOpen(openState)
}



    return (
        <DialogRoot motionPreset="slide-in-bottom" open={open}>
            <DialogTrigger asChild>
                <Button width="50px" variant="outline" onClick={(e) => handleClicks(e, true)}>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Activity</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Text>{props.text}</Text>
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
                                Cancel
                        </Button>
                    </DialogActionTrigger>
                    <Button onClick={(e) => 
                        {handleClicks(e, false);
                        props.onValueChange(energy);
                        }}>
                        Save
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )};

export default EditDialog;