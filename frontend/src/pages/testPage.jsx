import Header from "../components/Header"
import { Text } from "@chakra-ui/react";
import ThemeDropDown from "../components/ThemeDropDown";

function Test(){



    return (
        <>
        <Header size="6xl" bg="teal.500" color="gray.900" text="Hello World"/>
        <Text textAlign={"center"} fontSize={20}>Hello There. How nice to see you</Text>
        <ThemeDropDown />
    </>
)
}

export default Test;