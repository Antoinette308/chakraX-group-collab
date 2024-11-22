import Header from "../components/Header"
import { Text } from "@chakra-ui/react";
function todoList(){


    return (
        <>
        <Header size="6xl" bg="teal.500" color="gray.900" text="Hello World"/>
        <Text textAlign={"center"} fontSize={20}>What's on the agenda for today?</Text>
    </>
)
}

export default todoList;