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
    // const [colour, setColour] = useState(parseColor('#14B8A6'));
// { hue: 173.41, saturation: 80.39, lightness: 40, alpha: 1 }

    console.log("colour from ColourPicker is:", colour);

    console.log("colour.toString('rgba'):", colour.toString('rgba'))


    return (
        <ColorPickerRoot
            value={colour}
            format="rgba"
            onValueChange={(e) => setColour(e.value)}
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