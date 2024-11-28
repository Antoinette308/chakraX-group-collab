import React, { useState } from 'react'
import {  HStack, parseColor } from "@chakra-ui/react"
import {
    ColorPickerArea,
    ColorPickerContent,
    ColorPickerControl,
    ColorPickerEyeDropper,
    ColorPickerRoot,
    ColorPickerSliders,
    ColorPickerTrigger,
} from "../ui/color-picker"


function ColourPicker({ colour, setColour }) {
    const [colourValue, setColourValue] = useState(parseColor('#14B8A6'))
    
    
        function handleChange(e){
            const colourString = e.value.toString('rgba');
            setColourValue(parseColor(colourString));
        }
    
        function handleColorEnd(){
            setColour(colourValue.toString('rgba'));
        }
    
        return (
            <ColorPickerRoot
                value={colourValue}
                format="rgba"
                onValueChange={(e) => handleChange(e)}
                onValueChangeEnd ={handleColorEnd}
                maxW="200px"
            >
                {/*<ColorPickerLabel>Color</ColorPickerLabel>*/}
                <ColorPickerControl>
                    <ColorPickerTrigger />
                </ColorPickerControl>
                <ColorPickerContent>
                    <ColorPickerArea />
                    <HStack>
                        <ColorPickerEyeDropper />
                        <ColorPickerSliders />
                    </HStack>
                </ColorPickerContent>
            </ColorPickerRoot>
        );
    }
    
    export default ColourPicker;