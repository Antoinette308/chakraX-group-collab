/* eslint-disable react/prop-types */

import ButtonLink from "./ButtonLink";
import { Flex } from "@chakra-ui/react";
import NavBarButton from "./NavBarButton";
import themes from "./themes";



//Made by Sascha. This is the navbar component that is on the layout page. It is mobile first design and the hamburger menu button will open and close the sidebar.
function NavBar(props){

// const buttonColor = "cyan";


if(props.isActive){
    return  ( <Flex direction="column" gap="4" bg={themes.blue.sideBarBg} justifyContent="flex-start" alignItems='center' borderRadius="30px" marginTop={3}>
                <Flex my="4" mx="2"  gap="1">
                    <NavBarButton colorPalette="blue.600" isActive={props.isActive} onClick={props.onClick}/>
                    <ButtonLink className='topButtons' text="Sign In" route="test" bg={themes.blue.navButtonBg}/>
                    <ButtonLink className='topButtons' text="Sign Up" route="test" bg={themes.blue.navButtonBg} color={themes.blue.ButtonColor}/>
                </Flex> 
    
            <ButtonLink  text="To Dos" route="test" width="250px" bg={themes.blue.navButtonBg} color={themes.blue.ButtonColor}/>
            <ButtonLink  text="Journal" route="test" width="250px" bg={themes.blue.navButtonBg} color={themes.blue.ButtonColor}/>
            <ButtonLink  text="Energy Tracker" route="test" width="250px" bg={themes.blue.navButtonBg} color={themes.blue.ButtonColor}/>
            <ButtonLink  text="Habit Tracker" route="test" width="250px" bg={themes.blue.navButtonBg} color={themes.blue.ButtonColor}/>
            <ButtonLink  text="test" route="test" width="250px" bg={themes.blue.navButtonBg} color={themes.blue.ButtonColor}/>
        </Flex> 
        
    )
}
}

export default NavBar;