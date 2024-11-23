
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBarButton from "../components/NavBarButton";
import { useState } from "react";
import NavBar from "../components/Navbar";
import themes from "../components/themes";
import ThemeDropDown from "../components/ThemeDropDown";



//Made by Sascha. This is the layout page. This is the parent of all other pages. The sidebar will show on every page. 
//I need to make it so that it sits above the page grid box that the actual page content goes into but for now it will push it to the side if you open the sidebar.

function Layout(){
const [active, setActive] = useState(false);
const [theme, setTheme] = useState('blue');
//This function changes the active state which is used as the controller for the sidebar button 

function handleChange(e){
    console.log(themes[e.value])
    setTheme(e.value);
}
function handleClick() {
    setActive(prevActive => !prevActive);
    console.log('working')
    console.log(active)
}
//While inactive, there will only be the button 
if(active === false){
    return (
        <Grid height="100vh" 
            width="100vw" 
            gridTemplateColumns="max-content 4fr" 
            gridTemplateRows="1fr max-content" 
            gap={2} 
            bg={themes[theme].pageBg}>
            <GridItem 
                my={6} 
                mx={3} 
                colStart={1}>
                    <NavBarButton 
                        onClick={handleClick} 
                        isActive={active} 
                        colorPalette={themes[theme].navIcon} />
            </GridItem>
            <GridItem className="page">
                <ThemeDropDown onChange={(e) => handleChange(e)} />
                <Outlet context={themes[theme]}/> 
            </GridItem>
            <Footer theme={themes[theme]} /> 
        </Grid>
    )
    
}
//If active the button will be replaced with the navbar 
    else {
    return ( <Grid height="100vh" width="100vw" gridTemplateColumns="1fr 4fr" gridTemplateRows="1fr max-content" gap={2} bg={themes[theme].pageBg}>
                <GridItem  rowEnd={2} display={'flex'} justifyContent={"center"} zIndex={1}> <NavBar isActive={active} onClick={handleClick} theme={themes[theme]}/></GridItem> 
                <GridItem className="page">
                <ThemeDropDown onChange={(e) => handleChange(e)} />
                <Outlet context={themes[theme]}/> 
                </GridItem>
                <Footer theme={themes[theme]} /> 
            </Grid>
    )
}
    
}

export default Layout;