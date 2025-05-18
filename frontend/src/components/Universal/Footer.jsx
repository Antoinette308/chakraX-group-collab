/* eslint-disable react/prop-types */
import { GridItem } from "@chakra-ui/react";


function Footer(props){
    return <GridItem colSpan={3} textAlign="center" bg={props.theme.footerBg} color={props.theme.ButtonColor} height="50px"> Copyright </GridItem>
}

export default Footer;