import Header from "../components/Header"
import { Box, Text } from "@chakra-ui/react";
import { useOutletContext } from "react-router-dom";
import SignUp from "../components/sign-up/SignUp";

function SignUpPage(){

const theme= useOutletContext()


    return (
        <Box height="100%" bg={theme.pageBg}>
        <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="Hello World"/>
        <Text id="sign-up-text" textAlign={"center"} fontSize={20}>Create an account with us:</Text>
        <SignUp />

    </Box>
)
}

export default SignUpPage;