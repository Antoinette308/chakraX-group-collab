import React, { useState } from 'react'
import { HStack, parseColor } from "@chakra-ui/react"
import {
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropper,
  ColorPickerInput,
  ColorPickerLabel,
  ColorPickerRoot,
  ColorPickerSliders,
  ColorPickerTrigger,
} from "../ui/color-picker"


function ColourPicker() {
    const [colour, setColour] = useState('#000000');

    return (
        <ColorPickerRoot defaultValue={parseColor("#eb5e41")} maxW="200px">
            <ColorPickerLabel>Color</ColorPickerLabel>
            <ColorPickerControl>
                <ColorPickerInput />
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