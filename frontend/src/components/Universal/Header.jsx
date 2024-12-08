import { Heading } from "@chakra-ui/react";

function Header(props){

    // eslint-disable-next-line react/prop-types
    return <Heading m="auto" size={props.size} bg={props.bg} color={props.color} padding={8}  textAlign={"center"} borderRadius={20}>{props.text} </Heading>
}


//Component Template 
//<Header size="" bg="" text="" color=""/>

export default Header;