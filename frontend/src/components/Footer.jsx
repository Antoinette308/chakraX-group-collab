/* eslint-disable react/prop-types */
import { GridItem } from "@chakra-ui/react";


function Footer(props){
    return <GridItem colSpan={2} textAlign="center" bg={props.theme.footerBg} color={props.theme.footerBg}> Copyright </GridItem>
}

export default Footer;