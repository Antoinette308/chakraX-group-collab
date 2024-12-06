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
import { useState } from "react";

function AddRewardDialog(props){
    const [reward, setReward] = useState();
    return (
        <DialogRoot>
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
            </DialogBody>
            <DialogFooter>
                <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button onClick={(e) => e.close()}>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
      )
    }
    


export default AddRewardDialog;