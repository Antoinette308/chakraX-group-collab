/* eslint-disable react/prop-types */
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
// import { useState } from "react";
import RewardsBox from "./RewardsBox";
import { TbGrillFork } from "react-icons/tb";
import AddRewardDialog from "./AddRewardDialog";
import { useEffect, useState } from "react";


function RewardShop(props){
    const [rewards, setRewards] = useState([])
    /*This keeps the user from only having rewards of a certain size. 
    Once a threshold is hit, the reward size will become disabled */

    async function addRewardData(reward){
        /*With more time I would integrate the API, using the formatted data 
        from addReward to post the new data to the database. 
        I would also get the token and the user id from the local storage for authorization.
       */
    }

    async function deleteRewardData(rewardId){
        /* Code would go here to delete a reward from the database once it had been purchased, 
        making use of the authorisation in local storage. This function would be called by buyReward
        */
    }



    //This is to ensure that users won't cheat the system and choose to have all rewards cost the lowest amount. 
    
    function calculateForks(level){
        if(level === "small"){
            //adds a count to the small size and chooses a random number between 5 & 10
            return Math.floor(Math.random() * 5) + 5;

        } else if(level === "medium"){
            //adds a count to the medium size and chooses a random number between 10 & 20
            return Math.floor(Math.random() * 10) + 10;
        } else {
            //adds a count to the large size and chooses a random number between 20 & 40
            return Math.floor(Math.random() * 20) + 20;
        }
    }

    //Takes the radio input and turns it into a random integer depending on the chosen reward level
    function addReward(reward, level){
        const formattedReward = {
            reward: reward, 
            forks: calculateForks(level),
        }
        setRewards([...rewards, formattedReward])
    }

    function buyReward(reward){
        alert(`${reward.reward} selected! Enjoy your treat!`);
        props.subtractForks(reward.forks);
        console.log(reward)
        setRewards(
            rewards.filter(r => r.reward_id !== reward.reward_id)
        )

    }

    const mockRewards = [
        {reward: "Get A Coffee", forks: 6, reward_id: 1},
        {reward: "Buy A Book", forks: 5, reward_id: 2},
        {reward: "Get Takeaway", forks: 8, reward_id: 3},
    ]

    useEffect(() => {
        setRewards(mockRewards);
    },[])

    
    return (
        <Box>
            <Flex justifyContent={"space-between"} alignItems={"center"} margin="20px" >
            <Heading size="4xl" textAlign={"center"}
            bg={props.theme.sideBarBg} color={props.theme.ButtonColor}
            height="3rem" borderRadius={"25px"} width="20em"> Rewards</Heading>
                <Flex gap="10px" alignItems={"center"}>
                    <AddRewardDialog addReward={addReward} size={size} theme={props.theme}></AddRewardDialog>
                    
                    <Text textStyle={"lg"} padding="5px">
                        {`Your Forks: ${props.forks}`}
                        <Icon display={"inline"} size="md">{<TbGrillFork/>}</Icon>
                    </Text>
                </Flex>
            </Flex>
            <Flex margin="20px" gap={"10px"}>
            {rewards.map((a, index) => {
                return  <RewardsBox key={index} 
                theme={props.theme} 
                currentForks={props.forks} 
                subtractForks={props.subtractForks}  
                reward={a}
                buyReward={buyReward}/>
            })}
            
            </Flex>

        </Box>
            
    ) 

}

export default RewardShop;