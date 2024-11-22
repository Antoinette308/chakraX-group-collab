import {Button} from "./ui/button";
/* eslint-disable react/prop-types */
function UniButton(props){
    
    return <Button 
    borderRadius="30px"
    size={props.size} 
    colorPalette={props.colorPalette}
    width={props.width}>
        {props.text}
        </Button>
    
    // <Button className={props.className} onClick={props.handleClick}>{props.text}</button>
}


//Component template 
//<Button className="" onClick={} text="" />

export default UniButton;