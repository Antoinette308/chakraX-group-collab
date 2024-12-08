import Header from "../components/Header"
import { Box, Text } from "@chakra-ui/react";
import { useOutletContext } from "react-router-dom";
import SignIn from "../components/sign-in/SignIn";

function SignInPage(){

const theme= useOutletContext()


    return (
        <Box height="100%" bg={theme.pageBg}>
        <Header size="6xl" bg={theme.sideBarBg} color={theme.ButtonColor} text="Sign in"/>
        <Text textAlign={"center"} fontSize={20}>Sign in to your account:</Text>
        <SignIn />

    </Box>
)
}

export default SignInPage;