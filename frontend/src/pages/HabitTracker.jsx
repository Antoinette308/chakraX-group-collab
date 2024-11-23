import Header from "../components/Header"
import { Text } from "@chakra-ui/react";
function HabitTracker(){


    return (
        <>
        <Header size="6xl" bg="teal.500" color="gray.900" text="Hello World"/>
        <Text textAlign={"center"} fontSize={20}>What habits would you like to track?</Text>
    </>
)
}

export default HabitTracker;