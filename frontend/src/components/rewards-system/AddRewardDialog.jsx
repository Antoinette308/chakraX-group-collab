/* eslint-disable react/prop-types */
import { Field, Input } from "@chakra-ui/react";
import { Button } from "../ui/button"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { Radio, RadioGroup } from "../ui/radio"
import { useState } from "react";


function AddRewardDialog(props){
    const [open, setOpen] = useState(false)
    const [reward, setReward] = useState();
    const [level, setLevel] = useState();



    
    return (
        <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DialogTrigger asChild>
                <Button bg={props.theme.pageButtons} color={props.theme.ButtonColor} size="xl">
                    {"Add Reward"}
                </Button>
            </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add A New Reward!</DialogTitle>
            </DialogHeader>
            <DialogBody>
                        <Input placeholder="Have a Spa Day" value={reward} 
                        onChange={(e) => setReward(e.target.value)} />
                        <RadioGroup onValueChange={(e) => setLevel(e.value)}>
                            <Radio value="small" >Small Reward</Radio> 
                            <Radio value="medium"> Average Reward</Radio>
                            <Radio value="large">Big Reward</Radio>
                        </RadioGroup>
            </DialogBody> 
            <DialogFooter>
                <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button onClick={() => {
                    setOpen(false);
                    props.addReward(reward, level);
                    setLevel('');
                    setReward('');
                }}>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
        )
    }
    


export default AddRewardDialog;