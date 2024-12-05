/* eslint-disable react/prop-types */

import ButtonLink from "./ButtonLink";
import { Flex } from "@chakra-ui/react";
import NavBarButton from "./NavBarButton";




//Made by Sascha. This is the navbar component that is on the layout page. It is mobile first design and the hamburger menu button will open and close the sidebar.
function NavBar(props) {

//     const buttonColor = "cyan";



    if (props.isActive) {
        return (
    <Flex direction="column" gap="4" bg={props.theme.sideBarBg} 
    justifyContent="flex-start" alignItems='center' borderRadius="30px" marginTop={3} overflowY={"scroll"}>
            <Flex my="4" mx="2" gap="1">
                <NavBarButton colorPalette={props.theme.navButtonBg} color={props.theme.ButtonColor} 
                        isActive={props.isActive} 
                        onClick={props.onClick} />
                <ButtonLink 
                        className='topButtons' 
                        text="Sign In" 
                        route="test" 
                        bg={props.theme.navButtonBg}
                        color={props.theme.ButtonColor}
                        />
                <ButtonLink 
                        className='topButtons' 
                        text="Sign Up" 
                        route="test" 
                        bg={props.theme.navButtonBg} 
                        color={props.theme.ButtonColor} />
            </Flex>

            <ButtonLink text="To Dos" route="todo-list" width="250px" bg={props.theme.navButtonBg} color={props.theme.ButtonColor} />
            <ButtonLink text="Journal" route="journal" width="250px" bg={props.theme.navButtonBg} color={props.theme.ButtonColor} />
            <ButtonLink text="Energy Tracker" route="energy-tracker" width="250px" bg={props.theme.navButtonBg} color={props.theme.ButtonColor} />
            <ButtonLink text="Habit Tracker" route="habit-tracker" width="250px" bg={props.theme.navButtonBg} color={props.theme.ButtonColor} />
            <ButtonLink text="Rewards" route="rewards" width="250px" bg={props.theme.navButtonBg} color={props.theme.ButtonColor} />
        </Flex>

        )
    }
}

export default NavBar;