/* eslint-disable react/prop-types */
import { Text, Center, Flex, Icon, Button } from "@chakra-ui/react";
import { TbGrillFork } from "react-icons/tb";

function RewardsBox(props){
    


    return (
        <Center 
        bg={props.currentForks < props.forks ? props.theme.disabled : props.theme.sideBarBg} 
        height={"150px"} width={"150px"} borderRadius={"25px"} 
        textAlign={"center"} flexDirection={"column"}>
            <Text color={props.theme.ButtonColor} textStyle={"xl"}>{props.reward.reward}</Text>
            <Flex>
            <Text color={props.theme.ButtonColor} textStyle={"xl"}>{props.reward.forks}</Text>
            <Icon color={props.theme.ButtonColor} size="lg">{<TbGrillFork/>}</Icon>
            </Flex>
            <Button display={props.currentForks < props.reward.forks ? "none" : "block"} 
            bg={props.theme.navButtonBg} 
            onClick={() => props.buyReward(props.reward)}>Buy</Button>
        </Center>
    )
}
export default RewardsBox;