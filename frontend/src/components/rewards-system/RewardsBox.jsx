/* eslint-disable react/prop-types */
import { Text, Center, Flex, Icon, Button } from "@chakra-ui/react";
import { TbGrillFork } from "react-icons/tb";

function RewardsBox(props){
    function handlePurchase(){
        //once pressed, 
        //alert user, 
        alert(`${props.reward} selected! Enjoy your treat!`)
        //delete reward from page, props.handleDelete()
        //delete from database and  DeleteData()
        // remove cost from overall forks subtractForks()
    }


    return (
        <Center 
        bg={props.currentForks < props.forks ? props.theme.disabled : props.theme.sideBarBg} 
        height={"150px"} width={"150px"} borderRadius={"25px"} 
        textAlign={"center"} flexDirection={"column"}>
            <Text color={props.theme.ButtonColor} textStyle={"xl"}>{props.reward}</Text>
            <Flex>
            <Text color={props.theme.ButtonColor} textStyle={"xl"}>{props.forks}</Text>
            <Icon color={props.theme.ButtonColor} size="lg">{<TbGrillFork/>}</Icon>
            </Flex>
            <Button display={props.currentForks < props.forks ? "none" : "block"} bg={props.theme.navButtonBg} onClick={handlePurchase}>Buy</Button>
        </Center>
    )
}
export default RewardsBox;