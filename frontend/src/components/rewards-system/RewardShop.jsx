/* eslint-disable react/prop-types */
import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
// import { useState } from "react";
import RewardsBox from "./RewardsBox";
import { TbGrillFork } from "react-icons/tb";
import AddRewardDialog from "./AddRewardDialog";


function RewardShop(props){
    // const [rewards, setRewards] = useState([])
    
    
    const mockRewards = [
        {reward: "Get A Coffee", forks: 6},
        {reward: "Buy A Book", forks: 5},
        {reward: "Get Takeaway", forks: 8},
    ]

    
    return (
        <Box>
            <Flex justifyContent={"space-between"} alignItems={"center"} margin="20px" >
            <Heading size="4xl" textAlign={"center"}
            bg={props.theme.sideBarBg} color={props.theme.ButtonColor}
            height="3rem" borderRadius={"25px"} width="20em"> Rewards</Heading>
                <Flex gap="10px" alignItems={"center"}>
                    <AddRewardDialog theme={props.theme}></AddRewardDialog>
                    
                    <Text textStyle={"lg"} padding="5px">
                        {`Your Forks: ${props.forks}`}
                        <Icon display={"inline"} size="md">{<TbGrillFork/>}</Icon>
                    </Text>
                </Flex>
            </Flex>
            <Flex margin="20px" gap={"10px"}>
            {mockRewards.map((a, index) => {
                return  <RewardsBox key={index} theme={props.theme} currentForks={props.forks} reward={a.reward} forks={a.forks}></RewardsBox>
            })}
            
            </Flex>

        </Box>
            
    ) 

}

export default RewardShop;