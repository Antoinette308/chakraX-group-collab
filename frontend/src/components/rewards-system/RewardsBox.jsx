/* eslint-disable react/prop-types */
import { Text, Center, Flex, Icon } from "@chakra-ui/react";
import { TbGrillFork } from "react-icons/tb";

function RewardsBox(props){
    return (
        <Center 
        bg={props.currentForks < props.forks ? props.theme.disabled : props.theme.pageButtons} 
        height={"150px"} width={"150px"} borderRadius={"25px"} 
        textAlign={"center"} flexDirection={"column"}>
            <Text color={props.theme.ButtonColor} textStyle={"xl"}>{props.reward}</Text>
            <Flex>
            <Text color={props.theme.ButtonColor} textStyle={"xl"}>{props.forks}</Text>
            <Icon color={props.theme.ButtonColor} size="lg">{<TbGrillFork/>}</Icon>
            </Flex>
            
        </Center>
    )
}
export default RewardsBox;