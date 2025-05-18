/* eslint-disable react/prop-types */
import { Heading } from "@chakra-ui/react";

function MiniHeaders(props){
    return <Heading size="4xl" textAlign={"center"}
    bg={props.theme.sideBarBg} color={props.theme.ButtonColor}
    height="3rem" borderRadius={"25px"} width="20em" margin="20px">{props.text}</Heading>
}


export default MiniHeaders;