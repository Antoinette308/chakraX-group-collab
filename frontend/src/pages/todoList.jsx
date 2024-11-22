import Header from "../components/Header"
import { Text } from "@chakra-ui/react";
function todoList(){


    return (
        <>
        <Header size="6xl" bg="teal.500" color="gray.900" text="Your ToDo List"/>
        <Text textAlign={"center"} fontSize={20}>What's on the agenda?</Text>
    </>
)
}

export default todoList;