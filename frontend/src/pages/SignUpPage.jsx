import Header from "../components/Universal/Header"
import { Box, Text } from "@chakra-ui/react";
import { useOutletContext } from "react-router-dom";
import SignUp from "../components/sign-up/SignUp";

function SignUpPage(){

const theme= useOutletContext()


    return (
        <Box height="100%" bg={theme.pageBg}>
        <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="Sign up"/>
        <Text id="sign-up-text" textAlign={"center"} marginTop={'10px'} fontSize={20}>Create an account with us:</Text>
        <SignUp />

    </Box>
)
}

export default SignUpPage;