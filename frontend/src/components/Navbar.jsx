/* eslint-disable react/prop-types */

import ButtonLink from "./ButtonLink";
import { Flex } from "@chakra-ui/react";
import NavBarButton from "./NavBarButton";




//Made by Sascha. This is the navbar component that is on the layout page. It is mobile first design and the hamburger menu button will open and close the sidebar.
function NavBar(props){

const buttonColor = "cyan";


if(props.isActive){
    return  ( <Flex direction="column" gap="4" bg="cyan.700" justifyContent="flex-start" alignItems='center' borderRadius="30px" marginTop={3}>
                <Flex my="4" mx="2"  gap="1">
                    <NavBarButton colorPalette="cyan.500" isActive={props.isActive} onClick={props.onClick}/>
                    <ButtonLink className='topButtons' text="Sign In" route="test" colorPalette={buttonColor}/>
                    <ButtonLink className='topButtons' text="Sign Up" route="test" colorPalette={buttonColor}/>
                </Flex> 
    
            <ButtonLink  text="To Dos" route="test" width="250px" colorPalette={buttonColor}/>
            <ButtonLink  text="Journal" route="test" width="250px" colorPalette={buttonColor}/>
            <ButtonLink  text="Energy Tracker" route="test" width="250px" colorPalette={buttonColor}/>
            <ButtonLink  text="Habit Tracker" route="test" width="250px" colorPalette={buttonColor}/>
            <ButtonLink  text="test" route="test" width="250px" colorPalette={buttonColor}/>
        </Flex> 
        
    )
}
}

export default NavBar;