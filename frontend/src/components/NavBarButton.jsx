/* eslint-disable react/prop-types */
import { RxHamburgerMenu } from "react-icons/rx";
import { IconButton } from "@chakra-ui/react";

//Made by Sascha. This is the button that opens and closes the sidebar menu
function NavBarButton(props){

    return ( 
    <IconButton rounded="full" bg={props.colorPalette} color="gray.100" onClick={props.onClick}>
        <RxHamburgerMenu />
    </IconButton>)
    }


export default NavBarButton;